import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  description: "Handcrafted glass block furniture made in Germany",
};

import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body>
        
        {/* ✅ Navbar goes here */}
       <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 flex justify-between items-center">
  
  {/* LEFT (Logo) */}
 <Link
  href="/"
  className="text-2xl font-semibold tracking-wide text-gray-900 hover:opacity-70 transition"
>
  SaMa <span className="font-light">Studio</span>
</Link>

  {/* RIGHT (Menu) */}
  <div className="flex gap-8 text-sm text-gray-600">
    <Link href="/">მთავარი</Link>
    <Link href="/shop">კოლექცია</Link>
    <Link href="/about">ჩვენ შესახებ</Link>
    <Link href="/contact">დაგვიკავშირდი</Link>
  </div>

</nav>

        {/* Pages render here */}
        {children}

      </body>
    </html>
  );
}
