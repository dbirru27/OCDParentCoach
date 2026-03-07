import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import {
  situationCategories,
  getCategoryBySlug,
  getSituationsByCategory,
} from "@/lib/situations-data";
import type { Severity } from "@/lib/situations-data";

const severityColors: Record<Severity, string> = {
  mild: "bg-sage/10 text-sage-dark",
  moderate: "bg-gold/20 text-charcoal",
  severe: "bg-coral/10 text-coral",
};

export function generateStaticParams() {
  return situationCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Category Not Found" };
  return {
    title: cat.name,
    description: cat.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const categorySituations = getSituationsByCategory(category);

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/situations"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          All Situations
        </Link>

        <div className="mt-6 flex items-center gap-3">
          <span className="text-4xl">{cat.icon}</span>
          <div>
            <h1 className="font-serif text-3xl font-semibold text-navy">
              {cat.name}
            </h1>
            <p className="mt-1 text-charcoal/60">{cat.description}</p>
          </div>
        </div>

        {categorySituations.length === 0 ? (
          <div className="mt-12 text-center py-16">
            <p className="text-charcoal/40">
              Guides for this category are being developed. Check back soon.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-4">
            {categorySituations.map((sit) => (
              <Link
                key={sit.slug}
                href={`/situations/${category}/${sit.slug}`}
                className="group block rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
              >
                <h2 className="font-serif text-lg font-semibold text-charcoal group-hover:text-sage-dark transition-colors leading-snug">
                  {sit.title}
                </h2>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed line-clamp-2">
                  {sit.setup}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${severityColors[sit.severity]}`}
                  >
                    {sit.severity}
                  </span>
                  {sit.ageRanges.map((age) => (
                    <span
                      key={age}
                      className="rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy/60"
                    >
                      Ages {age}
                    </span>
                  ))}
                  <span className="ml-auto text-xs text-charcoal/40">
                    {sit.strategies.length} strategies
                  </span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
