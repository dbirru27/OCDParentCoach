"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, MessageCircle, Heart, Lightbulb, Users as UsersIcon } from "lucide-react";

const categoryData: Record<string, { name: string; icon: string; description: string }> = {
  introductions: { name: "Introductions", icon: "👋", description: "Tell us your story" },
  "daily-wins": { name: "Daily Wins", icon: "🎉", description: "Celebrate small victories" },
  "help-advice": { name: "Help & Advice", icon: "💬", description: "Ask for peer guidance" },
  contamination: { name: "Contamination OCD", icon: "🧼", description: "Washing, cleanliness, germs" },
  checking: { name: "Checking & Doubting", icon: "🔒", description: "Locks, homework, appliances" },
  "school-education": { name: "School & Education", icon: "📚", description: "504 plans, IEPs, teachers" },
  therapy: { name: "Therapy Experiences", icon: "🧠", description: "Finding and working with therapists" },
  medication: { name: "Medication Discussions", icon: "💊", description: "SSRIs and other treatments" },
  "self-care": { name: "Self-Care Corner", icon: "🌿", description: "Taking care of yourself" },
  "partner-support": { name: "Partner/Co-Parent Support", icon: "🤝", description: "Navigating OCD as a team" },
  teens: { name: "Teen Section", icon: "🧑‍🎓", description: "Parents of older children & young adults" },
};

const sampleThreads: Record<string, Array<{
  title: string;
  author: string;
  replies: number;
  reactions: number;
  type: "discussion" | "question" | "victory";
  time: string;
}>> = {
  introductions: [
    { title: "New here — 8yo just diagnosed, feeling overwhelmed", author: "NewToThis", replies: 15, reactions: 28, type: "discussion", time: "3 hours ago" },
    { title: "Hi from Texas! 5 years into our OCD journey", author: "TexasMom3", replies: 9, reactions: 22, type: "discussion", time: "1 day ago" },
    { title: "Single dad here, just found this community", author: "DadStrong", replies: 21, reactions: 45, type: "discussion", time: "2 days ago" },
  ],
  "daily-wins": [
    { title: "My son wore a 'wrong' shirt to school and survived!", author: "ProudMama", replies: 18, reactions: 67, type: "victory", time: "1 hour ago" },
    { title: "First restaurant meal in 6 months without a meltdown", author: "Anonymous", replies: 24, reactions: 82, type: "victory", time: "5 hours ago" },
    { title: "She said 'OCD is lying to me' unprompted", author: "HopefulHeart", replies: 31, reactions: 94, type: "victory", time: "1 day ago" },
  ],
  "help-advice": [
    { title: "Contamination OCD getting worse after starting ERP?", author: "Worried_Parent", replies: 12, reactions: 18, type: "question", time: "2 hours ago" },
    { title: "How to explain OCD to grandparents who don't get it", author: "BridgeBuilder", replies: 22, reactions: 35, type: "discussion", time: "6 hours ago" },
    { title: "Teen refuses to do ERP homework — what now?", author: "Anonymous", replies: 16, reactions: 20, type: "question", time: "1 day ago" },
  ],
};

const typeStyles = {
  victory: "bg-gold/20 text-charcoal",
  question: "bg-navy/10 text-navy",
  discussion: "bg-sage/10 text-sage-dark",
};

export default function ForumCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = use(params);
  const info = categoryData[category];
  const displayName = info?.name || category.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  const threads = sampleThreads[category] || sampleThreads["help-advice"] || [];

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/community"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>

        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {info && <span className="text-3xl">{info.icon}</span>}
            <div>
              <h1 className="font-serif text-2xl font-semibold text-navy">
                {displayName}
              </h1>
              {info && (
                <p className="mt-0.5 text-sm text-charcoal/50">
                  {info.description}
                </p>
              )}
            </div>
          </div>
          <Link
            href="/community/new"
            className="inline-flex items-center gap-2 rounded-xl bg-sage px-4 py-2.5 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            <Plus className="h-4 w-4" />
            New Post
          </Link>
        </div>

        {category === "medication" && (
          <div className="mt-4 rounded-xl bg-coral/5 border border-coral/20 px-4 py-3 text-xs text-charcoal/60">
            <strong className="text-charcoal/70">Reminder:</strong> Posts in
            this category share personal experiences with medication. Always
            consult your child&apos;s doctor before making any medication
            decisions.
          </div>
        )}

        <div className="mt-8 space-y-3">
          {threads.map((thread) => (
            <div
              key={thread.title}
              className="group rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${typeStyles[thread.type]}`}
                >
                  {thread.type}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-charcoal group-hover:text-sage-dark transition-colors leading-snug">
                {thread.title}
              </h3>
              <div className="mt-3 flex items-center gap-4 text-xs text-charcoal/40">
                <span>{thread.author}</span>
                <span>{thread.time}</span>
                <span className="inline-flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  {thread.replies} replies
                </span>
                <span className="inline-flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  {thread.reactions}
                </span>
              </div>
            </div>
          ))}
        </div>

        {threads.length === 0 && (
          <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
            <p className="text-charcoal/50">
              No threads yet. Be the first to start a conversation.
            </p>
            <Link
              href="/community/new"
              className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Create a Post
            </Link>
          </div>
        )}

        {/* Sign in prompt */}
        <div className="mt-8 rounded-xl bg-sage/5 border border-sage/20 p-5 text-center">
          <p className="text-sm text-charcoal/60">
            <Link href="/account" className="text-sage-dark hover:underline font-medium">
              Sign in
            </Link>{" "}
            to reply, react, and participate in discussions.
          </p>
        </div>
      </div>
    </div>
  );
}
