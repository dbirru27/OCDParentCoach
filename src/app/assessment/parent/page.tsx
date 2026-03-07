"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

type ParentStyle = "accommodator" | "reassurer" | "enforcer" | "avoider" | "coach";

interface Option {
  value: ParentStyle;
  label: string;
}

interface Question {
  id: string;
  scenario: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "p1",
    scenario: "Your child asks you to wash your hands before touching their schoolbag because it feels 'contaminated.' You:",
    options: [
      { value: "accommodator", label: "Wash your hands right away to keep the peace" },
      { value: "reassurer", label: "Tell them 'Your bag is perfectly clean, I promise'" },
      { value: "enforcer", label: "Say 'That's ridiculous, I'm not doing that'" },
      { value: "avoider", label: "Avoid touching the bag so the situation doesn't come up" },
      { value: "coach", label: "Acknowledge their worry and gently say you won't wash, but you're here to help them through the discomfort" },
    ],
  },
  {
    id: "p2",
    scenario: "Bedtime is taking over an hour because of your child's rituals. You:",
    options: [
      { value: "accommodator", label: "Participate in the rituals so bedtime can eventually happen" },
      { value: "reassurer", label: "Repeatedly tell them 'Everything is fine, nothing bad will happen'" },
      { value: "enforcer", label: "Set a firm timer and turn off the lights regardless" },
      { value: "avoider", label: "Let them stay up until they fall asleep on their own to skip the whole ordeal" },
      { value: "coach", label: "Work together to gradually shorten one part of the ritual at a time" },
    ],
  },
  {
    id: "p3",
    scenario: "Your child asks 'Are you sure the door is locked?' for the fifth time. You:",
    options: [
      { value: "accommodator", label: "Check the door again with them to ease their worry" },
      { value: "reassurer", label: "Say 'Yes, I'm 100% sure, I checked it myself'" },
      { value: "enforcer", label: "Snap 'I already told you five times! Stop asking!'" },
      { value: "avoider", label: "Pretend you didn't hear the question" },
      { value: "coach", label: "Say 'I can see OCD is bugging you about the door. What do you think we should do?'" },
    ],
  },
  {
    id: "p4",
    scenario: "Your child refuses to turn in their homework because it's 'not perfect.' You:",
    options: [
      { value: "accommodator", label: "Help them redo it to their satisfaction" },
      { value: "reassurer", label: "Say 'It looks perfect to me, I promise your teacher will love it'" },
      { value: "enforcer", label: "Take the homework and put it in their bag yourself" },
      { value: "avoider", label: "Email the teacher to explain and ask for an extension" },
      { value: "coach", label: "Validate their anxiety while encouraging them to turn it in as-is, then talk about how it went" },
    ],
  },
  {
    id: "p5",
    scenario: "Your child wants to change their outfit for the fourth time because it doesn't 'feel right.' You're about to be late. You:",
    options: [
      { value: "accommodator", label: "Let them keep changing until they find something acceptable" },
      { value: "reassurer", label: "Say 'You look great! That outfit is perfect, I promise'" },
      { value: "enforcer", label: "Tell them 'You're wearing that one and we're leaving now'" },
      { value: "avoider", label: "Lay out only one outfit choice so the situation doesn't happen" },
      { value: "coach", label: "Name the OCD ('It seems like OCD is making this hard') and encourage them to try leaving in the current outfit" },
    ],
  },
  {
    id: "p6",
    scenario: "Your child confesses a 'bad thought' and asks if they're a terrible person. You:",
    options: [
      { value: "accommodator", label: "Have a long discussion analyzing whether the thought is truly bad" },
      { value: "reassurer", label: "Immediately say 'Of course you're not bad! You're the best kid ever'" },
      { value: "enforcer", label: "Tell them 'Stop thinking like that, just focus on positive things'" },
      { value: "avoider", label: "Change the subject to something more pleasant" },
      { value: "coach", label: "Normalize the thought ('Everyone has weird thoughts') and resist the urge to provide extensive reassurance" },
    ],
  },
  {
    id: "p7",
    scenario: "The family wants to eat at a restaurant, but your child has contamination fears about restaurant food. You:",
    options: [
      { value: "accommodator", label: "Pack food from home for your child to eat at the restaurant" },
      { value: "reassurer", label: "Spend 20 minutes explaining how clean the kitchen is" },
      { value: "enforcer", label: "Tell them they have to eat the restaurant food or go hungry" },
      { value: "avoider", label: "Just eat at home so nobody has to deal with it" },
      { value: "coach", label: "Go to the restaurant together, offer support, and let them take a small step like ordering a drink or sharing a dish" },
    ],
  },
  {
    id: "p8",
    scenario: "Your child needs to say goodnight in a very specific way and makes you start over if you 'get it wrong.' You:",
    options: [
      { value: "accommodator", label: "Repeat the goodnight exactly as they need it, every time" },
      { value: "reassurer", label: "Say 'I love you no matter how I say goodnight'" },
      { value: "enforcer", label: "Refuse to say goodnight at all until they stop this behavior" },
      { value: "avoider", label: "Have the other parent handle bedtime instead" },
      { value: "coach", label: "Say goodnight warmly but imperfectly, then stay calm if they get upset and offer comfort" },
    ],
  },
  {
    id: "p9",
    scenario: "Your child asks you if they accidentally hurt someone at school today. You:",
    options: [
      { value: "accommodator", label: "Call the school to verify nobody was hurt" },
      { value: "reassurer", label: "Say 'I'm sure you didn't hurt anyone, you're so kind'" },
      { value: "enforcer", label: "Say 'You obviously didn't. Stop worrying about it'" },
      { value: "avoider", label: "Quickly redirect them to a video game or TV show" },
      { value: "coach", label: "Acknowledge the worry and say 'That sounds like an OCD question. What does your gut say?'" },
    ],
  },
  {
    id: "p10",
    scenario: "Your child insists everyone in the family follow their hand-washing rules before dinner. You:",
    options: [
      { value: "accommodator", label: "Follow the rules to avoid a meltdown at dinner" },
      { value: "reassurer", label: "Explain in detail how clean everyone's hands already are" },
      { value: "enforcer", label: "Refuse and tell them they can't control other people" },
      { value: "avoider", label: "Start serving everyone in separate rooms to reduce conflict" },
      { value: "coach", label: "Compassionately explain that you'll wash your hands normally, and sit with them through any discomfort" },
    ],
  },
  {
    id: "p11",
    scenario: "You notice your child's OCD is getting worse during a stressful week. You:",
    options: [
      { value: "accommodator", label: "Remove all sources of stress and increase accommodations until things settle" },
      { value: "reassurer", label: "Constantly tell them 'Everything will be fine, don't worry'" },
      { value: "enforcer", label: "Tell them 'You need to toughen up, everyone has stress'" },
      { value: "avoider", label: "Pretend you haven't noticed the increase" },
      { value: "coach", label: "Acknowledge the harder week, maintain your boundaries gently, and add extra connection time" },
    ],
  },
  {
    id: "p12",
    scenario: "Siblings are complaining that your child's rituals are affecting the whole family. You:",
    options: [
      { value: "accommodator", label: "Ask the siblings to be patient and go along with the rituals" },
      { value: "reassurer", label: "Tell the siblings 'It'll get better soon, just bear with it'" },
      { value: "enforcer", label: "Tell your OCD child that they're being unfair to the family" },
      { value: "avoider", label: "Separate the kids so they don't have to interact around the rituals" },
      { value: "coach", label: "Validate everyone's feelings, explain OCD to siblings age-appropriately, and work on reducing family-involved rituals" },
    ],
  },
  {
    id: "p13",
    scenario: "Your child's therapist suggests an exposure exercise that will clearly upset your child. You:",
    options: [
      { value: "accommodator", label: "Ask the therapist to try something less distressing first" },
      { value: "reassurer", label: "Tell your child 'It won't be that bad, I promise'" },
      { value: "enforcer", label: "Force them to do it immediately" },
      { value: "avoider", label: "Skip the therapy session entirely" },
      { value: "coach", label: "Support the therapeutic process, encourage your child, and trust the therapist's expertise" },
    ],
  },
  {
    id: "p14",
    scenario: "Your child has a meltdown because someone moved an item on their desk. You:",
    options: [
      { value: "accommodator", label: "Quickly put everything back exactly how it was" },
      { value: "reassurer", label: "Say 'It's okay, nothing bad will happen because something moved'" },
      { value: "enforcer", label: "Tell them 'It's just a desk, you're overreacting'" },
      { value: "avoider", label: "Put a 'Do Not Touch' sign on their desk so it never happens again" },
      { value: "coach", label: "Stay calm, acknowledge their distress, and sit with them as they adjust to the change" },
    ],
  },
  {
    id: "p15",
    scenario: "You catch yourself helping your child with a ritual without thinking. You:",
    options: [
      { value: "accommodator", label: "Continue — stopping now would be worse than finishing" },
      { value: "reassurer", label: "Tell yourself 'It's just this once, it'll be fine'" },
      { value: "enforcer", label: "Feel guilty and abruptly refuse to help mid-ritual" },
      { value: "avoider", label: "Try not to think about it" },
      { value: "coach", label: "Gently disengage, note it as something to work on, and give yourself grace" },
    ],
  },
  {
    id: "p16",
    scenario: "Your child won't leave for school because they need to check everything is 'safe' at home. You:",
    options: [
      { value: "accommodator", label: "Walk them through checking each room before leaving" },
      { value: "reassurer", label: "Promise them everything is safe and nothing will happen while they're gone" },
      { value: "enforcer", label: "Physically guide them out the door" },
      { value: "avoider", label: "Let them stay home today" },
      { value: "coach", label: "Acknowledge the worry, set a kind limit, and leave together with support even if they feel uncertain" },
    ],
  },
  {
    id: "p17",
    scenario: "Your child avoids hanging out with friends because of OCD-related fears. You:",
    options: [
      { value: "accommodator", label: "Invite friends over so your child doesn't have to go out" },
      { value: "reassurer", label: "Say 'Nothing bad will happen, your friends don't judge you'" },
      { value: "enforcer", label: "Make them go to a social event regardless of how they feel" },
      { value: "avoider", label: "Don't push it — they'll socialize when they're ready" },
      { value: "coach", label: "Brainstorm a small, manageable social step together and celebrate their courage" },
    ],
  },
  {
    id: "p18",
    scenario: "After a really hard OCD day, you're feeling exhausted and hopeless yourself. You:",
    options: [
      { value: "accommodator", label: "Push through and keep accommodating because your child needs you" },
      { value: "reassurer", label: "Tell yourself 'It'll get better tomorrow' and move on" },
      { value: "enforcer", label: "Get frustrated with yourself for not handling it better" },
      { value: "avoider", label: "Tune out and scroll on your phone" },
      { value: "coach", label: "Recognize your own needs, practice self-compassion, and reach out to your support system" },
    ],
  },
];

