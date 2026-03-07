import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about OCD Parent Coach and our mission.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-navy">
          About OCD Parent Coach
        </h1>

        <div className="mt-8 space-y-6 text-charcoal/70 leading-relaxed">
          <p>
            OCD Parent Coach was built with one mission: to make sure no parent
            has to navigate their child&apos;s OCD alone.
          </p>
          <p>
            We combine the latest evidence-based approaches &mdash; including
            Exposure and Response Prevention (ERP) and Cognitive Behavioral
            Therapy (CBT) &mdash; with the warmth and accessibility of AI
            technology to provide 24/7 guidance for families.
          </p>
          <p>
            Our platform is designed by parents who&apos;ve been there, informed
            by clinicians who specialize in childhood OCD, and powered by AI
            that puts compassion first.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-charcoal pt-4">
            What We Believe
          </h2>
          <ul className="space-y-2">
            <li>Every parent deserves support, not judgment</li>
            <li>Understanding OCD is the first step to managing it</li>
            <li>Small, consistent changes lead to meaningful progress</li>
            <li>AI can complement &mdash; but never replace &mdash; professional care</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-charcoal pt-4">
            Important Note
          </h2>
          <p>
            OCD Parent Coach is an educational and coaching platform. We are not
            a substitute for professional medical advice, diagnosis, or
            treatment. Always consult a qualified mental health provider for
            clinical guidance.
          </p>
        </div>
      </div>
    </div>
  );
}
