import Footer from "../../components/Footer";
import Any from "../../components/Any";
import Hero from "../../components/Hero";
import Service from "../../components/Service";
import Testimonial from "../../components/Testimonial";
import Section from "../../components/Section";
import HomeSeoContent from "../../components/HomeSeoContent";
import NavContainer from "../../components/NavContainer";
import PolicyAccordion from "../../components/PolicyAccordion";

export const metadata = {
  title:
    "Cab Services Varanasi | Best Taxi Service & Car Rental in Varanasi",

  description:
    "Book affordable taxi service in Varanasi with Cab Services Varanasi. Airport taxi, railway station pickup, local sightseeing, outstation cab booking, corporate travel, Innova Crysta, Ertiga, Tempo Traveller and chauffeur-driven car rental available 24/7.",

  keywords: [
    "cab services varanasi",
    "taxi service in varanasi",
    "car rental in varanasi",
    "cab booking varanasi",
    "airport taxi varanasi",
    "airport cab varanasi",
    "railway station taxi varanasi",
    "outstation cab varanasi",
    "local taxi service varanasi",
    "tempo traveller varanasi",
    "innova crysta rental varanasi",
    "ertiga taxi varanasi",
    "cab near me varanasi",
    "best taxi service in varanasi",
    "cheap taxi service varanasi",
    "chauffeur driven car rental",
    "cabservicesvaranasi.com"
  ],

  alternates: {
    canonical: "https://cabservicesvaranasi.com",
  },

  openGraph: {
    title:
      "Cab Services Varanasi | Best Taxi Service & Car Rental in Varanasi",

    description:
      "Book trusted airport taxi, local sightseeing, railway station pickup, outstation cabs and chauffeur-driven car rentals in Varanasi.",

    url: "https://cabservicesvaranasi.com",

    siteName: "Cab Services Varanasi",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cab Services Varanasi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Cab Services Varanasi | Taxi Service & Car Rental",

    description:
      "Airport taxi, local sightseeing, outstation cab booking and car rental in Varanasi.",

    images: ["/og-image.jpg"],
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
            "@id": "https://cabservicesvaranasi.com/#business",

            name: "Cab Services Varanasi",

            url: "https://cabservicesvaranasi.com",

            logo: "https://cabservicesvaranasi.com/logo.png",

            image: "https://cabservicesvaranasi.com/logo.png",

            description:
              "Cab Services Varanasi offers airport taxi, local sightseeing taxi, railway station pickup, chauffeur-driven car rental and outstation cab booking throughout Varanasi.",

            telephone: "+91-8299529846",

            email: "cabservicesvaranasi91@gmail.com",

            priceRange: "₹₹",

            openingHours: "Mo-Su 00:00-23:59",

            address: {
              "@type": "PostalAddress",
              streetAddress: "",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              postalCode: "221001",
              addressCountry: "IN",
            },

            geo: {
              "@type": "GeoCoordinates",
              latitude: "25.3176",
              longitude: "82.9739",
            },

            areaServed: [
              "Varanasi",
              "Sarnath",
              "Prayagraj",
              "Ayodhya",
              "Vindhyachal",
              "Bodh Gaya",
              "Lucknow",
              "Gorakhpur",
              "Jaunpur",
              "Mirzapur",
            ],

            serviceType: [
              "Taxi Service",
              "Airport Taxi",
              "Airport Transfer",
              "Railway Station Pickup",
              "Railway Station Drop",
              "Local Sightseeing Taxi",
              "Outstation Cab",
              "One Way Taxi",
              "Round Trip Cab",
              "Car Rental",
              "Corporate Cab",
              "Wedding Car Rental",
              "Tempo Traveller",
              "Innova Crysta Rental",
            ],

            sameAs: [
              "https://www.instagram.com/YOUR_USERNAME",
              "https://www.facebook.com/YOUR_PAGE"
            ],
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

            url: "https://cabservicesvaranasi.com",

            name: "Cab Services Varanasi",

            potentialAction: {
              "@type": "SearchAction",

              target:
                "https://cabservicesvaranasi.com/?q={search_term_string}",

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

            name: "Cab Services Varanasi",

            url: "https://cabservicesvaranasi.com",

            logo: "https://cabservicesvaranasi.com/logo.png",

            email: "cabservicesvaranasi91@gmail.com",

            telephone: "+91-8299529846",
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