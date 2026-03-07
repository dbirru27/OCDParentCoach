import type { Metadata } from "next";
import { Search, MapPin, Filter } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Directory",
  description: "Find OCD-specialized therapists near you.",
};

export default function DirectoryPage() {
  return (
    <div className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold text-center text-navy">
          Find a Therapist
        </h1>
        <p className="mt-3 text-center text-charcoal/60">
          OCD-specialized professionals in your area.
        </p>

        {/* Search bar */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3">
            <MapPin className="h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              placeholder="City, state, or zip code..."
              className="flex-1 text-sm outline-none placeholder:text-charcoal/40"
            />
          </div>
          <div className="flex-1 flex items-center gap-2 rounded-xl border border-cream-dark bg-white px-4 py-3">
            <Search className="h-4 w-4 text-charcoal/40" />
            <input
              type="text"
              placeholder="Name or keyword..."
              className="flex-1 text-sm outline-none placeholder:text-charcoal/40"
            />
          </div>
          <button className="rounded-xl bg-sage px-6 py-3 text-sm font-semibold text-white hover:bg-sage-dark transition-colors">
            Search
          </button>
        </div>

        {/* Filters */}
        <div className="mt-4 flex flex-wrap gap-2">
          <button className="inline-flex items-center gap-1.5 rounded-lg border border-cream-dark bg-white px-3 py-2 text-xs text-charcoal/60 hover:bg-cream transition-colors">
            <Filter className="h-3 w-3" />
            Specialty
          </button>
          <button className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-xs text-charcoal/60 hover:bg-cream transition-colors">
            Insurance
          </button>
          <button className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-xs text-charcoal/60 hover:bg-cream transition-colors">
            Telehealth
          </button>
          <button className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-xs text-charcoal/60 hover:bg-cream transition-colors">
            Age Range
          </button>
          <button className="rounded-lg border border-cream-dark bg-white px-3 py-2 text-xs text-charcoal/60 hover:bg-cream transition-colors">
            Language
          </button>
        </div>

        {/* Results placeholder */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Map placeholder */}
          <div className="rounded-2xl border border-cream-dark bg-white shadow-sm overflow-hidden order-2 lg:order-1">
            <div className="flex h-96 items-center justify-center bg-cream">
              <p className="text-sm text-charcoal/30">Map view placeholder</p>
            </div>
          </div>

          {/* List */}
          <div className="space-y-4 order-1 lg:order-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-cream-dark bg-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 shrink-0 rounded-full bg-cream" />
                  <div>
                    <h3 className="font-serif font-semibold text-charcoal">
                      Dr. Example Therapist
                    </h3>
                    <p className="text-sm text-charcoal/50">PsyD &middot; ERP, CBT</p>
                    <p className="mt-1 text-sm text-charcoal/50">
                      <MapPin className="inline h-3 w-3 mr-1" />
                      City, State
                    </p>
                    <div className="mt-2 flex gap-2">
                      <span className="rounded-full bg-sage/10 px-2.5 py-0.5 text-xs text-sage-dark">
                        Telehealth
                      </span>
                      <span className="rounded-full bg-navy/10 px-2.5 py-0.5 text-xs text-navy">
                        Ages 4-18
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
