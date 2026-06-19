"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Hardware() {
  const { t } = useLanguage();

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Floating Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[-15%] w-[40rem] h-[40rem] rounded-full bg-sial-blue/15 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-[50%] right-[-15%] w-[35rem] h-[35rem] rounded-full bg-sial-gold/15 blur-[120px] z-0 animate-blob-2 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-10%] w-[35rem] h-[35rem] rounded-full bg-blue-400/12 blur-[120px] z-0 animate-blob-1 pointer-events-none"></div>

      {/* Subtle Construction/Steel grid watermark */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.28] bg-cover bg-center md:bg-fixed bg-no-repeat" style={{ backgroundImage: "url('/construction_mosaic.png')" }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">
              {t("hardware.badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase text-center">
              {t("hardware.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-blue mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("hardware.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Mozambique Section */}
        <ScrollReveal delay={0.15}>
            <section className="glass-card p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-md">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sial-blue/5 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>
              
              <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
                <div className="flex items-center justify-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-blue-50 border border-sial-blue/20 text-xs font-bold text-sial-blue">
                    {t("hardware.mzBadge")}
                  </span>
                  <span className="text-xs text-slate-600 font-semibold font-sans font-medium">
                    Mozambique Distribution Hub
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 uppercase tracking-tight text-center leading-tight">
                  {t("hardware.mzTitle")}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed text-justify md:text-center">
                  {t("hardware.mzDesc")}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
                <div className="lg:col-span-5 space-y-4">
                  <div className="grid grid-cols-1 gap-4 text-xs">
                    <HoverCard className="glass-card p-4 rounded shadow-sm">
                      <span className="font-bold text-slate-900 block">{t("hardware.cat1Title")}</span>
                      <span className="text-slate-600 mt-1 block">{t("hardware.cat1Desc")}</span>
                    </HoverCard>
                    <HoverCard className="glass-card p-4 rounded shadow-sm">
                      <span className="font-bold text-slate-900 block">{t("hardware.cat2Title")}</span>
                      <span className="text-slate-600 mt-1 block">{t("hardware.cat2Desc")}</span>
                    </HoverCard>
                    <HoverCard className="glass-card p-4 rounded shadow-sm">
                      <span className="font-bold text-slate-900 block">{t("hardware.cat3Title")}</span>
                      <span className="text-slate-600 mt-1 block">{t("hardware.cat3Desc")}</span>
                    </HoverCard>
                  </div>
                </div>

                {/* Image Column */}
                <div className="lg:col-span-4 flex flex-col items-center w-full space-y-3">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                    <Image
                      src="/mozambique_storefront.png"
                      alt="SIAL Kingdom Trading storefront in Nampula, Mozambique"
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 300px"
                      priority
                    />
                    {/* Subtle caption overlay */}
                    <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-xs p-3 text-center text-[10px] text-slate-700 border-t border-slate-200 font-sans">
                      SIAL Kingdom Trading Storefront - Nampula, Mozambique
                    </div>
                  </div>
                </div>

                {/* Status Column */}
                <HoverCard className="glass-card lg:col-span-3 space-y-4 p-6 rounded-lg self-stretch flex flex-col justify-between shadow-sm">
                  <div className="space-y-4">
                    <h4 className="text-slate-900 font-bold text-sm border-b border-slate-200 pb-2">
                      {t("hardware.integrityTitle")}
                    </h4>
                    <ul className="space-y-3.5 text-xs text-slate-600 font-sans">
                      <li className="flex justify-between">
                        <span>{t("hardware.routeTitle")}</span>
                        <span className="text-slate-900 font-semibold">{t("hardware.routeVal")}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>{t("hardware.clearTitle")}</span>
                        <span className="text-slate-900 font-semibold">{t("hardware.clearVal")}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>{t("hardware.qualityTitle")}</span>
                        <span className="text-sial-blue font-bold">{t("hardware.qualityVal")}</span>
                      </li>
                      <li className="flex justify-between">
                        <span>{t("hardware.reachTitle")}</span>
                        <span className="text-slate-900 font-semibold">{t("hardware.reachVal")}</span>
                      </li>
                    </ul>
                  </div>
                </HoverCard>
              </div>
            </section>
        </ScrollReveal>

        {/* Proprietary Brand Highlight: SADAAN® */}
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
                <span className="text-4xl font-extrabold text-[#1E40AF] tracking-widest font-sans">SADAAN®</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-bold mt-2">Proprietary Brand</span>
              </div>

              {/* Brand Info */}
              <div className="space-y-4 flex-grow font-sans">
                <h3 className="text-2xl font-black text-[#1E40AF] tracking-tight">
                  SADAAN® PROFESSIONAL POWER TOOLS & EQUIPMENT
                </h3>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium" style={{ fontFamily: "var(--font-plus-jakarta-sans)" }}>
                  SADAAN® is SIAL Group&apos;s premium proprietary brand of professional power tools, high-performance hand tools, and heavy-duty industrial site equipment. Designed to compete directly with world-class brands like DEWALT and JUSTER, SADAAN® tools are engineered for maximum power, durability, and workload tolerance on demanding construction and infrastructure sites. Certified to meet rigorous regional safety standards (including SASO and OPAL), SADAAN® guarantees trade-professional reliability and factory-direct pricing by completely eliminating third-party broker margins.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-600">✓ DEWALT & JUSTER Grade Quality</span>
                  <span className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-600">✓ Professional Power Tools & Gear</span>
                  <span className="px-3 py-1 bg-white border border-[#E2E8F0] rounded-lg text-xs font-semibold text-slate-600">✓ SASO & OPAL Safety Certified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Hub Section (China procurement node) */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-12 pt-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-blue">
                {t("hardware.procBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 uppercase tracking-tight text-center">
                {t("hardware.procHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-blue mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 flex justify-center w-full">
                {/* Sourcing Node Map Box */}
                <HoverCard className="glass-card p-8 rounded-xl w-full max-w-md space-y-6 relative overflow-hidden shadow-sm">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sial-blue/5 rounded-full blur-3xl"></div>
                  <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2">
                    {t("hardware.procTitle")}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-sial-blue font-bold text-sm">1</span>
                      <div>
                        <h5 className="text-slate-900 font-semibold text-xs font-sans">
                          {t("hardware.proc1Title")}
                        </h5>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          {t("hardware.proc1Desc")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-sial-blue font-bold text-sm">2</span>
                      <div>
                        <h5 className="text-slate-900 font-semibold text-xs font-sans">
                          {t("hardware.proc2Title")}
                        </h5>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          {t("hardware.proc2Desc")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-sial-blue font-bold text-sm">3</span>
                      <div>
                        <h5 className="text-slate-900 font-semibold text-xs font-sans">
                          {t("hardware.proc3Title")}
                        </h5>
                        <p className="text-[11px] text-slate-600 mt-0.5">
                          {t("hardware.proc3Desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </div>

              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full font-sans">
                <div className="relative w-full h-56 rounded-lg overflow-hidden border border-slate-200 shadow-md mb-4 font-sans">
                  <Image
                    src="/construction_mosaic.png"
                    alt="Structured grid mosaic of steel reinforcements, anchors, and construction site supplies - SIAL Group"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 500px"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    {t("hardware.procDesc")}
                  </p>
                </div>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact?division=hardware"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-sial-blue uppercase tracking-wider hover:text-sial-blue-dark"
                  >
                    <span>{t("hardware.cta")}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
