import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";

export const metadata: Metadata = {
  title: "Automotive Spare Parts Division | Hyundai & Kia Genuine Parts",
  description:
    "Explore our high-volume distribution of new and used genuine replacement parts for Hyundai and Kia models, sourced directly via South Korea and Yiwu, China hubs.",
};

export default function SpareParts() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Automotive Division</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase text-center">
              Genuine Replacement Spare Parts
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              High-volume distribution channels supplying new and used genuine spare parts for Korean passenger and commercial vehicles. Directly integrated with OEM manufacturers and verified exporters.
            </p>
          </div>
        </ScrollReveal>

        {/* Division Focus: Hyundai & Kia */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">Core Specialization</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase">
                Unrivaled Supply of Hyundai & Kia Components
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  We specialize in new and used genuine replacement parts for all major Hyundai and Kia models. Our volume distribution channels cater to GCC warehouse distributors, large-scale commercial fleets, and national retail chains. By bypassing multiple broker channels, we secure high-turnover components directly from origin.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">Engine & Drivetrain</h4>
                    <p className="text-xs text-sial-gray-light mt-1">Full engines, gearboxes, pistons, and transmission components.</p>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">Suspension & Steering</h4>
                    <p className="text-xs text-sial-gray-light mt-1">Shock absorbers, linkages, control arms, and steering racks.</p>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">Electrical & Body Panels</h4>
                    <p className="text-xs text-sial-gray-light mt-1">Alternators, ECUs, headlamps, bumpers, and body moldings.</p>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">High-Wear Consumables</h4>
                    <p className="text-xs text-sial-gray-light mt-1">Brake assemblies, filtration systems, spark plugs, and gaskets.</p>
                  </HoverCard>
                </div>
              </div>

              <HoverCard className="glassmorphism p-8 rounded-xl shadow-2xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4">
                  <Image
                    src="/parts_warehouse.png"
                    alt="Genuine Hyundai and Kia automotive spare parts warehouse - SIAL Group"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 384px"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">
                  GCC Distribution Infrastructure
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-sial-gold pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-white">Oman Hub (SIAL International LLC)</h4>
                    <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                      Headquartered in Muscat with regional supply points, SIAL International LLC has a long-standing reputation for high-volume trade, supporting local commercial fleets and retailers with rapid delivery and full parts tracking.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-sial-gray-industrial pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-white">Saudi Arabia Expansion</h4>
                    <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                      Replicating our successful Oman framework, our Riyadh-based operations now distribute high-volume spare parts to retailers and corporate transit fleets throughout Saudi Arabia&apos;s major economic corridors.
                    </p>
                  </div>
                </div>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Active Subsidiary Platforms */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Active Customer Platforms</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                Our Automotive Spare Parts & Service Hubs
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
              <p className="text-xs sm:text-sm text-sial-gray-light max-w-2xl mx-auto">
                SIAL Group operates two prominent customer-facing brands in the Sultanate of Oman, providing factory-direct parts and expert repair services.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
              {/* Sial Kingdom */}
              <HoverCard className="glassmorphism p-6 rounded-2xl border border-white/5 space-y-6 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      src="/sialkingdom_workshop.png"
                      alt="Sial Kingdom Auto Workshop & Parts Service - Seeb, Muscat"
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 500px"
                    />
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-sial-gold uppercase tracking-wider">Oman Seeb Division</span>
                      <h3 className="text-xl font-bold text-white">Sial Kingdom Trading LLC</h3>
                    </div>
                    {/* Logo */}
                    <div className="bg-white px-2 py-1 rounded max-w-[120px] flex items-center justify-center border border-white/10">
                      <img src="/sialkingdom_logo.png" alt="Sial Kingdom Logo" className="object-contain h-8" />
                    </div>
                  </div>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    Sial Kingdom is a trusted auto services workshop and genuine spare parts dealer located in the Ma’abilah Industrial Area (Sanaiya), Seeb, Oman. Specializing in Kia and Hyundai vehicles, they offer everything from routine diagnostics to advanced mechanical and body repairs with direct-factory replacement components.
                  </p>
                  <ul className="text-[11px] text-sial-gray-medium space-y-1.5">
                    <li>📍 Near Abu Zaki Tile Store, Road 6, Way No 7749, Mabila&apos;h Sanaiya</li>
                    <li>📞 Call Support: +968 9192 9398</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a
                    href="https://www.sialkingdom.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block px-6 py-3 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-xs rounded transition duration-300 shadow-md gold-glow-hover"
                  >
                    Explore Sial Kingdom Site ↗
                  </a>
                </div>
              </HoverCard>

              {/* Yahya Auto Parts */}
              <HoverCard className="glassmorphism p-6 rounded-2xl border border-white/5 space-y-6 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      src="/yahyaautoparts_banner.webp"
                      alt="Yahya Auto Parts Genuine Hyundai Kia & Genesis Spare Parts"
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 500px"
                    />
                  </div>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-sial-gold uppercase tracking-wider">Global Logistics Hub</span>
                      <h3 className="text-xl font-bold text-white">Yahya Auto Parts</h3>
                    </div>
                    {/* Logo */}
                    <div className="bg-white/95 px-2.5 py-1 rounded max-w-[120px] flex items-center justify-center border border-white/10">
                      <img src="/yahyaautoparts_logo.png" alt="Yahya Auto Parts Logo" className="object-contain h-8" />
                    </div>
                  </div>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    Founded in 2006, Yahya Auto Parts (Yahya Bin Khalfan LLC) has grown into a leading wholesale and retail distributor of genuine Hyundai, Kia, and Genesis spare parts in Oman, with shipping and procurement operations spanning South Korea, China, and Pakistan.
                  </p>
                  <ul className="text-[11px] text-sial-gray-medium space-y-1.5">
                    <li>📍 Al Mabela Al Janubiyya, Block 377, Way 7749, Al Seeb, Muscat</li>
                    <li>📞 Call Support: +968 9796 9786</li>
                  </ul>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <a
                    href="https://www.yahyaautoparts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center block px-6 py-3 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-xs rounded transition duration-300 shadow-md gold-glow-hover"
                  >
                    Explore Yahya Auto Parts Site ↗
                  </a>
                </div>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Sourcing Integrity Node Section */}
        <section className="bg-sial-slate-light/40 border-y border-white/5 py-12 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="text-center space-y-2 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
                  Direct Sourcing Integrity
                </h2>
                <p className="text-xs text-sial-gray-light text-center max-w-2xl mx-auto">
                  Ensuring genuine quality from factory to fleet via our proprietary procurement nodes.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* South Korea */}
              <HoverCard className="slate-gradient p-6 rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-3xl">
                    <span>🇰🇷</span>
                    <h4 className="text-white font-bold text-base">Seoul HQ</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">SIAL & Young A Trading Co.</span>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    Our primary East Asian procurement node based in Seoul, South Korea. We coordinate directly with manufacturing hubs and authorized OEM channels to secure new parts, while inspecting and certifying used spare parts directly on-site before shipping container loadouts.
                  </p>
                </div>
              </HoverCard>

              {/* Yiwu China */}
              <HoverCard className="slate-gradient p-6 rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-3xl">
                    <span>🇨🇳</span>
                    <h4 className="text-white font-bold text-base">China Hub</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">Yiwu SIAL International Trading Co.</span>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    Located in Yiwu, the global wholesale trade capital. This hub conducts meticulous quality audits and oversees export logistics of industrial-grade replacements, ensuring that every shipment meets strict international quality criteria.
                  </p>
                </div>
              </HoverCard>

              {/* Real-Time ERP Authority */}
              <HoverCard className="slate-gradient p-6 rounded-xl flex flex-col justify-between space-y-4">
                <div className="space-y-4 font-sans">
                  <div className="relative w-full h-24 rounded-lg overflow-hidden border border-white/10 shadow-lg">
                    <Image
                      src="/erp_dashboard.png"
                      alt="Real-time industrial Odoo ERP inventory tracking dashboard - SIAL Group"
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sial-gold text-lg">⚙️</span>
                    <h4 className="text-white font-bold text-base">Real-Time ERP Tracking</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">Odoo Enterprise Integration</span>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    Leveraging our customized Odoo ERP dashboard to monitor warehouse logistics, direct-factory orders, transit shipping paths, and regional compliance audits in real-time across GCC and African corridors.
                  </p>
                </div>
              </HoverCard>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
