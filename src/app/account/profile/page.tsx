"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function ProfilePage() {
  const [saved, setSaved] = useState(false);

  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Link
          href="/account"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-sage-dark transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Account
        </Link>

        <h1 className="mt-6 font-serif text-2xl font-semibold text-navy">
          Profile
        </h1>
        <p className="mt-1 text-sm text-charcoal/50">
          Manage your account details.
        </p>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
          }}
        >
          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Display Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Anonymous Display Name
            </label>
            <input
              type="text"
              placeholder="Auto-generated (e.g., HopefulParent42)"
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <p className="mt-1 text-xs text-charcoal/40">
              Used when posting anonymously in the community forum.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-charcoal/70">
              Phone Number (optional)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="mt-1 w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <p className="mt-1 text-xs text-charcoal/40">
              Required for WhatsApp integration.
            </p>
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
          >
            <Save className="h-4 w-4" />
            Save Changes
          </button>

          {saved && (
            <p className="text-sm text-sage-dark font-medium">
              Profile saved successfully!
            </p>
          )}
        </form>

        {/* Danger zone */}
        <div className="mt-12 rounded-2xl border border-coral/20 bg-coral/5 p-6">
          <h3 className="font-semibold text-coral text-sm">Danger Zone</h3>
          <p className="mt-2 text-sm text-charcoal/60">
            Permanently delete your account and all associated data including
            chat history, tracker entries, and assessment results.
          </p>
          <button className="mt-4 rounded-xl border border-coral/30 px-4 py-2 text-sm font-medium text-coral hover:bg-coral/10 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
