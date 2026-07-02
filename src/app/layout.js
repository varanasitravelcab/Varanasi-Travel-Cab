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
  metadataBase: new URL("https://cabservicesvaranasi.com"),

  title: {
    default: "Cab Services Varanasi",
    template: "%s | Cab Services Varanasi",
  },

  description:
    "Cab Services Varanasi provides airport taxi, local sightseeing taxi, outstation cab booking, railway station pickup & drop, corporate cab services and chauffeur-driven car rental in Varanasi.",

  applicationName: "Cab Services Varanasi",

  authors: [
    {
      name: "Cab Services Varanasi",
      url: "https://cabservicesvaranasi.com",
    },
  ],

  creator: "Cab Services Varanasi",

  publisher: "Cab Services Varanasi",

  category: "Travel",

  keywords: [
    "Cab Services Varanasi",
    "Taxi Service in Varanasi",
    "Car Rental in Varanasi",
    "Airport Taxi Varanasi",
    "Airport Cab Varanasi",
    "Local Taxi Varanasi",
    "Outstation Cab",
    "Railway Station Taxi",
    "Corporate Taxi",
    "Tempo Traveller",
    "Innova Crysta Rental",
    "Ertiga Rental",
    "Taxi Booking Varanasi",
    "Cab Booking Varanasi",
  ],

  alternates: {
    canonical: "https://cabservicesvaranasi.com",
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

    url: "https://cabservicesvaranasi.com",

    siteName: "Cab Services Varanasi",

    title:
      "Cab Services Varanasi | Airport Taxi, Local Taxi & Car Rental",

    description:
      "Book affordable airport taxi, local sightseeing taxi, outstation cab and chauffeur-driven car rental in Varanasi.",

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
      "Affordable airport taxi, local sightseeing and outstation cab booking in Varanasi.",

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
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />

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