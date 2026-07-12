import Footer from "../../components/Footer";
import Any from "../../components/Any";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import Section from "../../components/Section";
import HomeSeoContent from "../../components/HomeSeoContent";
import NavContainer from "../../components/NavContainer";
import PolicyAccordion from "../../components/PolicyAccordion";
import Section2 from "../../components/Section2";

export const metadata = {
  metadataBase: new URL("https://www.varanasitravelcab.com"),

  title:
    "Taxi Service in Varanasi | Airport Taxi, Car Rental & Outstation Cabs",

  description:
    "Book trusted taxi and car rental services in Varanasi with Varanasi Travel Cab. Airport transfers, railway station pickup, local sightseeing, outstation cabs, corporate travel, Tempo Traveller, Innova Crysta and chauffeur-driven cars available 24×7.",

  keywords: [
    "taxi service in varanasi",
    "cab service in varanasi",
    "car rental in varanasi",
    "airport taxi varanasi",
    "airport cab varanasi",
    "varanasi airport taxi",
    "local taxi service varanasi",
    "outstation cab varanasi",
    "one way cab varanasi",
    "railway station taxi varanasi",
    "tempo traveller varanasi",
    "innova crysta rental varanasi",
    "ertiga taxi varanasi",
    "corporate cab service varanasi",
    "wedding car rental varanasi",
    "varanasi sightseeing taxi",
    "taxi booking varanasi",
    "cab near me varanasi",
    "best taxi service in varanasi",
    "varanasi travel cab",
    "varanasitravelcab",
    "varanasitravelcab.com"
  ],

  alternates: {
    canonical: "https://www.varanasitravelcab.com",
  },

  openGraph: {
    title:
      "Varanasi Travel Cab | Taxi Service & Car Rental in Varanasi",

    description:
      "Reliable airport taxi, local cab, railway station pickup, outstation taxi and chauffeur-driven car rental services in Varanasi.",

    url: "https://www.varanasitravelcab.com", 

    siteName: "Varanasi Travel Cab",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Varanasi Travel Cab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Varanasi Travel Cab | Taxi Service in Varanasi",

    description:
      "Book airport taxi, local sightseeing, railway station pickup and outstation cabs in Varanasi.",

    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function Home() {
  return (
    <section className="w-full">

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "@id": "https://www.varanasitravelcab.com/#business",

            name: "Varanasi Travel Cab",

            url: "https://www.varanasitravelcab.com",

            logo: "https://www.varanasitravelcab.com/logo.png",

            image: "https://www.varanasitravelcab.com/logo.png",

            description:
              "Varanasi Travel Cab offers airport taxi, local sightseeing, railway station pickup, chauffeur-driven car rental, Tempo Traveller and outstation cab booking throughout Varanasi and North India.",

            telephone: "+91-8467007704",

            email: "varanasitravelcab@gmail.com",

            priceRange: "₹₹",

            openingHours: "Mo-Su 00:00-23:59",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              postalCode: "221001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: 25.3176,
              longitude: 82.9739,
            },

            areaServed: [
              "Varanasi",
              "Sarnath",
              "Ayodhya",
              "Prayagraj",
              "Vindhyachal",
              "Bodh Gaya",
              "Lucknow",
              "Mirzapur",
              "Jaunpur",
              "Gorakhpur"
            ],

            serviceType: [
              "Taxi Service",
              "Airport Taxi",
              "Airport Transfer",
              "Railway Station Pickup",
              "Railway Station Drop",
              "Local Sightseeing",
              "Outstation Cab",
              "One Way Taxi",
              "Round Trip Cab",
              "Car Rental",
              "Corporate Cab",
              "Wedding Car Rental",
              "Tempo Traveller",
              "Innova Crysta Rental"
            ],

            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8299529846",
              contactType: "Customer Service",
              availableLanguage: ["English", "Hindi"],
              url: "https://wa.me/918467007704"
            },

            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Taxi Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Airport Taxi Service"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Local Cab Service"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Outstation Cab Service"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Tempo Traveller Rental"
                  }
                }
              ]
            }
          }),
        }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",

            url: "https://www.varanasitravelcab.com",

            name: "Varanasi Travel Cab",

            inLanguage: "en-IN",

            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.varanasitravelcab.com/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",

            "@type": "Organization",

            "@id": "https://www.varanasitravelcab.com/#organization",

            name: "Varanasi Travel Cab",

            url: "https://www.varanasitravelcab.com",

            logo: "https://www.varanasitravelcab.com/logo.png",

            email: "varanasitravelcab@gmail.com",

            telephone: "+91-8467007704",

            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8467007704",
              contactType: "Customer Support",
              availableLanguage: ["English", "Hindi"]
            }
          }),
        }}
      />

      <header>
        <NavContainer />
      </header>

      <main>
        <Hero />

        <Any />

        <Service />



        <Section />

        <Section2 />

        <HomeSeoContent />

        <PolicyAccordion />

        <Testimonial />
      </main>

      <footer>
        <Footer />
      </footer>
    </section>
  );
}