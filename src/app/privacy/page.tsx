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
        <p className="mt-3 text-sm text-charcoal/50">Last updated: March 2026</p>

        <div className="mt-8 space-y-6 text-charcoal/70 leading-relaxed">
          <p>
            Your privacy matters deeply to us. This policy explains what data we
            collect, how we use it, and your rights.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Data We Collect
          </h2>
          <p>
            Detailed privacy policy content will be added here covering: account
            information, chat data, assessment results, tracker entries, usage
            analytics, and cookies.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            How We Use Your Data
          </h2>
          <p>
            Information about how data is used to provide services, improve AI
            responses, and generate insights.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Your Rights
          </h2>
          <p>
            Details about data export, deletion, opt-out options, and GDPR/CCPA
            compliance.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Contact
          </h2>
          <p>
            For privacy-related questions, contact us at privacy@ocdparentcoach.com.
          </p>
        </div>
      </div>
    </div>
  );
}
