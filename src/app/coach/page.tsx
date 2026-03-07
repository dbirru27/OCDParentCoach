import type { Metadata } from "next";
import { MessageCircle, Mic, Send, Plus, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Parent Coach",
  description:
    "Chat with our AI coach for evidence-based guidance on navigating your child's OCD.",
};

const quickPrompts = [
  "My child won't stop checking things",
  "Bedtime is a nightmare",
  "How do I stop accommodating?",
  "Explain ERP to me",
];

export default function CoachPage() {
  return (
    <div className="flex h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)]">
      {/* Sidebar */}
      <aside className="hidden md:flex md:w-72 flex-col border-r border-cream-dark bg-white">
        <div className="p-4">
          <button className="flex w-full items-center gap-2 rounded-xl bg-sage px-4 py-2.5 text-sm font-medium text-white hover:bg-sage-dark transition-colors">
            <Plus className="h-4 w-4" />
            New Chat
          </button>
        </div>
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-lg border border-cream-dark bg-cream px-3 py-2">
            <Search className="h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              placeholder="Search chats..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-charcoal/40"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-2">
          <p className="px-3 py-2 text-xs font-medium text-charcoal/40 uppercase">
            Today
          </p>
          <div className="rounded-lg bg-sage/10 px-3 py-2 text-sm text-charcoal/70">
            Bedtime rituals discussion
          </div>
          <p className="mt-4 px-3 py-2 text-xs font-medium text-charcoal/40 uppercase">
            Yesterday
          </p>
          <div className="rounded-lg px-3 py-2 text-sm text-charcoal/50 hover:bg-cream transition-colors cursor-pointer">
            School avoidance strategies
          </div>
          <div className="rounded-lg px-3 py-2 text-sm text-charcoal/50 hover:bg-cream transition-colors cursor-pointer">
            Checking behaviors
          </div>
        </div>
      </aside>

      {/* Main chat area */}
      <div className="flex flex-1 flex-col">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mx-auto max-w-2xl">
            {/* Welcome message */}
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/10">
                <MessageCircle className="h-5 w-5 text-sage" />
              </div>
              <div className="rounded-2xl rounded-tl-sm bg-white border border-cream-dark p-4 shadow-sm">
                <p className="text-charcoal/80 leading-relaxed">
                  Hi! I&apos;m your OCD Parent Coach. I&apos;m here to help you
                  navigate your child&apos;s OCD with evidence-based strategies.
                  What&apos;s on your mind today?
                </p>
              </div>
            </div>

            {/* Quick prompts */}
            <div className="mt-8 flex flex-wrap gap-2">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  className="rounded-full border border-sage/30 bg-sage/5 px-4 py-2 text-sm text-sage-dark hover:bg-sage/10 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-cream-dark bg-white p-4">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-end gap-2 rounded-2xl border border-cream-dark bg-cream p-2">
              <textarea
                rows={1}
                placeholder="Type a message..."
                className="flex-1 resize-none bg-transparent px-3 py-2 text-sm outline-none placeholder:text-charcoal/40"
              />
              <button
                className="rounded-xl p-2 text-charcoal/40 hover:bg-white hover:text-charcoal transition-colors"
                aria-label="Voice input"
              >
                <Mic className="h-5 w-5" />
              </button>
              <button
                className="rounded-xl bg-sage p-2 text-white hover:bg-sage-dark transition-colors"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-charcoal/40">
              I&apos;m an AI coach, not a therapist. For clinical guidance,
              please consult a mental health professional.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
