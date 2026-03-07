import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Log Entry",
  description: "Log an OCD episode to track patterns over time.",
};

export default function LogEntryPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Link
          href="/tracker"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tracker
        </Link>

        <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
          Log an Entry
        </h1>

        <form className="mt-8 space-y-6">
          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-charcoal/70">Date</label>
              <input
                type="date"
                className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-charcoal/70">Time</label>
              <input
                type="time"
                className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
            </div>
          </div>

          {/* Child */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Child</label>
            <select className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20">
              <option>Select child...</option>
            </select>
          </div>

          {/* Trigger */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Trigger / Situation</label>
            <textarea
              rows={2}
              placeholder="What triggered the episode?"
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
            />
          </div>

          {/* Intensity */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Intensity (1-10)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              defaultValue="5"
              className="mt-2 w-full accent-sage"
            />
            <div className="flex justify-between text-xs text-charcoal/40">
              <span>1 - Mild</span>
              <span>5 - Moderate</span>
              <span>10 - Severe</span>
            </div>
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Duration</label>
            <select className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20">
              <option>Select duration...</option>
              <option>Less than 5 minutes</option>
              <option>5-15 minutes</option>
              <option>15-30 minutes</option>
              <option>30-60 minutes</option>
              <option>More than 1 hour</option>
            </select>
          </div>

          {/* Your Response */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Your Response</label>
            <select className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20">
              <option>Select response type...</option>
              <option>Accommodated</option>
              <option>Reassured</option>
              <option>Redirected</option>
              <option>Used ERP</option>
              <option>Other</option>
            </select>
          </div>

          {/* Outcome */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Outcome</label>
            <textarea
              rows={2}
              placeholder="How did it resolve?"
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Notes (optional)</label>
            <textarea
              rows={2}
              placeholder="Anything else to note..."
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Save Entry
          </button>
        </form>
      </div>
    </div>
  );
}
