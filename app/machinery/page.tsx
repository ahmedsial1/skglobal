import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";

export const metadata: Metadata = {
  title: "Heavy Machinery Division | Crane Sales & Rentals",
  description:
    "Explore SIAL Group's Heavy Machinery capabilities, featuring crane rental leaders SK Transports Oman, SIAL International Company in Saudi Arabia, and SIAL International Pakistan's machinery imports.",
};

export default function Machinery() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Division Profiling</span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Heavy Machinery & Fleet Logistics
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2">
              Providing heavy lift mobile cranes, construction vehicles, and heavy-duty spare parts. Our division operates across three key regional hubs under strict quality assurance.
            </p>
          </div>
        </ScrollReveal>

        {/* Oman (SK Transports Oman) */}
        <ScrollReveal delay={0.15}>
          <section className="glassmorphism p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sial-gold/5 rounded-full blur-3xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">🇴🇲 Oman Operations</span>
                  <span className="text-xs text-sial-gray-light font-semibold">SK Transports Oman</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  GCC Leadership in Mobile Crane Sales & Rentals
                </h2>
                <p className="text-sm text-sial-gray-light leading-relaxed">
                  For over a decade, SK Transports Oman has been the gold standard for heavy lifting solutions in the Sultanate of Oman. Specializing in high-capacity truck-mounted cranes, mobile telescopic cranes, and crawler cranes, we serve major oil & gas pipelines, marine cargo projects, and urban infrastructure developments.
                </p>
                <div className="flex flex-wrap gap-4 text-xs font-semibold text-sial-gray-light">
                  <span className="px-3 py-1 bg-sial-slate-dark rounded-full border border-white/5">✓ 25 to 500 Ton Lift Capacity</span>
                  <span className="px-3 py-1 bg-sial-slate-dark rounded-full border border-white/5">✓ OPAL Certified Operators</span>
                  <span className="px-3 py-1 bg-sial-slate-dark rounded-full border border-white/5">✓ 24/7 Site Support</span>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-end">
                <a
                  href="https://www.sktransportsoman.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center inline-block px-6 py-4 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-sm rounded-md shadow-lg transition duration-300 transform hover:-translate-y-1 gold-glow"
                >
                  Visit SK Transports Oman Site ↗
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Saudi Arabia & Pakistan Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Saudi Arabia (SIAL International Company) */}
          <HoverCard className="slate-gradient p-8 rounded-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">🇸🇦 Saudi Arabia Expansion</span>
                <span className="text-xs text-sial-gray-light font-semibold">SIAL International Company</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Newly Launched Rental Fleet & Heavy Spare Parts
              </h3>
              <p className="text-xs sm:text-sm text-sial-gray-light leading-relaxed">
                Expanding SIAL&apos;s footprint into Riyadh and the Eastern Province to support the massive Vision 2030 development pipelines. SIAL International Company offers truck mobile cranes sales, long-term fleet rentals, and high-quality heavy spare parts distribution.
              </p>
              <ul className="text-xs text-sial-gray-light space-y-2 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>Direct parts replacement from South Korea networks</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>Mobile crane maintenance and rigging services</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>Compliance with SASO & Saudi oil-field safety standards</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?region=saudi"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider hover:text-white flex items-center space-x-1"
            >
              <span>Request Quote for Saudi</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Pakistan Operations (SIAL International Pakistan Pvt Ltd) */}
          <HoverCard className="slate-gradient p-8 rounded-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">🇵🇰 Pakistan Operations</span>
                <span className="text-xs text-sial-gray-light font-semibold">SIAL International Pakistan Pvt Ltd</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                East Asian Procurement Node & Regional Import
              </h3>
              <p className="text-xs sm:text-sm text-sial-gray-light leading-relaxed">
                Large-scale import and regional distribution of high-performance construction machinery and specialized agricultural equipment. Sourced directly from our East Asian networks, we eliminate third-party margins to supply heavy machinery directly to Pakistani contractors and farming enterprises.
              </p>
              <ul className="text-xs text-sial-gray-light space-y-2 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>Crawler tractors and harvest loaders</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>Specialized agricultural seeding machinery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>Direct import from South Korea and Yiwu procurement hubs</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?region=pakistan"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider hover:text-white flex items-center space-x-1"
            >
              <span>Inquire Pakistan Imports</span>
              <span>→</span>
            </Link>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}
