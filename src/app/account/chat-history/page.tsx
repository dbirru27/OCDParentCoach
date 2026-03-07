import type { Metadata } from "next";

export const metadata: Metadata = { title: "Chat History" };

export default function ChatHistoryPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="font-serif text-2xl font-semibold text-navy">Chat History</h1>
        <p className="mt-2 text-sm text-charcoal/50">View and search past conversations.</p>
        <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
          <p className="text-charcoal/50">Sign in to view your chat history.</p>
        </div>
      </div>
    </div>
  );
}
