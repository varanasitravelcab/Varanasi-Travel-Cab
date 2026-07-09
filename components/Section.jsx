// PopularRoutes.jsx
// Simple "Popular Routes" section for Next.js. No animation library —
// just React + Tailwind. Can be a Server Component (no "use client" needed).
//
// Colors: black background, #002855 (navy) cards, #0466c8 (blue) accent, white text.

import Link from "next/link";

// ---------------------------------------------
// 1. DATA
// One object per route. There's no separate page per route (that would
// mean building a new page for every city pair) — every card just links
// to the /contact page instead, where the booking form lives.
// ---------------------------------------------
const routes = [
  { from: "Varanasi", to: "Prayagraj", distance: "122 km", duration: "2.5 hrs", vehicle: "Sedan", slug: "varanasi-to-prayagraj" },
  { from: "Varanasi", to: "Ayodhya", distance: "200 km", duration: "4 hrs", vehicle: "SUV", slug: "varanasi-to-ayodhya" },
  { from: "Varanasi", to: "Lucknow", distance: "290 km", duration: "5.5 hrs", vehicle: "SUV", slug: "varanasi-to-lucknow" },
  { from: "Varanasi", to: "Gorakhpur", distance: "230 km", duration: "4.5 hrs", vehicle: "Sedan", slug: "varanasi-to-gorakhpur" },
  { from: "Varanasi", to: "Patna", distance: "250 km", duration: "5 hrs", vehicle: "SUV", slug: "varanasi-to-patna" },
  { from: "Varanasi", to: "Bodh Gaya", distance: "250 km", duration: "5 hrs", vehicle: "Sedan", slug: "varanasi-to-bodh-gaya" },
];

export default function Section() {
  // Structured data (schema.org) so search engines understand each route
  // as its own service — helps with rich results in search. Since there's
  // no dedicated page per route, the url just points to the homepage
  // booking section for every entry.
  const routesJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: routes.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TaxiService",
        name: `${r.from} to ${r.to} Taxi Service`,
        description: `Book a taxi from ${r.from} to ${r.to} (${r.distance}, approx. ${r.duration}). Comfortable ${r.vehicle} rides with professional drivers.`,
        url: `https://varanasitravelcab.com/contact`,
        areaServed: [r.from, r.to],
      },
    })),
  };

  return (
    <section id="routes" aria-labelledby="popular-routes-heading" className="bg-gray-100 py-28 px-6">
      {/* JSON-LD structured data — invisible to users, read by search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routesJsonLd) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* ---- Section heading ---- */}
        <div className="max-w-xl mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0466c8]">
            <span className="w-5 h-0.5 bg-[#0466c8]" aria-hidden="true" />
            Popular Routes
          </span>
          <h2 id="popular-routes-heading" className="mt-4 text-3xl md:text-4xl font-bold text-black leading-tight">
            Varanasi taxi service to popular outstation routes
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Fixed, transparent fares on our most travelled outstation taxi
            routes from Varanasi — with the right vehicle recommended for
            each distance.
          </p>
        </div>

        {/* ---- Routes grid ---- */}
        {/* <ul>/<li> instead of plain <div>s — tells screen readers and
            search engines this is a list of distinct route offerings. */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => (
            <li
              key={route.slug}
              className="bg-[#002855] hover:shadow-[0_0_60px_rgba(4,102,200,0.45)] transition-all border border-[#0466c8]/20 rounded-2xl p-7
                         duration-300 hover:border-[#0466c8]"
            >
              <article>
                {/* Route title + distance badge */}
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-white font-semibold text-lg">
                    {route.from} <span className="text-[#0466c8]">→</span> {route.to}
                  </h3>
                  <span className="shrink-0 text-xs font-bold text-[#0466c8] bg-[#0466c8]/10 px-3 py-1 rounded-full">
                    {route.distance}
                  </span>
                </div>

                {/* Simple static route line: pickup pin -- line -- drop pin */}
                <div className="flex items-center gap-2 my-6" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0466c8] shrink-0" />
                  <span className="flex-1 h-px bg-[#0466c8]/30" />
                  <span className="w-2.5 h-2.5 rounded-full border-2 border-[#0466c8] shrink-0" />
                </div>

                {/* From / To labels (real text, for accessibility & SEO) */}
                <div className="flex justify-between text-xs text-gray-200 mb-5">
                  <span>{route.from}</span>
                  <span>{route.to}</span>
                </div>

                {/* Trip meta */}
                <div className="flex justify-between items-center text-sm text-gray-200 mb-6">
                  <span>⏱ {route.duration}</span>
                  <span>🚙 {route.vehicle} recommended</span>
                </div>

                {/* Links to the contact page — no separate page needed
                    per route. Text stays descriptive ("Book Varanasi to
                    X taxi") for SEO/accessibility rather than "Click here". */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white
                             hover:text-[#0466c8] transition-colors"
                >
                  Book {route.from} to {route.to} taxi
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------
// SEO notes for whoever edits this later:
// 1. No per-route pages are created here on purpose — every card links
//    to /contact instead, where the booking form lives. If you'd rather
//    send a specific route to one of your existing pages (e.g.
//    /car-rental-in-varanasi or /airport-transfer), just change that
//    route's Link href to that path instead.
// 2. The JSON-LD ItemList above tells search engines exactly what
//    services exist on this page — keep it in sync with the `routes` array.
// 3. Heading order is h2 (section) -> h3 (each route) — don't skip levels
//    when adding more sections around this one.
// ---------------------------------------------