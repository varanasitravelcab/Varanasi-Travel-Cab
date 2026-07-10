import { Suspense } from "react";
import Contact from "../../../components/Contact";

export const metadata = {
  metadataBase: new URL("https://varanasitravelcab.com"),

  title: "Contact Varanasi Travel Cab | Book Taxi & Car Rental in Varanasi",

  description:
    "Contact Varanasi Travel Cab for local taxi services, airport transfers, railway station pickup & drop, outstation cabs, one-way taxi, sightseeing tours, corporate travel, and car rental services across India. Call +91 8467007704.",

  keywords: [
    "Contact Varanasi Travel Cab",
    "Cab Service Varanasi",
    "Taxi Service Varanasi",
    "Car Rental Varanasi",
    "Airport Taxi Varanasi",
    "Airport Transfer Varanasi",
    "Railway Station Taxi Varanasi",
    "Outstation Cab Varanasi",
    "One Way Cab Varanasi",
    "Taxi Booking Varanasi",
    "Varanasi Taxi Booking",
    "Cab Booking Varanasi",
    "Car Hire Varanasi",
    "Best Cab Service Varanasi",
    "Taxi Contact Number Varanasi"
  ],

  alternates: {
    canonical: "/contact",
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

  openGraph: {
    title: "Contact Varanasi Travel Cab",
    description:
      "Book trusted taxi and car rental services in Varanasi. Local cabs, airport transfers, outstation taxi, one-way cab, sightseeing tours, and chauffeur-driven cars.",
    url: "https://varanasitravelcab.com/contact",
    siteName: "Varanasi Travel Cab",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // create later (1200x630)
        width: 1200,
        height: 630,
        alt: "Varanasi Travel Cab",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Varanasi Travel Cab",
    description:
      "Book taxis, airport transfers, outstation cabs and car rental services in Varanasi.",
    images: ["/og-image.jpg"],
  },

  category: "Travel",

  authors: [
    {
      name: "Varanasi Travel Cab",
    },
  ],

  creator: "Varanasi Travel Cab",

  publisher: "Varanasi Travel Cab",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            name: "Varanasi Travel Cab",
            image: "https://varanasitravelcab.com/logo.png",
            url: "https://varanasitravelcab.com",
            telephone: "+91-8467007704",
            email: "varanasitravelcab@gmail.com",

            address: {
              "@type": "PostalAddress",
              addressLocality: "Varanasi",
              addressRegion: "Uttar Pradesh",
              postalCode: "221106",
              addressCountry: "IN",
            },

            areaServed: {
              "@type": "Country",
              name: "India",
            },

            priceRange: "₹₹",

            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
            ],

            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-8467007704",
              contactType: "Customer Service",
              availableLanguage: ["English", "Hindi"],
            },
          }),
        }}
      />

      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </>
  );
}