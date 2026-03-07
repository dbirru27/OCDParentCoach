import type { Metadata } from "next";

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
        <p className="mt-3 text-sm text-charcoal/50">Last updated: March 2026</p>

        <div className="mt-8 space-y-6 text-charcoal/70 leading-relaxed">
          <p>
            By using OCD Parent Coach, you agree to the following terms and
            conditions.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Use of Service
          </h2>
          <p>
            Terms about acceptable use, account responsibility, and service
            limitations will be detailed here.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            AI Coaching Disclaimer
          </h2>
          <p>
            Our AI coach provides educational guidance, not medical advice. Users
            acknowledge that OCD Parent Coach is not a substitute for
            professional mental health care.
          </p>

          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Community Guidelines
          </h2>
          <p>
            Rules for participating in the community forum, including content
            policies and moderation.
          </p>
        </div>
      </div>
    </div>
  );
}
