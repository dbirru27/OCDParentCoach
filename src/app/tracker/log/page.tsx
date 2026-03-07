"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Check, Zap } from "lucide-react";

// ── Types ──────────────────────────────────────────────────────────────────────

interface TrackerEntry {
  id: string;
  date: string;
  time: string;
  triggerDescription: string;
  triggerTags: string[];
  behaviorDescription: string;
  intensity: number;
  duration: string;
  responseType: string;
  outcome: string;
  parentMood: string;
  notes: string;
  isQuickLog: boolean;
  createdAt: string;
}

// ── Constants ──────────────────────────────────────────────────────────────────

const TRIGGER_TAGS = [
  "Bedtime",
  "Contamination",
  "Checking",
  "School",
  "Social",
  "Mealtime",
  "Clothing",
  "Morning Routine",
  "Intrusive Thoughts",
  "Reassurance",
  "Other",
];

const DURATIONS = [
  "< 5 min",
  "5-15 min",
  "15-30 min",
  "30-60 min",
  "> 1 hour",
];

const RESPONSE_TYPES = [
  "Accommodated",
  "Reassured",
  "Redirected",
  "Used ERP",
  "Other",
];

const MOOD_OPTIONS: { value: string; emoji: string; label: string }[] = [
  { value: "great", emoji: "\u{1F929}", label: "Great" },
  { value: "good", emoji: "\u{1F60A}", label: "Good" },
  { value: "okay", emoji: "\u{1F610}", label: "Okay" },
  { value: "tough", emoji: "\u{1F615}", label: "Tough" },
  { value: "awful", emoji: "\u{1F62D}", label: "Awful" },
];

const INTENSITY_EMOJIS: Record<number, string> = {
  1: "\u{1F60A}",
  2: "\u{1F642}",
  3: "\u{1F610}",
  4: "\u{1F615}",
  5: "\u{1F61F}",
  6: "\u{1F623}",
  7: "\u{1F625}",
  8: "\u{1F630}",
  9: "\u{1F631}",
  10: "\u{1F62D}",
};

