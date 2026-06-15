import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | SIAL Group Global Enterprise",
    default: "SIAL Group | Global Enterprise Platform",
  },
  description:
    "SIAL Group is a multi-jurisdictional industrial leader with an 18-year legacy in Heavy Machinery sales and rentals, Automotive Spare Parts distribution, and Industrial Hardware supply. Driven by direct sourcing hubs in South Korea & China.",
  keywords: [
    "SIAL Group",
    "Heavy Machinery",
    "Hyundai Kia spare parts",
    "Oman cranes rental",
    "SK Transports Oman",
    "Saudi Arabia heavy spare parts",
    "SIAL International",
    "Mozambique hardware distribution",
  ],
  authors: [{ name: "SIAL Group" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full`}>
      <body className="font-sans antialiased flex flex-col min-h-full bg-sial-slate-dark text-slate-100 selection:bg-sial-gold selection:text-sial-slate-dark">
        <Navbar />
        {/* Main layout container with top padding to prevent fixed navbar overlap */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
