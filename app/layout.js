import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import FloatingInstagram from './components/FloatingInstagram'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

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

  title: "SaMa Concept Store | Handmade Glass Block Furniture",

  description:
    "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

openGraph: {
  title: "SaMa Concept Store | Handmade Glass Block Furniture",

  description:
    "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

  url: "https://www.samaconceptstore.ge",

  siteName: "SaMa Concept Store",

  images: [
    {
      url: "https://www.samaconceptstore.ge/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "SaMa Concept Store",
    },
  ],

  locale: "ka_GE",
  type: "website",
},

  twitter: {
    card: "summary_large_image",
    title: "SaMa Concept Store",
    description:
      "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",
    images: ["https://www.samaconceptstore.ge/og-image.jpg"],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
        style={{
          background:
            "linear-gradient(to bottom, #d6e3ec, #b8cdd9, #f5f7f9)",
        }}
      >
        <CartProvider>

          <Navbar />
          <FloatingInstagram />

          <div className="pt-10">
            {children}
          </div>

        </CartProvider>
        <CartProvider>

  <Navbar />
  <FloatingInstagram />

  <div className="pt-10">
    {children}
  </div>

</CartProvider>

<Analytics />
<SpeedInsights />
      </body>
    </html>
  );
}