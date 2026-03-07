import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for using OCD Parent Coach.",
};

export default function TermsPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <h1 className="font-serif text-3xl font-semibold text-navy">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-charcoal/50">
          Last updated: March 7, 2026
        </p>

        <div className="mt-8 space-y-8 text-charcoal/70 leading-relaxed">
          <p>
            By accessing or using OCD Parent Coach (&quot;the Service&quot;),
            you agree to be bound by these Terms of Service. If you do not agree
            to these terms, please do not use the Service.
          </p>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              1. About the Service
            </h2>
            <p className="mt-3 text-sm">
              OCD Parent Coach is an educational platform that provides
              AI-assisted coaching, assessment tools, educational content, and
              community features for parents and caregivers of individuals with
              OCD. The Service is designed to complement &mdash; not replace
              &mdash; professional mental health care.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              2. Eligibility
            </h2>
            <p className="mt-3 text-sm">
              You must be at least 18 years old to create an account and use the
              Service. By creating an account, you represent that you are at
              least 18 years of age.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              3. Account Responsibility
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  You are responsible for maintaining the security of your
                  account credentials.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  You are responsible for all activity that occurs under your
                  account.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  You agree to provide accurate information when creating your
                  account and child profiles.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  You must notify us immediately if you suspect unauthorized
                  access to your account.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              4. AI Coaching &mdash; Important Limitations
            </h2>
            <div className="mt-3 rounded-xl bg-coral/5 border border-coral/20 p-5 text-sm">
              <p className="font-semibold text-charcoal">
                Our AI coach is not a therapist, psychologist, psychiatrist, or
                medical doctor.
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex gap-2">
                  <span className="text-coral shrink-0">&bull;</span>
                  <span>
                    The AI does not diagnose any condition, including OCD.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-coral shrink-0">&bull;</span>
                  <span>
                    The AI does not prescribe or recommend specific medications
                    or dosages.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-coral shrink-0">&bull;</span>
                  <span>
                    The AI provides educational guidance based on general
                    evidence-based practices (ERP, CBT).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-coral shrink-0">&bull;</span>
                  <span>
                    AI responses may occasionally contain errors. Always verify
                    important information with a qualified professional.
                  </span>
                </li>
              </ul>
            </div>
            <p className="mt-3 text-sm">
              By using the AI coaching features, you acknowledge these
              limitations and agree that the Service is not a substitute for
              professional mental health care. See our full{" "}
              <Link
                href="/disclaimer"
                className="text-sage-dark hover:underline"
              >
                Medical Disclaimer
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              5. Assessment Tools
            </h2>
            <p className="mt-3 text-sm">
              The OCD IQ Screening and Parent Response Style Quiz are awareness
              tools designed to help you understand patterns and have more
              informed conversations with healthcare providers. They do not
              constitute clinical diagnoses. Results should not be used as a
              basis for treatment decisions without consulting a qualified
              professional.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              6. Community Guidelines
            </h2>
            <p className="mt-3 text-sm">
              When participating in the community forum, you agree to:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Treat all community members with respect and compassion
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Share peer support and personal experiences, not medical advice
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Not post content that is harmful, threatening, abusive, or
                  harassing
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Not post spam, advertisements, or commercial content
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Respect the privacy of others and not share identifying
                  information about other families
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Report concerning content using the report function
                </span>
              </li>
            </ul>
            <p className="mt-3 text-sm">
              We reserve the right to remove content and suspend accounts that
              violate these guidelines. Medication discussions will include
              automatic reminders to consult your doctor.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              7. Acceptable Use
            </h2>
            <p className="mt-3 text-sm">You agree not to:</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Use the Service for any unlawful purpose
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Attempt to reverse-engineer the AI system or extract training
                  data
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Create multiple accounts or impersonate others
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Use automated tools to access the Service (bots, scrapers)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  Interfere with or disrupt the Service or its infrastructure
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              8. Intellectual Property
            </h2>
            <p className="mt-3 text-sm">
              All content on the Service (articles, assessments, situation
              guides, design, and code) is owned by OCD Parent Coach and
              protected by copyright. You may not reproduce, distribute, or
              create derivative works from our content without permission. You
              retain ownership of the personal data and content you submit
              (messages, tracker entries, forum posts).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              9. Limitation of Liability
            </h2>
            <p className="mt-3 text-sm">
              The Service is provided &quot;as is&quot; without warranties of any
              kind. We are not liable for any damages arising from your use of
              the Service, including but not limited to reliance on AI coaching
              responses, assessment results, or community forum content. In no
              event shall our total liability exceed the amount you paid us in
              the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              10. Termination
            </h2>
            <p className="mt-3 text-sm">
              You may delete your account at any time through your account
              settings. We may suspend or terminate your access if you violate
              these Terms. Upon termination, your right to use the Service ceases
              and your data will be handled according to our{" "}
              <Link
                href="/privacy"
                className="text-sage-dark hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              11. Changes to These Terms
            </h2>
            <p className="mt-3 text-sm">
              We may update these Terms from time to time. We will notify you of
              material changes via email or in-app notification. Continued use of
              the Service after changes take effect constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              12. Contact
            </h2>
            <p className="mt-3 text-sm">
              For questions about these Terms, contact us at{" "}
              <a
                href="mailto:legal@ocdparentcoach.com"
                className="text-sage-dark hover:underline"
              >
                legal@ocdparentcoach.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