// ── Helpers ────────────────────────────────────────────────────────────────────

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function nowTimeStr(): string {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

function saveEntry(entry: TrackerEntry): void {
  try {
    const raw = localStorage.getItem("ocd-tracker-entries");
    const entries: TrackerEntry[] = raw ? JSON.parse(raw) : [];
    entries.push(entry);
    localStorage.setItem("ocd-tracker-entries", JSON.stringify(entries));
  } catch {
    // silently fail
  }
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function LogEntryPage() {
  const router = useRouter();

  const [quickLog, setQuickLog] = useState(false);
  const [date, setDate] = useState(todayStr);
  const [time, setTime] = useState(nowTimeStr);
  const [triggerDescription, setTriggerDescription] = useState("");
  const [triggerTags, setTriggerTags] = useState<string[]>([]);
  const [behaviorDescription, setBehaviorDescription] = useState("");
  const [intensity, setIntensity] = useState(5);
  const [duration, setDuration] = useState("");
  const [responseType, setResponseType] = useState("");
  const [outcome, setOutcome] = useState("");
  const [parentMood, setParentMood] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const toggleTag = useCallback((tag: string) => {
    setTriggerTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate
    const errs: string[] = [];
    if (triggerTags.length === 0) errs.push("Select at least one trigger tag.");
    if (intensity < 1 || intensity > 10) errs.push("Intensity must be between 1 and 10.");
    if (errs.length > 0) {
      setErrors(errs);
      return;
    }

    const entry: TrackerEntry = {
      id: crypto.randomUUID(),
      date,
      time,
      triggerDescription: quickLog ? "" : triggerDescription,
      triggerTags,
      behaviorDescription: quickLog ? "" : behaviorDescription,
      intensity,
      duration: quickLog ? "" : duration,
      responseType,
      outcome: quickLog ? "" : outcome,
      parentMood: quickLog ? "" : parentMood,
      notes: quickLog ? "" : notes,
      isQuickLog: quickLog,
      createdAt: new Date().toISOString(),
    };

    saveEntry(entry);
    setSuccess(true);
    setTimeout(() => {
      router.push("/tracker");
    }, 1200);
  };

  const inputCls =
    "mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-colors";
  const labelCls = "block text-sm font-medium text-charcoal/70";

  if (success) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/10">
            <Check className="h-8 w-8 text-sage" />
          </div>
          <h2 className="mt-4 font-serif text-2xl font-semibold text-navy">
            Entry Saved
          </h2>
          <p className="mt-2 text-charcoal/50">
            Redirecting to your tracker dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Link
          href="/tracker"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tracker
        </Link>

        <div className="mt-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl font-semibold text-navy">
            Log an Entry
          </h1>
          <button
            type="button"
            onClick={() => setQuickLog((q) => !q)}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-colors ${
              quickLog
                ? "bg-gold/20 text-gold border border-gold/30"
                : "bg-cream text-charcoal/50 border border-cream-dark"
            }`}
          >
            <Zap className="h-3.5 w-3.5" />
            Quick Log
          </button>
        </div>
        {quickLog && (
          <p className="mt-2 text-xs text-charcoal/40">
            Quick mode: just intensity, triggers, and response type. Takes 15 seconds.
          </p>
        )}

        {/* Errors */}
        {errors.length > 0 && (
          <div className="mt-4 rounded-xl bg-coral/10 border border-coral/20 p-4">
            {errors.map((err) => (
              <p key={err} className="text-sm text-coral">
                {err}
              </p>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          {/* Date & Time (always shown) */}
          {!quickLog && (
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Time</label>
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={inputCls}
                />
              </div>
            </div>
          )}

          {/* Intensity slider (always shown) */}
          <div>
            <label className={labelCls}>
              Intensity (1-10)
            </label>
            <div className="mt-3 flex items-center gap-4">
              <input
                type="range"
                min={1}
                max={10}
                value={intensity}
                onChange={(e) => setIntensity(Number(e.target.value))}
                className="flex-1 accent-sage"
              />
              <div className="flex flex-col items-center w-14">
                <span className="text-2xl">{INTENSITY_EMOJIS[intensity]}</span>
                <span className="text-xs font-bold text-charcoal/60">{intensity}/10</span>
              </div>
            </div>
            <div className="mt-1 flex justify-between text-xs text-charcoal/40">
              <span>Mild</span>
              <span>Moderate</span>
              <span>Severe</span>
            </div>
          </div>

          {/* Trigger Tags (always shown) */}
          <div>
            <label className={labelCls}>
              Trigger Tags <span className="text-coral">*</span>
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {TRIGGER_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors border ${
                    triggerTags.includes(tag)
                      ? "bg-sage text-white border-sage"
                      : "bg-white text-charcoal/60 border-cream-dark hover:bg-cream"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Response type (always shown) */}
          <div>
            <label className={labelCls}>Your Response</label>
            <select
              value={responseType}
              onChange={(e) => setResponseType(e.target.value)}
              className={inputCls}
            >
              <option value="">Select response type...</option>
              {RESPONSE_TYPES.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
          </div>

          {/* Full-mode-only fields */}
          {!quickLog && (
            <>
              {/* Trigger description */}
              <div>
                <label className={labelCls}>Trigger / Situation Description</label>
                <textarea
                  rows={2}
                  value={triggerDescription}
                  onChange={(e) => setTriggerDescription(e.target.value)}
                  placeholder="What triggered the episode?"
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Behavior description */}
              <div>
                <label className={labelCls}>OCD Behavior Observed</label>
                <textarea
                  rows={2}
                  value={behaviorDescription}
                  onChange={(e) => setBehaviorDescription(e.target.value)}
                  placeholder="What behavior did you observe?"
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Duration */}
              <div>
                <label className={labelCls}>Duration</label>
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className={inputCls}
                >
                  <option value="">Select duration...</option>
                  {DURATIONS.map((d) => (
                    <option key={d} value={d}>
                      {d}
                    </option>
                  ))}
                </select>
              </div>

              {/* Outcome */}
              <div>
                <label className={labelCls}>Outcome</label>
                <textarea
                  rows={2}
                  value={outcome}
                  onChange={(e) => setOutcome(e.target.value)}
                  placeholder="How did it resolve?"
                  className={`${inputCls} resize-none`}
                />
              </div>

              {/* Parent mood */}
              <div>
                <label className={labelCls}>Your Mood After</label>
                <div className="mt-2 flex gap-2">
                  {MOOD_OPTIONS.map((m) => (
                    <button
                      key={m.value}
                      type="button"
                      onClick={() =>
                        setParentMood(parentMood === m.value ? "" : m.value)
                      }
                      className={`flex flex-col items-center rounded-xl px-3 py-2 text-xs transition-colors border ${
                        parentMood === m.value
                          ? "bg-sage/10 border-sage text-sage-dark"
                          : "bg-white border-cream-dark text-charcoal/50 hover:bg-cream"
                      }`}
                    >
                      <span className="text-xl">{m.emoji}</span>
                      <span className="mt-0.5">{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className={labelCls}>Notes (optional)</label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Anything else to note..."
                  className={`${inputCls} resize-none`}
                />
              </div>
            </>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Save Entry
          </button>
        </form>
      </div>
    </div>
  );
}
