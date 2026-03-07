import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Parent Response Style Quiz",
  description:
    "Discover your response style when your child's OCD behaviors arise.",
};

export default function ParentAssessmentPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-charcoal/50">
            <span>Question 1 of 18</span>
            <span>0% complete</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-cream-dark">
            <div className="h-2 w-0 rounded-full bg-terracotta transition-all" />
          </div>
        </div>

        {/* Question */}
        <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-charcoal leading-relaxed">
            When your child asks you for reassurance about something
            OCD-related, how do you typically respond?
          </h2>

          <div className="mt-8 space-y-3">
            {[
              "I provide reassurance right away to calm them down",
              "I try to redirect them to another activity",
              "I tell them they need to stop asking",
              "I acknowledge their anxiety and gently encourage them to sit with it",
              "I avoid the situation entirely so it doesn't come up",
            ].map((option) => (
              <label
                key={option}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-cream-dark p-4 hover:border-terracotta/30 hover:bg-terracotta/5 transition-colors"
              >
                <input
                  type="radio"
                  name="q1"
                  className="h-4 w-4 border-cream-dark text-terracotta focus:ring-terracotta"
                />
                <span className="text-sm text-charcoal/80">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <Link
            href="/assessment"
            className="rounded-xl border border-cream-dark px-6 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
          >
            &larr; Back
          </Link>
          <button className="rounded-xl bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-dark transition-colors">
            Next &rarr;
          </button>
        </div>
      </div>
    </div>
  );
}
