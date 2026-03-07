"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Bell, Shield, Smartphone, Save } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    weeklyTips: true,
    communityReplies: true,
    trackerReminders: false,
    assessmentReminders: true,
  });

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
          Settings
        </h1>

        {/* Notifications */}
        <section className="mt-8">
          <div className="flex items-center gap-2 text-charcoal">
            <Bell className="h-5 w-5 text-sage" />
            <h2 className="font-semibold">Notifications</h2>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { key: "email" as const, label: "Email notifications", desc: "Receive important updates via email" },
              { key: "weeklyTips" as const, label: "Weekly tips newsletter", desc: "Evidence-based strategies delivered every week" },
              { key: "communityReplies" as const, label: "Community replies", desc: "Get notified when someone replies to your posts" },
              { key: "trackerReminders" as const, label: "Tracker reminders", desc: "Gentle nudge if you haven't logged in 3+ days" },
              { key: "assessmentReminders" as const, label: "Assessment reminders", desc: "Periodic reminders to retake assessments" },
            ].map((item) => (
              <label
                key={item.key}
                className="flex items-center justify-between rounded-xl border border-cream-dark bg-white p-4 cursor-pointer"
              >
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    {item.label}
                  </p>
                  <p className="text-xs text-charcoal/50">{item.desc}</p>
                </div>
                <input
                  type="checkbox"
                  checked={notifications[item.key]}
                  onChange={(e) =>
                    setNotifications((prev) => ({
                      ...prev,
                      [item.key]: e.target.checked,
                    }))
                  }
                  className="rounded border-cream-dark text-sage focus:ring-sage h-5 w-5"
                />
              </label>
            ))}
          </div>
        </section>

        {/* Privacy */}
        <section className="mt-10">
          <div className="flex items-center gap-2 text-charcoal">
            <Shield className="h-5 w-5 text-sage" />
            <h2 className="font-semibold">Privacy</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="rounded-xl border border-cream-dark bg-white p-4">
              <p className="text-sm font-medium text-charcoal">
                Chat history retention
              </p>
              <select className="mt-2 w-full rounded-lg border border-cream-dark bg-cream px-3 py-2 text-sm outline-none">
                <option>Keep indefinitely</option>
                <option>Auto-delete after 30 days</option>
                <option>Auto-delete after 90 days</option>
                <option>Auto-delete after 1 year</option>
              </select>
            </div>
            <div className="rounded-xl border border-cream-dark bg-white p-4">
              <label className="flex items-center justify-between cursor-pointer">
                <div>
                  <p className="text-sm font-medium text-charcoal">
                    Help improve AI responses
                  </p>
                  <p className="text-xs text-charcoal/50">
                    Allow anonymized data to improve our coaching AI
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-cream-dark text-sage focus:ring-sage h-5 w-5"
                />
              </label>
            </div>
          </div>
        </section>

        {/* Linked accounts */}
        <section className="mt-10">
          <div className="flex items-center gap-2 text-charcoal">
            <Smartphone className="h-5 w-5 text-sage" />
            <h2 className="font-semibold">Linked Accounts</h2>
          </div>
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-xl border border-cream-dark bg-white p-4">
              <div>
                <p className="text-sm font-medium text-charcoal">WhatsApp</p>
                <p className="text-xs text-charcoal/50">
                  Chat with our AI coach via WhatsApp
                </p>
              </div>
              <button className="rounded-lg border border-sage px-3 py-1.5 text-xs font-medium text-sage-dark hover:bg-sage/10 transition-colors">
                Connect
              </button>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-cream-dark bg-white p-4">
              <div>
                <p className="text-sm font-medium text-charcoal">Telegram</p>
                <p className="text-xs text-charcoal/50">
                  Chat with our AI coach via Telegram
                </p>
              </div>
              <button className="rounded-lg border border-sage px-3 py-1.5 text-xs font-medium text-sage-dark hover:bg-sage/10 transition-colors">
                Connect
              </button>
            </div>
            <div className="flex items-center justify-between rounded-xl border border-cream-dark bg-white p-4">
              <div>
                <p className="text-sm font-medium text-charcoal">Google</p>
                <p className="text-xs text-charcoal/50">Sign in with Google</p>
              </div>
              <button className="rounded-lg border border-sage px-3 py-1.5 text-xs font-medium text-sage-dark hover:bg-sage/10 transition-colors">
                Connect
              </button>
            </div>
          </div>
        </section>

        {/* Data export */}
        <section className="mt-10">
          <h2 className="font-semibold text-charcoal">Your Data</h2>
          <div className="mt-4 flex gap-3">
            <button className="rounded-xl border border-cream-dark bg-white px-4 py-2.5 text-sm text-charcoal/60 hover:bg-cream transition-colors">
              Export All Data
            </button>
            <button className="rounded-xl border border-cream-dark bg-white px-4 py-2.5 text-sm text-charcoal/60 hover:bg-cream transition-colors">
              Download Chat History
            </button>
          </div>
        </section>

        <button
          onClick={() => {
            setSaved(true);
            setTimeout(() => setSaved(false), 3000);
          }}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors"
        >
          <Save className="h-4 w-4" />
          Save Settings
        </button>

        {saved && (
          <p className="mt-3 text-sm text-sage-dark font-medium">
            Settings saved!
          </p>
        )}
      </div>
    </div>
  );
}
