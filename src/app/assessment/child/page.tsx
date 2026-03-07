"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

// Inline question data to avoid import dependency during build
const likertOptions = [
  { value: 0, label: "Never" },
  { value: 1, label: "Rarely (once a week or less)" },
  { value: 2, label: "Sometimes (a few times a week)" },
  { value: 3, label: "Often (daily)" },
  { value: 4, label: "Always (multiple times daily)" },
  { value: -1, label: "I'm not sure" },
];

interface Question {
  id: string;
  domain: string;
  questionText: string;
}

const questions: Question[] = [
  // Contamination (4)
  { id: "c1", domain: "contamination", questionText: "How often does your child wash their hands excessively or for longer than necessary?" },
  { id: "c2", domain: "contamination", questionText: "How often does your child avoid touching objects, surfaces, or people because they might be 'dirty' or 'contaminated'?" },
  { id: "c3", domain: "contamination", questionText: "How often does your child ask others to wash their hands or clean things before touching their belongings?" },
  { id: "c4", domain: "contamination", questionText: "How often does your child take excessively long showers or baths due to cleanliness concerns?" },
  // Checking (4)
  { id: "ch1", domain: "checking", questionText: "How often does your child check things repeatedly (locks, lights, stove, homework) even after being told they're fine?" },
  { id: "ch2", domain: "checking", questionText: "How often does your child re-read, re-write, or redo tasks because they aren't sure it was done correctly?" },
  { id: "ch3", domain: "checking", questionText: "How often does your child ask you to confirm or double-check that something is safe, off, or locked?" },
  { id: "ch4", domain: "checking", questionText: "How often does your child check their own body for signs of illness, injury, or something being 'wrong'?" },
  // Symmetry (4)
  { id: "s1", domain: "symmetry", questionText: "How often does your child need things to be arranged in a specific order, pattern, or symmetrical layout?" },
  { id: "s2", domain: "symmetry", questionText: "How often does your child feel they need to touch, tap, or do something with both sides of their body to feel 'even'?" },
  { id: "s3", domain: "symmetry", questionText: "How often does your child become upset if objects or furniture are moved from their 'correct' position?" },
  { id: "s4", domain: "symmetry", questionText: "How often does your child need to do things a specific number of times or in a specific sequence?" },
  // Intrusive thoughts (4)
  { id: "i1", domain: "intrusive-thoughts", questionText: "How often does your child seem troubled by unwanted or 'scary' thoughts they can't control?" },
  { id: "i2", domain: "intrusive-thoughts", questionText: "How often does your child worry they might accidentally hurt someone or do something 'bad'?" },
  { id: "i3", domain: "intrusive-thoughts", questionText: "How often does your child avoid certain objects, places, or activities because of fears that seem irrational?" },
  { id: "i4", domain: "intrusive-thoughts", questionText: "How often does your child express guilt or distress about thoughts they describe as 'wrong' or 'horrible'?" },
  // Hoarding (3)
  { id: "h1", domain: "hoarding", questionText: "How often does your child refuse to throw away items that most people would consider trash or useless?" },
  { id: "h2", domain: "hoarding", questionText: "How often does your child become very distressed at the idea of getting rid of their possessions?" },
  { id: "h3", domain: "hoarding", questionText: "How often does your child collect or save excessive amounts of items 'just in case' they're needed?" },
  // Rituals (4)
  { id: "r1", domain: "rituals", questionText: "How often does your child perform specific rituals or routines that must be done in an exact way?" },
  { id: "r2", domain: "rituals", questionText: "How often does your child need to start an activity over if it wasn't done 'correctly' the first time?" },
  { id: "r3", domain: "rituals", questionText: "How often does your child involve you or other family members in their rituals (e.g., needing you to say or do something specific)?" },
  { id: "r4", domain: "rituals", questionText: "How often does your child repeat words, phrases, or prayers silently or out loud?" },
  // Avoidance (4)
  { id: "a1", domain: "avoidance", questionText: "How often does your child avoid specific places, situations, or activities because of OCD-related fears?" },
  { id: "a2", domain: "avoidance", questionText: "How often does your child refuse to go to school, social events, or outings because of anxiety?" },
  { id: "a3", domain: "avoidance", questionText: "How often does your child avoid certain words, numbers, or colors because they feel 'unlucky' or 'bad'?" },
  { id: "a4", domain: "avoidance", questionText: "How often does your child limit what they eat, wear, or do because of rules only they follow?" },
  // Impact (3)
  { id: "im1", domain: "impact", questionText: "How much do these behaviors interfere with your child's daily life (school, friendships, family time)?" },
  { id: "im2", domain: "impact", questionText: "How much distress do these behaviors cause your child on a typical day?" },
  { id: "im3", domain: "impact", questionText: "How much time per day does your child spend on these behaviors or the anxiety that drives them?" },
];

