"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PolicyAccordion() {
  return (
    <section className="w-full py-20 bg-[#F8FAFC] flex items-center justify-center">
      <div className="max-w-5xl px-6 w-full">

        <p className="text-[#F97316] md:text-2xl font-semibold uppercase tracking-[2px] mb-4">
          Frequently Asked Questions
        </p>

        <h2 className="text-2xl md:text-4xl font-bold text-black mb-5">
          Taxi Service & Car Rental in Varanasi - FAQs
        </h2>

        <p className="text-gray-700 mb-12 max-w-3xl">
          Find answers to the most common questions about our taxi service in
          Varanasi, airport transfers, local sightseeing, outstation cab
          booking, chauffeur-driven car rental, pricing, and booking process.
        </p>

        <Accordion
          type="single"
          collapsible
          className="space-y-4"
        >

          <AccordionItem value="1" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              How can I book a taxi in Varanasi?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              You can easily book a taxi in Varanasi by calling us directly or
              sending a booking request through WhatsApp. We provide instant
              confirmation for airport transfers, local sightseeing, railway
              station pickup, and outstation travel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="2" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Do you provide airport taxi service in Varanasi?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              Yes. We provide 24x7 airport taxi service to and from Lal Bahadur
              Shastri International Airport with professional drivers and
              timely pickup and drop service.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="3" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Is a driver included with every car rental?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              Yes. All our vehicles are chauffeur-driven. Experienced,
              professional, and verified drivers are included with every taxi
              and car booking.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="4" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Do you offer outstation cab services from Varanasi?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              Yes. We provide outstation taxi services from Varanasi to
              Prayagraj, Ayodhya, Bodh Gaya, Vindhyachal, Lucknow, Gorakhpur,
              Mirzapur, Jaunpur, and many other destinations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="5" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Which vehicles are available for booking?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              We offer Hatchbacks, Sedans, SUVs, Ertiga, Innova Crysta, Tempo
              Traveller, and other chauffeur-driven vehicles for local,
              airport, and outstation travel.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="6" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Do you provide local sightseeing taxi service in Varanasi?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              Yes. Our local sightseeing taxi service covers Kashi Vishwanath
              Temple, Dashashwamedh Ghat, Assi Ghat, Sarnath, BHU, Sankat
              Mochan Temple, Ramnagar Fort, and all major tourist attractions
              in Varanasi.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="7" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Are your taxi prices affordable?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              Yes. We offer competitive and transparent pricing with no hidden
              charges. Whether you need an airport cab, local taxi, or
              outstation car rental, we provide affordable rates.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="8" className="border rounded-2xl px-4">
            <AccordionTrigger className="text-lg text-black font-semibold cursor-pointer">
              Can I book a taxi 24 hours a day?
            </AccordionTrigger>

            <AccordionContent className="text-gray-700">
              Absolutely. Our taxi booking service is available 24x7 for
              airport transfers, railway station pickup, local rides, and
              outstation journeys.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
}