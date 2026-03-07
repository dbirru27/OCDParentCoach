"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { GlossaryTerm } from "@/components/info-tooltip";
import { glossary } from "@/lib/glossary";
import {
  learningContent,
  learningPaths,
  filterContent,
} from "@/lib/learning-data";
import type { Topic, ContentType } from "@/lib/learning-data";

const topicOptions: { value: Topic | ""; label: string }[] = [
  { value: "", label: "All Topics" },
  { value: "basics", label: "OCD Basics" },
  { value: "erp", label: "ERP" },
  { value: "accommodation", label: "Accommodation" },
  { value: "strategies", label: "Strategies" },
  { value: "school", label: "School" },
  { value: "self-care", label: "Self-Care" },
  { value: "subtypes", label: "OCD Subtypes" },
  { value: "medication", label: "Medication" },
  { value: "siblings", label: "Siblings" },
  { value: "therapy", label: "Therapy" },
];

const formatOptions: { value: ContentType | ""; label: string }[] = [
  { value: "", label: "All Formats" },
  { value: "article", label: "Articles" },
  { value: "video", label: "Videos" },
  { value: "worksheet", label: "Worksheets" },
];

const difficultyColors: Record<string, string> = {
  beginner: "bg-sage/10 text-sage-dark",
  intermediate: "bg-gold/20 text-charcoal",
  advanced: "bg-navy/10 text-navy",
};

export default function LearnPage() {
  const [search, setSearch] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<Topic | "">("");
  const [selectedFormat, setSelectedFormat] = useState<ContentType | "">("");

  const filtered = useMemo(() => {
    return filterContent({
      topic: selectedTopic || undefined,
      contentType: selectedFormat || undefined,
      search: search || undefined,
    });
  }, [search, selectedTopic, selectedFormat]);

  const isFiltering = search || selectedTopic || selectedFormat;

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          Learning Hub
        </h1>
        <p className="mt-3 text-center text-charcoal/60">
          Deepen your understanding with evidence-based resources.
        </p>

        {/* Learning Paths */}
        <div className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-charcoal">
            Guided Learning Paths
          </h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {learningPaths.map((path) => (
              <Link
                key={path.slug}
                href={`/learn/paths`}
                className="group rounded-2xl border border-sage/20 bg-sage/5 p-6 hover:bg-sage/10 transition-colors"
              >
                <h3 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-xs text-charcoal/50">
                  {path.contentSlugs.length} parts &middot;{" "}
                  {path.estimatedMinutes < 60
                    ? `${path.estimatedMinutes} min`
                    : `${(path.estimatedMinutes / 60).toFixed(1)} hours`}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Search articles, videos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value as Topic | "")}
            className="rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none"
          >
            {topicOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            value={selectedFormat}
            onChange={(e) =>
              setSelectedFormat(e.target.value as ContentType | "")
            }
            className="rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none"
          >
            {formatOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {isFiltering && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedTopic("");
                setSelectedFormat("");
              }}
              className="rounded-xl px-4 py-3 text-xs font-medium text-coral hover:bg-coral/10 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {/* Key terms */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl bg-navy/5 px-5 py-3 text-sm text-charcoal/60">
          <span className="text-xs font-medium text-charcoal/40 uppercase">
            Key terms:
          </span>
          <GlossaryTerm term="ERP" definition={glossary.ERP}>
            ERP
          </GlossaryTerm>
          <GlossaryTerm term="CBT" definition={glossary.CBT}>
            CBT
          </GlossaryTerm>
          <GlossaryTerm
            term="Accommodation"
            definition={glossary.accommodation}
          >
            Accommodation
          </GlossaryTerm>
          <GlossaryTerm term="SSRI" definition={glossary.SSRI}>
            SSRI
          </GlossaryTerm>
          <GlossaryTerm term="504 Plan" definition={glossary["504 plan"]}>
            504 Plan
          </GlossaryTerm>
          <GlossaryTerm term="IEP" definition={glossary.IEP}>
            IEP
          </GlossaryTerm>
        </div>

        {/* Results count */}
        {isFiltering && (
          <p className="mt-6 text-sm text-charcoal/50">
            {filtered.length} article{filtered.length !== 1 ? "s" : ""} found
          </p>
        )}

        {/* Content grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(isFiltering ? filtered : learningContent).map((item) => (
            <Link
              key={item.slug}
              href={`/learn/${item.slug}`}
              className="group rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy capitalize">
                  {item.contentType}
                </span>
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${difficultyColors[item.difficulty]}`}
                >
                  {item.difficulty}
                </span>
              </div>
              <h3 className="mt-3 font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors leading-snug">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-charcoal/50">
                {item.readingTimeMinutes} min read
              </p>
            </Link>
          ))}
        </div>

        {isFiltering && filtered.length === 0 && (
          <div className="mt-8 text-center py-12">
            <p className="text-charcoal/40">
              No articles match your filters. Try broadening your search.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
