import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Situation Category",
  description: "Browse OCD situations in this category.",
};

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const displayName = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const placeholderSituations = [
    { slug: "example-situation-1", title: `My child struggles with ${displayName.toLowerCase()} at home` },
    { slug: "example-situation-2", title: `${displayName} is getting worse at school` },
    { slug: "example-situation-3", title: `How to handle ${displayName.toLowerCase()} during outings` },
  ];

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/situations"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Situation Library
        </Link>

        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy">
          {displayName}
        </h1>

        <div className="mt-8 space-y-4">
          {placeholderSituations.map((situation) => (
            <Link
              key={situation.slug}
              href={`/situations/${category}/${situation.slug}`}
              className="block rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <h2 className="font-serif text-lg font-semibold text-charcoal hover:text-sage-dark transition-colors">
                {situation.title}
              </h2>
              <p className="mt-2 text-sm text-charcoal/50">
                Strategies and scripts for handling this situation at home.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
