import Link from "next/link";
import {
  MessageCircle,
  ClipboardCheck,
  BookOpen,
  BarChart3,
  GraduationCap,
  Users,
} from "lucide-react";
import { GlossaryTerm } from "@/components/info-tooltip";
import { glossary } from "@/lib/glossary";

const features = [
  {
    icon: MessageCircle,
    title: "AI Coach",
    description: (
      <>
        Get 24/7 guidance from our AI coach trained in{" "}
        <GlossaryTerm term="ERP" definition={glossary.ERP}>ERP</GlossaryTerm> and{" "}
        <GlossaryTerm term="CBT" definition={glossary.CBT}>CBT</GlossaryTerm> strategies for childhood OCD.
      </>
    ),
    href: "/coach",
  },
  {
    icon: ClipboardCheck,
    title: "OCD IQ Test",
    description: "Understand your child's OCD patterns with our evidence-based screening tool.",
    href: "/assessment",
  },
  {
    icon: BookOpen,
    title: "Situation Library",
    description: "Browse real scenarios with step-by-step strategies you can try tonight.",
    href: "/situations",
  },
  {
    icon: BarChart3,
    title: "Progress Tracker",
    description: "Log episodes, track patterns, and see your family's progress over time.",
    href: "/tracker",
  },
  {
    icon: GraduationCap,
    title: "Learning Hub",
    description: "Articles, videos, and guided paths to deepen your understanding of OCD.",
    href: "/learn",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with other parents who understand. Share wins, ask questions, find support.",
    href: "/community",
  },
];

const steps = [
  {
    number: "1",
    title: "Understand",
    description: "Learn what's driving your child's OCD behaviors and why common responses can backfire.",
  },
  {
    number: "2",
    title: "Strategize",
    description: "Get personalized, evidence-based guidance from our AI coach for your specific situations.",
  },
  {
    number: "3",
    title: "Track & Grow",
    description: "Monitor progress, celebrate small wins, and see the bigger picture unfold over time.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="px-4 py-20 sm:py-28 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-navy leading-tight">
            You&apos;re not alone in this.
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-charcoal/70 leading-relaxed max-w-2xl mx-auto">
            AI-powered guidance for parents navigating childhood OCD.
            Evidence-based. Compassionate. 24/7.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/coach"
              className="rounded-2xl bg-sage px-8 py-4 text-base font-semibold text-white shadow-sm hover:bg-sage-dark transition-colors"
            >
              Talk to Our AI Coach
            </Link>
            <Link
              href="/assessment"
              className="rounded-2xl border-2 border-terracotta px-8 py-4 text-base font-semibold text-terracotta hover:bg-terracotta/10 transition-colors"
            >
              Take the OCD IQ Test
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
            How It Works
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-sage/10 text-sage font-serif text-2xl font-bold">
                  {step.number}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
            Everything You Need
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
              >
                <feature.icon className="h-8 w-8 text-sage" />
                <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-charcoal/60 leading-relaxed">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 bg-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-navy">
            What Parents Are Saying
          </h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <blockquote className="rounded-2xl bg-cream p-6 text-left">
              <p className="text-charcoal/70 italic leading-relaxed">
                &ldquo;I finally understood why my responses were making it
                worse. This changed everything for our family.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-charcoal/50">
                &mdash; Parent of a 9-year-old
              </footer>
            </blockquote>
            <blockquote className="rounded-2xl bg-cream p-6 text-left">
              <p className="text-charcoal/70 italic leading-relaxed">
                &ldquo;Having a coach available at 2am when bedtime rituals
                spiral &mdash; that&apos;s been a game changer.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-charcoal/50">
                &mdash; Parent of a 7-year-old
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-navy">
            Weekly tips in your inbox
          </h2>
          <p className="mt-3 text-charcoal/60">
            Evidence-based strategies, delivered gently every week.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-colors"
            />
            <button
              type="submit"
              className="rounded-xl bg-terracotta px-6 py-3 text-sm font-semibold text-white hover:bg-terracotta-dark transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
