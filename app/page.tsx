import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-sial-slate-dark text-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1} duration={0.8}>
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sial-gold/30 bg-sial-gold/5 text-xs font-bold uppercase tracking-widest text-sial-gold">
              <span>🛡️ 18-Year Global Governance Legacy</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              Multi-Jurisdictional Industrial Trading &{" "}
              <span className="gold-gradient-text block mt-2">Infrastructure Procurement</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-sial-gray-light max-w-3xl mx-auto font-light leading-relaxed">
              As an elite multinational enterprise, SIAL Group drives industrial trade excellence across global corridors. Our capabilities combine heavy construction machinery sales and crane rentals with wholesale genuine automotive parts export and A-to-Z construction site hardware procurement. By connecting direct East Asian production lines with high-demand markets in the GCC and Africa, we guarantee tier-1 quality control, supply chain resilience, and global logistics efficiency.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-sm rounded-md shadow-lg transition duration-300 transform hover:-translate-y-0.5 gold-glow"
              >
                Route B2B Inquiry
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-4 border border-sial-gray-industrial hover:border-white text-white font-bold uppercase tracking-wider text-sm rounded-md transition duration-300"
              >
                CEO Biography
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Sourcing Hub Advantage Section */}
      <section className="relative py-20 bg-sial-slate-light/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Our Competitive Edge:{" "}
                  <span className="text-sial-gold">Factory-Direct Sourcing & Zero Broker Margins</span>
                </h2>
                <p className="text-base text-sial-gray-light leading-relaxed">
                  Unlike traditional trading brokers who inflate costs with layers of intermediary markups, SIAL Group operates proprietary, factory-direct sourcing hubs at key global economic crossroads. By controlling our own international procurement networks, we guarantee direct factory pricing, absolute supply chain visibility, and premium quality assurance for global enterprises.
                </p>
                <div className="space-y-6">
                  {/* South Korea */}
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🇰🇷</span>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-base leading-snug">Strategic Automotive Procurement Hub – Seoul, South Korea</h4>
                      <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">Entity: SIAL & Young A Trading Co.</span>
                      <p className="text-xs text-sial-gray-light leading-relaxed">
                        Operating a direct B2B integration node with top-tier automotive and heavy machinery component manufacturers. We specialize in the high-volume export of wholesale genuine automotive spare parts (Hyundai, Kia, and commercial fleets) directly from Korean production lines to global markets, eliminating middleman fees.
                      </p>
                    </div>
                  </div>
                  {/* China */}
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl mt-1">🇨🇳</span>
                    <div className="space-y-1">
                      <h4 className="text-white font-bold text-base leading-snug">Premier Industrial Hardware Sourcing Node – Yiwu, China</h4>
                      <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">Entity: Yiwu SIAL International Trading Co. Ltd.</span>
                      <p className="text-xs text-sial-gray-light leading-relaxed">
                        Managing an elite, large-scale industrial procurement and infrastructure logistics network. This hub drives the direct sourcing of A-to-Z industrial hardware, heavy-duty power tools, and high-volume construction site equipment, optimized for direct bulk shipping and seamless distribution into Africa and the GCC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glassmorphism p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">
                  Why Global Partners Choose SIAL Group
                </h3>
                <ul className="space-y-6 text-xs text-sial-gray-light">
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">Direct Factory Pricing</span>
                    </div>
                    <p className="pl-6">100% elimination of third-party trading broker margins and hidden intermediary fees.</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">Strict Quality Assurance</span>
                    </div>
                    <p className="pl-6">End-to-end quality control and pre-shipment inspections performed directly at the manufacturer level.</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">Unmatched Supply Chain Resilience</span>
                    </div>
                    <p className="pl-6">Seamless multi-jurisdictional logistics and secure global distribution networks operating under robust corporate governance.</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">18+ Years of B2B Trade Expertise</span>
                    </div>
                    <p className="pl-6">Decades of cross-border trade negotiation, international procurement excellence, and multinational supply chain management.</p>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Business Divisions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our Enterprise Divisions
            </h2>
            <p className="text-sial-gray-light max-w-2xl mx-auto">
              Explore our integrated divisions driving growth and resilience across the GCC, Africa, and East Asia.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heavy Machinery */}
          <HoverCard className="group slate-gradient p-8 rounded-xl flex flex-col justify-between h-96">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">🏗️</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sial-gold transition duration-200">
                Heavy Machinery Division
              </h3>
              <p className="text-xs text-sial-gray-light leading-relaxed">
                Sales, crane fleet rentals, and spare parts distribution across Oman (SK Transports), Saudi Arabia (SIAL International Company), and Pakistan imports.
              </p>
            </div>
            <Link
              href="/machinery"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider flex items-center space-x-1 hover:text-white"
            >
              <span>Explore Division</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Spare Parts */}
          <HoverCard className="group slate-gradient p-8 rounded-xl flex flex-col justify-between h-96">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">⚙️</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sial-gold transition duration-200">
                Automotive Spare Parts
              </h3>
              <p className="text-xs text-sial-gray-light leading-relaxed">
                High-volume replacement spare parts for Hyundai and Kia models, sourced directly from South Korea and Yiwu, China networks.
              </p>
            </div>
            <Link
              href="/spare-parts"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider flex items-center space-x-1 hover:text-white"
            >
              <span>Explore Division</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Hardware */}
          <HoverCard className="group slate-gradient p-8 rounded-xl flex flex-col justify-between h-96">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">⛓️</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sial-gold transition duration-200">
                Industrial Hardware
              </h3>
              <p className="text-xs text-sial-gray-light leading-relaxed">
                Infrastructure development distribution in Mozambique, providing high-quality construction materials sourced directly from our China nodes.
              </p>
            </div>
            <Link
              href="/hardware"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider flex items-center space-x-1 hover:text-white"
            >
              <span>Explore Division</span>
              <span>→</span>
            </Link>
          </HoverCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sial-slate-light border-t border-sial-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-sial-gold">18+</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">Years Legacy</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-white">6+</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">Global Hubs</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-white">0</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">Middleman Margins</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-sial-gold">100%</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">Quality Inspected</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
