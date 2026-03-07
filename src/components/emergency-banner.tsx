"use client";

import { useState } from "react";
import { Phone, X } from "lucide-react";
import Link from "next/link";

export function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) {
    return (
      <button
        onClick={() => setDismissed(false)}
        className="fixed top-0 right-0 z-50 m-2 rounded-full bg-coral px-3 py-1 text-xs text-white shadow-md hover:bg-coral-dark transition-colors"
        aria-label="Show emergency resources"
      >
        <Phone className="inline h-3 w-3 mr-1" />
        Crisis Help
      </button>
    );
  }

  return (
    <div className="relative z-50 bg-coral/10 border-b border-coral/20 px-4 py-2 text-center text-sm">
      <Link
        href="/emergency"
        className="inline-flex items-center gap-2 text-coral-dark hover:text-coral font-medium transition-colors"
      >
        <Phone className="h-4 w-4" />
        In crisis? Get immediate help &rarr;
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-coral/60 hover:text-coral transition-colors"
        aria-label="Dismiss emergency banner"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
