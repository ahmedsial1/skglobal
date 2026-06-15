import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-sial-slate-dark text-white">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sial-gold/30 bg-sial-gold/5 text-xs font-bold uppercase tracking-widest text-sial-gold animate-pulse">
            <span>🛡️ 18-Year Global Governance Legacy</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
            Global Infrastructure &{" "}
            <span className="gold-gradient-text block mt-2">Industrial Trade Excellence</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-sial-gray-light max-w-2xl mx-auto font-light leading-relaxed">
            SIAL Group coordinates multi-jurisdictional supply chains, combining heavy machinery sales, automotive spare parts distribution, and infrastructure hardware procurement.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-wider text-sm rounded-md shadow-lg transition duration-300 transform hover:-translate-y-0.5 gold-glow"
            >
              Route B2B Inquiry
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto px-8 py-4 border border-sial-gray-industrial hover:border-white text-white font-bold uppercase tracking-wider text-sm rounded-md transition duration-300"
            >
              Chairman&apos;s Biography
            </Link>
          </div>
        </div>
      </section>

      {/* Sourcing Hub Advantage Section */}
      <section className="relative py-20 bg-sial-slate-light/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Competitive Edge:{" "}
                <span className="text-sial-gold">Direct Sourcing, Zero Margins</span>
              </h2>
              <p className="text-base text-sial-gray-light leading-relaxed">
                Unlike traditional trading brokers who add layer upon layer of intermediary markup, SIAL Group operates direct, proprietary sourcing hubs located at key economic crossroads.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="text-sial-gold text-xl">🇰🇷</span>
                  <div>
                    <h4 className="text-white font-bold text-sm">Seoul, South Korea HQ Node</h4>
                    <p className="text-xs text-sial-gray-light">Direct integration with automotive and heavy spare parts manufacturers, operating via SIAL & Young A Trading Co.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-sial-gold text-xl">🇨🇳</span>
                  <div>
                    <h4 className="text-white font-bold text-sm">Yiwu, China Sourcing Node</h4>
                    <p className="text-xs text-sial-gray-light">Specialized industrial hardware and infrastructure logistics procurement network running via Yiwu SIAL International Trading Co. Ltd.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">
                Why Global Partners Choose SIAL
              </h3>
              <ul className="space-y-5 text-sm">
                <li className="flex items-center space-x-3">
                  <span className="text-sial-gold text-lg">✓</span>
                  <span>Elimination of third-party trading broker margins</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-sial-gold text-lg">✓</span>
                  <span>End-to-end quality control directly at the manufacturer level</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-sial-gold text-lg">✓</span>
                  <span>Guaranteed supply chain resilience under multi-jurisdictional governance</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="text-sial-gold text-lg">✓</span>
                  <span>18 years of cross-border trade negotiation expertise</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Divisions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Our Enterprise Divisions
          </h2>
          <p className="text-sial-gray-light max-w-2xl mx-auto">
            Explore our integrated divisions driving growth and resilience across the GCC, Africa, and East Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Heavy Machinery */}
          <div className="group slate-gradient p-8 rounded-xl border border-white/5 hover:border-sial-gold/30 transition duration-300 flex flex-col justify-between h-96 hover:shadow-2xl">
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
          </div>

          {/* Spare Parts */}
          <div className="group slate-gradient p-8 rounded-xl border border-white/5 hover:border-sial-gold/30 transition duration-300 flex flex-col justify-between h-96 hover:shadow-2xl">
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
          </div>

          {/* Hardware */}
          <div className="group slate-gradient p-8 rounded-xl border border-white/5 hover:border-sial-gold/30 transition duration-300 flex flex-col justify-between h-96 hover:shadow-2xl">
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
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sial-slate-light border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
      </section>
    </div>
  );
}
