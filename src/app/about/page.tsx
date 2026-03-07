import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Shield, BookOpen, Users, MessageCircle, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about OCD Parent Coach — our mission, values, and the evidence-based approach behind our platform.",
};

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every parent is doing their best. We meet you where you are — with zero judgment and endless understanding.",
  },
  {
    icon: Shield,
    title: "Evidence-Based",
    description:
      "Our guidance is rooted in Exposure and Response Prevention (ERP) and Cognitive Behavioral Therapy (CBT) — the gold-standard treatments for OCD.",
  },
  {
    icon: BookOpen,
    title: "Education Empowers",
    description:
      "When parents understand OCD mechanics, they become their child's greatest ally. Knowledge transforms fear into confident action.",
  },
  {
    icon: Users,
    title: "You're Not Alone",
    description:
      "OCD affects 1 in 200 children. Our community connects families who understand what you're going through.",
  },
  {
    icon: MessageCircle,
    title: "Always Available",
    description:
      "OCD doesn't follow a schedule. Our AI coach is here at 2 AM during a bedtime spiral, and at noon when school anxiety strikes.",
  },
  {
    icon: Target,
    title: "Progress, Not Perfection",
    description:
      "Small, consistent steps lead to meaningful change. We help you track wins and stay the course when it gets tough.",
  },
];

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          About OCD Parent Coach
        </h1>
        <p className="mt-4 text-center text-lg text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
          Making sure no parent has to navigate their child&apos;s OCD alone.
        </p>

        {/* Mission */}
        <section className="mt-12">
          <div className="rounded-2xl bg-sage/5 border border-sage/20 p-8">
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              Our Mission
            </h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              When a child is diagnosed with OCD — or when a parent first
              realizes those repetitive behaviors might be more than a phase — it
              can feel overwhelming. The questions come fast:{" "}
              <em>
                Am I making it worse? Should I let them finish the ritual? Why
                can&apos;t they just stop?
              </em>
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              OCD Parent Coach exists to answer those questions with warmth,
              clarity, and science. We combine the latest evidence-based
              approaches — including ERP and CBT — with AI technology to give
              families 24/7 access to the guidance they need.
            </p>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              We&apos;re not here to replace therapists. We&apos;re here to help
              you between sessions, during the hard moments, and on the days
              when you just need someone who gets it.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-center text-charcoal">
            What We Believe
          </h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm"
              >
                <value.icon className="h-7 w-7 text-sage" />
                <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            How Our Platform Works
          </h2>
          <div className="mt-6 space-y-6 text-charcoal/70 leading-relaxed">
            <div className="rounded-xl border border-cream-dark bg-white p-6">
              <h3 className="font-semibold text-charcoal">AI Parent Coach</h3>
              <p className="mt-2 text-sm">
                Our AI coach is trained on evidence-based OCD strategies. It
                provides personalized guidance for your specific situations —
                from bedtime rituals to school avoidance. It&apos;s available
                24/7 via web chat and understands the nuances of supporting a
                child with OCD.
              </p>
            </div>
            <div className="rounded-xl border border-cream-dark bg-white p-6">
              <h3 className="font-semibold text-charcoal">Situation Library</h3>
              <p className="mt-2 text-sm">
                49 real-world scenarios with step-by-step strategies, parent
                scripts, and graded approaches from starter to advanced. Each
                guide explains the OCD mechanics behind the behavior and what to
                do (and not do) in the moment.
              </p>
            </div>
            <div className="rounded-xl border border-cream-dark bg-white p-6">
              <h3 className="font-semibold text-charcoal">
                Assessments & Tracking
              </h3>
              <p className="mt-2 text-sm">
                Our OCD IQ screening helps you understand your child&apos;s
                patterns across multiple domains. The Parent Response Style Quiz
                reveals how your reactions affect the OCD cycle. The Progress
                Tracker helps you see trends, celebrate wins, and share data
                with your therapist.
              </p>
            </div>
            <div className="rounded-xl border border-cream-dark bg-white p-6">
              <h3 className="font-semibold text-charcoal">Learning Hub</h3>
              <p className="mt-2 text-sm">
                20 in-depth articles covering everything from OCD basics to
                advanced ERP strategies, organized into guided learning paths
                for different stages of your journey.
              </p>
            </div>
          </div>
        </section>

        {/* Clinical foundation */}
        <section className="mt-16">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            Our Clinical Foundation
          </h2>
          <div className="mt-4 space-y-4 text-charcoal/70 leading-relaxed">
            <p>
              All content on OCD Parent Coach is grounded in established
              clinical frameworks:
            </p>
            <ul className="space-y-2 pl-6 list-disc">
              <li>
                <strong className="text-charcoal">
                  Exposure and Response Prevention (ERP)
                </strong>{" "}
                — the first-line treatment for OCD, adapted for parent-supported
                home practice
              </li>
              <li>
                <strong className="text-charcoal">
                  Cognitive Behavioral Therapy (CBT)
                </strong>{" "}
                — understanding and restructuring the thought patterns that fuel
                OCD
              </li>
              <li>
                <strong className="text-charcoal">
                  Family Accommodation Research
                </strong>{" "}
                — based on the work of Dr. Eli Lebowitz and others on how family
                responses affect OCD severity
              </li>
              <li>
                <strong className="text-charcoal">
                  Developmental Considerations
                </strong>{" "}
                — age-appropriate strategies for children ages 4 through
                adulthood
              </li>
            </ul>
          </div>
        </section>

        {/* Important note */}
        <section className="mt-16">
          <div className="rounded-2xl bg-navy/5 border border-navy/10 p-8">
            <h2 className="font-serif text-xl font-semibold text-navy">
              Important Note
            </h2>
            <p className="mt-3 text-charcoal/70 leading-relaxed">
              OCD Parent Coach is an educational and coaching platform. We are
              not a substitute for professional medical advice, diagnosis, or
              treatment. Our AI coach is not a therapist and does not provide
              therapy. Always consult a qualified mental health provider for
              clinical guidance specific to your child.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/disclaimer"
                className="text-sm text-navy hover:underline"
              >
                Read our full Medical Disclaimer
              </Link>
              <span className="text-charcoal/30">|</span>
              <Link
                href="/privacy"
                className="text-sm text-navy hover:underline"
              >
                Privacy Policy
              </Link>
              <span className="text-charcoal/30">|</span>
              <Link
                href="/terms"
                className="text-sm text-navy hover:underline"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            Ready to get started?
          </h2>
          <p className="mt-3 text-charcoal/60">
            Whether you&apos;re just learning about OCD or deep in the
            trenches, we&apos;re here for you.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/coach"
              className="rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Talk to Our AI Coach
            </Link>
            <Link
              href="/situations"
              className="rounded-xl border border-cream-dark bg-white px-6 py-3 text-sm font-semibold text-charcoal/70 hover:bg-cream transition-colors"
            >
              Browse Situations
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
