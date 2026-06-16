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
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
              {t("hardware.badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase text-center">
              {t("hardware.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("hardware.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Mozambique Section */}
        <ScrollReveal delay={0.15}>
          <section className="glassmorphism p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sial-gold/5 rounded-full blur-3xl -z-10"></div>
            
            <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
              <div className="flex items-center justify-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">
                  {t("hardware.mzBadge")}
                </span>
                <span className="text-xs text-sial-gray-light font-semibold font-sans">
                  Mozambique Distribution Hub
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight text-center leading-tight">
                {t("hardware.mzTitle")}
              </h2>
              <p className="text-sm text-sial-gray-light leading-relaxed text-justify md:text-center">
                {t("hardware.mzDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start font-sans">
              <div className="lg:col-span-5 space-y-4">
                <div className="grid grid-cols-1 gap-4 text-xs">
                  <HoverCard className="p-4 bg-sial-slate-dark rounded border border-white/5">
                    <span className="font-bold text-white block">{t("hardware.cat1Title")}</span>
                    <span className="text-sial-gray-light mt-1 block">{t("hardware.cat1Desc")}</span>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-dark rounded border border-white/5">
                    <span className="font-bold text-white block">{t("hardware.cat2Title")}</span>
                    <span className="text-sial-gray-light mt-1 block">{t("hardware.cat2Desc")}</span>
                  </HoverCard>
                  <HoverCard className="p-4 bg-sial-slate-dark rounded border border-white/5">
                    <span className="font-bold text-white block">{t("hardware.cat3Title")}</span>
                    <span className="text-sial-gray-light mt-1 block">{t("hardware.cat3Desc")}</span>
                  </HoverCard>
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:col-span-4 flex justify-center w-full">
                <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/mozambique_hardware.png"
                    alt="Bulk industrial hardware shipments unloading in Maputo port, Mozambique - SIAL Group"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 300px"
                  />
                </div>
              </div>

              {/* Status Column */}
              <HoverCard className="lg:col-span-3 space-y-4 bg-sial-slate-light/50 p-6 rounded-lg self-stretch flex flex-col justify-between border border-white/5">
                <div className="space-y-4">
                  <h4 className="text-white font-bold text-sm border-b border-white/5 pb-2">
                    {t("hardware.integrityTitle")}
                  </h4>
                  <ul className="space-y-3.5 text-xs text-sial-gray-light font-sans">
                    <li className="flex justify-between">
                      <span>{t("hardware.routeTitle")}</span>
                      <span className="text-white font-semibold">{t("hardware.routeVal")}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>{t("hardware.clearTitle")}</span>
                      <span className="text-white font-semibold">{t("hardware.clearVal")}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>{t("hardware.qualityTitle")}</span>
                      <span className="text-sial-gold font-bold">{t("hardware.qualityVal")}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>{t("hardware.reachTitle")}</span>
                      <span className="text-white font-semibold">{t("hardware.reachVal")}</span>
                    </li>
                  </ul>
                </div>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Sourcing Hub Section (China procurement node) */}
        <ScrollReveal delay={0.2}>
          <section className="space-y-12 pt-8">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">
                {t("hardware.procBadge")}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase tracking-tight text-center">
                {t("hardware.procHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5 flex justify-center w-full">
                {/* Sourcing Node Map Box */}
                <HoverCard className="slate-gradient p-8 rounded-xl w-full max-w-md space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
                  <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">
                    {t("hardware.procTitle")}
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="text-sial-gold font-bold text-sm">1</span>
                      <div>
                        <h5 className="text-white font-semibold text-xs font-sans">
                          {t("hardware.proc1Title")}
                        </h5>
                        <p className="text-[11px] text-sial-gray-light mt-0.5">
                          {t("hardware.proc1Desc")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-sial-gold font-bold text-sm">2</span>
                      <div>
                        <h5 className="text-white font-semibold text-xs font-sans">
                          {t("hardware.proc2Title")}
                        </h5>
                        <p className="text-[11px] text-sial-gray-light mt-0.5">
                          {t("hardware.proc2Desc")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <span className="text-sial-gold font-bold text-sm">3</span>
                      <div>
                        <h5 className="text-white font-semibold text-xs font-sans">
                          {t("hardware.proc3Title")}
                        </h5>
                        <p className="text-[11px] text-sial-gray-light mt-0.5">
                          {t("hardware.proc3Desc")}
                        </p>
                      </div>
                    </div>
                  </div>
                </HoverCard>
              </div>

              <div className="lg:col-span-7 space-y-6 flex flex-col justify-between h-full font-sans">
                <div className="relative w-full h-56 rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4">
                  <Image
                    src="/construction_mosaic.png"
                    alt="Structured grid mosaic of steel reinforcements, anchors, and construction site supplies - SIAL Group"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 500px"
                  />
                </div>
                <div className="space-y-6">
                  <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                    {t("hardware.procDesc")}
                  </p>
                </div>
                <div className="pt-4 flex justify-center lg:justify-start">
                  <Link
                    href="/contact?division=hardware"
                    className="inline-flex items-center space-x-2 text-xs font-bold text-sial-gold uppercase tracking-wider hover:text-white"
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
