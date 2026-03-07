"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { Plus, Download, FileText, ClipboardList, History } from "lucide-react";

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

function daysAgo(n: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - n);
  d.setHours(0, 0, 0, 0);
  return d;
}

function filterByRange(entries: TrackerEntry[], range: string): TrackerEntry[] {
  if (range === "All") return entries;
  const days = range === "7d" ? 7 : range === "30d" ? 30 : 90;
  const cutoff = daysAgo(days);
  return entries.filter((e) => new Date(e.date) >= cutoff);
}

function intensityColor(v: number): string {
  if (v <= 3) return "#8FAE8B";
  if (v <= 6) return "#D4A853";
  return "#D96B6B";
}

const EMOJI_INTENSITY: Record<number, string> = {
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

// ── SVG Charts ─────────────────────────────────────────────────────────────────

function EpisodesChart({ entries }: { entries: TrackerEntry[] }) {
  // Group entries by date string, show last 14 buckets max
  const grouped: Record<string, number> = {};
  entries.forEach((e) => {
    grouped[e.date] = (grouped[e.date] || 0) + 1;
  });
  const sorted = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14);

  if (sorted.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl bg-cream">
        <p className="text-sm text-charcoal/30">No data yet</p>
      </div>
    );
  }

  const maxVal = Math.max(...sorted.map(([, v]) => v), 1);
  const W = 320;
  const H = 140;
  const barW = Math.min(24, (W - 20) / sorted.length - 4);
  const gap = (W - 20) / sorted.length;

  return (
    <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full h-40">
      {sorted.map(([date, count], i) => {
        const barH = (count / maxVal) * (H - 10);
        const x = 10 + i * gap + (gap - barW) / 2;
        const y = H - barH;
        return (
          <g key={date}>
            <rect
              x={x}
              y={y}
              width={barW}
              height={barH}
              rx={4}
              fill="#8FAE8B"
              opacity={0.85}
            />
            <text
              x={x + barW / 2}
              y={H + 14}
              textAnchor="middle"
              fontSize={8}
              fill="#2D2D2D"
              opacity={0.4}
            >
              {date.slice(5)}
            </text>
            <text
              x={x + barW / 2}
              y={y - 4}
              textAnchor="middle"
              fontSize={9}
              fill="#2D2D2D"
              opacity={0.6}
            >
              {count}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function IntensityChart({ entries }: { entries: TrackerEntry[] }) {
  const grouped: Record<string, { sum: number; count: number }> = {};
  entries.forEach((e) => {
    if (!grouped[e.date]) grouped[e.date] = { sum: 0, count: 0 };
    grouped[e.date].sum += e.intensity;
    grouped[e.date].count += 1;
  });
  const sorted = Object.entries(grouped)
    .sort(([a], [b]) => a.localeCompare(b))
    .slice(-14);

  if (sorted.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl bg-cream">
        <p className="text-sm text-charcoal/30">No data yet</p>
      </div>
    );
  }

  const points = sorted.map(([, v]) => v.sum / v.count);
  const W = 320;
  const H = 140;
  const maxVal = 10;
  const stepX = (W - 40) / Math.max(points.length - 1, 1);

  const pathPoints = points.map((v, i) => {
    const x = 20 + i * stepX;
    const y = H - 10 - ((v / maxVal) * (H - 30));
    return { x, y };
  });

  const linePath = pathPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H + 20}`} className="w-full h-40">
      {/* grid lines */}
      {[2, 4, 6, 8, 10].map((v) => {
        const y = H - 10 - ((v / maxVal) * (H - 30));
        return (
          <g key={v}>
            <line x1={20} y1={y} x2={W - 20} y2={y} stroke="#2D2D2D" strokeOpacity={0.08} />
            <text x={12} y={y + 3} fontSize={8} fill="#2D2D2D" opacity={0.3} textAnchor="end">
              {v}
            </text>
          </g>
        );
      })}
      <path d={linePath} fill="none" stroke="#C4795B" strokeWidth={2.5} strokeLinejoin="round" />
      {pathPoints.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#C4795B" />
      ))}
      {sorted.map(([date], i) => (
        <text
          key={date}
          x={20 + i * stepX}
          y={H + 14}
          textAnchor="middle"
          fontSize={8}
          fill="#2D2D2D"
          opacity={0.4}
        >
          {date.slice(5)}
        </text>
      ))}
    </svg>
  );
}

function ResponseDonut({ entries }: { entries: TrackerEntry[] }) {
  const counts: Record<string, number> = {};
  entries.forEach((e) => {
    if (e.responseType) counts[e.responseType] = (counts[e.responseType] || 0) + 1;
  });
  const items = Object.entries(counts).sort(([, a], [, b]) => b - a);

  if (items.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl bg-cream">
        <p className="text-sm text-charcoal/30">No data yet</p>
      </div>
    );
  }

  const total = items.reduce((s, [, v]) => s + v, 0);
  const colors = ["#8FAE8B", "#C4795B", "#2C3E6B", "#D4A853", "#D96B6B"];
  const cx = 80;
  const cy = 70;
  const R = 55;
  const r = 32;

  let cumAngle = -Math.PI / 2;
  const arcs = items.map(([label, count], i) => {
    const angle = (count / total) * Math.PI * 2;
    const startAngle = cumAngle;
    const endAngle = cumAngle + angle;
    cumAngle = endAngle;

    const largeArc = angle > Math.PI ? 1 : 0;
    const x1o = cx + R * Math.cos(startAngle);
    const y1o = cy + R * Math.sin(startAngle);
    const x2o = cx + R * Math.cos(endAngle);
    const y2o = cy + R * Math.sin(endAngle);
    const x1i = cx + r * Math.cos(endAngle);
    const y1i = cy + r * Math.sin(endAngle);
    const x2i = cx + r * Math.cos(startAngle);
    const y2i = cy + r * Math.sin(startAngle);

    const d = [
      `M${x1o},${y1o}`,
      `A${R},${R} 0 ${largeArc} 1 ${x2o},${y2o}`,
      `L${x1i},${y1i}`,
      `A${r},${r} 0 ${largeArc} 0 ${x2i},${y2i}`,
      "Z",
    ].join(" ");

    return { d, color: colors[i % colors.length], label, count };
  });

  return (
    <svg viewBox="0 0 320 150" className="w-full h-40">
      {arcs.map((arc, i) => (
        <path key={i} d={arc.d} fill={arc.color} opacity={0.85} />
      ))}
      {/* legend */}
      {items.map(([label, count], i) => (
        <g key={label}>
          <rect x={175} y={12 + i * 22} width={12} height={12} rx={3} fill={colors[i % colors.length]} />
          <text x={192} y={22 + i * 22} fontSize={10} fill="#2D2D2D" opacity={0.7}>
            {label} ({count})
          </text>
        </g>
      ))}
    </svg>
  );
}

function TriggersChart({ entries }: { entries: TrackerEntry[] }) {
  const counts: Record<string, number> = {};
  entries.forEach((e) => {
    e.triggerTags.forEach((t) => {
      counts[t] = (counts[t] || 0) + 1;
    });
  });
  const items = Object.entries(counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6);

  if (items.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-xl bg-cream">
        <p className="text-sm text-charcoal/30">No data yet</p>
      </div>
    );
  }

  const maxVal = Math.max(...items.map(([, v]) => v), 1);
  const W = 320;
  const barH = 18;
  const gap = 6;
  const labelW = 110;

  return (
    <svg viewBox={`0 0 ${W} ${items.length * (barH + gap) + 10}`} className="w-full h-40">
      {items.map(([label, count], i) => {
        const y = 5 + i * (barH + gap);
        const bW = ((count / maxVal) * (W - labelW - 40));
        return (
          <g key={label}>
            <text x={labelW - 6} y={y + barH / 2 + 4} textAnchor="end" fontSize={10} fill="#2D2D2D" opacity={0.6}>
              {label}
            </text>
            <rect x={labelW} y={y} width={bW} height={barH} rx={4} fill="#2C3E6B" opacity={0.7} />
            <text x={labelW + bW + 6} y={y + barH / 2 + 4} fontSize={10} fill="#2D2D2D" opacity={0.5}>
              {count}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ── Insight Generator ──────────────────────────────────────────────────────────

function generateInsights(entries: TrackerEntry[], range: string): string {
  if (entries.length === 0) {
    return "Start logging entries to receive personalized insights about your child's OCD patterns and your progress.";
  }

  const lines: string[] = [];
  lines.push(`You've logged ${entries.length} entr${entries.length === 1 ? "y" : "ies"} in the selected time range.`);

  // Average intensity
  const avgIntensity = entries.reduce((s, e) => s + e.intensity, 0) / entries.length;
  lines.push(`Average intensity: ${avgIntensity.toFixed(1)} out of 10.`);

  // Most common trigger
  const trigCounts: Record<string, number> = {};
  entries.forEach((e) => e.triggerTags.forEach((t) => (trigCounts[t] = (trigCounts[t] || 0) + 1)));
  const topTrigger = Object.entries(trigCounts).sort(([, a], [, b]) => b - a)[0];
  if (topTrigger) {
    lines.push(`Most common trigger: ${topTrigger[0]} (${topTrigger[1]} time${topTrigger[1] > 1 ? "s" : ""}).`);
  }

  // Response style shift
  const respCounts: Record<string, number> = {};
  entries.forEach((e) => {
    if (e.responseType) respCounts[e.responseType] = (respCounts[e.responseType] || 0) + 1;
  });
  const erpCount = respCounts["Used ERP"] || 0;
  const accomCount = respCounts["Accommodated"] || 0;
  if (erpCount > 0) {
    const pct = Math.round((erpCount / entries.length) * 100);
    lines.push(`You used ERP in ${pct}% of logged episodes -- keep it up!`);
  }
  if (accomCount > 0 && erpCount > accomCount) {
    lines.push("You're using ERP more often than accommodating. That's meaningful progress.");
  }

  // Streak
  const uniqueDates = [...new Set(entries.map((e) => e.date))].sort();
  if (uniqueDates.length >= 3) {
    lines.push(`You've logged on ${uniqueDates.length} different days. Consistency helps you see the bigger picture.`);
  }

  return lines.join(" ");
}

// ── CSV Export ──────────────────────────────────────────────────────────────────

function exportCSV(entries: TrackerEntry[]) {
  const headers = [
    "Date",
    "Time",
    "Trigger Description",
    "Trigger Tags",
    "Behavior Description",
    "Intensity",
    "Duration",
    "Response Type",
    "Outcome",
    "Parent Mood",
    "Notes",
    "Quick Log",
  ];

  const escape = (s: string) => `"${(s || "").replace(/"/g, '""')}"`;

  const rows = entries.map((e) =>
    [
      e.date,
      e.time,
      escape(e.triggerDescription),
      escape(e.triggerTags.join(", ")),
      escape(e.behaviorDescription),
      e.intensity,
      e.duration,
      e.responseType,
      escape(e.outcome),
      e.parentMood,
      escape(e.notes),
      e.isQuickLog ? "Yes" : "No",
    ].join(",")
  );

  const csv = [headers.join(","), ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ocd-tracker-export-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

// ── Page Component ─────────────────────────────────────────────────────────────

export default function TrackerPage() {
  const [allEntries, setAllEntries] = useState<TrackerEntry[]>([]);
  const [range, setRange] = useState("30d");

  useEffect(() => {
    setAllEntries(loadEntries());
  }, []);

  const filtered = useMemo(() => filterByRange(allEntries, range), [allEntries, range]);
  const recent = useMemo(
    () =>
      [...allEntries]
        .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
        .slice(0, 5),
    [allEntries]
  );
  const insight = useMemo(() => generateInsights(filtered, range), [filtered, range]);

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-navy">
              Progress Tracker
            </h1>
            <p className="mt-1 text-sm text-charcoal/50">
              {allEntries.length} total entr{allEntries.length === 1 ? "y" : "ies"}
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/tracker/history"
              className="inline-flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm font-medium text-charcoal/60 hover:bg-cream transition-colors"
            >
              <History className="h-4 w-4" />
              History
            </Link>
            <Link
              href="/tracker/log"
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              <Plus className="h-4 w-4" />
              Log Entry
            </Link>
          </div>
        </div>

        {/* Time range */}
        <div className="mt-6 flex gap-2">
          {["7d", "30d", "90d", "All"].map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                range === r
                  ? "bg-sage text-white"
                  : "bg-white border border-cream-dark text-charcoal/60 hover:bg-cream"
              }`}
            >
              {r}
            </button>
          ))}
        </div>

        {/* AI Insight */}
        <div className="mt-8 rounded-2xl bg-sage/5 border border-sage/20 p-5">
          <p className="text-sm font-medium text-sage-dark">AI Insight</p>
          <p className="mt-1 text-charcoal/70 leading-relaxed">{insight}</p>
        </div>

        {/* Charts */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-charcoal/70">Episodes Over Time</h3>
            <div className="mt-4">
              <EpisodesChart entries={filtered} />
            </div>
          </div>
          <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-charcoal/70">Average Intensity</h3>
            <div className="mt-4">
              <IntensityChart entries={filtered} />
            </div>
          </div>
          <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-charcoal/70">Your Response Style</h3>
            <div className="mt-4">
              <ResponseDonut entries={filtered} />
            </div>
          </div>
          <div className="rounded-2xl border border-cream-dark bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-charcoal/70">Top Triggers</h3>
            <div className="mt-4">
              <TriggersChart entries={filtered} />
            </div>
          </div>
        </div>

        {/* Recent entries */}
        <div className="mt-8">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-semibold text-charcoal">
              Recent Entries
            </h3>
            {allEntries.length > 0 && (
              <Link
                href="/tracker/history"
                className="text-sm text-sage-dark hover:underline"
              >
                View all
              </Link>
            )}
          </div>

          {recent.length === 0 ? (
            <div className="mt-4 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
              <ClipboardList className="mx-auto h-10 w-10 text-charcoal/20" />
              <p className="mt-3 text-charcoal/50">
                No entries yet. Start by logging your first episode.
              </p>
              <p className="mt-1 text-sm text-charcoal/40">
                Tracking helps you see patterns and progress over time.
              </p>
              <Link
                href="/tracker/log"
                className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
              >
                Log Your First Entry
              </Link>
            </div>
          ) : (
            <div className="mt-4 space-y-3">
              {recent.map((entry) => (
                <div
                  key={entry.id}
                  className="rounded-2xl border border-cream-dark bg-white p-4 shadow-sm flex flex-col sm:flex-row sm:items-center gap-3"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white text-sm font-bold"
                      style={{ backgroundColor: intensityColor(entry.intensity) }}
                    >
                      {entry.intensity}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-charcoal truncate">
                        {entry.triggerTags.join(", ") || "No tags"}
                      </p>
                      <p className="text-xs text-charcoal/40">
                        {entry.date} {entry.time && `at ${entry.time}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-charcoal/50">
                    {entry.responseType && (
                      <span className="rounded-lg bg-cream px-2.5 py-1 font-medium">
                        {entry.responseType}
                      </span>
                    )}
                    {entry.duration && (
                      <span>{entry.duration}</span>
                    )}
                    {entry.parentMood && (
                      <span>{entry.parentMood}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Export buttons */}
        <div className="mt-8 flex gap-3">
          <button
            onClick={() => exportCSV(allEntries)}
            disabled={allEntries.length === 0}
            className="inline-flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-2.5 text-sm text-charcoal/60 hover:bg-cream transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download className="h-4 w-4" />
            Export CSV
          </button>
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-2.5 text-sm text-charcoal/60 transition-colors opacity-40 cursor-not-allowed"
            title="Coming soon"
          >
            <FileText className="h-4 w-4" />
            Generate Therapist Report
          </button>
        </div>
      </div>
    </div>
  );
}
