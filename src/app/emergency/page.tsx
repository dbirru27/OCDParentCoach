import type { Metadata } from "next";
import { Phone, MessageCircle, AlertTriangle, Heart, Globe, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Resources",
  description:
    "Immediate help and crisis resources for OCD emergencies. 988 Suicide & Crisis Lifeline, Crisis Text Line, and more.",
};

const internationalResources = [
  { country: "United Kingdom", line: "Samaritans: 116 123", detail: "Free, 24/7" },
  { country: "Canada", line: "988 Suicide Crisis Helpline: 988", detail: "24/7" },
  { country: "Australia", line: "Lifeline: 13 11 14", detail: "24/7" },
  { country: "New Zealand", line: "Lifeline: 0800 543 354", detail: "24/7" },
  { country: "Ireland", line: "Samaritans: 116 123", detail: "Free, 24/7" },
  { country: "India", line: "Vandrevala Foundation: 1860-2662-345", detail: "24/7" },
  { country: "South Africa", line: "SADAG: 0800 567 567", detail: "24/7" },
  { country: "Germany", line: "Telefonseelsorge: 0800 111 0 111", detail: "Free, 24/7" },
  { country: "France", line: "SOS Amitie: 09 72 39 40 50", detail: "24/7" },
  { country: "Japan", line: "TELL Lifeline: 03-5774-0992", detail: "Daily 9am-11pm" },
];

