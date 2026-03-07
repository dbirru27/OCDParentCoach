"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Sparkles } from "lucide-react";

const categoryOptions = [
  "Introductions",
  "Daily Wins",
  "Help & Advice",
  "Contamination OCD",
  "Checking & Doubting",
  "School & Education",
  "Therapy Experiences",
  "Medication Discussions",
  "Self-Care Corner",
  "Partner/Co-Parent Support",
  "Teen Section",
];

const tagOptions = [
  "contamination", "checking", "bedtime", "school", "reassurance",
  "symmetry", "intrusive-thoughts", "magical-thinking", "mealtime",
  "clothing", "erp", "medication", "siblings", "self-care",
];

export default function NewPostPage() {
  const [postType, setPostType] = useState("discussion");
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [anonymous, setAnonymous] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-xl text-center">
          <Sparkles className="mx-auto h-12 w-12 text-gold" />
          <h1 className="mt-4 font-serif text-2xl font-semibold text-charcoal">
            Post Submitted!
          </h1>
          <p className="mt-3 text-charcoal/60">
            Your post will appear in the community once you&apos;re signed in.
            This is a preview of the posting experience.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link
              href="/community"
              className="rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Back to Community
            </Link>
            <button
              onClick={() => {
                setSubmitted(false);
                setTitle("");
                setBody("");
                setSelectedTags([]);
              }}
              className="rounded-xl border border-cream-dark bg-white px-6 py-3 text-sm font-semibold text-charcoal/70 hover:bg-cream transition-colors"
            >
              Write Another
            </button>
          </div>
        </div>
      </div>
    );
  }

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

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Post Type
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {["discussion", "question", "victory", "poll"].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setPostType(type)}
                  className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
                    postType === type
                      ? "bg-sage text-white"
                      : "bg-white border border-cream-dark text-charcoal/60 hover:bg-cream"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            >
              <option value="">Select category...</option>
              {categoryOptions.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Give your post a title..."
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Body
            </label>
            <textarea
              rows={8}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Share your thoughts..."
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 resize-none"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Tags (optional)
            </label>
            <div className="mt-2 flex flex-wrap gap-2">
              {tagOptions.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => toggleTag(tag)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? "bg-sage text-white"
                      : "bg-cream border border-cream-dark text-charcoal/50 hover:border-sage/30"
                  }`}
                >
                  {tag.replace(/-/g, " ")}
                </button>
              ))}
            </div>
          </div>

          <label className="flex items-center gap-3 rounded-xl border border-cream-dark bg-white p-4 cursor-pointer">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              className="rounded border-cream-dark text-sage focus:ring-sage h-4 w-4"
            />
            <div>
              <span className="text-sm font-medium text-charcoal">
                Post anonymously
              </span>
              <p className="text-xs text-charcoal/50">
                Your identity will be hidden from other community members
              </p>
            </div>
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
