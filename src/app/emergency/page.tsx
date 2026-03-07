import type { Metadata } from "next";
import { Phone, MessageCircle, AlertTriangle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Emergency Resources",
  description: "Immediate help and crisis resources for OCD emergencies.",
};

export default function EmergencyPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-coral" />
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-navy">
            Emergency Resources
          </h1>
          <p className="mt-3 text-charcoal/60">
            If someone is in immediate danger, call 911.
          </p>
        </div>

        {/* Crisis contacts */}
        <div className="mt-12 space-y-4">
          <a
            href="tel:988"
            className="flex items-center gap-4 rounded-2xl border-2 border-coral/30 bg-coral/5 p-6 hover:border-coral/50 transition-colors"
          >
            <Phone className="h-8 w-8 text-coral" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                988 Suicide & Crisis Lifeline
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                Call or text 988 &mdash; available 24/7
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-6">
            <MessageCircle className="h-8 w-8 text-navy" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                Crisis Text Line
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                Text HOME to 741741
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-6">
            <Heart className="h-8 w-8 text-sage" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                IOCDF Resources
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                International OCD Foundation crisis resources
              </p>
            </div>
          </div>
        </div>

        {/* When to go to the ER */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            When to Go to the ER
          </h2>
          <ul className="mt-4 space-y-2 text-charcoal/70">
            <li className="flex gap-2">
              <span className="text-coral">&bull;</span>
              Your child is expressing thoughts of self-harm or suicide
            </li>
            <li className="flex gap-2">
              <span className="text-coral">&bull;</span>
              Your child is physically hurting themselves during an OCD episode
            </li>
            <li className="flex gap-2">
              <span className="text-coral">&bull;</span>
              Your child is unable to eat, drink, or function for an extended period
            </li>
            <li className="flex gap-2">
              <span className="text-coral">&bull;</span>
              You feel unable to keep your child safe
            </li>
          </ul>
        </section>

        {/* During a severe episode */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            During a Severe OCD Episode
          </h2>
          <div className="mt-4 rounded-xl bg-sage/5 border border-sage/20 p-6">
            <ul className="space-y-3 text-charcoal/70 leading-relaxed">
              <li>Keep your voice calm and low</li>
              <li>Don&apos;t try to reason with OCD in the moment</li>
              <li>Be physically present without engaging with rituals</li>
              <li>Wait for the wave to pass, then offer comfort</li>
            </ul>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-coral">
            What NOT to Do During a Crisis
          </h2>
          <div className="mt-4 rounded-xl bg-coral/5 border border-coral/20 p-6">
            <ul className="space-y-3 text-charcoal/70 leading-relaxed">
              <li>Don&apos;t force your child to stop the ritual by physical means</li>
              <li>Don&apos;t yell or express frustration at the OCD behavior</li>
              <li>Don&apos;t try to use logic to argue with OCD</li>
              <li>Don&apos;t leave your child alone if they&apos;re distressed</li>
            </ul>
          </div>
        </section>

        {/* After the crisis */}
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            After the Crisis
          </h2>
          <ul className="mt-4 space-y-2 text-charcoal/70">
            <li>Contact your child&apos;s therapist to debrief</li>
            <li>Log the episode in your tracker for future reference</li>
            <li>Take care of yourself &mdash; you need support too</li>
            <li>Remember: crises are temporary, even when they don&apos;t feel that way</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
