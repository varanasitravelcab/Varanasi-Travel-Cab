import Script from "next/script";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import Cursor from "../../components/Cursor";
import SmoothScroll from "../../components/SmoothScroll";
import Whatsapp from "../../components/Whatsapp";
import Call from "../../components/Call";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.varanasitravelcab.com"),

  title: {
    default: "Varanasi Travel Cab",
    template: "%s",
  },

  description:
    "Varanasi Travel Cab offers reliable taxi services in Varanasi including airport transfers, local sightseeing, outstation cabs, one-way taxi, railway station pickup & drop, corporate travel, and chauffeur-driven car rental across India.",

  applicationName: "Varanasi Travel Cab",

  authors: [
    {
      name: "Varanasi Travel Cab",
      url: "https://www.varanasitravelcab.com",
    },
  ],

  creator: "Varanasi Travel Cab",

  publisher: "Varanasi Travel Cab",

  category: "Travel",

  keywords: [
    "Varanasi Travel Cab",
    "Cab Service Varanasi",
    "Taxi Service Varanasi",
    "Best Taxi Service in Varanasi",
    "Car Rental Varanasi",
    "Airport Taxi Varanasi",
    "Airport Transfer Varanasi",
    "Local Sightseeing Varanasi",
    "Outstation Cab Varanasi",
    "One Way Cab Varanasi",
    "Railway Station Pickup Varanasi",
    "Varanasi Airport Taxi",
    "Car Hire Varanasi",
    "Tempo Traveller Varanasi",
    "Innova Crysta Rental Varanasi",
    "Ertiga Rental Varanasi",
    "Cab Booking Varanasi",
    "Taxi Booking Varanasi",
    "Ayodhya Taxi",
    "Prayagraj Taxi",
    "Bodh Gaya Taxi",
  ],
  alternates: {
    canonical: "https://www.varanasitravelcab.com",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.varanasitravelcab.com",
    siteName: "Varanasi Travel Cab",

    title:
      "Varanasi Travel Cab | Taxi Service, Airport Transfer & Car Rental",

    description:
      "Book affordable taxi services in Varanasi for airport transfers, local sightseeing, outstation trips, one-way cabs and chauffeur-driven car rentals.",

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
    title: "Varanasi Travel Cab | Taxi Service, Airport Transfer & Car Rental",
    description:
      "Book affordable taxi services in Varanasi for airport transfers, local sightseeing, outstation trips, one-way cabs and chauffeur-driven car rentals.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/favicon.ico",
      },
      {
        url: "/logo.png",
        type: "image/png",
      },
    ],

    shortcut: "/favicon.ico",

    apple: "/logo.png",
  },

  verification: {
    // Add after verification
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SBQTX18BJ9"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SBQTX18BJ9');
          `}
        </Script>

        {/* Google Site Verification */}
        {/*
        <meta
          name="google-site-verification"
          content="YOUR_VERIFICATION_CODE"
        />
        */}
      </head>

      <body
        className={`bg-white ${openSans.variable} scroll-smooth font-opensans`}
      >
        {children}

        <Cursor />
        <SmoothScroll />
        <Whatsapp />
        <Call />

        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/js/all.min.js"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </body>
    </html>
  );
}