import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Important medical disclaimer for OCD Parent Coach. Our platform provides educational information and AI-assisted coaching, not medical advice.",
};

export default function DisclaimerPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <h1 className="font-serif text-3xl font-semibold text-navy">
          Medical Disclaimer
        </h1>
        <p className="mt-2 text-sm text-charcoal/40">
          Last updated: March 7, 2026
        </p>

        <div className="mt-8 space-y-8 text-charcoal/70 leading-relaxed">
          {/* Primary disclaimer */}
          <div className="rounded-2xl bg-coral/5 border border-coral/20 p-6">
            <p className="font-semibold text-charcoal leading-relaxed">
              OCD Parent Coach provides educational information and AI-assisted
              coaching. It is not a substitute for professional medical advice,
              diagnosis, or treatment. Always seek the advice of a qualified
              mental health provider with any questions you may have regarding
              your child&apos;s condition.
            </p>
          </div>

          {/* Not a therapist */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Our AI Coach Is Not a Therapist
            </h2>
            <p className="mt-3">
              Our AI-powered coaching tool is designed to provide educational
              guidance based on evidence-based principles including Exposure and
              Response Prevention (ERP) and Cognitive Behavioral Therapy (CBT).
              However, it is important to understand that:
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>
                The AI coach is not a licensed therapist, psychologist,
                psychiatrist, or medical doctor
              </li>
              <li>
                It does not diagnose conditions, prescribe treatments, or
                provide therapy
              </li>
              <li>
                It cannot assess your child in person or account for the full
                complexity of their situation
              </li>
              <li>
                The guidance provided is educational in nature and based on
                general evidence-based practices
              </li>
              <li>
                AI systems can produce inaccurate or incomplete information
              </li>
            </ul>
          </section>

          {/* Assessment tools */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Assessment & Screening Tools
            </h2>
            <p className="mt-3">
              The OCD IQ screening and Parent Response Style Quiz available on
              our platform are awareness tools designed for educational purposes
              only. They do not constitute clinical diagnoses and should not be
              used as a substitute for professional evaluation.
            </p>
            <p className="mt-3">
              These tools are intended to help you have more informed
              conversations with your child&apos;s healthcare provider. Results
              may not accurately reflect your child&apos;s clinical presentation
              and should be interpreted by a qualified professional.
            </p>
          </section>

          {/* Content accuracy */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Content & Information
            </h2>
            <p className="mt-3">
              While we strive to provide accurate, up-to-date, and
              evidence-based information, OCD Parent Coach makes no warranties
              or representations regarding the completeness, accuracy, or
              reliability of any information provided on this platform,
              including:
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>
                Articles, guides, and educational content in the Learning Hub
              </li>
              <li>
                Strategies and recommendations in the Situation Library
              </li>
              <li>
                Information about medications, therapies, or treatment
                approaches
              </li>
              <li>
                AI-generated responses and coaching suggestions
              </li>
              <li>Professional directory listings and therapist information</li>
            </ul>
          </section>

          {/* Medication */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Medication Information
            </h2>
            <p className="mt-3">
              Any information about medications (including SSRIs and other
              treatments for OCD) is provided for general educational purposes
              only. We never recommend specific medications or dosages. All
              medication decisions should be made in consultation with your
              child&apos;s prescribing physician.
            </p>
          </section>

          {/* Community content */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Community & User-Generated Content
            </h2>
            <p className="mt-3">
              Our community forum contains posts and replies from other parents
              and users. This content represents personal experiences and
              opinions and should not be considered professional advice. Always
              verify any suggestions with your child&apos;s treatment team.
            </p>
          </section>

          {/* Crisis situations */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Emergency & Crisis Situations
            </h2>
            <p className="mt-3">
              OCD Parent Coach is not a crisis service. If your child is in
              immediate danger, experiencing a psychiatric emergency, or if you
              believe someone may be at risk of harming themselves or others:
            </p>
            <div className="mt-3 rounded-xl bg-coral/5 border border-coral/20 p-4">
              <ul className="space-y-2 text-sm">
                <li>
                  <strong className="text-charcoal">Call 911</strong> for
                  immediate emergencies
                </li>
                <li>
                  <strong className="text-charcoal">Call or text 988</strong>{" "}
                  for the Suicide & Crisis Lifeline
                </li>
                <li>
                  <strong className="text-charcoal">
                    Text HOME to 741741
                  </strong>{" "}
                  for Crisis Text Line
                </li>
              </ul>
            </div>
          </section>

          {/* Professional guidance */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              When to Seek Professional Help
            </h2>
            <p className="mt-3">
              We strongly recommend consulting a mental health professional
              specializing in OCD — particularly one trained in ERP — if your
              child&apos;s OCD behaviors:
            </p>
            <ul className="mt-3 space-y-2 pl-6 list-disc">
              <li>
                Interfere with daily functioning (school, friendships, family
                life)
              </li>
              <li>Cause significant distress lasting more than an hour daily</li>
              <li>Are getting worse over time despite your best efforts</li>
              <li>Involve self-harm or dangerous behaviors</li>
              <li>
                Cause you to significantly modify your family&apos;s routines
              </li>
            </ul>
            <p className="mt-3">
              Use our{" "}
              <Link
                href="/directory"
                className="text-sage-dark hover:underline"
              >
                Professional Directory
              </Link>{" "}
              to find OCD-specialized therapists near you.
            </p>
          </section>

          {/* Limitation of liability */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Limitation of Liability
            </h2>
            <p className="mt-3">
              By using OCD Parent Coach, you acknowledge that you use this
              platform at your own risk. We are not liable for any decisions
              made or actions taken based on the information provided through
              our AI coach, educational content, assessments, community forum,
              or any other feature of this platform.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Questions About This Disclaimer
            </h2>
            <p className="mt-3">
              If you have questions about this medical disclaimer or our
              platform, please contact us at{" "}
              <span className="text-sage-dark">
                support@ocdparentcoach.com
              </span>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
