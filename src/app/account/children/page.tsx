"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, X, Save } from "lucide-react";

interface ChildProfile {
  id: string;
  name: string;
  age: string;
  gender: string;
  subtypes: string[];
  triggers: string[];
  treatment: string;
  notes: string;
}

const subtypeOptions = [
  "Contamination",
  "Checking",
  "Symmetry/Ordering",
  "Intrusive Thoughts",
  "Reassurance Seeking",
  "Magical Thinking",
  "Hoarding",
  "Just Right/Perfectionism",
];

const triggerOptions = [
  "Bedtime",
  "Morning routine",
  "School",
  "Meals",
  "Social situations",
  "Getting dressed",
  "Transitions",
  "Homework",
  "Public places",
  "Bathrooms",
];

export default function ChildrenPage() {
  const [children, setChildren] = useState<ChildProfile[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState<Omit<ChildProfile, "id">>({
    name: "",
    age: "",
    gender: "",
    subtypes: [],
    triggers: [],
    treatment: "",
    notes: "",
  });

  const toggleArray = (
    field: "subtypes" | "triggers",
    value: string
  ) => {
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter((v) => v !== value)
        : [...prev[field], value],
    }));
  };

  const addChild = (e: React.FormEvent) => {
    e.preventDefault();
    setChildren((prev) => [
      ...prev,
      { ...form, id: Date.now().toString() },
    ]);
    setForm({
      name: "",
      age: "",
      gender: "",
      subtypes: [],
      triggers: [],
      treatment: "",
      notes: "",
    });
    setShowForm(false);
  };

  const removeChild = (id: string) => {
    setChildren((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Link
          href="/account"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Account
        </Link>

        <div className="mt-6 flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl font-semibold text-navy">
              Child Profiles
            </h1>
            <p className="mt-1 text-sm text-charcoal/50">
              Add your children&apos;s profiles for personalized coaching.
            </p>
          </div>
          {!showForm && (
            <button
              onClick={() => setShowForm(true)}
              className="inline-flex items-center gap-2 rounded-xl bg-sage px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Child
            </button>
          )}
        </div>

        {/* Existing children */}
        {children.length > 0 && (
          <div className="mt-8 space-y-4">
            {children.map((child) => (
              <div
                key={child.id}
                className="rounded-2xl border border-cream-dark bg-white p-5 shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-charcoal">
                      {child.name}
                    </h3>
                    <p className="mt-1 text-sm text-charcoal/50">
                      Age {child.age}
                      {child.gender && ` \u00B7 ${child.gender}`}
                    </p>
                  </div>
                  <button
                    onClick={() => removeChild(child.id)}
                    className="text-charcoal/30 hover:text-coral transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {child.subtypes.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {child.subtypes.map((s) => (
                      <span
                        key={s}
                        className="rounded-full bg-navy/10 px-2.5 py-0.5 text-xs text-navy"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}
                {child.triggers.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {child.triggers.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs text-sage-dark"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                {child.treatment && (
                  <p className="mt-2 text-xs text-charcoal/50">
                    Treatment: {child.treatment}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty state */}
        {children.length === 0 && !showForm && (
          <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
            <p className="text-charcoal/50">
              No child profiles yet. Adding a profile helps our AI coach
              provide personalized guidance.
            </p>
            <button
              onClick={() => setShowForm(true)}
              className="mt-4 rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Add Your First Child
            </button>
          </div>
        )}

        {/* Add child form */}
        {showForm && (
          <form
            className="mt-8 rounded-2xl border border-sage/20 bg-sage/5 p-6 space-y-5"
            onSubmit={addChild}
          >
            <h2 className="font-serif text-lg font-semibold text-charcoal">
              Add Child Profile
            </h2>

            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-charcoal/70">
                  Name or Nickname *
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, name: e.target.value }))
                  }
                  placeholder="First name"
                  className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal/70">
                  Age
                </label>
                <input
                  type="number"
                  min="1"
                  max="50"
                  value={form.age}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, age: e.target.value }))
                  }
                  className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal/70">
                Gender (optional)
              </label>
              <select
                value={form.gender}
                onChange={(e) =>
                  setForm((p) => ({ ...p, gender: e.target.value }))
                }
                className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
              >
                <option value="">Prefer not to say</option>
                <option>Male</option>
                <option>Female</option>
                <option>Non-binary</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal/70">
                OCD Subtypes (select all that apply)
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {subtypeOptions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => toggleArray("subtypes", s)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      form.subtypes.includes(s)
                        ? "bg-navy text-white"
                        : "bg-white border border-cream-dark text-charcoal/50 hover:border-navy/30"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal/70">
                Known Triggers (select all that apply)
              </label>
              <div className="mt-2 flex flex-wrap gap-2">
                {triggerOptions.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => toggleArray("triggers", t)}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                      form.triggers.includes(t)
                        ? "bg-sage text-white"
                        : "bg-white border border-cream-dark text-charcoal/50 hover:border-sage/30"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal/70">
                Current Treatment (optional)
              </label>
              <input
                type="text"
                value={form.treatment}
                onChange={(e) =>
                  setForm((p) => ({ ...p, treatment: e.target.value }))
                }
                placeholder='e.g., "ERP with Dr. Smith, started Jan 2026"'
                className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-charcoal/70">
                Notes (optional)
              </label>
              <textarea
                rows={2}
                value={form.notes}
                onChange={(e) =>
                  setForm((p) => ({ ...p, notes: e.target.value }))
                }
                placeholder="Anything else relevant..."
                className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
              />
            </div>

            <div className="flex gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
              >
                <Save className="h-4 w-4" />
                Save Profile
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="rounded-xl border border-cream-dark bg-white px-6 py-3 text-sm font-medium text-charcoal/60 hover:bg-cream transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <p className="mt-8 text-xs text-charcoal/40 text-center leading-relaxed">
          Child profile data is stored securely and used only to personalize
          your AI coaching experience. You can delete profiles at any time.
        </p>
      </div>
    </div>
  );
}
