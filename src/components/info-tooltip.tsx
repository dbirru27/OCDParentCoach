"use client";

import { useState } from "react";

/**
 * A small "?" icon that shows a tooltip on hover/tap.
 * Use next to a term heading or label.
 */
export function InfoTooltip({ text }: { text: string }) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-charcoal/20 text-[10px] font-medium text-charcoal/40 hover:border-sage hover:text-sage transition-colors"
        aria-label="More info"
      >
        ?
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 z-50 mb-2 w-56 -translate-x-1/2 rounded-xl border border-cream-dark bg-white px-3 py-2.5 text-xs leading-relaxed text-charcoal/70 shadow-lg">
          {text}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
        </span>
      )}
    </span>
  );
}

/**
 * Wraps a term inline within text, adding a dotted underline + tooltip.
 * Use inside paragraphs for terms like "ERP" or "accommodation".
 */
export function GlossaryTerm({
  term,
  definition,
  children,
}: {
  term: string;
  definition: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline">
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpen(!open);
        }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="underline decoration-dotted decoration-sage/50 underline-offset-2 text-sage-dark hover:decoration-sage transition-colors cursor-help"
        aria-label={`What is ${term}?`}
      >
        {children}
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-1/2 rounded-xl border border-cream-dark bg-white px-3 py-2.5 text-xs leading-relaxed text-charcoal/70 shadow-lg font-normal not-italic text-left">
          <span className="font-semibold text-charcoal">{term}:</span>{" "}
          {definition}
          <span className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-white" />
        </span>
      )}
    </span>
  );
}