const styleLabels: Record<ParentStyle, string> = {
  accommodator: "The Accommodator",
  reassurer: "The Reassurer",
  enforcer: "The Enforcer",
  avoider: "The Avoider",
  coach: "The Coach",
};

const styleColors: Record<ParentStyle, string> = {
  accommodator: "bg-terracotta/10 text-terracotta border-terracotta/20",
  reassurer: "bg-gold/20 text-charcoal border-gold/30",
  enforcer: "bg-coral/10 text-coral border-coral/20",
  avoider: "bg-navy/10 text-navy border-navy/20",
  coach: "bg-sage/10 text-sage-dark border-sage/20",
};

const styleBarColors: Record<ParentStyle, string> = {
  accommodator: "bg-terracotta",
  reassurer: "bg-gold",
  enforcer: "bg-coral",
  avoider: "bg-navy",
  coach: "bg-sage",
};

const styleDescriptions: Record<ParentStyle, string> = {
  accommodator:
    "You tend to help your child complete rituals, avoid triggers, or change family routines to reduce their distress. This comes from a place of deep love, but it inadvertently tells OCD that the fear is justified and the ritual is necessary.",
  reassurer:
    "You tend to provide verbal comfort and certainty when your child is anxious. While reassurance feels helpful in the moment, it becomes its own compulsion — your child needs more and more of it, and it never truly satisfies OCD.",
  enforcer:
    "You tend to take a firm, no-nonsense approach to OCD behaviors. While boundaries are important, forcing a child to stop without support can increase shame and anxiety, making OCD worse rather than better.",
  avoider:
    "You tend to steer around OCD triggers entirely — avoiding places, situations, or conversations that might set things off. While this reduces short-term conflict, it shrinks your child's world and strengthens OCD's grip.",
  coach:
    "You tend to acknowledge your child's feelings while gently encouraging them to face their fears. This is the approach most aligned with ERP principles and gives your child the best foundation for overcoming OCD.",
};

