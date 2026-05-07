import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import FloatingInstagram from './components/FloatingInstagram'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {

  metadataBase: new URL("https://glass-block-shop.vercel.app"),

  title: "SaMa Concept Store | Handmade Glass Block Furniture",

  description:
    "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

  openGraph: {

    title: "SaMa Concept Store | Handmade Glass Block Furniture",

    description:
      "ხელნაკეთი დიზაინერული მინის ავეჯი და ინტერიერის ობიექტები საქართველოში.",

    url: "https://glass-block-shop.vercel.app",

    siteName: "SaMa Concept Store",

    images: [
      {
        url: "/og-image.jpg",
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
    images: ["/og-image.jpg"],
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
      </body>
    </html>
  );
}