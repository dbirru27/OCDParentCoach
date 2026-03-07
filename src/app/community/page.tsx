"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Search, Heart, MessageCircle, Lightbulb, Users, Trophy } from "lucide-react";

const categories = [
  { slug: "introductions", name: "Introductions", icon: "👋", description: "Tell us your story", threads: 24 },
  { slug: "daily-wins", name: "Daily Wins", icon: "🎉", description: "Celebrate small victories", threads: 47 },
  { slug: "help-advice", name: "Help & Advice", icon: "💬", description: "Ask for peer guidance", threads: 83 },
  { slug: "contamination", name: "Contamination OCD", icon: "🧼", description: "Washing, cleanliness, germs", threads: 31 },
  { slug: "checking", name: "Checking & Doubting", icon: "🔒", description: "Locks, homework, appliances", threads: 19 },
  { slug: "school-education", name: "School & Education", icon: "📚", description: "504 plans, IEPs, teachers", threads: 28 },
  { slug: "therapy", name: "Therapy Experiences", icon: "🧠", description: "Finding and working with therapists", threads: 36 },
  { slug: "medication", name: "Medication Discussions", icon: "💊", description: "SSRIs and other treatments", threads: 22 },
  { slug: "self-care", name: "Self-Care Corner", icon: "🌿", description: "Taking care of yourself", threads: 15 },
  { slug: "partner-support", name: "Partner/Co-Parent Support", icon: "🤝", description: "Navigating OCD as a team", threads: 12 },
  { slug: "teens", name: "Teen Section", icon: "🧑‍🎓", description: "Parents of older children & young adults", threads: 20 },
];

const recentThreads = [
  {
    title: "First win: my daughter touched a doorknob without washing!",
    category: "daily-wins",
    author: "HopefulMom2024",
    replies: 12,
    reactions: 34,
    type: "victory" as const,
    time: "2 hours ago",
  },
  {
    title: "How long before ERP starts showing results?",
    category: "therapy",
    author: "Anonymous",
    replies: 8,
    reactions: 15,
    type: "question" as const,
    time: "4 hours ago",
  },
  {
    title: "Co-parent disagrees about accommodation reduction",
    category: "partner-support",
    author: "DadOfTwo",
    replies: 19,
    reactions: 22,
    type: "discussion" as const,
    time: "6 hours ago",
  },
  {
    title: "School refusing to implement 504 plan accommodations",
    category: "school-education",
    author: "AdvocateMom",
    replies: 14,
    reactions: 18,
    type: "question" as const,
    time: "8 hours ago",
  },
  {
    title: "Bedtime went from 90 min to 25 min in 3 weeks",
    category: "daily-wins",
    author: "Exhausted_but_Hopeful",
    replies: 23,
    reactions: 56,
    type: "victory" as const,
    time: "1 day ago",
  },
];

const typeStyles = {
  victory: "bg-gold/20 text-charcoal",
  question: "bg-navy/10 text-navy",
  discussion: "bg-sage/10 text-sage-dark",
};

export default function CommunityPage() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState<"categories" | "recent">("categories");

  const filteredCategories = categories.filter(
    (cat) =>
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.description.toLowerCase().includes(search.toLowerCase())
  );

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

        {/* Search */}
        <div className="mt-8 flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3">
          <Search className="h-4 w-4 text-charcoal/40" />
          <input
            type="text"
            placeholder="Search forums..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm outline-none placeholder:text-charcoal/40"
          />
        </div>

        {/* View toggle */}
        <div className="mt-6 flex gap-2">
          <button
            onClick={() => setView("categories")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              view === "categories"
                ? "bg-sage text-white"
                : "bg-white border border-cream-dark text-charcoal/60 hover:bg-cream"
            }`}
          >
            Categories
          </button>
          <button
            onClick={() => setView("recent")}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              view === "recent"
                ? "bg-sage text-white"
                : "bg-white border border-cream-dark text-charcoal/60 hover:bg-cream"
            }`}
          >
            Recent Activity
          </button>
        </div>

        {/* Community guidelines */}
        <div className="mt-6 rounded-xl bg-navy/5 px-5 py-3 text-xs text-charcoal/50">
          <strong className="text-charcoal/70">Community Guidelines:</strong>{" "}
          Be kind, respect privacy, share experiences (not medical advice), and
          remember — every family&apos;s journey is different.{" "}
          <span className="text-navy hover:underline cursor-pointer">
            Read full guidelines
          </span>
        </div>

        {view === "categories" ? (
          <div className="mt-6 space-y-3">
            {filteredCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/community/${cat.slug}`}
                className="group flex items-center justify-between rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-2xl">{cat.icon}</span>
                  <div>
                    <h2 className="font-serif font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                      {cat.name}
                    </h2>
                    <p className="mt-0.5 text-sm text-charcoal/50">
                      {cat.description}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-charcoal/40">
                  {cat.threads} threads
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-6 space-y-3">
            {recentThreads.map((thread) => (
              <div
                key={thread.title}
                className="rounded-2xl border border-cream-dark bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${typeStyles[thread.type]}`}
                      >
                        {thread.type}
                      </span>
                      <span className="text-xs text-charcoal/40">
                        in{" "}
                        {categories.find((c) => c.slug === thread.category)
                          ?.name || thread.category}
                      </span>
                    </div>
                    <h3 className="mt-2 font-semibold text-charcoal leading-snug">
                      {thread.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-xs text-charcoal/40">
                      <span>{thread.author}</span>
                      <span>{thread.time}</span>
                      <span className="inline-flex items-center gap-1">
                        <MessageCircle className="h-3 w-3" />
                        {thread.replies}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Heart className="h-3 w-3" />
                        {thread.reactions}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Weekly threads */}
        <div className="mt-10">
          <h2 className="font-serif text-lg font-semibold text-charcoal">
            Weekly Threads
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-xl border border-gold/30 bg-gold/5 p-4">
              <div className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-gold" />
                <h3 className="font-semibold text-charcoal text-sm">
                  Wins Wednesday
                </h3>
              </div>
              <p className="mt-1 text-xs text-charcoal/50">
                Share your victories, big and small. We celebrate together.
              </p>
            </div>
            <div className="rounded-xl border border-sage/30 bg-sage/5 p-4">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-5 w-5 text-sage" />
                <h3 className="font-semibold text-charcoal text-sm">
                  Question Friday
                </h3>
              </div>
              <p className="mt-1 text-xs text-charcoal/50">
                No question is too small. Ask anything OCD-related.
              </p>
            </div>
          </div>
        </div>

        {/* Sign-in prompt */}
        <div className="mt-10 rounded-2xl bg-navy/5 border border-navy/10 p-6 text-center">
          <Users className="mx-auto h-8 w-8 text-navy/50" />
          <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
            Join the conversation
          </h3>
          <p className="mt-2 text-sm text-charcoal/60">
            Sign in to post, reply, and connect with other parents.
            Anonymous posting is available.
          </p>
          <Link
            href="/account"
            className="mt-4 inline-block rounded-xl bg-navy px-6 py-3 text-sm font-semibold text-white hover:bg-navy-dark transition-colors"
          >
            Sign In to Participate
          </Link>
        </div>
      </div>
    </div>
  );
}
