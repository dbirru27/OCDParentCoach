import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "New Post",
  description: "Create a new community forum post.",
};

export default function NewPostPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Link
          href="/community"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Community
        </Link>

        <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
          New Post
        </h1>

        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-charcoal/70">Post Type</label>
            <select className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20">
              <option>Discussion</option>
              <option>Question</option>
              <option>Victory</option>
              <option>Poll</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">Category</label>
            <select className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20">
              <option>Select category...</option>
              <option>Introductions</option>
              <option>Daily Wins</option>
              <option>Help & Advice</option>
              <option>School & Education</option>
              <option>Therapy Experiences</option>
              <option>Self-Care Corner</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">Title</label>
            <input
              type="text"
              placeholder="Give your post a title..."
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">Body</label>
            <textarea
              rows={8}
              placeholder="Share your thoughts..."
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-charcoal/60">
            <input type="checkbox" className="rounded border-cream-dark text-sage focus:ring-sage" />
            Post anonymously
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Publish Post
          </button>
        </form>
      </div>
    </div>
  );
}