const domainLabels: Record<string, string> = {
  contamination: "Contamination & Washing",
  checking: "Checking & Doubting",
  symmetry: "Symmetry & Ordering",
  "intrusive-thoughts": "Intrusive Thoughts",
  hoarding: "Hoarding",
  rituals: "Rituals & Repetition",
  avoidance: "Avoidance",
  impact: "Daily Life Impact",
};

type Severity = "minimal" | "mild" | "moderate" | "significant" | "severe";

interface DomainResult {
  domain: string;
  label: string;
  score: number;
  maxScore: number;
}

interface Result {
  overallScore: number;
  severity: Severity;
  domainResults: DomainResult[];
  interpretation: string;
  recommendations: string[];
}

function scoreAssessment(answers: Record<string, number>): Result {
  const domains = Object.keys(domainLabels);
  const domainResults: DomainResult[] = domains.map((domain) => {
    const domainQs = questions.filter((q) => q.domain === domain);
    const maxScore = domainQs.length * 4;
    const rawScore = domainQs.reduce((sum, q) => {
      const val = answers[q.id] ?? 0;
      return sum + Math.max(0, val);
    }, 0);
    return {
      domain,
      label: domainLabels[domain],
      score: maxScore > 0 ? Math.round((rawScore / maxScore) * 100) : 0,
      maxScore,
    };
  });

  const overallScore = Math.round(
    domainResults.reduce((s, d) => s + d.score, 0) / domainResults.length
  );

  let severity: Severity;
  if (overallScore <= 15) severity = "minimal";
  else if (overallScore <= 35) severity = "mild";
  else if (overallScore <= 55) severity = "moderate";
  else if (overallScore <= 75) severity = "significant";
  else severity = "severe";

  const topDomains = [...domainResults]
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .filter((d) => d.score > 20);

  const interpretations: Record<Severity, string> = {
    minimal:
      "Based on your responses, your child is showing minimal OCD-related behaviors. This is a great sign. Keep an eye on any changes, and remember that occasional worries or habits are a normal part of development.",
    mild: "Your child is showing some mild OCD-related patterns. While these behaviors may not be causing major disruption yet, it's worth monitoring them and learning strategies to prevent escalation. Our Situation Library and Learning Hub have practical guidance.",
    moderate:
      "Your child is experiencing moderate OCD-related behaviors that are likely affecting their daily life. This level of impact suggests that evidence-based strategies can make a meaningful difference. Consider consulting with an OCD specialist.",
    significant:
      "Your child's OCD behaviors appear to be significantly impacting their daily functioning. We strongly recommend consulting with a mental health professional who specializes in OCD and ERP therapy. The strategies in our Situation Library can help while you seek professional support.",
    severe:
      "Your child appears to be experiencing severe OCD symptoms that are substantially interfering with daily life. Please prioritize connecting with an OCD specialist as soon as possible. Our Professional Directory can help you find qualified therapists in your area.",
  };

  const recommendations: string[] = [];
  if (severity === "minimal" || severity === "mild") {
    recommendations.push("Browse our Situation Library for strategies tailored to your child's specific behaviors.");
    recommendations.push("Read 'Understanding OCD in Children' in our Learning Hub to build your knowledge.");
    recommendations.push("Take the Parent Response Style Quiz to learn how your reactions may affect these behaviors.");
  }
  if (severity === "moderate") {
    recommendations.push("Consider scheduling a consultation with an OCD specialist — our Directory can help.");
    recommendations.push("Start with our 'Reducing Accommodation' learning path for practical strategies.");
    recommendations.push("Use the Progress Tracker to monitor patterns and share data with a professional.");
    recommendations.push("Take the Parent Response Style Quiz to optimize your response approach.");
  }
  if (severity === "significant" || severity === "severe") {
    recommendations.push("Find an OCD specialist in our Professional Directory — ERP therapy is the gold standard treatment.");
    recommendations.push("Use the Progress Tracker to document episodes before your first appointment.");
    recommendations.push("Browse our Situation Library for immediate strategies while awaiting professional help.");
    recommendations.push("Read about ERP in our Learning Hub so you can support your child's treatment at home.");
    recommendations.push("Remember: OCD is highly treatable. Seeking help is the most important step you can take.");
  }

  if (topDomains.length > 0) {
    const domainNames = topDomains.map((d) => d.label).join(", ");
    recommendations.push(
      `Your child's strongest patterns appear in: ${domainNames}. Focus on these areas first.`
    );
  }

  return {
    overallScore,
    severity,
    domainResults,
    interpretation: interpretations[severity],
    recommendations,
  };
}