const styleSuggestions: Record<ParentStyle, string[]> = {
  accommodator: [
    "Start small: pick ONE accommodation to gradually reduce this week. Don't try to eliminate everything at once.",
    "Give your child advance notice: 'Starting tomorrow, I'm going to stop checking the locks for you. I know this will be hard, and I'll be right here.'",
    "Read our 'Reducing Accommodation' learning path for a step-by-step approach.",
    "Remember: short-term discomfort leads to long-term freedom. You're not being cruel — you're being brave for your child.",
    "Track which accommodations you provide using the Progress Tracker to build awareness.",
  ],
  reassurer: [
    "Practice brief, caring responses that don't provide certainty: 'That sounds like an OCD question. What do you think?'",
    "Set a compassionate limit: 'I've answered that once, and I can see OCD wants me to answer again. I'm going to resist that.'",
    "Read 'Reassurance Seeking: Breaking the Cycle' in our Learning Hub.",
    "Replace reassurance with connection: a hug, sitting together quietly, or changing the subject gently.",
    "It's okay to say: 'I love you, and I'm not going to answer OCD's question. Let's ride this wave together.'",
  ],
  enforcer: [
    "Add empathy before boundaries: 'I can see this is really hard for you, AND we're going to get through this together.'",
    "Separate your child from the OCD: say 'I know this isn't what you want — it's what OCD wants' instead of criticizing the behavior.",
    "Learn about ERP in our Learning Hub — it shows how to set limits that are therapeutic, not punitive.",
    "Give your child choices within limits rather than commands: 'Would you like to try the shorter version or skip the ritual tonight?'",
    "Practice self-regulation first — when you're calm, your child can borrow your calm.",
  ],
  avoider: [
    "Start with one small trigger you've been avoiding and make a plan to gradually reintroduce it.",
    "Notice when you're rearranging life around OCD and ask: 'Is this helping my child get better, or keeping them stuck?'",
    "Connect with other parents in our Community Forum who understand the avoidance trap.",
    "Read 'The Accommodation Cycle' in our Learning Hub to understand why avoidance maintains OCD.",
    "Work with a therapist to build a gradual exposure plan — you don't have to figure this out alone.",
  ],
  coach: [
    "Keep doing what you're doing — your approach aligns beautifully with evidence-based OCD treatment.",
    "Continue learning about ERP so you can support your child's therapy at home.",
    "Share your strategies with your partner or co-parent so your child gets consistent responses.",
    "Take care of yourself — coaching through OCD is emotionally demanding, and you deserve support too.",
    "Explore our Situation Library for specific strategies you can add to your toolkit.",
  ],
};

