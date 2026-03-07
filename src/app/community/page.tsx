import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata: Metadata = {
  title: "Community Forum",
  description: "Connect with other parents navigating childhood OCD.",
};

const categories = [
  { slug: "introductions", name: "Introductions", description: "Tell us your story", threads: 0 },
  { slug: "daily-wins", name: "Daily Wins", description: "Celebrate small victories", threads: 0 },
  { slug: "help-advice", name: "Help & Advice", description: "Ask for peer guidance", threads: 0 },
  { slug: "contamination", name: "Contamination OCD", description: "Washing, cleanliness, germs", threads: 0 },
  { slug: "checking", name: "Checking & Doubting", description: "Locks, homework, appliances", threads: 0 },
  { slug: "school-education", name: "School & Education", description: "504 plans, IEPs, teachers", threads: 0 },
  { slug: "therapy", name: "Therapy Experiences", description: "Finding and working with therapists", threads: 0 },
  { slug: "medication", name: "Medication Discussions", description: "SSRIs and other treatments", threads: 0 },
  { slug: "self-care", name: "Self-Care Corner", description: "Taking care of yourself", threads: 0 },
  { slug: "partner-support", name: "Partner/Co-Parent Support", description: "Navigating OCD as a team", threads: 0 },
  { slug: "teens", name: "Teen Section", description: "Parents of older children", threads: 0 },
];

export default function CommunityPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-navy">
              Community Forum
            </h1>
            <p className="mt-1 text-charcoal/60">
              Connect with parents who understand.
            </p>
          </div>
          <Link
            href="/community/new"
            className="inline-flex items-center gap-2 rounded-xl bg-sage px-5 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </div>

        <div className="mt-10 space-y-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/community/${cat.slug}`}
              className="group flex items-center justify-between rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <div>
                <h2 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                  {cat.name}
                </h2>
                <p className="mt-1 text-sm text-charcoal/50">{cat.description}</p>
              </div>
              <span className="text-sm text-charcoal/40">
                {cat.threads} threads
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
