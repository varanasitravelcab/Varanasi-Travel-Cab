import Any from "../../../components/Any"
import Last from "../../../components/Last";
import Footer from "../../../components/Footer";
import NavContainer from "../../../components/NavContainer";
import CarRentalSeoContent from "../../../components/CarRentalSeoContent";
import Reviews from "../../../components/Testimonial";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Phone,
} from "lucide-react";



export const metadata = {
  metadataBase: new URL("https://www.varanasitravelcab.com"),

  title:
    "Car Rental in Varanasi | Taxi Service & Cab Booking | Varanasi Travel Cab",

  description:
    "Book affordable car rental in Varanasi with Varanasi Travel Cab. Local taxi, airport transfers, outstation cabs, one-way taxi, round trip, chauffeur-driven cars and sightseeing packages at the best price. Call +91 8299529846.",

  keywords: [
    "car rental in varanasi",
    "car hire in varanasi",
    "rent a car in varanasi",
    "taxi service varanasi",
    "cab service varanasi",
    "cab booking varanasi",
    "airport taxi varanasi",
    "airport cab varanasi",
    "lal bahadur shastri airport taxi",
    "varanasi taxi service",
    "chauffeur driven car rental",
    "one way taxi varanasi",
    "round trip taxi varanasi",
    "outstation cab varanasi",
    "local sightseeing cab varanasi",
    "kashi vishwanath taxi",
    "assi ghat taxi",
    "dashashwamedh ghat taxi",
    "best car rental in varanasi",
    "cheap taxi in varanasi",
    "Varanasi Travel Cab"
  ],

  alternates: {
    canonical: "https://www.varanasitravelcab.com/car-rental-in-varanasi",
  },

  openGraph: {
    title:
      "Car Rental in Varanasi | Varanasi Travel Cab",

    description:
      "Affordable car rental in Varanasi for airport pickup, local sightseeing, outstation trips and one-way taxi booking.",

    url: "https://www.varanasitravelcab.com/car-rental-in-varanasi",

    siteName: "Varanasi Travel Cab",

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Car Rental in Varanasi | Varanasi Travel Cab",

    description:
      "Book local taxi, airport cab, one-way taxi and outstation car rental in Varanasi."
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
}

export default function Page() {


  return (
    <>
      <header>
        <NavContainer />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.varanasitravelcab.com/#business",

        "name": "Varanasi Travel Cab",

        "url": "https://www.varanasitravelcab.com",

        "logo":
          "https://www.varanasitravelcab.com/logo.png",

        "image":
          "https://www.varanasitravelcab.com/og-image.jpg",

        "telephone":
          "+91-8467007704",

        "email":
          "varanasitravelcab@gmail.com",

        "priceRange":
          "₹₹",

        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Varanasi",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "221001",
          "addressCountry": "IN"
        },

        "areaServed": [
          {
            "@type": "City",
            "name": "Varanasi"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Uttar Pradesh"
          },
          {
            "@type": "Country",
            "name": "India"
          }
        ]
      },


      {
        "@context": "https://schema.org",

        "@type": "Service",

        "@id":
          "https://www.varanasitravelcab.com/car-rental-in-varanasi#service",

        "name":
          "Car Rental in Varanasi",

        "serviceType":
          "Car Rental and Taxi Service",

        "description":
          "Affordable car rental in Varanasi for airport taxi, local sightseeing, railway station pickup, outstation cab booking, one-way taxi, round trips and chauffeur-driven cars.",

        "url":
          "https://www.varanasitravelcab.com/car-rental-in-varanasi",

        "provider": {
          "@id":
            "https://www.varanasitravelcab.com/#business"
        },


        "hasOfferCatalog": {
          "@type": "OfferCatalog",

          "name":
            "Car Rental Services in Varanasi",

          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Airport Taxi Service"
              }
            },

            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Local Taxi Service"
              }
            },

            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Outstation Cab Service"
              }
            },

            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "One Way Taxi Service"
              }
            },

            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Round Trip Taxi Service"
              }
            },

            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Innova Crysta Rental"
              }
            },

            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Tempo Traveller Rental"
              }
            }
          ]
        }
      },


      {
        "@context": "https://schema.org",

        "@type": "FAQPage",

        "mainEntity": [

          {
            "@type": "Question",

            "name":
              "What is the cost of car rental in Varanasi?",

            "acceptedAnswer": {
              "@type": "Answer",

              "text":
                "Car rental prices in Varanasi depend on vehicle type, distance and duration. Varanasi Travel Cab provides affordable hatchback, sedan, SUV, Innova Crysta and Tempo Traveller rental options."
            }
          },


          {
            "@type": "Question",

            "name":
              "Do you provide airport taxi service from Varanasi Airport?",

            "acceptedAnswer": {
              "@type": "Answer",

              "text":
                "Yes, Varanasi Travel Cab provides airport pickup and drop taxi service from Lal Bahadur Shastri International Airport with professional drivers and clean vehicles."
            }
          },


          {
            "@type": "Question",

            "name":
              "Can I book an outstation cab from Varanasi?",

            "acceptedAnswer": {
              "@type": "Answer",

              "text":
                "Yes, you can book one-way taxi and round-trip outstation cabs from Varanasi for nearby and long-distance destinations."
            }
          },


          {
            "@type": "Question",

            "name":
              "Which cars are available for rental in Varanasi?",

            "acceptedAnswer": {
              "@type": "Answer",

              "text":
                "Varanasi Travel Cab provides hatchback, sedan, SUV, Ertiga, Innova Crysta and Tempo Traveller rental services."
            }
          },


          {
            "@type": "Question",

            "name":
              "How can I book a taxi in Varanasi?",

            "acceptedAnswer": {
              "@type": "Answer",

              "text":
                "You can book a taxi by calling Varanasi Travel Cab or contacting through WhatsApp for quick confirmation."
            }
          }

        ]
      }

    ])
  }}
