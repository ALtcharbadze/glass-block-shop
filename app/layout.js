import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SaMa Studio",
  description: "Handcrafted glass block furniture",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CartProvider>

          {/* Navbar GLOBAL */}
          <Navbar />

          {/* Page Content */}
          <div className="pt-10">
            {children}
          </div>

        </CartProvider>
      </body>
    </html>
  );
}