"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Trash2, ClipboardList } from "lucide-react";

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

// ── Helpers ────────────────────────────────────────────────────────────────────

function loadEntries(): TrackerEntry[] {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem("ocd-tracker-entries");
    if (!raw) return [];
    return JSON.parse(raw) as TrackerEntry[];
  } catch {
    return [];
  }
}

function deleteEntry(id: string): TrackerEntry[] {
  try {
    const raw = localStorage.getItem("ocd-tracker-entries");
    const entries: TrackerEntry[] = raw ? JSON.parse(raw) : [];
    const updated = entries.filter((e) => e.id !== id);
    localStorage.setItem("ocd-tracker-entries", JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

function intensityColor(v: number): string {
  if (v <= 3) return "#8FAE8B";
  if (v <= 6) return "#D4A853";
  return "#D96B6B";
}

function intensityLabel(v: number): string {
  if (v <= 3) return "Mild";
  if (v <= 6) return "Moderate";
  return "Severe";
}

const MOOD_EMOJI: Record<string, string> = {
  great: "\u{1F929}",
  good: "\u{1F60A}",
  okay: "\u{1F610}",
  tough: "\u{1F615}",
  awful: "\u{1F62D}",
};

// ── Page Component ─────────────────────────────────────────────────────────────

export default function HistoryPage() {
  const [entries, setEntries] = useState<TrackerEntry[]>([]);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => {
    const loaded = loadEntries();
    loaded.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    setEntries(loaded);
  }, []);

  const handleDelete = (id: string) => {
    const updated = deleteEntry(id);
    updated.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    setEntries(updated);
    setConfirmId(null);
  };

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/tracker"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tracker
        </Link>

        <div className="mt-6 flex items-center justify-between">
          <h1 className="font-serif text-2xl font-semibold text-navy">
            Entry History
          </h1>
          <span className="text-sm text-charcoal/40">
            {entries.length} entr{entries.length === 1 ? "y" : "ies"}
          </span>
        </div>

        {entries.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
            <ClipboardList className="mx-auto h-10 w-10 text-charcoal/20" />
            <p className="mt-3 text-charcoal/50">
              No entries yet. Your logged episodes will appear here.
            </p>
            <Link
              href="/tracker/log"
              className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Log Your First Entry
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {entries.map((entry) => (
              <div
                key={entry.id}
                className="rounded-2xl border border-cream-dark bg-white p-5 shadow-sm"
              >
                {/* Header row */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white text-sm font-bold"
                      style={{ backgroundColor: intensityColor(entry.intensity) }}
                    >
                      {entry.intensity}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-charcoal">
                        {entry.triggerTags.join(", ") || "No tags"}
                      </p>
                      <p className="text-xs text-charcoal/40">
                        {entry.date}
                        {entry.time && ` at ${entry.time}`}
                        {entry.isQuickLog && (
                          <span className="ml-2 rounded bg-gold/15 px-1.5 py-0.5 text-gold font-medium">
                            Quick
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Delete button */}
                  {confirmId === entry.id ? (
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleDelete(entry.id)}
                        className="rounded-lg bg-coral/10 px-3 py-1.5 text-xs font-semibold text-coral hover:bg-coral/20 transition-colors"
                      >
                        Confirm
                      </button>
                      <button
                        onClick={() => setConfirmId(null)}
                        className="rounded-lg bg-cream px-3 py-1.5 text-xs font-medium text-charcoal/50 hover:bg-cream-dark transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setConfirmId(entry.id)}
                      className="rounded-lg p-2 text-charcoal/30 hover:text-coral hover:bg-coral/10 transition-colors"
                      title="Delete entry"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {/* Details */}
                <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                  <span
                    className="rounded-lg px-2.5 py-1 font-medium text-white"
                    style={{ backgroundColor: intensityColor(entry.intensity) }}
                  >
                    {intensityLabel(entry.intensity)}
                  </span>
                  {entry.duration && (
                    <span className="rounded-lg bg-cream px-2.5 py-1 text-charcoal/50">
                      {entry.duration}
                    </span>
                  )}
                  {entry.responseType && (
                    <span className="rounded-lg bg-navy/10 px-2.5 py-1 text-navy/70 font-medium">
                      {entry.responseType}
                    </span>
                  )}
                  {entry.parentMood && (
                    <span className="rounded-lg bg-cream px-2.5 py-1">
                      {MOOD_EMOJI[entry.parentMood] || entry.parentMood}{" "}
                      {entry.parentMood.charAt(0).toUpperCase() + entry.parentMood.slice(1)}
                    </span>
                  )}
                </div>

                {/* Text fields */}
                {entry.triggerDescription && (
                  <div className="mt-3">
                    <p className="text-xs font-medium text-charcoal/40 uppercase tracking-wide">
                      Trigger
                    </p>
                    <p className="mt-0.5 text-sm text-charcoal/70">
                      {entry.triggerDescription}
                    </p>
                  </div>
                )}
                {entry.behaviorDescription && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-charcoal/40 uppercase tracking-wide">
                      Behavior
                    </p>
                    <p className="mt-0.5 text-sm text-charcoal/70">
                      {entry.behaviorDescription}
                    </p>
                  </div>
                )}
                {entry.outcome && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-charcoal/40 uppercase tracking-wide">
                      Outcome
                    </p>
                    <p className="mt-0.5 text-sm text-charcoal/70 line-clamp-2">
                      {entry.outcome}
                    </p>
                  </div>
                )}
                {entry.notes && (
                  <div className="mt-2">
                    <p className="text-xs font-medium text-charcoal/40 uppercase tracking-wide">
                      Notes
                    </p>
                    <p className="mt-0.5 text-sm text-charcoal/70 line-clamp-2">
                      {entry.notes}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
