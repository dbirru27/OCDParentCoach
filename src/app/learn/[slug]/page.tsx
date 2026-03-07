import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, Clock, BookOpen } from "lucide-react";
import { notFound } from "next/navigation";
import { learningContent, getContentBySlug } from "@/lib/learning-data";

const difficultyColors: Record<string, string> = {
  beginner: "bg-sage/10 text-sage-dark",
  intermediate: "bg-gold/20 text-charcoal",
  advanced: "bg-navy/10 text-navy",
};

export function generateStaticParams() {
  return learningContent.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) return { title: "Article Not Found" };
  return {
    title: content.title,
    description: content.keyTakeaways[0] || "Evidence-based educational content about childhood OCD.",
  };
}

function renderMarkdown(body: string) {
  const lines = body.split("\n");
  const elements: React.ReactNode[] = [];
  let currentList: { type: "ul" | "ol"; items: string[] } | null = null;
  let key = 0;

  const flushList = () => {
    if (currentList) {
      const Tag = currentList.type === "ul" ? "ul" : "ol";
      elements.push(
        <Tag key={key++}>
          {currentList.items.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
          ))}
        </Tag>
      );
      currentList = null;
    }
  };

  const inlineFormat = (text: string): string => {
    return text
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>");
  };

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed === "") {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(3)) }} />
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(4)) }} />
      );
      continue;
    }

    if (trimmed.startsWith("---")) {
      flushList();
      elements.push(<hr key={key++} />);
      continue;
    }

    if (trimmed.startsWith("- ")) {
      if (!currentList || currentList.type !== "ul") {
        flushList();
        currentList = { type: "ul", items: [] };
      }
      currentList.items.push(trimmed.slice(2));
      continue;
    }

    if (/^\d+\.\s/.test(trimmed)) {
      if (!currentList || currentList.type !== "ol") {
        flushList();
        currentList = { type: "ol", items: [] };
      }
      currentList.items.push(trimmed.replace(/^\d+\.\s/, ""));
      continue;
    }

    if (trimmed.startsWith("> ")) {
      flushList();
      elements.push(
        <blockquote key={key++}>
          <p dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed.slice(2)) }} />
        </blockquote>
      );
      continue;
    }

    // Table support (simple)
    if (trimmed.startsWith("|")) {
      flushList();
      // Skip table for now — render as text
      elements.push(
        <p key={key++} dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} />
      );
      continue;
    }

    flushList();
    elements.push(
      <p key={key++} dangerouslySetInnerHTML={{ __html: inlineFormat(trimmed) }} />
    );
  }

  flushList();
  return elements;
}

export default async function LearnArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = getContentBySlug(slug);
  if (!content) notFound();

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-[680px]">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Learning Hub
        </Link>

        <div className="mt-6 flex items-center gap-2">
          <span className="inline-block rounded-full bg-navy/10 px-2.5 py-0.5 text-xs font-medium text-navy capitalize">
            {content.contentType}
          </span>
          <span
            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium capitalize ${difficultyColors[content.difficulty]}`}
          >
            {content.difficulty}
          </span>
        </div>

        <h1 className="mt-3 font-serif text-3xl font-semibold text-navy leading-tight">
          {content.title}
        </h1>

        <div className="mt-3 flex items-center gap-4 text-sm text-charcoal/50">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {content.readingTimeMinutes} min read
          </span>
          <span className="inline-flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {content.topic.charAt(0).toUpperCase() + content.topic.slice(1)}
          </span>
        </div>

        {/* Key Takeaways */}
        <div className="mt-8 rounded-xl bg-sage/5 border border-sage/20 p-5">
          <h2 className="text-sm font-semibold text-sage-dark">
            Key Takeaways
          </h2>
          <ul className="mt-2 space-y-1.5 text-sm text-charcoal/70">
            {content.keyTakeaways.map((takeaway, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-sage shrink-0">&bull;</span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article body */}
        <div className="mt-8 prose-article">
          {renderMarkdown(content.body)}
        </div>

        {/* Related situations */}
        {content.relatedSituationSlugs.length > 0 && (
          <div className="mt-10">
            <h3 className="font-serif text-lg font-semibold text-charcoal">
              Related Situations
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {content.relatedSituationSlugs.map((situationSlug) => (
                <Link
                  key={situationSlug}
                  href={`/situations`}
                  className="rounded-full bg-cream border border-cream-dark px-3 py-1 text-xs text-charcoal/60 hover:border-sage/30 hover:text-sage-dark transition-colors"
                >
                  {situationSlug.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Ask the Coach CTA */}
        <div className="mt-12 rounded-2xl bg-sage/5 border border-sage/20 p-6 text-center">
          <MessageCircle className="mx-auto h-8 w-8 text-sage" />
          <h3 className="mt-3 font-serif text-lg font-semibold text-charcoal">
            Have questions about this topic?
          </h3>
          <p className="mt-2 text-sm text-charcoal/60">
            Our AI Coach can help you apply these concepts to your specific
            situation.
          </p>
          <Link
            href="/coach"
            className="mt-4 inline-block rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            Ask the Coach
          </Link>
        </div>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs text-charcoal/40 leading-relaxed">
          This article provides educational information based on ERP and CBT
          principles. It is not a substitute for professional clinical guidance.
        </p>
      </div>
    </div>
  );
}