interface StyleScore {
  style: ParentStyle;
  label: string;
  count: number;
  percentage: number;
  description: string;
}

interface Result {
  dominant: ParentStyle;
  scores: StyleScore[];
  interpretation: string;
  suggestions: string[];
}

function scoreAssessment(answers: Record<string, ParentStyle>): Result {
  const counts: Record<ParentStyle, number> = {
    accommodator: 0,
    reassurer: 0,
    enforcer: 0,
    avoider: 0,
    coach: 0,
  };

  Object.values(answers).forEach((style) => {
    counts[style]++;
  });

  const total = Object.values(answers).length;
  const styles: ParentStyle[] = ["accommodator", "reassurer", "enforcer", "avoider", "coach"];

  const scores: StyleScore[] = styles
    .map((style) => ({
      style,
      label: styleLabels[style],
      count: counts[style],
      percentage: Math.round((counts[style] / total) * 100),
      description: styleDescriptions[style],
    }))
    .sort((a, b) => b.count - a.count);

  const dominant = scores[0].style;

  let interpretation: string;
  if (dominant === "coach") {
    interpretation =
      "Great news — your dominant response style is the Coach. This means you're already approaching your child's OCD in a way that's well-aligned with evidence-based treatment. You balance empathy with gentle encouragement to face fears, which is exactly what ERP research supports.";
  } else {
    const dominantLabel = styleLabels[dominant];
    const coachScore = scores.find((s) => s.style === "coach")!;
    interpretation = `Your dominant response style is ${dominantLabel}. ${styleDescriptions[dominant]} The good news? You also showed Coach-style responses ${coachScore.percentage}% of the time — so the foundation is there. Most parents naturally fall into ${dominantLabel.toLowerCase().replace("the ", "")} patterns because they come from a place of love. With awareness and practice, you can shift more responses toward the Coach style.`;
  }

  return {
    dominant,
    scores,
    interpretation,
    suggestions: styleSuggestions[dominant],
  };
}

