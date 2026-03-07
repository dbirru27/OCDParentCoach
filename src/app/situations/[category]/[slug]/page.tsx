import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Situation Guide",
  description: "Step-by-step guidance for handling this OCD situation.",
};

export default async function SituationPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category } = await params;
  const displayCategory = category
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <Link
          href={`/situations/${category}`}
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {displayCategory}
        </Link>

        <h1 className="mt-6 font-serif text-3xl font-semibold text-navy leading-tight">
          My child washes their hands until they&apos;re raw
        </h1>

        {/* What's Happening */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            What&apos;s Happening (OCD Mechanics)
          </h2>
          <p className="mt-3 text-charcoal/70 leading-relaxed">
            Content will explain the OCD cycle for this specific situation &mdash;
            the trigger, the obsession, the compulsion, and the temporary relief
            that reinforces the cycle.
          </p>
        </section>

        {/* What NOT to Do */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-coral">
            What NOT to Do
          </h2>
          <div className="mt-3 rounded-xl bg-coral/5 border border-coral/20 p-5">
            <ul className="space-y-2 text-charcoal/70 text-sm leading-relaxed">
              <li>It&apos;s natural to want to help, but certain responses can reinforce the cycle.</li>
              <li>Specific &ldquo;don&apos;ts&rdquo; will be listed here with compassionate framing.</li>
            </ul>
          </div>
        </section>

        {/* What to Try Instead */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-sage-dark">
            What to Try Instead
          </h2>
          <div className="mt-4 space-y-4">
            {["Starter", "Intermediate", "Advanced"].map((level) => (
              <div
                key={level}
                className="rounded-xl border border-cream-dark bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    level === "Starter"
                      ? "bg-sage/10 text-sage-dark"
                      : level === "Intermediate"
                      ? "bg-gold/20 text-charcoal"
                      : "bg-navy/10 text-navy"
                  }`}>
                    {level}
                  </span>
                  <h3 className="font-semibold text-charcoal">Strategy Name</h3>
                </div>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  Step-by-step instructions and example scripts will go here.
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* When It Gets Tough */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            When It Gets Tough
          </h2>
          <p className="mt-3 text-charcoal/70 leading-relaxed">
            Guidance on extinction bursts and what to expect when you start
            changing your responses.
          </p>
        </section>

        {/* When to Get Help */}
        <section className="mt-10">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            When to Get Professional Help
          </h2>
          <p className="mt-3 text-charcoal/70 leading-relaxed">
            Clear indicators that it&apos;s time to involve a specialist.
          </p>
          <Link
            href="/directory"
            className="mt-3 inline-block text-sm font-medium text-sage-dark hover:underline"
          >
            Find a therapist near you &rarr;
          </Link>
        </section>

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
      </div>
    </div>
  );
}
