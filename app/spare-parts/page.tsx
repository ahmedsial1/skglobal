"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage } from "@/context/LanguageContext";

export default function SpareParts() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Floating Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-sial-blue/15 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-[50%] right-[-15%] w-[35rem] h-[35rem] rounded-full bg-sial-gold/15 blur-[120px] z-0 animate-blob-2 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-400/12 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>

      {/* Subtle Warehouse Background Image watermark on the entire page */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.28] bg-cover bg-center md:bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/parts_warehouse.png')" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">
              {t("parts.badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase text-center">
              {t("parts.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-blue mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("parts.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Division Focus: Hyundai & Kia */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-blue">
                {t("parts.specBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight uppercase animate-pulse-slow">
                {t("parts.specHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-blue mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-sm text-slate-600 leading-relaxed text-justify">
                  {t("parts.specDesc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <HoverCard className="glass-card p-4 rounded shadow-sm">
                    <h4 className="text-slate-900 font-bold text-sm">{t("parts.cat1Title")}</h4>
                    <p className="text-xs text-slate-600 mt-1">{t("parts.cat1Desc")}</p>
                  </HoverCard>
                  <HoverCard className="glass-card p-4 rounded shadow-sm">
                    <h4 className="text-slate-900 font-bold text-sm">{t("parts.cat2Title")}</h4>
                    <p className="text-xs text-slate-600 mt-1">{t("parts.cat2Desc")}</p>
                  </HoverCard>
                  <HoverCard className="glass-card p-4 rounded shadow-sm">
                    <h4 className="text-slate-900 font-bold text-sm">{t("parts.cat3Title")}</h4>
                    <p className="text-xs text-slate-600 mt-1">{t("parts.cat3Desc")}</p>
                  </HoverCard>
                  <HoverCard className="glass-card p-4 rounded shadow-sm">
                    <h4 className="text-slate-900 font-bold text-sm">{t("parts.cat4Title")}</h4>
                    <p className="text-xs text-slate-600 mt-1">{t("parts.cat4Desc")}</p>
                  </HoverCard>
                </div>
              </div>

              <HoverCard className="glass-card p-8 rounded-xl shadow-sm space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sial-blue/5 rounded-full blur-3xl"></div>
                <div className="relative w-full h-48 rounded-lg overflow-hidden border border-slate-200 shadow-md mb-4">
                  <Image
                    src="/parts_warehouse.png"
                    alt="Genuine Hyundai and Kia automotive spare parts warehouse - SIAL Group"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 384px"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">
                  {t("parts.infraHeading")}
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-sial-blue pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{t("parts.infraOmanTitle")}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
                      {t("parts.infraOmanDesc")}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-slate-400 pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-slate-900">{t("parts.infraSaTitle")}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed text-justify">
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight uppercase" style={{ fontFamily: "var(--font-space-grotesque)" }}>
              Proprietary Brand Profile
            </h2>
            <div className="h-1 w-20 bg-sial-blue mx-auto mt-2"></div>
          </div>

          <div className="bg-[#F1F5F9] border border-[#E2E8F0] p-8 md:p-12 rounded-2xl max-w-4xl mx-auto shadow-sm text-justify">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Brand Logo/Identity Display */}
              <div className="flex-shrink-0 bg-white border border-[#E2E8F0] p-6 rounded-2xl w-full md:w-48 aspect-square flex flex-col items-center justify-center shadow-sm">
                <span className="text-4xl font-extrabold text-[#1E40AF] tracking-widest font-sans">YSIT®</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-2">Proprietary Brand</span>
              </div>

              {/* Brand Info */}
              <div className="space-y-4 flex-grow font-sans">
                <h3 className="text-2xl font-black text-[#1E40AF] tracking-tight">
                  YSIT® AUTOMOTIVE COMPONENT SYSTEM
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  YSIT® is SIAL Group&apos;s premium proprietary automotive brand, delivering high-performance, factory-certified replacement parts and mechanical components for Hyundai, Kia, and commercial transport fleets. Engineered to meet strict international durability metrics, YSIT® components undergo rigorous pre-shipment inspections and thickness audits to guarantee maximum reliability. By establishing direct factory integration and shipping channels from South Korea, YSIT® offers global enterprises a robust, cost-effective alternative to standard OEM parts by completely eliminating third-party broker margins.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-600">✓ Factory Certified</span>
                  <span className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-600">✓ 100% Quality Inspected</span>
                  <span className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-600">✓ Zero Broker Margin</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Active Subsidiary Platforms */}
        <ScrollReveal delay={0.1}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">
                {t("parts.hubsBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 leading-tight uppercase tracking-tight">
                {t("parts.hubsHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-blue mx-auto mt-2"></div>
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
                {t("parts.hubsDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 font-sans">
              {/* Sial Kingdom */}
              <HoverCard className="glass-card p-6 rounded-2xl shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden">
                <div className="space-y-4">
                  <div className="relative w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-md">
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
                       <span className="text-[10px] font-bold text-sial-blue uppercase tracking-wider">
                         {t("parts.skBadge")}
                       </span>
                       <h3 className="text-xl font-bold text-slate-900">Sial Kingdom Trading LLC</h3>
                     </div>
                     {/* Logo */}
                     <div className="bg-white px-2 py-1 rounded max-w-[120px] flex items-center justify-center border border-slate-200 shadow-sm">
                       <img src="/sialkingdom_logo.png" alt="Sial Kingdom Logo" className="object-contain h-8" />
                     </div>
                   </div>
                   <p className="text-xs text-slate-600 leading-relaxed text-justify">
                     {t("parts.skDesc")}
                   </p>
                   <ul className="text-[11px] text-slate-500 space-y-1.5">
                     <li>📍 Near Abu Zaki Tile Store, Road 6, Way No 7749, Mabila&apos;h Sanaiya</li>
                     <li>📞 Call Support: +968 9192 9398</li>
                   </ul>
                 </div>
                 <div className="pt-4 border-t border-slate-200">
                   <a
                     href="https://www.sialkingdom.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn-shine w-full text-center block px-6 py-3 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-xs rounded transition duration-300 shadow-lg shadow-blue-500/10"
                   >
                     {t("parts.skCta")}
                   </a>
                 </div>
               </HoverCard>
 
               {/* Yahya Auto Parts */}
               <HoverCard className="glass-card p-6 rounded-2xl shadow-sm space-y-6 flex flex-col justify-between relative overflow-hidden">
                 <div className="space-y-4">
                   <div className="relative w-full h-56 rounded-xl overflow-hidden border border-slate-200 shadow-md">
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
                       <span className="text-[10px] font-bold text-sial-blue uppercase tracking-wider">
                         {t("parts.yahyaBadge")}
                       </span>
                       <h3 className="text-xl font-bold text-slate-900">Yahya Auto Parts</h3>
                     </div>
                     {/* Logo */}
                     <div className="bg-white px-2.5 py-1 rounded max-w-[120px] flex items-center justify-center border border-slate-200 shadow-sm">
                       <img src="/yahyaautoparts_logo.png" alt="Yahya Auto Parts Logo" className="object-contain h-8" />
                     </div>
                   </div>
                   <p className="text-xs text-slate-600 leading-relaxed text-justify">
                     {t("parts.yahyaDesc")}
                   </p>
                   <ul className="text-[11px] text-slate-500 space-y-1.5">
                     <li>📍 Al Mabela Al Janubiyya, Block 377, Way 7749, Al Seeb, Muscat</li>
                     <li>📞 Call Support: +968 9796 9786</li>
                   </ul>
                 </div>
                 <div className="pt-4 border-t border-slate-200">
                   <a
                     href="https://www.yahyaautoparts.com"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn-shine w-full text-center block px-6 py-3 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-xs rounded transition duration-300 shadow-lg shadow-blue-500/10"
                   >
                     {t("parts.yahyaCta")}
                   </a>
                 </div>
               </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Sourcing Integrity Node Section */}
        <section className="bg-slate-50 border-y border-slate-200 py-12 -mx-4 px-4 sm:-mx-8 sm:px-8 lg:-mx-16 lg:px-16">
          <div className="max-w-7xl mx-auto space-y-8">
            <ScrollReveal>
              <div className="text-center space-y-2 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 uppercase tracking-wider text-center">
                  {t("parts.integrityHeading")}
                </h2>
                <p className="text-xs text-slate-600 text-center max-w-2xl mx-auto">
                  {t("parts.integrityDesc")}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* South Korea */}
              <HoverCard className="glass-card p-6 rounded-xl flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-3xl">
                    <span>🇰🇷</span>
                    <h4 className="text-slate-900 font-bold text-base">Seoul HQ</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider">SIAL & Young A Trading Co.</span>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {t("parts.sourcingKorea")}
                  </p>
                </div>
              </HoverCard>

              {/* Yiwu China */}
              <HoverCard className="glass-card p-6 rounded-xl flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-3xl">
                    <span>🇨🇳</span>
                    <h4 className="text-slate-900 font-bold text-base">China Hub</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider">Yiwu SIAL International Trading Co.</span>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
                    {t("parts.sourcingChina")}
                  </p>
                </div>
              </HoverCard>

              {/* Real-Time ERP Authority */}
              <HoverCard className="glass-card p-6 rounded-xl flex flex-col justify-between space-y-4 shadow-sm">
                <div className="space-y-4 font-sans">
                  <div className="relative w-full h-24 rounded-lg overflow-hidden border border-slate-200 shadow-md">
                    <Image
                      src="/erp_dashboard.png"
                      alt="Real-time industrial Odoo ERP inventory tracking dashboard - SIAL Group"
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 250px"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sial-blue text-lg">⚙️</span>
                    <h4 className="text-slate-900 font-bold text-base">{t("parts.erpTitle")}</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider">Odoo Enterprise Integration</span>
                  <p className="text-xs text-slate-600 leading-relaxed text-justify">
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
