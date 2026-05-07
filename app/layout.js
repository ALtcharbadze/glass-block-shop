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
  title: "SaMa Concept Store",
  description: "Handcrafted glass block furniture",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body
  className={`${geistSans.variable} ${geistMono.variable}`}
  style={{
    background: "linear-gradient(to bottom, #d6e3ec, #b8cdd9, #f5f7f9)"
  }}
>
        <CartProvider>

          {/* Navbar GLOBAL */}
          <Navbar />
          <FloatingInstagram /> 

          {/* Page Content */}
          <div className="pt-10">
            {children}
          </div>

        </CartProvider>
      </body>
    </html>
  );
}