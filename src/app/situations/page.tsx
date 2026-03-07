"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { InfoTooltip } from "@/components/info-tooltip";
import {
  situationCategories,
  getSituationsByCategory,
  filterSituations,
} from "@/lib/situations-data";
import type { AgeRange, Severity } from "@/lib/situations-data";

const ageOptions: { value: AgeRange | ""; label: string }[] = [
  { value: "", label: "All Ages" },
  { value: "4-7", label: "4-7 years" },
  { value: "8-12", label: "8-12 years" },
  { value: "13-18", label: "13-18 years" },
  { value: "18+", label: "18+ years" },
];

const severityOptions: { value: Severity | ""; label: string }[] = [
  { value: "", label: "Any Severity" },
  { value: "mild", label: "Mild" },
  { value: "moderate", label: "Moderate" },
  { value: "severe", label: "Severe" },
];

const severityColors: Record<Severity, string> = {
  mild: "bg-sage/10 text-sage-dark",
  moderate: "bg-gold/20 text-charcoal",
  severe: "bg-coral/10 text-coral",
};

export default function SituationsPage() {
  const [search, setSearch] = useState("");
  const [selectedAge, setSelectedAge] = useState<AgeRange | "">("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSeverity, setSelectedSeverity] = useState<Severity | "">("");

  const isFiltering = search || selectedAge || selectedCategory || selectedSeverity;

  const filteredSituations = useMemo(() => {
    if (!isFiltering) return [];
    return filterSituations({
      search: search || undefined,
      category: selectedCategory || undefined,
      ageRange: selectedAge || undefined,
      severity: selectedSeverity || undefined,
    });
  }, [search, selectedAge, selectedCategory, selectedSeverity, isFiltering]);

  const categoriesWithCounts = useMemo(
    () =>
      situationCategories.map((cat) => ({
        ...cat,
        count: getSituationsByCategory(cat.slug).length,
      })),
    []
  );

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          Situation Library
        </h1>
        <p className="mt-3 text-center text-charcoal/60">
          Real scenarios. Real strategies. Written by OCD experts, for parents.
        </p>

        {/* Search */}
        <div className="mt-10 mx-auto max-w-lg">
          <input
            type="text"
            placeholder="Search situations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-cream-dark bg-white px-5 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-sm">
          <select
            value={selectedAge}
            onChange={(e) => setSelectedAge(e.target.value as AgeRange | "")}
            className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal/70 outline-none"
          >
            {ageOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal/70 outline-none"
          >
            <option value="">All Categories</option>
            {situationCategories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>
                {cat.name}
              </option>
            ))}
          </select>
          <select
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value as Severity | "")}
            className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal/70 outline-none"
          >
            {severityOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {isFiltering && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedAge("");
                setSelectedCategory("");
                setSelectedSeverity("");
              }}
              className="rounded-lg px-3 py-2 text-xs font-medium text-coral hover:bg-coral/10 transition-colors"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Filtered results view */}
        {isFiltering ? (
          <div className="mt-12">
            <p className="text-sm text-charcoal/50 mb-6">
              {filteredSituations.length} situation{filteredSituations.length !== 1 ? "s" : ""} found
            </p>
            {filteredSituations.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-charcoal/40">No situations match your filters. Try broadening your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredSituations.map((sit) => {
                  const cat = situationCategories.find(
                    (c) => c.slug === sit.categorySlug
                  );
                  return (
                    <Link
                      key={sit.slug}
                      href={`/situations/${sit.categorySlug}/${sit.slug}`}
                      className="group rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        {cat && (
                          <span className="text-xs text-charcoal/40">
                            {cat.icon} {cat.name}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors leading-snug">
                        {sit.title}
                      </h3>
                      <p className="mt-2 text-sm text-charcoal/50 line-clamp-2 leading-relaxed">
                        {sit.setup}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${severityColors[sit.severity]}`}
                        >
                          {sit.severity}
                        </span>
                        {sit.ageRanges.map((age) => (
                          <span
                            key={age}
                            className="rounded-full bg-navy/5 px-2 py-0.5 text-[10px] font-medium text-navy/60"
                          >
                            {age}
                          </span>
                        ))}
                        <span className="rounded-full bg-sage/5 px-2 py-0.5 text-[10px] font-medium text-sage-dark/60">
                          {sit.strategies.length} strategies
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        ) : (
          /* Category grid view */
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categoriesWithCounts.map((cat) => (
              <div key={cat.slug} className="relative">
                <Link
                  href={`/situations/${cat.slug}`}
                  className="group flex items-start gap-4 rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
                >
                  <span className="text-3xl mt-0.5">{cat.icon}</span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h2 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                        {cat.name}
                      </h2>
                      <InfoTooltip text={cat.description} />
                    </div>
                    <p className="mt-1 text-sm text-charcoal/50">
                      {cat.count} {cat.count === 1 ? "guide" : "guides"}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-charcoal/40 line-clamp-2">
                      {cat.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
