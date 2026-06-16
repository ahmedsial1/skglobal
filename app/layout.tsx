import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const spaceGrotesque = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesque",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plus-jakarta-sans",
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
    <html lang="en" className={`${spaceGrotesque.variable} ${plusJakartaSans.variable} min-h-screen`}>
      <body className="font-sans antialiased flex flex-col min-h-screen bg-sial-slate-dark text-slate-100 selection:bg-sial-gold selection:text-sial-slate-dark">
        <LanguageProvider>
          <Navbar />
          {/* Main layout container with top padding to prevent fixed navbar overlap */}
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