/>
      </header>
      <section
        aria-label="About Varanasi Travel Cab"
        className="relative min-h-screen flex justify-center w-full items-center pt-[100px] pb-[60px] px-[5vw] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg,rgba(15,23,42,0.95) 0%,rgba(15,23,42,0.7) 50%,rgba(4,102,200,0.25) 100%), url('https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80') center/cover no-repeat",
        }}
      >

        <div className="absolute bottom-0 flex items-center justify-center w-full mx-auto left-0 right-0 h-[120px] bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 w-full  justify-center flex  mx-auto grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 lg:gap-[60px] items-center">

          {/* Left */}
          <div className="w-full mt-10">
            <div className="inline-flex items-center gap-2 bg-[#0466c8]/15 border border-[#0466c8]/30 text-[#0466c8] px-[50px] py-[6px] rounded-full text-[1rem] font-semibold tracking-[0.5px] uppercase mb-5">
              <span className="w-[6px] h-[6px] bg-[#0466c8] rounded-full" />
              ⭐ Rated Car Rental Service in Varanasi
            </div>


            <h1
              className="font-poppins font-extrabold text-gray-300 leading-[1.15] mb-[18px]"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
            >
              Car Rental in
              <span className="text-[#0466c8]">
                Varanasi
              </span>
              <br />
              Trusted{" "}
              <span className="text-[#0466c8]">
                Affordable Taxi Service,

              </span>
              <br />
              Airport Transfers &
              Outstation Cab Booking

            </h1>


            <p className="text-white/70 text-[1.1rem] leading-[1.7] mb-8 max-w-[520px]">
              Varanasi Travel Cab provides reliable car rental in Varanasi for local sightseeing, airport pickup & drop, one-way taxi, round trips and outstation travel. Our professional drivers, clean vehicles and transparent pricing make every journey safe, comfortable and affordable.
            </p>

            <div className="flex flex-wrap gap-[14px] mb-10">
              <a
                href="tel:+918467007704"
                aria-label="Call Varanasi Travel Cab"
                className="inline-flex items-center gap-2 bg-[#002855] text-white px-[30px] py-[14px] rounded-[10px] font-bold text-[1rem] no-underline hover:-translate-y-[2px] transition-all duration-200 shadow-[0_4px_20px_rgba(0,40,85,0.4)]"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href="https://wa.me/918467007704"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Varanasi Travel Cab"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-[30px] py-[14px] rounded-[10px] font-semibold text-[1rem] no-underline border border-white/30 backdrop-blur-md hover:bg-green-500 hover:-translate-y-[2px] transition-all duration-200"
              >
                💬 WhatsApp Us
              </a>
            </div>

            <div className="mt-12 flex flex-col items-start gap-2">
              <p className="text-white/90 text-sm tracking-[3px] uppercase">
                Choose from Hatchback, Sedan, SUV, Innova & Tempo Traveller
              </p>

              <div className="flex items-center gap-3">
                <span className="text-[#0466c8] font-bold">
                  Scroll for More
                </span>

                <i className="fa-solid fa-chevron-down animate-bounce font-bold text-[#0466c8]"></i>
              </div>
            </div>


          </div>

        </div>


      </section>


      <main>
        <CarRentalSeoContent />

        <Any />

        <Reviews />
        <Footer />
      </main>
    </>
  );
}