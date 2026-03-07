import type { Metadata } from "next";
import Link from "next/link";
import { learningPaths, getPathContents } from "@/lib/learning-data";

export const metadata: Metadata = {
  title: "Learning Paths",
  description: "Guided learning journeys for parents of children with OCD.",
};

export default function LearningPathsPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl font-semibold text-center text-navy">
          Learning Paths
        </h1>
        <p className="mt-3 text-center text-charcoal/60">
          Curated journeys to guide you step by step.
        </p>

        <div className="mt-12 space-y-8">
          {learningPaths.map((path) => {
            const contents = getPathContents(path);
            return (
              <div
                key={path.slug}
                className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm"
              >
                <h2 className="font-serif text-xl font-semibold text-charcoal">
                  {path.title}
                </h2>
                <p className="mt-2 text-sm text-charcoal/60">
                  {path.description}
                </p>
                <p className="mt-1 text-xs text-charcoal/40">
                  {contents.length} parts &middot;{" "}
                  {path.estimatedMinutes < 60
                    ? `${path.estimatedMinutes} min`
                    : `${(path.estimatedMinutes / 60).toFixed(1)} hours`}
                </p>

                <div className="mt-5 space-y-2">
                  {contents.map((content, i) => (
                    <Link
                      key={content.slug}
                      href={`/learn/${content.slug}`}
                      className="group flex items-center gap-3 rounded-xl border border-cream-dark p-3 hover:border-sage/30 hover:bg-sage/5 transition-all"
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/10 text-xs font-semibold text-sage-dark">
                        {i + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-medium text-charcoal group-hover:text-sage-dark transition-colors truncate">
                          {content.title}
                        </h3>
                        <p className="text-xs text-charcoal/40">
                          {content.readingTimeMinutes} min read
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
