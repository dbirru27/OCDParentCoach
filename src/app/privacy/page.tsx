import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OCD Parent Coach handles your data and privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <h1 className="font-serif text-3xl font-semibold text-navy">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-charcoal/50">
          Last updated: March 7, 2026
        </p>

        <div className="mt-8 space-y-8 text-charcoal/70 leading-relaxed">
          <p>
            Your privacy matters deeply to us. OCD Parent Coach (&quot;we,&quot;
            &quot;our,&quot; or &quot;the Service&quot;) is committed to
            protecting the personal information you share with us. This policy
            explains what data we collect, how we use it, and your rights.
          </p>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              1. Information We Collect
            </h2>
            <div className="mt-3 space-y-3">
              <div>
                <h3 className="font-semibold text-charcoal text-sm">
                  Account Information
                </h3>
                <p className="mt-1 text-sm">
                  When you create an account, we collect your email address,
                  display name, and any optional profile information you provide.
                  If you sign in with Google or Apple, we receive your name and
                  email from those providers.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal text-sm">
                  Child Profiles
                </h3>
                <p className="mt-1 text-sm">
                  You may optionally create child profiles including a first name
                  or nickname, age, and OCD-related information. We never collect
                  information directly from children &mdash; all data is provided
                  by the parent or caregiver.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal text-sm">
                  Chat Conversations
                </h3>
                <p className="mt-1 text-sm">
                  Messages you send to our AI coach are stored to provide
                  context-aware responses and maintain your conversation history.
                  Conversations are encrypted in transit and at rest.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal text-sm">
                  Assessment Results
                </h3>
                <p className="mt-1 text-sm">
                  Your answers and scores from the OCD IQ screening and Parent
                  Response Style quiz are stored to show you historical trends
                  and personalized recommendations.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal text-sm">
                  Progress Tracker Data
                </h3>
                <p className="mt-1 text-sm">
                  Episode logs, intensity ratings, triggers, and notes you record
                  in the tracker are stored in your private account.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal text-sm">
                  Usage Data
                </h3>
                <p className="mt-1 text-sm">
                  We collect anonymous usage analytics (pages visited, features
                  used, session duration) to improve the Service. We use
                  privacy-friendly analytics that do not track you across other
                  websites.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              2. How We Use Your Data
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  To provide AI coaching with personalized, context-aware
                  responses
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  To generate assessment scores and personalized recommendations
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  To display your progress tracker dashboard and insights
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  To improve our AI responses and content quality (using
                  anonymized, aggregated data only)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  To detect and respond to crisis situations (safety review)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  To send transactional emails (account verification, password
                  resets) and optional newsletters
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              3. Data Sharing
            </h2>
            <p className="mt-3 text-sm">
              We do <strong>not</strong> sell your personal data to third
              parties. We share data only in the following limited circumstances:
            </p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>AI Processing:</strong> Your chat messages are sent to
                  our AI provider (Anthropic) for response generation. Anthropic
                  does not use this data to train their models.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Service Providers:</strong> We use trusted
                  infrastructure providers (hosting, database, email) who process
                  data on our behalf under strict agreements.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Legal Requirements:</strong> We may disclose data if
                  required by law or to protect the safety of our users.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              4. Data Security
            </h2>
            <p className="mt-3 text-sm">
              We implement industry-standard security measures including
              encryption in transit (TLS) and at rest, secure authentication, and
              regular security audits. Chat conversations and health-related data
              are encrypted with additional safeguards.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              5. Your Rights
            </h2>
            <p className="mt-3 text-sm">You have the right to:</p>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Access:</strong> Request a copy of all data we hold
                  about you
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Export:</strong> Download your data in standard formats
                  (CSV, PDF)
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Delete:</strong> Request deletion of your account and
                  all associated data
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Opt Out:</strong> Opt out of anonymized data usage for
                  AI improvement
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>
                  <strong>Correct:</strong> Update or correct inaccurate personal
                  information
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              6. Children&apos;s Privacy (COPPA)
            </h2>
            <p className="mt-3 text-sm">
              OCD Parent Coach is designed for parents and caregivers, not for
              children. We do not knowingly collect information directly from
              anyone under 18. Child profile data is provided by and controlled
              by the parent account holder.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              7. Data Retention
            </h2>
            <p className="mt-3 text-sm">
              We retain your data for as long as your account is active. You can
              configure auto-deletion of chat history (30, 90, or 365 days) in
              your account settings. When you delete your account, all associated
              data is permanently removed within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              8. Cookies
            </h2>
            <p className="mt-3 text-sm">
              We use essential cookies for authentication and session management.
              We use privacy-friendly analytics that do not require cookie
              consent banners. We do not use advertising or tracking cookies.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              9. Changes to This Policy
            </h2>
            <p className="mt-3 text-sm">
              We may update this policy from time to time. We will notify you of
              significant changes via email or an in-app notification. Continued
              use of the Service after changes constitutes acceptance of the
              updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              10. Contact Us
            </h2>
            <p className="mt-3 text-sm">
              For privacy-related questions or to exercise your rights, contact
              us at{" "}
              <a
                href="mailto:privacy@ocdparentcoach.com"
                className="text-sage-dark hover:underline"
              >
                privacy@ocdparentcoach.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
