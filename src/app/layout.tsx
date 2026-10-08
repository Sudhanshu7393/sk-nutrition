import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S.K NUTRITION | Official Store - Peakvitals Nutrition | Ravi Nagar Mughalsarai",
  description:
    "Buy 100% authentic whey protein, mass gainers, creatine, and pre-workout supplements at S.K NUTRITION, Ravi Nagar, Mughalsarai, Chandauli. Authorised Peakvitals Nutrition distributor. Same-day local delivery & batch verification.",
  keywords: [
    "S.K Nutrition",
    "Peakvitals Nutrition",
    "Supplements Mughalsarai",
    "Whey Protein Chandauli",
    "Gym Supplements Ravi Nagar",
    "Mass Gainer Mughalsarai",
    "Creatine Varanasi",
    "Authentic Supplements",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth light`}
    >
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-zinc-900 selection:bg-lime-400 selection:text-black transition-colors duration-300">
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
