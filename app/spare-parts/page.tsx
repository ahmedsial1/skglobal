"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage } from "@/context/LanguageContext";

export default function SpareParts() {
  const { t } = useLanguage();

  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
              {t("parts.badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase text-center">
              {t("parts.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("parts.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Division Focus: Hyundai & Kia */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">
                {t("parts.specBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase animate-pulse-slow">
                {t("parts.specHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  {t("parts.specDesc")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">{t("parts.cat1Title")}</h4>
                    <p className="text-xs text-sial-gray-light mt-1">{t("parts.cat1Desc")}</p>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">{t("parts.cat2Title")}</h4>
                    <p className="text-xs text-sial-gray-light mt-1">{t("parts.cat2Desc")}</p>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">{t("parts.cat3Title")}</h4>
                    <p className="text-xs text-sial-gray-light mt-1">{t("parts.cat3Desc")}</p>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-light/60 rounded">
                    <h4 className="text-white font-bold text-sm">{t("parts.cat4Title")}</h4>
                    <p className="text-xs text-sial-gray-light mt-1">{t("parts.cat4Desc")}</p>
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
                  {t("parts.infraHeading")}
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-sial-gold pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-white">{t("parts.infraOmanTitle")}</h4>
                    <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                      {t("parts.infraOmanDesc")}
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-sial-gray-industrial pl-4 space-y-1">
                    <h4 className="text-sm font-bold text-white">{t("parts.infraSaTitle")}</h4>
                    <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                      {t("parts.infraSaDesc")}
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
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
                {t("parts.hubsBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                {t("parts.hubsHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
              <p className="text-xs sm:text-sm text-sial-gray-light max-w-2xl mx-auto">
                {t("parts.hubsDesc")}
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
                      <span className="text-[10px] font-bold text-sial-gold uppercase tracking-wider">
                        {t("parts.skBadge")}
                      </span>
                      <h3 className="text-xl font-bold text-white">Sial Kingdom Trading LLC</h3>
                    </div>
                    {/* Logo */}
                    <div className="bg-white px-2 py-1 rounded max-w-[120px] flex items-center justify-center border border-white/10">
                      <img src="/sialkingdom_logo.png" alt="Sial Kingdom Logo" className="object-contain h-8" />
                    </div>
                  </div>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    {t("parts.skDesc")}
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
                    {t("parts.skCta")}
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
                      <span className="text-[10px] font-bold text-sial-gold uppercase tracking-wider">
                        {t("parts.yahyaBadge")}
                      </span>
                      <h3 className="text-xl font-bold text-white">Yahya Auto Parts</h3>
                    </div>
                    {/* Logo */}
                    <div className="bg-white/95 px-2.5 py-1 rounded max-w-[120px] flex items-center justify-center border border-white/10">
                      <img src="/yahyaautoparts_logo.png" alt="Yahya Auto Parts Logo" className="object-contain h-8" />
                    </div>
                  </div>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                    {t("parts.yahyaDesc")}
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
                    {t("parts.yahyaCta")}
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
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider text-center">
                  {t("parts.integrityHeading")}
                </h2>
                <p className="text-xs text-sial-gray-light text-center max-w-2xl mx-auto">
                  {t("parts.integrityDesc")}
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
                    {t("parts.sourcingKorea")}
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
                    {t("parts.sourcingChina")}
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
                    <h4 className="text-white font-bold text-base">{t("parts.erpTitle")}</h4>
                  </div>
                  <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">Odoo Enterprise Integration</span>
                  <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
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
