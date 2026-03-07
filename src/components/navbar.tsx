"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/coach", label: "AI Coach" },
  { href: "/assessment", label: "Assessment" },
  { href: "/situations", label: "Situations" },
  { href: "/learn", label: "Learn" },
  { href: "/community", label: "Community" },
  { href: "/directory", label: "Directory" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-cream-dark bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold text-navy">
            OCD Parent Coach
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex md:items-center md:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-charcoal/70 hover:bg-sage/10 hover:text-charcoal transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="ml-4 flex items-center gap-2">
            <Link
              href="/account"
              className="rounded-lg border border-sage px-4 py-2 text-sm font-medium text-sage-dark hover:bg-sage/10 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/account"
              className="rounded-lg bg-sage px-4 py-2 text-sm font-medium text-white hover:bg-sage-dark transition-colors"
            >
              Sign up
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden rounded-lg p-2 text-charcoal/70 hover:bg-sage/10"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-cream-dark md:hidden">
          <div className="space-y-1 px-4 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-charcoal/70 hover:bg-sage/10 hover:text-charcoal transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2 border-t border-cream-dark pt-4">
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg border border-sage px-4 py-2 text-center text-sm font-medium text-sage-dark hover:bg-sage/10 transition-colors"
              >
                Log in
              </Link>
              <Link
                href="/account"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg bg-sage px-4 py-2 text-center text-sm font-medium text-white hover:bg-sage-dark transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
