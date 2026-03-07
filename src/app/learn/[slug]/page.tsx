import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Learning Article",
  description: "Evidence-based educational content about childhood OCD.",
};

export default function LearnArticlePage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Learning Hub
        </Link>

        <span className="mt-6 inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy">
          Article
        </span>

        <h1 className="mt-3 font-serif text-3xl font-semibold text-navy leading-tight">
          Understanding OCD in Children
        </h1>

        <p className="mt-3 text-sm text-charcoal/50">8 min read</p>

        {/* Key Takeaways */}
        <div className="mt-8 rounded-xl bg-sage/5 border border-sage/20 p-5">
          <h2 className="text-sm font-semibold text-sage-dark">Key Takeaways</h2>
          <ul className="mt-2 space-y-1 text-sm text-charcoal/70">
            <li>OCD is a neurobiological condition, not a choice</li>
            <li>It affects 1-2% of children and adolescents</li>
            <li>ERP is the gold standard treatment</li>
          </ul>
        </div>

        {/* Article body placeholder */}
        <div className="mt-8 prose prose-lg text-charcoal/80 leading-relaxed space-y-4">
          <p>
            Article content will go here. This is a placeholder for the full
            educational content, formatted with proper headings, paragraphs,
            and supporting information.
          </p>
        </div>

        {/* Related & CTA */}
        <div className="mt-12 rounded-2xl bg-sage/5 border border-sage/20 p-6 text-center">
          <MessageCircle className="mx-auto h-8 w-8 text-sage" />
          <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
            Have questions about this topic?
          </h3>
          <Link
            href="/coach"
            className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Ask the Coach
          </Link>
        </div>
      </div>
    </div>
  );
}
