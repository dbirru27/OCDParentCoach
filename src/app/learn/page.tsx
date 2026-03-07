import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Learning Hub",
  description: "Articles, videos, and guided paths to understand childhood OCD.",
};

const sampleContent = [
  { slug: "understanding-ocd", title: "Understanding OCD in Children", type: "Article", time: "8 min read", topic: "Basics" },
  { slug: "erp-explained", title: "ERP Explained: Why It Works", type: "Article", time: "10 min read", topic: "ERP" },
  { slug: "accommodation-cycle", title: "The Accommodation Cycle", type: "Video", time: "6 min watch", topic: "Accommodation" },
  { slug: "bedtime-strategies", title: "Bedtime Strategies That Work", type: "Article", time: "7 min read", topic: "Strategies" },
  { slug: "talking-to-school", title: "Talking to Your Child's School About OCD", type: "Article", time: "9 min read", topic: "School" },
  { slug: "self-care-parents", title: "Self-Care for OCD Parents", type: "Article", time: "6 min read", topic: "Self-Care" },
];

const learningPaths = [
  { slug: "just-learned", title: "Just Learned My Child Has OCD", parts: 5, time: "45 min" },
  { slug: "starting-erp", title: "Starting ERP at Home", parts: 8, time: "1.5 hours" },
  { slug: "reducing-accommodation", title: "Reducing Accommodation", parts: 6, time: "1 hour" },
];

export default function LearnPage() {
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
                href={`/learn/paths/${path.slug}`}
                className="group rounded-2xl border border-sage/20 bg-sage/5 p-6 hover:bg-sage/10 transition-colors"
              >
                <h3 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-xs text-charcoal/50">
                  {path.parts} parts &middot; {path.time}
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
            className="flex-1 rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
          />
          <select className="rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none">
            <option>All Topics</option>
            <option>Basics</option>
            <option>ERP</option>
            <option>Accommodation</option>
            <option>School</option>
            <option>Self-Care</option>
          </select>
          <select className="rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none">
            <option>All Formats</option>
            <option>Articles</option>
            <option>Videos</option>
            <option>Worksheets</option>
          </select>
        </div>

        {/* Content grid */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {sampleContent.map((item) => (
            <Link
              key={item.slug}
              href={`/learn/${item.slug}`}
              className="group rounded-2xl border border-cream-dark bg-white p-6 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <span className="inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy">
                {item.type}
              </span>
              <h3 className="mt-3 font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-xs text-charcoal/50">{item.time}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
