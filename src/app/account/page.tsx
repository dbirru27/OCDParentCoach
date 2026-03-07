import type { Metadata } from "next";
import Link from "next/link";
import { User, Settings, MessageCircle, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Account",
  description: "Manage your OCD Parent Coach account.",
};

const accountLinks = [
  { href: "/account/profile", icon: User, label: "Profile", description: "Your name, email, and preferences" },
  { href: "/account/children", icon: Users, label: "Child Profiles", description: "Manage your children's OCD profiles" },
  { href: "/account/chat-history", icon: MessageCircle, label: "Chat History", description: "View and search past conversations" },
  { href: "/account/settings", icon: Settings, label: "Settings", description: "Notifications, privacy, and linked accounts" },
];

export default function AccountPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-xl">
        <h1 className="font-serif text-3xl font-semibold text-navy">Account</h1>

        {/* Login prompt (shown when not logged in) */}
        <div className="mt-8 rounded-2xl border border-cream-dark bg-white p-8 text-center shadow-sm">
          <h2 className="font-serif text-xl font-semibold text-charcoal">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-charcoal/60">
            Access your chat history, tracker, and personalized experience.
          </p>

          <form className="mt-6 space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-cream-dark bg-cream px-4 py-3 text-sm outline-none focus:border-sage focus:ring-2 focus:ring-sage/20"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 flex items-center gap-4">
            <hr className="flex-1 border-cream-dark" />
            <span className="text-xs text-charcoal/40">or</span>
            <hr className="flex-1 border-cream-dark" />
          </div>

          <button className="mt-4 w-full rounded-xl border border-cream-dark px-6 py-3 text-sm font-medium text-charcoal/70 hover:bg-cream transition-colors">
            Continue with Google
          </button>

          <p className="mt-6 text-sm text-charcoal/50">
            Don&apos;t have an account?{" "}
            <button className="text-sage-dark hover:underline">Sign up</button>
          </p>
        </div>

        {/* Account navigation (shown when logged in) */}
        <div className="mt-8 space-y-3">
          {accountLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-4 rounded-2xl border border-cream-dark bg-white p-5 shadow-sm hover:shadow-md hover:border-sage/30 transition-all"
            >
              <item.icon className="h-6 w-6 text-sage" />
              <div>
                <h3 className="font-semibold text-charcoal group-hover:text-sage-dark transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-charcoal/50">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
