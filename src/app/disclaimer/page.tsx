import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description: "Important medical disclaimer for OCD Parent Coach.",
};

export default function DisclaimerPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <h1 className="font-serif text-3xl font-semibold text-navy">
          Medical Disclaimer
        </h1>

        <div className="mt-8 space-y-6 text-charcoal/70 leading-relaxed">
          <div className="rounded-xl bg-coral/5 border border-coral/20 p-6">
            <p className="font-semibold text-charcoal">
              OCD Parent Coach provides educational information and AI-assisted
              coaching. It is not a substitute for professional medical advice,
              diagnosis, or treatment.
            </p>
          </div>

          <p>
            Always seek the advice of a qualified mental health provider with any
            questions you may have regarding your child&apos;s condition. Never
            disregard professional advice or delay in seeking it because of
            something you have read or received through this platform.
          </p>

          <p>
            Our AI coach is not a therapist, psychologist, psychiatrist, or
            medical doctor. It does not diagnose conditions, prescribe
            treatments, or provide therapy. The guidance provided is educational
            in nature and based on general evidence-based practices.
          </p>

          <p>
            Assessment results from our OCD IQ screening tools are for
            awareness purposes only and do not constitute a clinical diagnosis.
            These tools are designed to help you have more informed conversations
            with your child&apos;s healthcare provider.
          </p>

          <p>
            If your child is in crisis or you believe they may be a danger to
            themselves or others, please call 911 or contact the 988 Suicide &
            Crisis Lifeline by calling or texting 988.
          </p>
        </div>
      </div>
    </div>
  );
}
