import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Forum Category",
  description: "Browse community forum threads in this category.",
};

export default async function ForumCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const displayName = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/community"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>

        <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
          {displayName}
        </h1>

        <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
          <p className="text-charcoal/50">
            No threads yet. Be the first to start a conversation.
          </p>
          <Link
            href="/community/new"
            className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Create a Post
          </Link>
        </div>
      </div>
    </div>
  );
}
