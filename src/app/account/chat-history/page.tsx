import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Search } from "lucide-react";

export const metadata: Metadata = { title: "Chat History" };

const sampleChats = [
  {
    title: "Bedtime rituals getting worse",
    preview: "My 8-year-old has started needing to say goodnight in a very specific sequence...",
    date: "Today, 9:42 PM",
    messages: 12,
  },
  {
    title: "School avoidance strategies",
    preview: "She's refusing to go to school because of contamination fears in the bathroom...",
    date: "Yesterday, 3:15 PM",
    messages: 8,
  },
  {
    title: "How to stop reassurance seeking",
    preview: "He asks me 'are you sure?' about everything and my answers are never enough...",
    date: "Mar 4, 2026",
    messages: 15,
  },
  {
    title: "Explaining ERP to my partner",
    preview: "My husband thinks I'm being cruel by not helping with the rituals...",
    date: "Mar 2, 2026",
    messages: 10,
  },
  {
    title: "Hand washing until raw",
    preview: "Her hands are cracked and bleeding from washing. What can I do right now?",
    date: "Feb 28, 2026",
    messages: 18,
  },
];

export default function ChatHistoryPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Link
          href="/account"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Account
        </Link>

        <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
          Chat History
        </h1>
        <p className="mt-1 text-sm text-charcoal/50">
          View and search past conversations with the AI Coach.
        </p>

        {/* Search */}
        <div className="mt-6 flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3">
          <Search className="h-4 w-4 text-charcoal/40" />
          <input
            type="text"
            placeholder="Search conversations..."
            className="flex-1 text-sm outline-none placeholder:text-charcoal/40"
          />
        </div>

        {/* Chat list */}
        <div className="mt-6 space-y-3">
          {sampleChats.map((chat) => (
            <Link
              key={chat.title}
              href="/coach"
              className="group block rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sage/10">
                  <MessageCircle className="h-5 w-5 text-sage" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-charcoal group-hover:text-sage-dark transition-colors text-sm">
                    {chat.title}
                  </h3>
                  <p className="mt-1 text-xs text-charcoal/50 truncate">
                    {chat.preview}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-charcoal/40">
                    <span>{chat.date}</span>
                    <span>{chat.messages} messages</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-charcoal/40">
          Chat history shown above is sample data. Sign in to see your actual
          conversations.
        </p>
      </div>
    </div>
  );
}
