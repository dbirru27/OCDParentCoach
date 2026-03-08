import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardCheck, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "OCD IQ Assessment",
  description:
    "Understand your child's OCD patterns and your response style with our evidence-based screening tools.",
};

export default function AssessmentPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          Choose Your Assessment
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Child OCD Screening */}
          <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
              <ClipboardCheck className="h-8 w-8 text-sage" />
            </div>
            <h2 className="mt-5 font-serif text-xl font-semibold text-charcoal">
              Child OCD Screening
            </h2>
            <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
              Understand OCD patterns and severity across multiple domains —
              tailored to your child&apos;s age group (4-7, 8-12, 13-18, or 18+).
            </p>
            <div className="mt-4 space-y-1 text-xs text-charcoal/50">
              <p>~8 minutes &middot; 30 age-appropriate questions</p>
            </div>
            <Link
              href="/assessment/child"
              className="mt-6 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Start Screening
            </Link>
          </div>

          {/* Parent Response Style */}
          <div className="rounded-2xl border border-cream-dark bg-white p-8 shadow-sm text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-terracotta/10">
              <Users className="h-8 w-8 text-terracotta" />
            </div>
            <h2 className="mt-5 font-serif text-xl font-semibold text-charcoal">
              Parent Response Style Quiz
            </h2>
            <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
              Discover how your reactions affect OCD and learn to shift
              toward coaching — with scenarios matched to your child&apos;s age.
            </p>
            <div className="mt-4 space-y-1 text-xs text-charcoal/50">
              <p>~5 minutes &middot; 18 age-appropriate scenarios</p>
            </div>
            <Link
              href="/assessment/parent"
              className="mt-6 inline-block rounded-xl bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-dark transition-colors"
            >
              Start Quiz
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-xl bg-navy/5 p-5 text-center">
          <p className="text-sm text-charcoal/60 leading-relaxed">
            These are awareness tools, not clinical diagnoses. Both assessments
            adapt to your child&apos;s age group — from young children to adult children
            living at home. Results can guide conversation with a healthcare provider.
          </p>
        </div>

        <p className="mt-6 text-center text-sm text-charcoal/50">
          Previously completed?{" "}
          <Link href="/account" className="text-sage-dark hover:underline">
            View Past Results
          </Link>
        </p>
      </div>
    </div>
  );
}