const severityColors: Record<Severity, string> = {
  minimal: "text-sage-dark bg-sage/10",
  mild: "text-sage bg-sage/10",
  moderate: "text-gold bg-gold/20",
  significant: "text-terracotta bg-terracotta/10",
  severe: "text-coral bg-coral/10",
};

const severityBarColors: Record<Severity, string> = {
  minimal: "bg-sage",
  mild: "bg-sage",
  moderate: "bg-gold",
  significant: "bg-terracotta",
  severe: "bg-coral",
};

export default function ChildAssessmentPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [result, setResult] = useState<Result | null>(null);

  const total = questions.length;
  const progress = Math.round(
    (Object.keys(answers).length / total) * 100
  );
  const current = questions[currentQuestion];
  const currentAnswer = answers[current?.id];

  const handleAnswer = useCallback(
    (value: number) => {
      setAnswers((prev) => ({ ...prev, [current.id]: value }));
    },
    [current]
  );

  const goNext = () => {
    if (currentQuestion < total - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const goPrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setResult(scoreAssessment(answers));
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
  };

  const isLastQuestion = currentQuestion === total - 1;
  const allAnswered = Object.keys(answers).length === total;

  // Results view
  if (result) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h1 className="font-serif text-3xl font-semibold text-navy text-center">
            Your Child&apos;s OCD IQ Results
          </h1>

          {/* Overall Score */}
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col items-center rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
              <p className="text-sm text-charcoal/50">Overall OCD IQ Score</p>
              <p className="mt-2 font-mono text-6xl font-bold text-navy">
                {result.overallScore}
              </p>
              <p className="mt-1 text-sm text-charcoal/40">out of 100</p>
              <span
                className={`mt-3 rounded-full px-4 py-1 text-sm font-semibold capitalize ${severityColors[result.severity]}`}
              >
                {result.severity}
              </span>
            </div>
          </div>

          {/* Interpretation */}
          <div className="mt-8 rounded-2xl bg-cream border border-cream-dark p-6">
            <p className="text-charcoal/70 leading-relaxed">
              {result.interpretation}
            </p>
          </div>

          {/* Domain Breakdown */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Breakdown by Domain
            </h2>
            <div className="mt-4 space-y-4">
              {result.domainResults
                .sort((a, b) => b.score - a.score)
                .map((d) => {
                  const sev: Severity =
                    d.score <= 15
                      ? "minimal"
                      : d.score <= 35
                        ? "mild"
                        : d.score <= 55
                          ? "moderate"
                          : d.score <= 75
                            ? "significant"
                            : "severe";
                  return (
                    <div key={d.domain}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-charcoal">
                          {d.label}
                        </span>
                        <span className="text-charcoal/50">{d.score}%</span>
                      </div>
                      <div className="mt-1.5 h-3 rounded-full bg-cream-dark">
                        <div
                          className={`h-3 rounded-full transition-all ${severityBarColors[sev]}`}
                          style={{ width: `${d.score}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Recommendations */}
          <div className="mt-10">
            <h2 className="font-serif text-xl font-semibold text-charcoal">
              Recommended Next Steps
            </h2>
            <div className="mt-4 space-y-3">
              {result.recommendations.map((rec, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-xl border border-cream-dark bg-white p-4"
                >
                  <span className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-sage/10 text-xs font-semibold text-sage-dark">
                    {i + 1}
                  </span>
                  <p className="text-sm text-charcoal/70 leading-relaxed">
                    {rec}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              href="/coach"
              className="flex-1 rounded-xl bg-sage px-6 py-3 text-center text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Talk to AI Coach About Results
            </Link>
            <Link
              href="/directory"
              className="flex-1 rounded-xl border border-sage px-6 py-3 text-center text-sm font-semibold text-sage-dark hover:bg-sage/10 transition-colors"
            >
              Find a Specialist
            </Link>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-1.5 text-sm text-charcoal/50 hover:text-charcoal transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Assessment
            </button>
          </div>

          {/* Disclaimer */}
          <div className="mt-10 rounded-xl bg-navy/5 p-5 text-center">
            <p className="text-xs text-charcoal/50 leading-relaxed">
              <strong>Important:</strong> This is not a clinical diagnosis. It is
              an awareness tool designed to help you understand patterns and have
              more informed conversations with your child&apos;s healthcare
              provider. Always consult a qualified mental health professional for
              clinical guidance.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Quiz view
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-sm text-charcoal/50">
            <span>
              Question {currentQuestion + 1} of {total}
            </span>
            <span>{progress}% complete</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-cream-dark">
            <div
              className="h-2 rounded-full bg-sage transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Domain label */}
        <p className="text-xs font-medium text-charcoal/40 uppercase tracking-wide">
          {domainLabels[current.domain]}
        </p>

        {/* Question */}
        <div className="mt-2 rounded-2xl border border-cream-dark bg-white p-8 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-charcoal leading-relaxed">
            {current.questionText}
          </h2>

          <div className="mt-8 space-y-3">
            {likertOptions.map((option) => (
              <label
                key={option.value}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-colors ${
                  currentAnswer === option.value
                    ? "border-sage bg-sage/5"
                    : "border-cream-dark hover:border-sage/30 hover:bg-sage/5"
                }`}
              >
                <input
                  type="radio"
                  name={current.id}
                  value={option.value}
                  checked={currentAnswer === option.value}
                  onChange={() => handleAnswer(option.value)}
                  className="h-4 w-4 border-cream-dark text-sage focus:ring-sage"
                />
                <span className="text-sm text-charcoal/80">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          {currentQuestion === 0 ? (
            <Link
              href="/assessment"
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Link>
          ) : (
            <button
              onClick={goPrev}
              className="inline-flex items-center gap-1 rounded-xl border border-cream-dark px-5 py-3 text-sm font-medium text-charcoal/60 hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>
          )}

          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!allAnswered}
              className={`rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${
                allAnswered
                  ? "bg-sage hover:bg-sage-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              See Results
            </button>
          ) : (
            <button
              onClick={goNext}
              disabled={currentAnswer === undefined}
              className={`inline-flex items-center gap-1 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-colors ${
                currentAnswer !== undefined
                  ? "bg-sage hover:bg-sage-dark"
                  : "bg-charcoal/20 cursor-not-allowed"
              }`}
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Estimated time */}
        <p className="mt-6 text-center text-xs text-charcoal/40">
          Estimated time remaining: ~{Math.max(1, Math.ceil((total - Object.keys(answers).length) * 0.3))} minutes
        </p>
      </div>
    </div>
  );
}
