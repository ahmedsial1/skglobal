"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Machinery() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24 relative overflow-hidden font-sans">
      {/* Floating Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-sial-blue/10 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-[55%] right-[-15%] w-[35rem] h-[35rem] rounded-full bg-sial-gold/10 blur-[120px] z-0 animate-blob-2 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-400/8 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Full-Page Background Image with Low Opacity */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-cover bg-center md:bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/oman_cranes.png')" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16 sm:space-y-24">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sial-blue/20 bg-sial-blue/5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-sial-blue mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sial-blue animate-pulse"></span>
              {t("machinery.titleBadge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase font-heading leading-tight">
              {t("machinery.heading")}
            </h1>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-sial-blue to-sial-gold rounded-full"></div>
              <div className="h-2 w-2 bg-sial-gold rounded-full"></div>
              <div className="h-1 w-16 bg-gradient-to-l from-sial-blue to-sial-gold rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto pt-2">
              {t("machinery.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Oman (SK Transports Oman) */}
        <ScrollReveal delay={0.15}>
          <section
            className="border border-slate-800/80 p-6 sm:p-10 md:p-14 rounded-3xl relative overflow-hidden shadow-2xl bg-slate-950/95 backdrop-blur-xl transition-all duration-300"
          >
            
            <div className="space-y-12 sm:space-y-16 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Info Column */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                        {t("machinery.omanBadge")}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-[10px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        PDO Approved
                      </span>
                      <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider font-sans">
                        SK Transports Oman
                      </span>
                    </div>
                    <div className="bg-white/95 px-4 py-1.5 rounded-xl border border-slate-700/50 flex items-center justify-center max-w-[130px] shadow-md transition duration-300 hover:bg-white">
                      <Image src="/sktransportsoman_logo.png" alt="SK Transports Logo" width={130} height={28} className="object-contain h-7 w-auto" />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight font-heading leading-tight">
                    {t("machinery.omanTitle")}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed text-justify font-sans">
                    {t("machinery.omanDesc")}
                  </p>
                  
                  {/* Oman Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[t("machinery.omanFeature1"), t("machinery.omanFeature2"), t("machinery.omanFeature3")].map((feat, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2.5 px-4 py-3 bg-slate-900/60 backdrop-blur-md rounded-xl border border-slate-800 shadow-sm hover:border-slate-700 transition duration-300"
                      >
                        <svg className="w-4 h-4 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-xs font-bold text-slate-200 leading-none">{feat}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <a
                      href="https://www.sktransportsoman.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="oman-cta-btn"
                      className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto text-center"
                    >
                      <span>{t("machinery.omanCta")}</span>
                    </a>
                  </div>
                </div>

                {/* Featured Image Column */}
                <div className="lg:col-span-5 flex justify-center w-full">
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl group cursor-pointer">
                    <Image
                      src="/sktransportsoman_hero.png"
                      alt="Massive yellow mobile truck crane operating on GCC construction site - SK Transports Oman"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-w-768px) 100vw, 420px"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60"></div>
                    <div className="absolute bottom-4 left-4 bg-slate-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-slate-800 text-[10px] text-slate-300 font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      Flagship Mobile Fleet
                    </div>
                  </div>
                </div>
              </div>

              {/* Fleet Gallery */}
              <div className="border-t border-slate-800/80 pt-10 space-y-6">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="space-y-1">
                    <h3 className="text-xs uppercase tracking-widest font-black text-blue-400">
                      {t("machinery.fleetTitle")}
                    </h3>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
                      Heavy Lifting Systems
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    {t("machinery.fleetBadge")}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <HoverCard className="p-4 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 space-y-4 shadow-xl transition-all duration-300 hover:border-slate-700/85 hover:bg-slate-900/60">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 group">
                      <Image
                        src="/sktransportsoman_fleet_350t.png"
                        alt="SANY SAC 3500 Mobile Crane - 350T Capacity"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                      <div className="absolute top-2 right-2 bg-sial-blue/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                        Active
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-white font-extrabold text-sm tracking-tight">SANY SAC 3500</h4>
                        <p className="text-xs text-slate-400 mt-0.5 font-medium">350T Lift Capacity Mobile Crane</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-sans border-t border-slate-800/60 pt-3">
                        <div className="flex justify-between border-b border-slate-800/40 pb-1.5 pr-1">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Capacity:</span>
                          <span className="font-extrabold text-blue-400">350 Ton</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800/40 pb-1.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Boom:</span>
                          <span className="font-extrabold text-slate-200">70m</span>
                        </div>
                        <div className="flex justify-between pr-1 pt-0.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Axles:</span>
                          <span className="font-extrabold text-slate-200">6</span>
                        </div>
                        <div className="flex justify-between pt-0.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Status:</span>
                          <span className="font-extrabold text-emerald-400">PDO Approved</span>
                        </div>
                      </div>
                    </div>
                  </HoverCard>

                  {/* Card 2 */}
                  <HoverCard className="p-4 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 space-y-4 shadow-xl transition-all duration-300 hover:border-slate-700/85 hover:bg-slate-900/60">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 group">
                      <Image
                        src="/sktransportsoman_fleet_220t.jpg"
                        alt="SANY SAC 2200 Mobile Crane - 220T Capacity"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                      <div className="absolute top-2 right-2 bg-sial-blue/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                        Active
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-white font-extrabold text-sm tracking-tight">SANY SAC 2200</h4>
                        <p className="text-xs text-slate-400 mt-0.5 font-medium">220T Lift Capacity Mobile Crane</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-sans border-t border-slate-800/60 pt-3">
                        <div className="flex justify-between border-b border-slate-800/40 pb-1.5 pr-1">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Capacity:</span>
                          <span className="font-extrabold text-blue-400">220 Ton</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800/40 pb-1.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Boom:</span>
                          <span className="font-extrabold text-slate-200">62m</span>
                        </div>
                        <div className="flex justify-between pr-1 pt-0.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Axles:</span>
                          <span className="font-extrabold text-slate-200">5</span>
                        </div>
                        <div className="flex justify-between pt-0.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Status:</span>
                          <span className="font-extrabold text-emerald-400">PDO Approved</span>
                        </div>
                      </div>
                    </div>
                  </HoverCard>

                  {/* Card 3 */}
                  <HoverCard className="p-4 bg-slate-900/40 backdrop-blur-md rounded-2xl border border-slate-800/80 space-y-4 shadow-xl transition-all duration-300 hover:border-slate-700/85 hover:bg-slate-900/60">
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-800 group">
                      <Image
                        src="/sktransportsoman_fleet_160t.png"
                        alt="SANY STC 1600 Mobile Crane - 160T Capacity"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                      <div className="absolute top-2 right-2 bg-sial-blue/90 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                        Active
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-white font-extrabold text-sm tracking-tight">SANY STC 1600</h4>
                        <p className="text-xs text-slate-400 mt-0.5 font-medium">160T Lift Capacity Mobile Crane</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 font-sans border-t border-slate-800/60 pt-3">
                        <div className="flex justify-between border-b border-slate-800/40 pb-1.5 pr-1">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Capacity:</span>
                          <span className="font-extrabold text-blue-400">160 Ton</span>
                        </div>
                        <div className="flex justify-between border-b border-slate-800/40 pb-1.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Boom:</span>
                          <span className="font-extrabold text-slate-200">58m</span>
                        </div>
                        <div className="flex justify-between pr-1 pt-0.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Axles:</span>
                          <span className="font-extrabold text-slate-200">4</span>
                        </div>
                        <div className="flex justify-between pt-0.5">
                          <span className="text-slate-500 uppercase tracking-wider font-extrabold">Status:</span>
                          <span className="font-extrabold text-emerald-400">PDO Approved</span>
                        </div>
                      </div>
                    </div>
                  </HoverCard>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Saudi Arabia & Pakistan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Saudi Arabia (SIAL International Company) */}
          <HoverCard className="bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Saudi Crane Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-slate-200">
                  <Image
                    src="/saudi_machinery.png"
                    alt="High-capacity truck mobile cranes sales and rentals - SIAL International Saudi Arabia"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-w-768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50"></div>
                  <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded border border-slate-200/80 text-[10px] text-slate-700 font-extrabold uppercase tracking-widest shadow-sm">
                    Jeddah Fleet Node
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center space-x-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-sial-blue/5 border border-sial-blue/15 text-[10px] sm:text-xs font-bold text-sial-blue uppercase tracking-wider">
                      {t("machinery.saBadge")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider font-sans">
                      SIAL International Company
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading leading-snug">
                    {t("machinery.saTitle")}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 text-justify leading-relaxed font-sans font-light">
                    {t("machinery.saDesc")}
                  </p>
                  
                  {/* Features List */}
                  <ul className="text-xs text-slate-655 space-y-3 pt-2 font-sans border-t border-slate-100/80">
                    {[t("machinery.saFeature1"), t("machinery.saFeature2"), t("machinery.saFeature3")].map((feat, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-sial-blue/10 flex items-center justify-center text-sial-blue font-bold text-[10px] mt-0.5">
                          ✓
                        </span>
                        <span className="font-semibold text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Card Footer Button */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <Link
                  href="/contact?region=saudi"
                  id="saudi-cta-link"
                  className="group inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-sial-blue hover:text-white hover:border-sial-blue transition duration-300 w-full text-center shadow-sm"
                >
                  <span>{t("machinery.saCta")}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </HoverCard>

          {/* Pakistan Operations (SIAL International Pakistan Pvt Ltd) */}
          <HoverCard className="bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="flex flex-col h-full justify-between">
              <div>
                {/* Pakistan Machinery Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden border-b border-slate-200">
                  <Image
                    src="/pakistan_machinery.png"
                    alt="High-performance construction and agricultural machinery imports - SIAL International Pakistan"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-w-768px) 100vw, 500px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50"></div>
                  <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded border border-slate-200/80 text-[10px] text-slate-700 font-extrabold uppercase tracking-widest shadow-sm">
                    Lahore Import Node
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center space-x-2.5">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-sial-blue/5 border border-sial-blue/15 text-[10px] sm:text-xs font-bold text-sial-blue uppercase tracking-wider">
                      {t("machinery.pkBadge")}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500 font-bold uppercase tracking-wider font-sans">
                      SIAL International Pakistan Pvt Ltd
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-heading leading-snug">
                    {t("machinery.pkTitle")}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 text-justify leading-relaxed font-sans font-light">
                    {t("machinery.pkDesc")}
                  </p>
                  
                  {/* Features List */}
                  <ul className="text-xs text-slate-655 space-y-3 pt-2 font-sans border-t border-slate-100/80">
                    {[t("machinery.pkFeature1"), t("machinery.pkFeature2"), t("machinery.pkFeature3")].map((feat, i) => (
                      <li key={i} className="flex items-start space-x-3">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-sial-blue/10 flex items-center justify-center text-sial-blue font-bold text-[10px] mt-0.5">
                          ✓
                        </span>
                        <span className="font-semibold text-slate-700">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Card Footer Button */}
              <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                <Link
                  href="/contact?region=pakistan"
                  id="pakistan-cta-link"
                  className="group inline-flex items-center justify-center space-x-2 px-6 py-3.5 bg-slate-50 border border-slate-200 text-slate-800 font-extrabold uppercase tracking-widest text-xs rounded-xl hover:bg-sial-blue hover:text-white hover:border-sial-blue transition duration-300 w-full text-center shadow-sm"
                >
                  <span>{t("machinery.pkCta")}</span>
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </Link>
              </div>
            </div>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}

