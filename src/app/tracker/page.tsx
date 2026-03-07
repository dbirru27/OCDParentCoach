import type { Metadata } from "next";
import Link from "next/link";
import { Plus, Download, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Progress Tracker",
  description: "Track your child's OCD episodes, patterns, and your family's progress.",
};

export default function TrackerPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-navy">
              Progress Tracker
            </h1>
            <p className="mt-1 text-sm text-charcoal/50">
              Tracking: All Children
            </p>
          </div>
          <Link
            href="/tracker/log"
            className="inline-flex items-center gap-2 rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            <Plus className="h-4 w-4" />
            Log Entry
          </Link>
        </div>

        {/* Time range */}
        <div className="mt-6 flex gap-2">
          {["7d", "30d", "90d", "All"].map((range) => (
            <button
              key={range}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                range === "30d"
                  ? "bg-sage text-white"
                  : "bg-white border border-cream-dark text-charcoal/60 hover:bg-cream"
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        {/* AI Insight */}
        <div className="mt-8 rounded-2xl bg-sage/5 border border-sage/20 p-5">
          <p className="text-sm font-medium text-sage-dark">AI Insight</p>
          <p className="mt-1 text-charcoal/70 leading-relaxed">
            Start logging entries to receive personalized insights about your
            child&apos;s OCD patterns and your progress.
          </p>
        </div>

        {/* Chart placeholders */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            "Episodes Over Time",
            "Average Intensity",
            "Your Response Style",
            "Top Triggers",
          ].map((chart) => (
            <div
              key={chart}
              className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-charcoal/70">{chart}</h3>
              <div className="mt-4 flex h-40 items-center justify-center rounded-xl bg-cream">
                <p className="text-sm text-charcoal/30">Chart placeholder</p>
              </div>
            </div>
          ))}
        </div>

        {/* Heatmap placeholder */}
        <div className="mt-6 rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
          <h3 className="text-sm font-semibold text-charcoal/70">
            Time-of-Day Heatmap
          </h3>
          <div className="mt-4 flex h-32 items-center justify-center rounded-xl bg-cream">
            <p className="text-sm text-charcoal/30">Heatmap placeholder</p>
          </div>
        </div>

        {/* Recent entries */}
        <div className="mt-8">
          <h3 className="font-serif text-lg font-semibold text-charcoal">
            Recent Entries
          </h3>
          <div className="mt-4 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
            <p className="text-charcoal/50">
              No entries yet. Start by logging your first episode.
            </p>
            <Link
              href="/tracker/log"
              className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Log Your First Entry
            </Link>
          </div>
        </div>

        {/* Export buttons */}
        <div className="mt-8 flex gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-2.5 text-sm text-charcoal/60 hover:bg-cream transition-colors">
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-2.5 text-sm text-charcoal/60 hover:bg-cream transition-colors">
            <FileText className="h-4 w-4" />
            Generate Therapist Report
          </button>
        </div>
      </div>
    </div>
  );
}