export default function EmergencyPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-coral" />
          <h1 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold text-navy">
            Emergency Resources
          </h1>
          <p className="mt-3 text-lg text-charcoal/60">
            If someone is in immediate danger, call 911.
          </p>
        </div>

        {/* Crisis contacts */}
        <div className="mt-12 space-y-4">
          <a
            href="tel:988"
            className="flex items-center gap-4 rounded-2xl border-2 border-coral/30 bg-coral/5 p-6 hover:border-coral/50 transition-colors"
          >
            <Phone className="h-8 w-8 shrink-0 text-coral" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                988 Suicide & Crisis Lifeline
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                Call or text 988 &mdash; available 24/7, free and confidential
              </p>
            </div>
          </a>

          <a
            href="sms:741741?body=HOME"
            className="flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-6 hover:border-sage/30 transition-colors"
          >
            <MessageCircle className="h-8 w-8 shrink-0 text-navy" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                Crisis Text Line
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                Text HOME to 741741 &mdash; free, 24/7 crisis counseling via text
              </p>
            </div>
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-6">
            <Heart className="h-8 w-8 shrink-0 text-sage" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                IOCDF Resources
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                International OCD Foundation &mdash; find specialized help and
                support groups at iocdf.org
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-6">
            <Clock className="h-8 w-8 shrink-0 text-terracotta" />
            <div>
              <h2 className="font-serif text-xl font-semibold text-charcoal">
                SAMHSA National Helpline
              </h2>
              <p className="mt-1 text-sm text-charcoal/60">
                1-800-662-4357 &mdash; free referrals and information, 24/7, 365 days
              </p>
            </div>
          </div>
        </div>

        {/* When to go to the ER */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            When to Go to the ER
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            Go to your nearest emergency room or call 911 if:
          </p>
          <ul className="mt-4 space-y-3">
            {[
              "Your child is expressing thoughts of self-harm or suicide",
              "Your child is physically hurting themselves during an OCD episode",
              "Your child is unable to eat, drink, or function for an extended period",
              "You feel unable to keep your child safe",
              "Your child has ingested something harmful as part of a compulsion",
              "There is any risk of immediate physical danger to your child or others",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-charcoal/70">
                <span className="mt-1 text-coral shrink-0">
                  <AlertTriangle className="h-4 w-4" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* During a severe episode */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            During a Severe OCD Episode
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            When your child is in acute distress, focus on safety and presence:
          </p>
          <div className="mt-4 rounded-2xl bg-sage/5 border border-sage/20 p-6">
            <ol className="space-y-4">
              {[
                {
                  title: "Keep your voice calm and low",
                  detail:
                    "Your child's anxiety is already at peak. A calm voice helps regulate their nervous system.",
                },
                {
                  title: "Don't try to reason with OCD in the moment",
                  detail:
                    "Logic doesn't work during a crisis. Save problem-solving for when the wave has passed.",
                },
                {
                  title: "Be physically present without engaging with rituals",
                  detail:
                    "Stay nearby. Let them know you're there. Don't participate in or encourage compulsions.",
                },
                {
                  title: "Validate the feeling, not the fear",
                  detail:
                    'Try: "I can see you\'re really scared right now. That must be so hard. I\'m right here."',
                },
                {
                  title: "Wait for the wave to pass, then offer comfort",
                  detail:
                    "Anxiety always peaks and then comes down. It may take 20-45 minutes. Be patient.",
                },
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage/20 text-xs font-semibold text-sage-dark">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-medium text-charcoal">{step.title}</p>
                    <p className="mt-0.5 text-sm text-charcoal/60">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What NOT to do */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-coral">
            What NOT to Do During a Crisis
          </h2>
          <div className="mt-4 rounded-2xl bg-coral/5 border border-coral/20 p-6">
            <ul className="space-y-4">
              {[
                {
                  dont: "Don't force your child to stop the ritual by physical means",
                  why: "Physical intervention increases panic and can damage trust.",
                },
                {
                  dont: "Don't yell or express frustration at the OCD behavior",
                  why: "Your child isn't choosing this. Anger adds shame to an already painful experience.",
                },
                {
                  dont: "Don't try to use logic to argue with OCD",
                  why: '"But the door IS locked" doesn\'t help — OCD isn\'t rational.',
                },
                {
                  dont: "Don't leave your child alone if they're distressed",
                  why: "Your presence provides safety, even if you can't fix it.",
                },
                {
                  dont: "Don't give ultimatums or threats",
                  why: '"If you don\'t stop, we\'re not going" adds pressure that worsens the cycle.',
                },
                {
                  dont: "Don't compare them to siblings or other children",
                  why: "This increases shame and doesn't motivate change.",
                },
              ].map((item, i) => (
                <li key={i}>
                  <p className="font-medium text-charcoal">{item.dont}</p>
                  <p className="mt-0.5 text-sm text-charcoal/60">{item.why}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* After the crisis */}
        <section className="mt-14">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            After the Crisis
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            Once the acute distress has passed (it always does), take these
            next-day steps:
          </p>
          <div className="mt-4 space-y-3">
            {[
              {
                step: "Contact your child's therapist to debrief",
                detail:
                  "Share what happened so they can adjust the treatment plan if needed.",
              },
              {
                step: "Log the episode in your tracker",
                detail:
                  "Recording details while they're fresh helps you and your therapist see patterns.",
              },
              {
                step: "Talk with your child when they're calm",
                detail:
                  'Use externalizing language: "OCD was really loud last night, huh? That must have been exhausting."',
              },
              {
                step: "Take care of yourself",
                detail:
                  "These episodes are traumatic for parents too. Talk to someone, rest, be kind to yourself.",
              },
              {
                step: "Remember: crises are temporary",
                detail:
                  "Even the worst episodes end. They don't erase progress. Recovery isn't linear.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-3 rounded-xl border border-cream-dark bg-white p-4"
              >
                <ArrowRight className="h-5 w-5 shrink-0 text-sage mt-0.5" />
                <div>
                  <p className="font-medium text-charcoal">{item.step}</p>
                  <p className="mt-0.5 text-sm text-charcoal/60">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* International resources */}
        <section className="mt-14">
          <div className="flex items-center gap-2">
            <Globe className="h-6 w-6 text-navy" />
            <h2 className="font-serif text-2xl font-semibold text-charcoal">
              International Resources
            </h2>
          </div>
          <div className="mt-4 rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {internationalResources.map((resource) => (
                <div key={resource.country}>
                  <p className="font-medium text-charcoal text-sm">
                    {resource.country}
                  </p>
                  <p className="text-sm text-charcoal/60">{resource.line}</p>
                  <p className="text-xs text-charcoal/40">{resource.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coach CTA */}
        <section className="mt-14">
          <div className="rounded-2xl bg-sage/5 border border-sage/20 p-8 text-center">
            <MessageCircle className="mx-auto h-8 w-8 text-sage" />
            <h3 className="mt-3 font-serif text-xl font-semibold text-charcoal">
              Need guidance, not emergency help?
            </h3>
            <p className="mt-2 text-sm text-charcoal/60">
              Our AI Coach can help you navigate difficult OCD moments with
              evidence-based strategies.
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
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
                Browse Situation Library
              </Link>
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-charcoal/40 leading-relaxed">
          This page provides emergency contact information as a public service.
          OCD Parent Coach is not a crisis service and does not provide
          emergency intervention. If you or someone you know is in immediate
          danger, call 911.
        </p>
      </div>
    </div>
  );
}
