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
  metadataBase: new URL("https://sk-nutrition-black.vercel.app"),
  title: "S.K NUTRITION | Official Store - Peakvitals Nutrition Pre-Workout",
  description:
    "Buy 100% authentic Peakvitals Pre-Workout supplements at S.K NUTRITION, Ravi Nagar, Mughalsarai, Chandauli. High-stimulant, explosive nitric oxide muscle pumps, All India Express Delivery & Cash on Delivery (COD).",
  keywords: [
    "S.K Nutrition",
    "Peakvitals Nutrition",
    "Peakvitals Pre-Workout",
    "Pre Workout Mughalsarai",
    "Supplements Chandauli",
    "Gym Supplements Ravi Nagar",
    "Cash on Delivery Supplements",
    "Authentic Supplements",
  ],
  authors: [{ name: "S.K Nutrition", url: "https://sk-nutrition-black.vercel.app" }],
  creator: "S.K Nutrition",
  publisher: "S.K Nutrition",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://sk-nutrition-black.vercel.app",
    siteName: "S.K NUTRITION",
    title: "S.K NUTRITION | Official Peakvitals Pre-Workout Store",
    description:
      "100% Genuine Peakvitals Pre-Workout • Ravi Nagar, Mughalsarai • All India Express Delivery & Cash on Delivery (COD) Available.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "S.K NUTRITION Peakvitals Pre-Workout Store",
        type: "image/jpeg",
      },
      {
        url: "/logo-square.jpg",
        width: 500,
        height: 500,
        alt: "S.K NUTRITION Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "S.K NUTRITION | Official Peakvitals Pre-Workout Store",
    description:
      "100% Genuine Peakvitals Pre-Workout • Ravi Nagar, Mughalsarai • Cash on Delivery (COD).",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-square.jpg",
  },
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
