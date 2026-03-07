import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Paths",
  description: "Guided learning journeys for parents of children with OCD.",
};

const paths = [
  {
    slug: "just-learned",
    title: "Just Learned My Child Has OCD",
    description: "A gentle 5-part introduction to understanding OCD and what you can do.",
    parts: 5,
    time: "45 min",
  },
  {
    slug: "starting-erp",
    title: "Starting ERP at Home",
    description: "Learn how to support Exposure and Response Prevention in everyday life.",
    parts: 8,
    time: "1.5 hours",
  },
  {
    slug: "reducing-accommodation",
    title: "Reducing Accommodation",
    description: "Gradually shift from accommodating OCD to empowering your child.",
    parts: 6,
    time: "1 hour",
  },
  {
    slug: "preparing-for-therapy",
    title: "Preparing for a Therapist Visit",
    description: "What to know, what to ask, and how to make the most of professional help.",
    parts: 3,
    time: "25 min",
  },
  {
    slug: "supporting-teenager",
    title: "Supporting a Teenager with OCD",
    description: "Age-appropriate strategies for navigating OCD with older children.",
    parts: 6,
    time: "1 hour",
  },
];

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

        <div className="mt-12 space-y-5">
          {paths.map((path) => (
            <Link
              key={path.slug}
              href={`/learn/paths/${path.slug}`}
              className="group block rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <h2 className="font-serif text-xl font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                {path.title}
              </h2>
              <p className="mt-2 text-sm text-charcoal/60">{path.description}</p>
              <p className="mt-3 text-xs text-charcoal/40">
                {path.parts} parts &middot; {path.time}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
