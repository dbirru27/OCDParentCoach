import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { notFound } from "next/navigation";
import {
  situations,
  getCategoryBySlug,
  getSituationBySlug,
  getRelatedSituations,
} from "@/lib/situations-data";
import type { Severity, Difficulty } from "@/lib/situations-data";

const severityColors: Record<Severity, string> = {
  mild: "bg-sage/10 text-sage-dark",
  moderate: "bg-gold/20 text-charcoal",
  severe: "bg-coral/10 text-coral",
};

const difficultyColors: Record<Difficulty, string> = {
  starter: "bg-sage/10 text-sage-dark",
  intermediate: "bg-gold/20 text-charcoal",
  advanced: "bg-navy/10 text-navy",
};

export function generateStaticParams() {
  return situations.map((s) => ({
    category: s.categorySlug,
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const situation = getSituationBySlug(slug);
  if (!situation) return { title: "Situation Not Found" };
  return {
    title: situation.title,
    description: situation.setup,
  };
}

export default async function SituationPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const situation = getSituationBySlug(slug);
  if (!situation) notFound();

  const cat = getCategoryBySlug(category);
  const related = getRelatedSituations(situation);

  const mechanicsParagraphs = situation.ocdMechanics.split("\n\n");
  const toughParagraphs = situation.whenItGetsTough.split("\n\n");

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <Link
          href={`/situations/${category}`}
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {cat?.name ?? "Category"}
        </Link>

        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy leading-tight">
          {situation.title}
        </h1>

        {/* Badges */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${severityColors[situation.severity]}`}
          >
            {situation.severity}
          </span>
          {situation.ageRanges.map((age) => (
            <span
              key={age}
              className="rounded-full bg-navy/5 px-2.5 py-0.5 text-xs font-medium text-navy/60"
            >
              Ages {age}
            </span>
          ))}
        </div>

        {/* The Setup */}
        <section className="mt-8">
          <div className="rounded-xl bg-cream border border-cream-dark p-5">
            <p className="text-charcoal/70 leading-relaxed italic">
              {situation.setup}
            </p>
          </div>
        </section>

        {/* What's Happening */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            What&apos;s Happening (The OCD Cycle)
          </h2>
          {mechanicsParagraphs.map((p, i) => (
            <p
              key={i}
              className="mt-3 text-charcoal/70 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </section>

        {/* Age-Specific Examples */}
        {situation.ageSpecificExamples && situation.ageSpecificExamples.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              How This Looks by Age
            </h2>
            <div className="mt-4 space-y-4">
              {situation.ageSpecificExamples.map((ex) => (
                <div
                  key={ex.ageRange}
                  className="rounded-xl border border-cream-dark bg-white p-5 shadow-sm"
                >
                  <span className="inline-block rounded-full bg-navy/5 px-3 py-0.5 text-xs font-semibold text-navy/70 mb-3">
                    Ages {ex.ageRange}
                  </span>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {ex.description}
                  </p>
                  <div className="mt-3 rounded-lg bg-sage/5 border-l-4 border-sage px-4 py-3">
                    <p className="text-xs font-medium text-sage-dark mb-1">
                      You might say:
                    </p>
                    <p className="text-sm italic text-charcoal/70 leading-relaxed">
                      &ldquo;{ex.parentScript}&rdquo;
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* What NOT to Do */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-coral">
            What NOT to Do
          </h2>
          <div className="mt-4 space-y-3">
            {situation.whatNotToDo.map((item, i) => (
              <div
                key={i}
                className="rounded-xl bg-coral/5 border border-coral/20 p-5"
              >
                <p className="font-semibold text-charcoal text-sm">
                  {item.mistake}
                </p>
                <p className="mt-1.5 text-charcoal/60 text-sm leading-relaxed">
                  {item.explanation}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* What to Try Instead */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-sage-dark">
            What to Try Instead
          </h2>
          <div className="mt-4 space-y-5">
            {situation.strategies.map((strategy, i) => (
              <div
                key={i}
                className="rounded-xl border border-cream-dark bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${difficultyColors[strategy.difficulty]}`}
                  >
                    {strategy.difficulty}
                  </span>
                  <h3 className="font-semibold text-charcoal">
                    {strategy.name}
                  </h3>
                </div>
                <ol className="mt-3 space-y-2 text-sm text-charcoal/70 leading-relaxed">
                  {strategy.steps.map((step, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="shrink-0 font-medium text-sage-dark">
                        {j + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <div className="mt-4 rounded-lg bg-sage/5 border-l-4 border-sage px-4 py-3">
                  <p className="text-xs font-medium text-sage-dark mb-1">
                    You might say:
                  </p>
                  <p className="text-sm italic text-charcoal/70 leading-relaxed">
                    &ldquo;{strategy.exampleScript}&rdquo;
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When It Gets Tough */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            When It Gets Tough
          </h2>
          {toughParagraphs.map((p, i) => (
            <p
              key={i}
              className="mt-3 text-charcoal/70 leading-relaxed"
            >
              {p}
            </p>
          ))}
        </section>

        {/* When to Get Help */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            When to Get Professional Help
          </h2>
          <div className="mt-4 rounded-xl bg-coral/5 border border-coral/20 p-5">
            <p className="text-sm text-charcoal/60 mb-3">
              Consider consulting a specialist if:
            </p>
            <ul className="space-y-2">
              {situation.whenToGetHelp.map((sign, i) => (
                <li key={i} className="flex gap-2 text-sm text-charcoal/70">
                  <span className="text-coral shrink-0">&bull;</span>
                  <span>{sign}</span>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href="/directory"
            className="mt-3 inline-block text-sm font-medium text-sage-dark hover:underline"
          >
            Find a therapist near you &rarr;
          </Link>
        </section>

        {/* Related Situations */}
        {related.length > 0 && (
          <section className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Related Situations
            </h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/situations/${rel.categorySlug}/${rel.slug}`}
                  className="group rounded-xl border border-cream-dark bg-white p-4 hover:border-sage/30 hover:shadow-sm transition-all"
                >
                  <h3 className="text-sm font-semibold text-charcoal group-hover:text-sage-dark transition-colors leading-snug">
                    {rel.title}
                  </h3>
                  <p className="mt-1 text-xs text-charcoal/40 capitalize">
                    {rel.severity} &middot; {rel.ageRanges.join(", ")}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Ask the Coach */}
        <div className="mt-12 rounded-2xl bg-sage/5 border border-sage/20 p-6 text-center">
          <MessageCircle className="mx-auto h-8 w-8 text-sage" />
          <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
            Need personalized guidance?
          </h3>
          <p className="mt-2 text-sm text-charcoal/60">
            Talk to our AI Coach about this specific situation.
          </p>
          <Link
            href="/coach"
            className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Ask the Coach
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-charcoal/40 leading-relaxed">
          This guide provides educational information based on ERP and CBT
          principles. It is not a substitute for professional clinical guidance.
          Always consult a qualified mental health professional for your
          family&apos;s specific needs.
        </p>
      </div>
    </div>
  );
}
