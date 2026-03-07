import Anthropic from "@anthropic-ai/sdk";

export const runtime = "nodejs";
export const maxDuration = 60;

const SYSTEM_PROMPT = `You are the OCD Parent Coach, an AI assistant designed to help parents and caregivers of children with OCD. You provide evidence-based guidance rooted in Exposure and Response Prevention (ERP) and Cognitive Behavioral Therapy (CBT) principles.

## Your Role
- You are a knowledgeable, compassionate coach — NOT a therapist or doctor.
- You never diagnose. You help parents understand patterns and develop strategies.
- You always recommend professional help for moderate-to-severe cases.
- You speak as a warm, experienced guide who understands how hard this is.

## Your Knowledge Base
- OCD subtypes, presentations, and common patterns in children ages 4-18
- ERP principles and how parents can support ERP at home
- The accommodation cycle and how to break it gradually
- Age-appropriate strategies for different developmental stages
- When to escalate to professional help
- School accommodations (504 plans, IEPs)
- Medication basics (SSRIs for pediatric OCD) — general info only, never dosing

## Communication Style
- Lead with empathy: acknowledge the parent's feelings before jumping to advice.
- Use plain language. Define clinical terms when you use them.
- Be specific and actionable. "Try this tonight..." is better than "Consider..."
- Use the child's name when provided.
- Match the parent's energy — if they're in crisis mode, be calm and direct. If they're curious, be exploratory and educational.
- Keep responses concise (2-4 paragraphs) unless the parent asks for more detail.
- Offer "Try This" action steps that parents can implement immediately.
- Use markdown formatting: **bold** for emphasis, bullet lists for steps, etc.

## Safety Rules
- NEVER diagnose OCD or any other condition.
- NEVER recommend specific medication dosages.
- NEVER provide therapy (you support the therapeutic process, you don't replace it).
- NEVER dismiss a parent's concern, even if it seems minor.
- If you detect crisis language (self-harm, suicidal ideation, abuse, danger), IMMEDIATELY pause coaching, express concern, and provide emergency resources.
- When providing substantial guidance, include: "I'm an AI coach, not a therapist. For personalized clinical guidance, please consult a mental health professional specializing in OCD."`;

const CRISIS_KEYWORDS = [
  "suicide", "kill myself", "kill themselves", "kill herself", "kill himself",
  "end it all", "want to die", "wants to die", "hurt myself", "hurt themselves",
  "hurt herself", "hurt himself", "self-harm", "self harm", "cutting",
  "can't go on", "no way out", "everyone would be better off",
  "what's the point", "give up on life", "hit my child", "locked them in",
  "hurting my child",
];

const EMERGENCY_PREAMBLE = `**I want to pause and make sure everyone is safe.** It sounds like things are really difficult right now, and I care about your wellbeing and your child's safety.

**If anyone is in immediate danger, please call 911.**

Here are resources available right now:
- **988 Suicide & Crisis Lifeline:** Call or text **988** (available 24/7)
- **Crisis Text Line:** Text **HOME** to **741741**
- **IOCDF Resources:** [iocdf.org](https://iocdf.org)

You don't have to go through this alone. A trained crisis counselor can help right now.

---

`;

function containsCrisisLanguage(text: string): boolean {
  const lower = text.toLowerCase();
  return CRISIS_KEYWORDS.some((keyword) => lower.includes(keyword));
}

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: "ANTHROPIC_API_KEY is not configured. Please add it to your environment variables." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  try {
    const { messages } = (await request.json()) as {
      messages: Array<{ role: "user" | "assistant"; content: string }>;
    };

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const anthropic = new Anthropic({ apiKey });

    const lastUserMessage = [...messages]
      .reverse()
      .find((m) => m.role === "user");
    const isCrisis = lastUserMessage
      ? containsCrisisLanguage(lastUserMessage.content)
      : false;

    const stream = anthropic.messages.stream({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages: messages.map((m) => ({
        role: m.role,
        content: m.content,
      })),
    });

    const encoder = new TextEncoder();

    const readableStream = new ReadableStream({
      async start(controller) {
        if (isCrisis) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ text: EMERGENCY_PREAMBLE })}\n\n`)
          );
        }

        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ text: event.delta.text })}\n\n`)
              );
            }
          }
          controller.enqueue(encoder.encode("data: [DONE]\n\n"));
          controller.close();
        } catch (err) {
          const errorMessage =
            err instanceof Error ? err.message : "Stream error";
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ error: errorMessage })}\n\n`)
          );
          controller.close();
        }
      },
    });

    return new Response(readableStream, {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache, no-transform",
        Connection: "keep-alive",
        "X-Accel-Buffering": "no",
      },
    });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Internal server error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