export default function ParentAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, ParentStyle>>({});
  const [result, setResult] = useState<Result | null>(null);

  const total = questions.length;
  const progress = Math.round(
    (Object.keys(answers).length / total) * 100
  );
  const current = questions[currentQuestion];
  const currentAnswer = answers[current?.id];

  const handleAnswer = useCallback(
    (value: ParentStyle) => {
      setAnswers((prev) => ({ ...prev, [current.id]: value }));
    },
    [current]
  );

  const goNext = () => {
    if (currentQuestion < total - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setResult(scoreAssessment(answers));
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
  };

  const isLastQuestion = currentQuestion === total - 1;
  const allAnswered = Object.keys(answers).length === total;

  // Results view
  if (result) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-serif text-3xl font-semibold text-navy text-center">
            Your Response Style Results
          </h1>

          {/* Dominant Style */}
          <div className="mt-10 text-center">
            <div
              className={`inline-flex flex-col items-center rounded-2xl border p-8 shadow-sm ${styleColors[result.dominant]}`}
            >
              <p className="text-sm opacity-70">Your Dominant Style</p>
              <p className="mt-2 font-serif text-3xl font-bold">
                {styleLabels[result.dominant]}
              </p>
            </div>
          </div>

          {/* Zero-judgment note */}
          <div className="mt-6 rounded-xl bg-cream border border-cream-dark p-4 text-center">
            <p className="text-sm text-charcoal/60 italic">
              There&apos;s no wrong answer here. Most parents naturally fall into patterns
              that come from love. Understanding your style is the first step to
              supporting your child more effectively.
            </p>
          </div>

          {/* Interpretation */}
          <div className="mt-8 rounded-2xl bg-white border border-cream-dark p-6">
            <p className="text-charcoal/70 leading-relaxed">
              {result.interpretation}
            </p>
          </div>

          {/* Style Breakdown */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Your Style Breakdown
            </h2>
            <div className="mt-4 space-y-4">
              {result.scores.map((s) => (
                <div key={s.style}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-charcoal">{s.label}</span>
                    <span className="text-charcoal/50">
                      {s.count}/{total} ({s.percentage}%)
                    </span>
                  </div>
                  <div className="mt-1.5 h-3 rounded-full bg-cream-dark">
                    <div
                      className={`h-3 rounded-full transition-all ${styleBarColors[s.style]}`}
                      style={{ width: `${s.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Style Descriptions */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Understanding Each Style
            </h2>
            <div className="mt-4 space-y-3">
              {result.scores.map((s) => (
                <details
                  key={s.style}
                  className={`rounded-xl border p-4 ${
                    s.style === result.dominant
                      ? styleColors[s.style]
                      : "border-cream-dark bg-white"
                  }`}
                >
                  <summary className="cursor-pointer text-sm font-semibold">
                    {s.label}{" "}
                    {s.style === result.dominant && (
                      <span className="text-xs font-normal opacity-70">
                        (your dominant style)
                      </span>
                    )}
                  </summary>
                  <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                    {s.description}
                  </p>
                </details>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              {result.dominant === "coach"
                ? "Keep Going: Tips for Coaches"
                : "Shifting Toward the Coach Style"}
            </h2>
            <div className="mt-4 space-y-3">
              {result.suggestions.map((suggestion, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-cream-dark bg-white p-4"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-sage/10 text-xs font-semibold text-sage-dark">
                    {i + 1}
                  </span>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {suggestion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/situations"
              className="flex-1 rounded-xl bg-sage px-6 py-3 text-center text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Browse Situation Library
            </Link>
            <Link
              href="/assessment/child"
              className="flex-1 rounded-xl border border-sage px-6 py-3 text-center text-sm font-semibold text-sage-dark hover:bg-sage/10 transition-colors"
            >
              Take Child OCD Screening
            </Link>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-charcoal transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl bg-navy/5 p-5 text-center">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              This quiz is an awareness tool, not a clinical assessment. It&apos;s
              designed to help you reflect on your response patterns and find
              areas for growth. Always consult a qualified OCD therapist for
              personalized guidance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-charcoal/50">
            <span>
              Question {currentQuestion + 1} of {total}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-cream-dark">
            <div
              className="h-2 rounded-full bg-terracotta transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
          <h2 className="font-serif text-lg font-semibold text-charcoal leading-relaxed">
            {current.scenario}
          </h2>

          <div className="mt-6 space-y-3">
            {current.options.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors ${
                  currentAnswer === option.value
                    ? "border-terracotta bg-terracotta/5"
                    : "border-cream-dark hover:border-terracotta/30 hover:bg-terracotta/5"
                }`}
              >
                <input
                  type="radio"
                  name={current.id}
                  value={option.value}
                  checked={currentAnswer === option.value}
                  onChange={() => handleAnswer(option.value)}
                  className="mt-0.5 h-4 w-4 border-cream-dark text-terracotta focus:ring-terracotta"
                />
                <span className="text-sm text-charcoal/80 leading-relaxed">
                  {option.label}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          {currentQuestion === 0 ? (
            <Link
              href="/assessment"
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          ) : (
            <button
              onClick={goPrev}
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
          )}

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${
                allAnswered
                  ? "bg-terracotta hover:bg-terracotta-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              See Results
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={currentAnswer === undefined}
              className={`inline-flex items-center gap-1 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${
                currentAnswer !== undefined
                  ? "bg-terracotta hover:bg-terracotta-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-xs text-charcoal/40">
          Estimated time remaining: ~{Math.max(1, Math.ceil((total - Object.keys(answers).length) * 0.3))} minutes
        </p>
      </div>
    </div>
  );
}
