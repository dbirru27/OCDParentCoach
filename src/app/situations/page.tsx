import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Situation Library",
  description:
    "Browse real OCD scenarios with step-by-step strategies for parents.",
};

const categories = [
  { slug: "contamination-washing", icon: "🧼", name: "Contamination & Washing", count: 12 },
  { slug: "checking-doubting", icon: "🔒", name: "Checking & Doubting", count: 9 },
  { slug: "bedtime-rituals", icon: "🌙", name: "Bedtime & Sleep Rituals", count: 8 },
  { slug: "school-homework", icon: "📚", name: "School & Homework", count: 10 },
  { slug: "reassurance-seeking", icon: "💬", name: "Reassurance Seeking", count: 7 },
  { slug: "symmetry-ordering", icon: "🔄", name: "Symmetry & Ordering", count: 6 },
  { slug: "social-situations", icon: "👥", name: "Social Situations", count: 5 },
  { slug: "intrusive-thoughts", icon: "💭", name: "Intrusive Thoughts", count: 6 },
  { slug: "mealtime-food", icon: "🍽️", name: "Mealtime & Food-Related", count: 5 },
  { slug: "clothing-dressing", icon: "👕", name: "Clothing & Getting Dressed", count: 4 },
  { slug: "family-routines", icon: "🏠", name: "Family Routines", count: 6 },
  { slug: "magical-thinking", icon: "✨", name: "Magical Thinking", count: 5 },
];

export default function SituationsPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          Situation Library
        </h1>
        <p className="mt-3 text-center text-charcoal/60">
          Real scenarios. Real strategies.
        </p>

        {/* Search */}
        <div className="mt-10 mx-auto max-w-lg">
          <input
            type="text"
            placeholder="Search situations..."
            className="w-full rounded-xl border border-cream-dark bg-white px-5 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="mt-4 flex items-center justify-center gap-3 text-sm">
          <select className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal/70 outline-none">
            <option>All Ages</option>
            <option>4-7 years</option>
            <option>8-12 years</option>
            <option>13-18 years</option>
          </select>
          <select className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal/70 outline-none">
            <option>All Categories</option>
            {categories.map((cat) => (
              <option key={cat.slug}>{cat.name}</option>
            ))}
          </select>
          <select className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-charcoal/70 outline-none">
            <option>Any Severity</option>
            <option>Mild</option>
            <option>Moderate</option>
            <option>Severe</option>
          </select>
        </div>

        {/* Category grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/situations/${cat.slug}`}
              className="group flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <span className="text-3xl">{cat.icon}</span>
              <div>
                <h2 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                  {cat.name}
                </h2>
                <p className="text-sm text-charcoal/50">{cat.count} guides</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
