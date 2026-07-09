"use client";

// FaqSection.jsx
// FAQ section for Next.js. Plain React state for the accordion (no
// animation library) + Tailwind for styling + JSON-LD for SEO.
//
// Colors: black background, #002855 (navy) cards, #0466c8 (blue) accent, white text.

import { useState } from "react";

// ---------------------------------------------
// 1. DATA
// One { question, answer } object per FAQ. IMPORTANT: keep this array as
// the single source of truth — both the visible accordion and the
// JSON-LD schema below are built from it, so they can never go out of
// sync with each other (Google penalizes schema that doesn't match what's
// actually shown on the page).
// ---------------------------------------------
const faqs = [
  {
    question: "How do I book a taxi in Varanasi?",
    answer:
      "You can book instantly by calling us, messaging on WhatsApp, or filling the quick booking form on our homepage with your pickup, drop, date and car type.",
  },
  {
    question: "Do you provide airport taxi service in Varanasi?",
    answer:
      "Yes, we provide reliable airport pickup and drop service from Lal Bahadur Shastri International Airport with live flight tracking and on-time arrival.",
  },
  {
    question: "Can I book a one way outstation taxi from Varanasi?",
    answer:
      "Yes, we offer one way and round trip outstation taxi service from Varanasi to Prayagraj, Ayodhya, Lucknow, Delhi, Patna, Bodh Gaya and other cities across India.",
  },
  {
    question: "Is round trip taxi cheaper than booking two one way trips?",
    answer:
      "Yes, round trip bookings usually work out more economical since the return fare is calculated together with the onward journey.",
  },
  {
    question: "Do you offer monthly cab rental for corporate clients?",
    answer:
      "Yes, we provide monthly and long-term rental plans with dedicated vehicles and consolidated billing for corporate travel.",
  },
  {
    question: "Are your drivers verified and licensed?",
    answer:
      "Every driver is background-verified, licensed and trained in safe driving practices before joining our fleet.",
  },
  {
    question: "What vehicles are available for wedding car rental?",
    answer:
      "We offer decorated luxury sedans and premium SUVs for wedding processions, with on-time arrival guaranteed.",
  },
  {
    question: "Do you provide Tempo Traveller rental for group tours?",
    answer:
      "Yes, our Tempo Travellers seat 12-17 passengers and are ideal for family or group pilgrimage tours.",
  },
  {
    question: "How is the taxi fare calculated?",
    answer:
      "Fares are calculated transparently based on distance, vehicle type and trip duration, with no hidden charges added later.",
  },
  {
    question: "Do you operate 24/7?",
    answer:
      "Yes, our booking lines and cab service are available 24 hours a day, 7 days a week, including holidays.",
  },
  {
    question: "Can I book a cab for Kashi Darshan or pilgrimage tours?",
    answer:
      "Yes, we offer dedicated pilgrimage tour packages covering Kashi Vishwanath, Sarnath, Vindhyachal and nearby temples.",
  },
  {
    question: "Do you provide GPS tracking during the ride?",
    answer:
      "Yes, all our vehicles are GPS-enabled, allowing real-time tracking for both the customer and our support team.",
  },
];

export default function PolicyAccordion() {
  // Tracks which single FAQ is open. null = all closed.
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  // Structured data (schema.org FAQPage) — this is what lets Google show
  // your FAQs directly in search results as an expandable rich snippet.
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-gray-100 py-28 px-6">
      {/* JSON-LD structured data — invisible to users, read by search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        {/* ---- Section heading ---- */}
        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-[#0466c8]">
            <span className="w-5 h-0.5 bg-[#0466c8]" aria-hidden="true" />
            FAQ
          </span>
          <h2 id="faq-heading" className="mt-4 text-3xl md:text-4xl font-bold text-black leading-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Answers to the most common questions about booking a taxi or
            car rental with us in Varanasi.
          </p>
        </div>

        {/* ---- FAQ list ---- */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className="bg-[#002855] border border-[#0466c8]/20 rounded-2xl overflow-hidden"
              >
                {/* The question is a real <h3> inside the button so screen
                    readers and search engines both see it as a heading,
                    not just clickable text. */}
                <h3>
                  <button
                    id={buttonId}
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span className="text-white font-semibold text-base">
                      {faq.question}
                    </span>
                    {/* Plus/minus indicator, purely visual */}
                    <span
                      aria-hidden="true"
                      className={`shrink-0 w-7 h-7 rounded-full border border-[#0466c8]/40 flex items-center justify-center
                                  text-[#0466c8] transition-transform duration-300 ${isOpen ? "rotate-45 bg-[#0466c8] text-white" : ""}`}
                    >
                      +
                    </span>
                  </button>
                </h3>

                {/* Answer. Kept in the DOM (not removed) even when closed,
                    just visually collapsed — better for SEO than
                    conditionally rendering the answer only when open. */}
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------
// SEO notes for whoever edits this later:
// 1. Keep every visible question/answer pair identical to what's in the
//    `faqs` array — the JSON-LD is generated straight from it, and
//    Google's guidelines require the schema to match visible page content.
// 2. Answers stay in the DOM even when collapsed (just hidden via CSS
//    grid-rows/opacity) instead of being removed — so crawlers that don't
//    execute JS still see the full text.
// 3. Each question is a real <h3> — don't change these to plain <div>s or
//    <span>s, it would break the page's heading hierarchy.
// ---------------------------------------------