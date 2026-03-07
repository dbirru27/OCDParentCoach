"use client";

import { useState, useMemo } from "react";
import {
  Search,
  MapPin,
  Filter,
  ChevronDown,
  Phone,
  Mail,
  Globe,
  Shield,
  X,
  Video,
  Building2,
  Users,
  Send,
} from "lucide-react";
import { GlossaryTerm } from "@/components/info-tooltip";
import { glossary } from "@/lib/glossary";
import { searchTherapists, type Therapist, type DirectoryFilters } from "@/lib/directory-data";

// ── Dropdown options ──────────────────────────────────────────────────────────

const specialtyOptions = [
  "OCD",
  "ERP",
  "CBT",
  "ACT",
  "Anxiety",
  "Pediatric",
  "Medication Management",
  "Family Therapy",
  "Intensive Programs",
];

const insuranceOptions = [
  "Aetna",
  "Anthem",
  "Blue Cross Blue Shield",
  "Cigna",
  "Humana",
  "Kaiser Permanente",
  "Medicaid",
  "Optum",
  "Tricare",
  "United Healthcare",
  "Out of Network",
];

const ageRangeOptions = ["4-7", "8-12", "13-18", "Adults"];

// ── Component ─────────────────────────────────────────────────────────────────

export default function DirectoryPage() {
  // Search inputs
  const [locationInput, setLocationInput] = useState("");
  const [keywordInput, setKeywordInput] = useState("");

  // Filter state
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedInsurance, setSelectedInsurance] = useState("");
  const [telehealthOnly, setTelehealthOnly] = useState(false);
  const [selectedAgeRange, setSelectedAgeRange] = useState("");

  // Dropdown visibility
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Expanded card
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Suggest form
  const [suggestForm, setSuggestForm] = useState({ name: "", location: "", website: "" });
  const [suggestSubmitted, setSuggestSubmitted] = useState(false);

  // ── Compute results ──────────────────────────────────────────────────────

  const filters: DirectoryFilters = useMemo(
    () => ({
      location: locationInput || undefined,
      specialty: selectedSpecialty || undefined,
      telehealth: telehealthOnly || undefined,
      ageRange: selectedAgeRange || undefined,
      insurance: selectedInsurance || undefined,
    }),
    [locationInput, selectedSpecialty, telehealthOnly, selectedAgeRange, selectedInsurance]
  );

  const results = useMemo(
    () => searchTherapists(keywordInput, filters),
    [keywordInput, filters]
  );

  const activeFilterCount = [selectedSpecialty, selectedInsurance, selectedAgeRange, telehealthOnly].filter(Boolean).length;

  // ── Helpers ───────────────────────────────────────────────────────────────

  function toggleDropdown(name: string) {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }

  function clearFilters() {
    setSelectedSpecialty("");
    setSelectedInsurance("");
    setTelehealthOnly(false);
    setSelectedAgeRange("");
    setOpenDropdown(null);
  }

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          Find a Therapist
        </h1>
        <p className="mt-3 text-center text-charcoal/60 max-w-xl mx-auto">
          Search our directory of OCD-specialized professionals. Look for those trained in{" "}
          <GlossaryTerm term="ERP" definition={glossary.ERP}>ERP</GlossaryTerm> and{" "}
          <GlossaryTerm term="CBT" definition={glossary.CBT}>CBT</GlossaryTerm>{" "}
          for the best outcomes.
        </p>

        {/* ── Search bar ──────────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3">
            <MapPin className="h-4 w-4 shrink-0 text-charcoal/40" />
            <input
              type="text"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
              placeholder="City, state, or zip code..."
              className="flex-1 text-sm outline-none placeholder:text-charcoal/40"
            />
            {locationInput && (
              <button onClick={() => setLocationInput("")} className="text-charcoal/30 hover:text-charcoal/60">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
          <div className="flex-1 flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3">
            <Search className="h-4 w-4 shrink-0 text-charcoal/40" />
            <input
              type="text"
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              placeholder="Name or keyword..."
              className="flex-1 text-sm outline-none placeholder:text-charcoal/40"
            />
            {keywordInput && (
              <button onClick={() => setKeywordInput("")} className="text-charcoal/30 hover:text-charcoal/60">
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── Filters ─────────────────────────────────────────────────────── */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {/* Specialty dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("specialty")}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs transition-colors ${
                selectedSpecialty
                  ? "border-sage bg-sage/10 text-sage-dark font-semibold"
                  : "border-cream-dark bg-white text-charcoal/60 hover:bg-cream"
              }`}
            >
              <Filter className="h-3 w-3" />
              {selectedSpecialty || "Specialty"}
              <ChevronDown className="h-3 w-3" />
            </button>
            {openDropdown === "specialty" && (
              <div className="absolute left-0 top-full z-30 mt-1 w-52 rounded-xl border border-cream-dark bg-white py-1 shadow-lg">
                <button
                  onClick={() => { setSelectedSpecialty(""); setOpenDropdown(null); }}
                  className="block w-full px-3 py-2 text-left text-xs text-charcoal/40 hover:bg-cream"
                >
                  All Specialties
                </button>
                {specialtyOptions.map((s) => (
                  <button
                    key={s}
                    onClick={() => { setSelectedSpecialty(s); setOpenDropdown(null); }}
                    className={`block w-full px-3 py-2 text-left text-xs hover:bg-cream ${
                      selectedSpecialty === s ? "text-sage-dark font-semibold bg-sage/5" : "text-charcoal/70"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Insurance dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("insurance")}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs transition-colors ${
                selectedInsurance
                  ? "border-sage bg-sage/10 text-sage-dark font-semibold"
                  : "border-cream-dark bg-white text-charcoal/60 hover:bg-cream"
              }`}
            >
              {selectedInsurance || "Insurance"}
              <ChevronDown className="h-3 w-3" />
            </button>
            {openDropdown === "insurance" && (
              <div className="absolute left-0 top-full z-30 mt-1 w-56 max-h-64 overflow-y-auto rounded-xl border border-cream-dark bg-white py-1 shadow-lg">
                <button
                  onClick={() => { setSelectedInsurance(""); setOpenDropdown(null); }}
                  className="block w-full px-3 py-2 text-left text-xs text-charcoal/40 hover:bg-cream"
                >
                  All Insurance
                </button>
                {insuranceOptions.map((ins) => (
                  <button
                    key={ins}
                    onClick={() => { setSelectedInsurance(ins); setOpenDropdown(null); }}
                    className={`block w-full px-3 py-2 text-left text-xs hover:bg-cream ${
                      selectedInsurance === ins ? "text-sage-dark font-semibold bg-sage/5" : "text-charcoal/70"
                    }`}
                  >
                    {ins}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Telehealth toggle */}
          <button
            onClick={() => setTelehealthOnly(!telehealthOnly)}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs transition-colors ${
              telehealthOnly
                ? "border-sage bg-sage/10 text-sage-dark font-semibold"
                : "border-cream-dark bg-white text-charcoal/60 hover:bg-cream"
            }`}
          >
            <Video className="h-3 w-3" />
            Telehealth
          </button>

          {/* Age Range dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("ageRange")}
              className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-2 text-xs transition-colors ${
                selectedAgeRange
                  ? "border-sage bg-sage/10 text-sage-dark font-semibold"
                  : "border-cream-dark bg-white text-charcoal/60 hover:bg-cream"
              }`}
            >
              <Users className="h-3 w-3" />
              {selectedAgeRange ? `Ages ${selectedAgeRange}` : "Age Range"}
              <ChevronDown className="h-3 w-3" />
            </button>
            {openDropdown === "ageRange" && (
              <div className="absolute left-0 top-full z-30 mt-1 w-40 rounded-xl border border-cream-dark bg-white py-1 shadow-lg">
                <button
                  onClick={() => { setSelectedAgeRange(""); setOpenDropdown(null); }}
                  className="block w-full px-3 py-2 text-left text-xs text-charcoal/40 hover:bg-cream"
                >
                  All Ages
                </button>
                {ageRangeOptions.map((ar) => (
                  <button
                    key={ar}
                    onClick={() => { setSelectedAgeRange(ar); setOpenDropdown(null); }}
                    className={`block w-full px-3 py-2 text-left text-xs hover:bg-cream ${
                      selectedAgeRange === ar ? "text-sage-dark font-semibold bg-sage/5" : "text-charcoal/70"
                    }`}
                  >
                    {ar}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Clear filters */}
          {activeFilterCount > 0 && (
            <button
              onClick={clearFilters}
              className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-xs text-coral hover:text-coral/80 transition-colors"
            >
              <X className="h-3 w-3" />
              Clear filters
            </button>
          )}
        </div>

        {/* ── Result count ────────────────────────────────────────────────── */}
        <div className="mt-8 mb-4">
          <p className="text-sm text-charcoal/50">
            {results.length === 1
              ? "1 therapist found"
              : `${results.length} therapists found`}
            {(locationInput || keywordInput || activeFilterCount > 0) && (
              <span className="text-charcoal/30">
                {" "}
                &middot; Showing filtered results
              </span>
            )}
          </p>
        </div>

        {/* ── Results list ────────────────────────────────────────────────── */}
        {results.length === 0 ? (
          <div className="rounded-2xl border border-cream-dark bg-white p-10 text-center shadow-sm">
            <Search className="mx-auto h-10 w-10 text-charcoal/20" />
            <h3 className="mt-4 font-serif text-lg font-semibold text-charcoal/70">
              No therapists found
            </h3>
            <p className="mt-2 text-sm text-charcoal/50 max-w-md mx-auto">
              Try adjusting your search terms or filters. You can also browse all therapists
              by clearing your current search.
            </p>
            <button
              onClick={() => {
                setLocationInput("");
                setKeywordInput("");
                clearFilters();
              }}
              className="mt-4 rounded-xl bg-sage px-5 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Show All Therapists
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {results.map((therapist) => (
              <TherapistCard
                key={therapist.id}
                therapist={therapist}
                isExpanded={expandedId === therapist.id}
                onToggle={() =>
                  setExpandedId((prev) => (prev === therapist.id ? null : therapist.id))
                }
              />
            ))}
          </div>
        )}

        {/* ── Suggest a Therapist ─────────────────────────────────────────── */}
        <div className="mt-16 rounded-2xl border border-cream-dark bg-white p-6 sm:p-8 shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-navy">
            Suggest a Therapist
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            Know a great OCD therapist who should be listed here? Let us know.
          </p>

          {suggestSubmitted ? (
            <div className="mt-6 rounded-xl bg-sage/10 p-4 text-sm text-sage-dark">
              Thank you for your suggestion! We will review it and add them to the directory if they meet our criteria.
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                value={suggestForm.name}
                onChange={(e) => setSuggestForm({ ...suggestForm, name: e.target.value })}
                placeholder="Therapist name"
                className="rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-sm outline-none placeholder:text-charcoal/40 focus:border-sage transition-colors"
              />
              <input
                type="text"
                value={suggestForm.location}
                onChange={(e) => setSuggestForm({ ...suggestForm, location: e.target.value })}
                placeholder="City, State"
                className="rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-sm outline-none placeholder:text-charcoal/40 focus:border-sage transition-colors"
              />
              <input
                type="text"
                value={suggestForm.website}
                onChange={(e) => setSuggestForm({ ...suggestForm, website: e.target.value })}
                placeholder="Website (optional)"
                className="rounded-xl border border-cream-dark bg-cream/30 px-4 py-3 text-sm outline-none placeholder:text-charcoal/40 focus:border-sage transition-colors"
              />
              <div className="sm:col-span-3">
                <button
                  onClick={() => {
                    if (suggestForm.name.trim() && suggestForm.location.trim()) {
                      setSuggestSubmitted(true);
                    }
                  }}
                  disabled={!suggestForm.name.trim() || !suggestForm.location.trim()}
                  className="inline-flex items-center gap-2 rounded-xl bg-sage px-5 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send className="h-3.5 w-3.5" />
                  Submit Suggestion
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── Disclaimer ──────────────────────────────────────────────────── */}
        <p className="mt-8 text-center text-xs text-charcoal/40 max-w-2xl mx-auto">
          Listings in this directory are for informational purposes only. OCD Parent Coach
          does not endorse any specific therapist. Always verify credentials and fit before
          starting treatment.
        </p>
      </div>

      {/* Close dropdowns on outside click */}
      {openDropdown && (
        <div className="fixed inset-0 z-20" onClick={() => setOpenDropdown(null)} />
      )}
    </div>
  );
}

// =============================================================================
// Therapist Card Component
// =============================================================================

function TherapistCard({
  therapist,
  isExpanded,
  onToggle,
}: {
  therapist: Therapist;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const t = therapist;

  return (
    <div className="rounded-2xl border border-cream-dark bg-white shadow-sm overflow-hidden transition-shadow hover:shadow-md">
      <div className="p-5">
        <div className="flex items-start gap-4">
          {/* Avatar placeholder */}
          <div className="h-14 w-14 shrink-0 rounded-full bg-cream flex items-center justify-center">
            <span className="font-serif text-lg font-semibold text-sage-dark">
              {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </span>
          </div>

          {/* Main info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="font-serif text-base font-semibold text-charcoal">
                  {t.name}
                </h3>
                <p className="text-sm text-charcoal/50">
                  {t.credentials}
                  {t.iocdfMember && (
                    <span className="ml-2 inline-flex items-center gap-1 text-xs text-sage-dark">
                      <Shield className="h-3 w-3" />
                      <GlossaryTerm term="IOCDF" definition={glossary.IOCDF}>
                        IOCDF Member
                      </GlossaryTerm>
                    </span>
                  )}
                </p>
              </div>
            </div>

            {/* Treatment approaches */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {t.treatmentApproaches.map((approach) => (
                <span
                  key={approach}
                  className="rounded-full bg-navy/8 px-2.5 py-0.5 text-xs text-navy"
                >
                  {approach}
                </span>
              ))}
            </div>

            {/* Location & mode */}
            <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-charcoal/50">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {t.city}, {t.state}
              </span>
              {t.telehealth && (
                <span className="inline-flex items-center gap-1 rounded-full bg-sage/10 px-2 py-0.5 text-xs text-sage-dark">
                  <Video className="h-3 w-3" />
                  Telehealth
                </span>
              )}
              {t.inPerson && (
                <span className="inline-flex items-center gap-1 rounded-full bg-terracotta/10 px-2 py-0.5 text-xs text-terracotta">
                  <Building2 className="h-3 w-3" />
                  In-Person
                </span>
              )}
            </div>

            {/* Age ranges */}
            <div className="mt-2 flex flex-wrap gap-1.5">
              {t.ageRanges.map((ar) => (
                <span
                  key={ar}
                  className="rounded-full bg-cream px-2 py-0.5 text-xs text-charcoal/50"
                >
                  Ages {ar}
                </span>
              ))}
            </div>

            {/* Bio preview */}
            {!isExpanded && (
              <p className="mt-3 text-sm text-charcoal/60 line-clamp-2">{t.bio}</p>
            )}

            {/* View Profile button */}
            <button
              onClick={onToggle}
              className="mt-3 text-sm font-semibold text-sage-dark hover:text-sage transition-colors"
            >
              {isExpanded ? "Hide Details" : "View Profile"}
            </button>
          </div>
        </div>

        {/* ── Expanded details ──────────────────────────────────────────── */}
        {isExpanded && (
          <div className="mt-5 border-t border-cream-dark pt-5 space-y-4">
            {/* Full bio */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-1">
                About
              </h4>
              <p className="text-sm text-charcoal/70 leading-relaxed">{t.bio}</p>
            </div>

            {/* Specializations & OCD subtypes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-1.5">
                  Specializations
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {t.specializations.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs text-sage-dark"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-1.5">
                  OCD Subtypes Treated
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {t.ocdSubtypes.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-navy/8 px-2.5 py-0.5 text-xs text-navy"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Insurance */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-1.5">
                Insurance Accepted
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {t.insuranceAccepted.map((ins) => (
                  <span
                    key={ins}
                    className="rounded-full bg-cream px-2.5 py-0.5 text-xs text-charcoal/60"
                  >
                    {ins}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-charcoal/40 mb-2">
                Contact
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={`tel:${t.phone}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cream-dark px-3 py-2 text-xs text-charcoal/70 hover:bg-cream transition-colors"
                >
                  <Phone className="h-3 w-3" />
                  {t.phone}
                </a>
                <a
                  href={`mailto:${t.email}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cream-dark px-3 py-2 text-xs text-charcoal/70 hover:bg-cream transition-colors"
                >
                  <Mail className="h-3 w-3" />
                  Email
                </a>
                <a
                  href={t.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-cream-dark px-3 py-2 text-xs text-charcoal/70 hover:bg-cream transition-colors"
                >
                  <Globe className="h-3 w-3" />
                  Website
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
