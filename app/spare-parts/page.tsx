"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage } from "@/context/LanguageContext";

export default function SpareParts() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24 relative overflow-hidden font-sans">
      {/* Floating Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-sial-blue/10 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-[50%] right-[-15%] w-[35rem] h-[35rem] rounded-full bg-sial-gold/10 blur-[120px] z-0 animate-blob-2 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-400/8 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.22] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Full-Page Background Image with Low Opacity (YSIT Brand Packaging) */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] bg-cover bg-center md:bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/ysit_packaging.png')" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16 sm:space-y-24">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sial-blue/20 bg-sial-blue/5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-sial-blue mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-sial-blue animate-pulse"></span>
              {t("parts.badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase font-heading leading-tight">
              {t("parts.heading")}
            </h1>
            <div className="flex justify-center items-center gap-2 mt-4">
              <div className="h-1 w-16 bg-gradient-to-r from-sial-blue to-sial-gold rounded-full"></div>
              <div className="h-2 w-2 bg-sial-gold rounded-full"></div>
              <div className="h-1 w-16 bg-gradient-to-l from-sial-blue to-sial-gold rounded-full"></div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-2xl mx-auto pt-2">
              {t("parts.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Division Focus: Hyundai & Kia */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-sial-blue/5 border border-sial-blue/15 text-[10px] sm:text-xs font-bold text-sial-blue uppercase tracking-wider">
                {t("parts.specBadge")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight font-heading leading-snug">
                {t("parts.specHeading")}
              </h2>
              <div className="h-0.5 w-16 bg-sial-blue mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Categories List */}
              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm text-slate-655 leading-relaxed text-justify font-sans font-light">
                  {t("parts.specDesc")}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Category 1 */}
                  <HoverCard className="bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-sial-blue/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-sial-blue/5 group-hover:bg-sial-blue/10 transition-colors duration-300">
                          <svg className="w-5 h-5 text-sial-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-black text-sm tracking-tight leading-snug">{t("parts.cat1Title")}</h4>
                      </div>
                      <p className="text-xs text-slate-550 leading-relaxed font-light">{t("parts.cat1Desc")}</p>
                    </div>
                  </HoverCard>
                  
                  {/* Category 2 */}
                  <HoverCard className="bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-sial-blue/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-sial-blue/5 group-hover:bg-sial-blue/10 transition-colors duration-300">
                          <svg className="w-5 h-5 text-sial-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <circle cx="12" cy="12" r="9" />
                            <circle cx="12" cy="12" r="3" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v6M12 15v6M3 12h6M15 12h6" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-black text-sm tracking-tight leading-snug">{t("parts.cat2Title")}</h4>
                      </div>
                      <p className="text-xs text-slate-550 leading-relaxed font-light">{t("parts.cat2Desc")}</p>
                    </div>
                  </HoverCard>

                  {/* Category 3 */}
                  <HoverCard className="bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-sial-blue/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-sial-blue/5 group-hover:bg-sial-blue/10 transition-colors duration-300">
                          <svg className="w-5 h-5 text-sial-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-black text-sm tracking-tight leading-snug">{t("parts.cat3Title")}</h4>
                      </div>
                      <p className="text-xs text-slate-550 leading-relaxed font-light">{t("parts.cat3Desc")}</p>
                    </div>
                  </HoverCard>

                  {/* Category 4 */}
                  <HoverCard className="bg-slate-50/50 hover:bg-white border border-slate-200/80 hover:border-sial-blue/40 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-sial-blue/5 group-hover:bg-sial-blue/10 transition-colors duration-300">
                          <svg className="w-5 h-5 text-sial-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                          </svg>
                        </div>
                        <h4 className="text-slate-900 font-black text-sm tracking-tight leading-snug">{t("parts.cat4Title")}</h4>
                      </div>
                      <p className="text-xs text-slate-550 leading-relaxed font-light">{t("parts.cat4Desc")}</p>
                    </div>
                  </HoverCard>
                </div>
              </div>

              {/* Right Column: Infrastructure Card */}
              <HoverCard className="bg-slate-950 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-2xl lg:col-span-5 space-y-6 relative overflow-hidden group text-white">
                {/* Gradient Highlights */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-sial-blue/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-sial-gold/5 rounded-full blur-3xl pointer-events-none"></div>
                
                {/* Photo frame */}
                <div className="relative w-full h-52 rounded-2xl overflow-hidden border border-slate-800 shadow-lg group">
                  <Image
                    src="/parts_warehouse.png"
                    alt="Genuine Hyundai and Kia automotive spare parts warehouse - SIAL Group"
                    fill
                    className="object-cover transition-transform duration-750 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 380px"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-85"></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg text-[9px] font-black uppercase tracking-wider text-sial-gold shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sial-gold animate-pulse"></span>
                    OEM Distribution
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider font-heading leading-tight flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-gradient-to-b from-sial-blue to-sial-gold rounded-full"></span>
                    {t("parts.infraHeading")}
                  </h3>
                  <div className="h-[1px] w-full bg-slate-800/80"></div>
                </div>
                
                <div className="space-y-6 relative pl-3 border-l-2 border-slate-800">
                  {/* Oman Hub */}
                  <div className="relative space-y-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    <div className="absolute -left-[19px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-sial-blue flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-sial-blue animate-ping absolute"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-sial-blue"></div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-black text-slate-100 uppercase tracking-wide">{t("parts.infraOmanTitle")}</h4>
                      <span className="text-[8px] font-bold text-sial-blue bg-sial-blue/10 border border-sial-blue/20 px-2 py-0.5 rounded uppercase tracking-widest">Muscat HQ</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed text-justify font-light">
                      {t("parts.infraOmanDesc")}
                    </p>
                  </div>
                  
                  {/* Saudi Arabia Expansion */}
                  <div className="relative space-y-1.5 group-hover:translate-x-1 transition-transform duration-300">
                    <div className="absolute -left-[19px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-950 border-2 border-sial-gold flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-sial-gold animate-ping absolute"></div>
                      <div className="w-1.5 h-1.5 rounded-full bg-sial-gold"></div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="text-sm font-black text-slate-100 uppercase tracking-wide">{t("parts.infraSaTitle")}</h4>
                      <span className="text-[8px] font-bold text-sial-gold bg-sial-gold/10 border border-sial-gold/20 px-2 py-0.5 rounded uppercase tracking-widest">Jeddah Hub</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed text-justify font-light">
                      {t("parts.infraSaDesc")}
                    </p>
                  </div>
                </div>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Proprietary Brand Highlight: YSIT® */}
        <section className="space-y-8">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase font-heading">
              Proprietary Brand Profile
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-sial-blue to-sial-gold mx-auto mt-2 rounded-full"></div>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-6 sm:p-10 md:p-12 rounded-3xl max-w-5xl mx-auto shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="absolute top-[-20%] right-[-10%] w-[25rem] h-[25rem] rounded-full bg-sial-blue/15 blur-[80px] z-0 pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 sm:gap-12 relative z-10">
              {/* Brand Logo Display */}
              <div className="flex-shrink-0 bg-gradient-to-br from-white to-slate-200 border border-slate-300 p-6 rounded-2xl w-full md:w-52 aspect-square flex flex-col items-center justify-center shadow-xl transform hover:scale-105 transition-all duration-500">
                <span className="text-4xl sm:text-5xl font-black text-sial-blue tracking-widest font-sans">YSIT®</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-2">Proprietary Brand</span>
              </div>

              {/* Brand Info */}
              <div className="space-y-5 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
                    YSIT OEM Alternatives
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight font-heading leading-tight">
                    YSIT® AUTOMOTIVE COMPONENT SYSTEM
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed text-justify font-sans font-light">
                    YSIT® is SIAL Group&apos;s premium proprietary automotive brand, delivering high-performance, factory-certified replacement parts and mechanical components for Hyundai, Kia, and commercial transport fleets. Engineered to meet strict international durability metrics, YSIT® components undergo rigorous pre-shipment inspections and thickness audits to guarantee maximum reliability. By establishing direct factory integration and shipping channels from South Korea, YSIT® offers global enterprises a robust, cost-effective alternative to standard OEM parts by completely eliminating third-party broker margins.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <span className="px-3.5 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-[11px] font-bold text-slate-200">✓ Factory Certified</span>
                  <span className="px-3.5 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-[11px] font-bold text-slate-200">✓ 100% Quality Inspected</span>
                  <span className="px-3.5 py-1.5 bg-slate-900/80 border border-slate-800 rounded-lg text-[11px] font-bold text-slate-200">✓ Zero Broker Margin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Subsidiary Platforms */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-sial-blue/20 bg-sial-blue/5 text-[10px] sm:text-xs font-black uppercase tracking-widest text-sial-blue mb-2">
                {t("parts.hubsBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight font-heading">
                {t("parts.hubsHeading")}
              </h2>
              <div className="h-0.5 w-16 bg-sial-blue mx-auto mt-2"></div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-light">
                {t("parts.hubsDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
              {/* Sial Kingdom */}
              <HoverCard className="bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    {/* Cover image */}
                    <div className="relative w-full h-56 overflow-hidden border-b border-slate-200">
                      <Image
                        src="/sialkingdom_workshop.png"
                        alt="Sial Kingdom Auto Workshop & Parts Service - Seeb, Muscat"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                        sizes="(max-w-768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50"></div>
                      <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded border border-slate-200/80 text-[10px] text-slate-700 font-extrabold uppercase tracking-widest shadow-sm">
                        Sanaiya Ma&apos;abilah Workshop
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sial-blue/5 border border-sial-blue/15 text-[10px] font-bold text-sial-blue uppercase tracking-wider">
                            {t("parts.skBadge")}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Sial Kingdom Trading LLC</h3>
                        </div>
                        {/* Logo */}
                        <div className="bg-white px-3 py-1.5 rounded-xl flex items-center justify-center border border-slate-200 shadow-sm transition duration-300 hover:border-slate-350">
                          <Image src="/sialkingdom_logo.png" alt="Sial Kingdom Logo" width={120} height={32} className="object-contain h-8 w-auto" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-light">
                        {t("parts.skDesc")}
                      </p>
                      <ul className="text-[11px] text-slate-500 space-y-1.5 pt-2 border-t border-slate-100 font-medium">
                        <li className="flex items-center space-x-1.5">
                          <span>📍</span>
                          <span>Near Abu Zaki Tile Store, Road 6, Way No 7749, Mabila&apos;h Sanaiya</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span>📞</span>
                          <span>Call Support: +968 9192 9398</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <a
                      href="https://www.sialkingdom.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="sialkingdom-cta-btn"
                      className="btn-shine w-full text-center block px-6 py-3.5 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-xs rounded-xl transition duration-300 shadow-lg shadow-blue-500/10"
                    >
                      {t("parts.skCta")}
                    </a>
                  </div>
                </div>
              </HoverCard>
 
              {/* Yahya Auto Parts */}
              <HoverCard className="bg-white border border-slate-200 rounded-2xl flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="flex flex-col h-full justify-between">
                  <div className="space-y-4">
                    {/* Cover image */}
                    <div className="relative w-full h-56 overflow-hidden border-b border-slate-200">
                      <Image
                        src="/yahyaautoparts_banner.webp"
                        alt="Yahya Auto Parts Genuine Hyundai Kia & Genesis Spare Parts"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-102"
                        sizes="(max-w-768px) 100vw, 500px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-50"></div>
                      <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded border border-slate-200/80 text-[10px] text-slate-700 font-extrabold uppercase tracking-widest shadow-sm">
                        Muscat Logistics Hub
                      </div>
                    </div>
                    
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="space-y-1">
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-sial-blue/5 border border-sial-blue/15 text-[10px] font-bold text-sial-blue uppercase tracking-wider">
                            {t("parts.yahyaBadge")}
                          </span>
                          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Yahya Auto Parts</h3>
                        </div>
                        {/* Logo */}
                        <div className="bg-white px-3 py-1.5 rounded-xl flex items-center justify-center border border-slate-200 shadow-sm transition duration-300 hover:border-slate-350">
                          <Image src="/yahyaautoparts_logo.png" alt="Yahya Auto Parts Logo" width={120} height={32} className="object-contain h-8 w-auto" />
                        </div>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify font-light">
                        {t("parts.yahyaDesc")}
                      </p>
                      <ul className="text-[11px] text-slate-500 space-y-1.5 pt-2 border-t border-slate-100 font-medium">
                        <li className="flex items-center space-x-1.5">
                          <span>📍</span>
                          <span>Al Mabela Al Janubiyya, Block 377, Way 7749, Al Seeb, Muscat</span>
                        </li>
                        <li className="flex items-center space-x-1.5">
                          <span>📞</span>
                          <span>Call Support: +968 9796 9786</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="px-6 pb-6">
                    <a
                      href="https://www.yahyaautoparts.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="yahyaautoparts-cta-btn"
                      className="btn-shine w-full text-center block px-6 py-3.5 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-xs rounded-xl transition duration-300 shadow-lg shadow-blue-500/10"
                    >
                      {t("parts.yahyaCta")}
                    </a>
                  </div>
                </div>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Sourcing Integrity Node Section */}
        <section className="bg-slate-50 border-y border-slate-200 py-16 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-12">
            <ScrollReveal>
              <div className="text-center space-y-4 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight font-heading">
                  {t("parts.integrityHeading")}
                </h2>
                <p className="text-sm text-slate-655 text-center max-w-2xl mx-auto font-light leading-relaxed">
                  {t("parts.integrityDesc")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* South Korea */}
              <HoverCard className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="space-y-4 font-sans">
                  <div className="relative w-full h-28 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                    <Image
                      src="/seoul_hq.png"
                      alt="SIAL & Young A Trading Co. procurement headquarters in Seoul, South Korea"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-30"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🇰🇷</span>
                    <h4 className="text-slate-900 font-extrabold text-base tracking-tight font-heading">Seoul HQ</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider font-sans">SIAL & Young A Trading Co.</span>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify font-sans font-light">
                    {t("parts.sourcingKorea")}
                  </p>
                </div>
              </HoverCard>

              {/* Yiwu China */}
              <HoverCard className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="space-y-4 font-sans">
                  <div className="relative w-full h-28 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                    <Image
                      src="/china_logistics.png"
                      alt="Yiwu SIAL International Trading Co. global logistics and wholesale hub in China"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-30"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl">🇨🇳</span>
                    <h4 className="text-slate-900 font-extrabold text-base tracking-tight font-heading">China Hub</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider font-sans">Yiwu SIAL International Trading Co.</span>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify font-sans font-light">
                    {t("parts.sourcingChina")}
                  </p>
                </div>
              </HoverCard>

              {/* Real-Time ERP Authority */}
              <HoverCard className="bg-white border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-5 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div className="space-y-4 font-sans">
                  <div className="relative w-full h-28 rounded-xl overflow-hidden border border-slate-200 shadow-sm group">
                    <Image
                      src="/erp_dashboard.png"
                      alt="Real-time industrial Odoo ERP inventory tracking dashboard - SIAL Group"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-103"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-30"></div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sial-blue text-lg">⚙️</span>
                    <h4 className="text-slate-900 font-extrabold text-base tracking-tight font-heading">{t("parts.erpTitle")}</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider font-sans">Odoo Enterprise Integration</span>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify font-sans font-light">
                    {t("parts.erpDesc")}
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
