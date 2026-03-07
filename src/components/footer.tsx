import Link from "next/link";

const footerLinks = {
  Resources: [
    { href: "/coach", label: "AI Coach" },
    { href: "/assessment", label: "OCD IQ Assessment" },
    { href: "/situations", label: "Situation Library" },
    { href: "/learn", label: "Learning Hub" },
  ],
  Community: [
    { href: "/community", label: "Forum" },
    { href: "/directory", label: "Find a Therapist" },
    { href: "/emergency", label: "Emergency Resources" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/disclaimer", label: "Medical Disclaimer" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-cream-dark bg-cream">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <span className="font-serif text-lg font-semibold text-navy">
              OCD Parent Coach
            </span>
            <p className="mt-3 text-sm text-charcoal/60 leading-relaxed">
              AI-powered guidance for parents navigating childhood OCD.
              Evidence-based. Compassionate. 24/7.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-charcoal">{heading}</h3>
              <ul className="mt-3 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-charcoal/60 hover:text-sage-dark transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-10 border-t border-cream-dark pt-6">
          <p className="text-xs text-charcoal/50 leading-relaxed">
            OCD Parent Coach provides educational information and AI-assisted
            coaching. It is not a substitute for professional medical advice,
            diagnosis, or treatment. Always seek the advice of a qualified mental
            health provider with any questions you may have regarding your
            child&apos;s condition.
          </p>
          <p className="mt-4 text-xs text-charcoal/40">
            &copy; {new Date().getFullYear()} OCD Parent Coach. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
