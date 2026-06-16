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
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
              {t("machinery.titleBadge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
              {t("machinery.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("machinery.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Oman (SK Transports Oman) */}
        <ScrollReveal delay={0.15}>
          <section className="glassmorphism p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sial-gold/5 rounded-full blur-3xl -z-10"></div>
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
                {/* Info Column */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">
                        {t("machinery.omanBadge")}
                      </span>
                      <span className="text-xs text-sial-gray-light font-semibold">SK Transports Oman</span>
                    </div>
                    {/* Logo */}
                    <div className="bg-white/95 px-3 py-1 rounded border border-white/10 flex items-center justify-center max-w-[140px]">
                      <img src="/sktransportsoman_logo.png" alt="SK Transports Logo" className="object-contain h-6" />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tight">
                    {t("machinery.omanTitle")}
                  </h2>
                  <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                    {t("machinery.omanDesc")}
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-sial-gray-light">
                    <span className="px-3 py-1 bg-sial-slate-dark rounded-full border border-white/5">
                      {t("machinery.omanFeature1")}
                    </span>
                    <span className="px-3 py-1 bg-sial-slate-dark rounded-full border border-white/5">
                      {t("machinery.omanFeature2")}
                    </span>
                    <span className="px-3 py-1 bg-sial-slate-dark rounded-full border border-white/5">
                      {t("machinery.omanFeature3")}
                    </span>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.sktransportsoman.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-4 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-sm rounded-md shadow-lg transition duration-300 transform hover:-translate-y-1 gold-glow"
                    >
                      {t("machinery.omanCta")}
                    </a>
                  </div>
                </div>
                {/* Image Column */}
                <div className="lg:col-span-5 flex justify-center w-full">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                    <Image
                      src="/sktransportsoman_hero.png"
                      alt="Massive yellow mobile truck crane operating on GCC construction site - SK Transports Oman"
                      fill
                      className="object-cover"
                      sizes="(max-w-768px) 100vw, 384px"
                    />
                  </div>
                </div>
              </div>

              {/* Fleet Gallery */}
              <div className="border-t border-white/5 pt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
                    {t("machinery.fleetTitle")}
                  </h3>
                  <span className="text-[10px] text-sial-gray-medium font-semibold">
                    {t("machinery.fleetBadge")}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <HoverCard className="p-4 bg-sial-slate-light/30 rounded-xl border border-white/5 space-y-3">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/sktransportsoman_fleet_350t.png"
                        alt="SANY SAC 3500 Mobile Crane - 350T Capacity"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">SANY SAC 3500</h4>
                      <p className="text-xs text-sial-gray-light mt-0.5">350T Lift Capacity Mobile Crane</p>
                    </div>
                  </HoverCard>

                  <HoverCard className="p-4 bg-sial-slate-light/30 rounded-xl border border-white/5 space-y-3">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/sktransportsoman_fleet_220t.jpg"
                        alt="SANY SAC 2200 Mobile Crane - 220T Capacity"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">SANY SAC 2200</h4>
                      <p className="text-xs text-sial-gray-light mt-0.5">220T Lift Capacity Mobile Crane</p>
                    </div>
                  </HoverCard>

                  <HoverCard className="p-4 bg-sial-slate-light/30 rounded-xl border border-white/5 space-y-3">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-white/10">
                      <Image
                        src="/sktransportsoman_fleet_160t.png"
                        alt="SANY STC 1600 Mobile Crane - 160T Capacity"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">SANY STC 1600</h4>
                      <p className="text-xs text-sial-gray-light mt-0.5">160T Lift Capacity Mobile Crane</p>
                    </div>
                  </HoverCard>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Saudi Arabia & Pakistan Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Saudi Arabia (SIAL International Company) */}
          <HoverCard className="slate-gradient p-8 rounded-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">
                  {t("machinery.saBadge")}
                </span>
                <span className="text-xs text-sial-gray-light font-semibold">SIAL International Company</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t("machinery.saTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-sial-gray-light leading-relaxed text-justify">
                {t("machinery.saDesc")}
              </p>
              <ul className="text-xs text-sial-gray-light space-y-2 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>{t("machinery.saFeature1")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>{t("machinery.saFeature2")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>{t("machinery.saFeature3")}</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?region=saudi"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider hover:text-white flex items-center space-x-1 mt-6"
            >
              <span>{t("machinery.saCta")}</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Pakistan Operations (SIAL International Pakistan Pvt Ltd) */}
          <HoverCard className="slate-gradient p-8 rounded-xl space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative w-full h-40 rounded-lg overflow-hidden border border-white/10 shadow-lg mb-4">
                <Image
                  src="/pakistan_machinery.png"
                  alt="High-performance construction and agricultural machinery imports - SIAL International Pakistan"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 384px"
                />
              </div>
              <div className="flex items-center space-x-2 font-sans">
                <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">
                  {t("machinery.pkBadge")}
                </span>
                <span className="text-xs text-sial-gray-light font-semibold">SIAL International Pakistan Pvt Ltd</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                {t("machinery.pkTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-sial-gray-light leading-relaxed text-justify">
                {t("machinery.pkDesc")}
              </p>
              <ul className="text-xs text-sial-gray-light space-y-2 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>{t("machinery.pkFeature1")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>{t("machinery.pkFeature2")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-gold">▪</span>
                  <span>{t("machinery.pkFeature3")}</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?region=pakistan"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider hover:text-white flex items-center space-x-1 mt-6"
            >
              <span>{t("machinery.pkCta")}</span>
              <span>→</span>
            </Link>
          </HoverCard>
        </div>
      </div>
    </div>
  );
}
