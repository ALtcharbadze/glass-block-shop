import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import FloatingInstagram from "./components/FloatingInstagram";
import PageTransition from "./components/PageTransition";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.samaconceptstore.ge"),

  title: {
    default:
      "SaMa Concept Store | Handmade Glass Block Furniture",

    template:
      "%s | SaMa Concept Store",
  },

  description:
    "SaMa Concept Store - ხელნაკეთი ნივთები რომლებიც გარდაქმნიან სივრცეს, ახალი სიცოცხლე თანამედროვე გარემოსთვის Handcrafted in Georgia",

  keywords: [
    "SaMa Concept Store",
    "Glass Furniture",
    "Glass Block Furniture",
    "Handmade Furniture",
    "Luxury Interior Design",
    "Modern Furniture Georgia",
    "Designer Furniture",
    "Interior Objects",
    "Glass Block Table",
    "Furniture Tbilisi",
    "უნიკალური ავეჯი",
    "ხელნაკეთი ავეჯი",
    "მინის ავეჯი",
    "დიზაინერული ავეჯი",
    "ინტერიერის ობიექტები",
    "საქართველოში ავეჯი",
    "თანამედროვე ავეჯი",
    "ლუქს ინტერიერი",
    "ვინტაჟური დიზაინი",
  ],

  authors: [
    {
      name: "SaMa Concept Store",
    },
  ],

  creator: "SaMa Concept Store",

  publisher: "SaMa Concept Store",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  openGraph: {
    title:
      "SaMa Concept Store | Handmade Glass Block Furniture",

    description:
      "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

    url: "https://www.samaconceptstore.ge",

    siteName: "SaMa Concept Store",

    locale: "ka_GE",

    type: "website",

    images: [
      {
        url: "https://www.samaconceptstore.ge/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "SaMa Concept Store",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "SaMa Concept Store | Handmade Glass Block Furniture",

    description:
      "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

    images: [
      "https://www.samaconceptstore.ge/og-image.jpg",
    ],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical:
      "https://www.samaconceptstore.ge",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="ka"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased app-body`}
      >

        {/* GOOGLE SEO STRUCTURED DATA */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context":
                "https://schema.org",

              "@type": "Store",

              name:
                "SaMa Concept Store",

              url:
                "https://www.samaconceptstore.ge",

              logo:
                "https://www.samaconceptstore.ge/logo.jpg",

              image:
                "https://www.samaconceptstore.ge/og-image.jpg",

              description:
                "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

              address: {
                "@type":
                  "PostalAddress",

                addressCountry:
                  "GE",
              },

              sameAs: [
                "https://www.instagram.com/sama.conceptstore",
              ],
            }),
          }}
        />

        <CartProvider>

          <Navbar />

          <main className="pt-10 min-h-screen page-transition">

            <PageTransition>

              {children}

            </PageTransition>

          </main>

          <FloatingInstagram />

        </CartProvider>

        <Analytics />

        <SpeedInsights />

      </body>
    </html>
  );
}