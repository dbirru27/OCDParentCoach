import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Entry History",
  description: "View your past tracker entries.",
};

export default function HistoryPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tracker"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tracker
        </Link>

        <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
          Entry History
        </h1>

        <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
          <p className="text-charcoal/50">
            No entries yet. Your logged episodes will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}
