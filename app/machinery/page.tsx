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
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">
              {t("machinery.titleBadge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase">
              {t("machinery.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-blue mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("machinery.subtitle")}
            </p>
          </div>
        </ScrollReveal>

        {/* Oman (SK Transports Oman) */}
        <ScrollReveal delay={0.15}>
          <section className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-sm">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sial-blue/5 rounded-full blur-3xl -z-10"></div>
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center font-sans">
                {/* Info Column */}
                <div className="lg:col-span-7 space-y-6 text-left">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded bg-blue-50 border border-sial-blue/20 text-xs font-bold text-sial-blue">
                        {t("machinery.omanBadge")}
                      </span>
                      <span className="text-xs text-slate-600 font-semibold">SK Transports Oman</span>
                    </div>
                    {/* Logo */}
                    <div className="bg-white px-3 py-1 rounded border border-slate-200 flex items-center justify-center max-w-[140px] shadow-sm">
                      <img src="/sktransportsoman_logo.png" alt="SK Transports Logo" className="object-contain h-6" />
                    </div>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 uppercase tracking-tight">
                    {t("machinery.omanTitle")}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    {t("machinery.omanDesc")}
                  </p>
                  <div className="flex flex-wrap gap-3 text-[11px] font-semibold text-slate-600">
                    <span className="px-3 py-1 bg-white rounded-full border border-slate-200">
                      {t("machinery.omanFeature1")}
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full border border-slate-200">
                      {t("machinery.omanFeature2")}
                    </span>
                    <span className="px-3 py-1 bg-white rounded-full border border-slate-200">
                      {t("machinery.omanFeature3")}
                    </span>
                  </div>
                  <div className="pt-2">
                    <a
                      href="https://www.sktransportsoman.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-8 py-4 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-sm rounded-md shadow-lg shadow-blue-500/10 transition duration-300 transform hover:-translate-y-1"
                    >
                      {t("machinery.omanCta")}
                    </a>
                  </div>
                </div>
                {/* Image Column */}
                <div className="lg:col-span-5 flex justify-center w-full">
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-slate-200 shadow-xl">
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
              <div className="border-t border-slate-200 pt-8 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">
                    {t("machinery.fleetTitle")}
                  </h3>
                  <span className="text-[10px] text-slate-500 font-semibold">
                    {t("machinery.fleetBadge")}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <HoverCard className="p-4 bg-white rounded-xl border border-slate-200 space-y-3 shadow-sm">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                      <Image
                        src="/sktransportsoman_fleet_350t.png"
                        alt="SANY SAC 3500 Mobile Crane - 350T Capacity"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">SANY SAC 3500</h4>
                      <p className="text-xs text-slate-500 mt-0.5">350T Lift Capacity Mobile Crane</p>
                    </div>
                  </HoverCard>

                  <HoverCard className="p-4 bg-white rounded-xl border border-slate-200 space-y-3 shadow-sm">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                      <Image
                        src="/sktransportsoman_fleet_220t.jpg"
                        alt="SANY SAC 2200 Mobile Crane - 220T Capacity"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">SANY SAC 2200</h4>
                      <p className="text-xs text-slate-500 mt-0.5">220T Lift Capacity Mobile Crane</p>
                    </div>
                  </HoverCard>

                  <HoverCard className="p-4 bg-white rounded-xl border border-slate-200 space-y-3 shadow-sm">
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                      <Image
                        src="/sktransportsoman_fleet_160t.png"
                        alt="SANY STC 1600 Mobile Crane - 160T Capacity"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 250px"
                      />
                    </div>
                    <div>
                      <h4 className="text-slate-900 font-bold text-sm">SANY STC 1600</h4>
                      <p className="text-xs text-slate-500 mt-0.5">160T Lift Capacity Mobile Crane</p>
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
          <HoverCard className="bg-slate-50 border border-slate-200 p-8 rounded-xl space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 rounded bg-blue-50 border border-sial-blue/20 text-xs font-bold text-sial-blue">
                  {t("machinery.saBadge")}
                </span>
                <span className="text-xs text-slate-600 font-semibold">SIAL International Company</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t("machinery.saTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {t("machinery.saDesc")}
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-sial-blue">▪</span>
                  <span>{t("machinery.saFeature1")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-blue">▪</span>
                  <span>{t("machinery.saFeature2")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-blue">▪</span>
                  <span>{t("machinery.saFeature3")}</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?region=saudi"
              className="text-xs font-bold text-sial-blue uppercase tracking-wider hover:text-sial-blue-dark flex items-center space-x-1 mt-6"
            >
              <span>{t("machinery.saCta")}</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Pakistan Operations (SIAL International Pakistan Pvt Ltd) */}
          <HoverCard className="bg-slate-50 border border-slate-200 p-8 rounded-xl space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="relative w-full h-40 rounded-lg overflow-hidden border border-slate-200 shadow-md mb-4">
                <Image
                  src="/pakistan_machinery.png"
                  alt="High-performance construction and agricultural machinery imports - SIAL International Pakistan"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 384px"
                />
              </div>
              <div className="flex items-center space-x-2 font-sans">
                <span className="px-2.5 py-1 rounded bg-blue-50 border border-sial-blue/20 text-xs font-bold text-sial-blue">
                  {t("machinery.pkBadge")}
                </span>
                <span className="text-xs text-slate-600 font-semibold">SIAL International Pakistan Pvt Ltd</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                {t("machinery.pkTitle")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
                {t("machinery.pkDesc")}
              </p>
              <ul className="text-xs text-slate-600 space-y-2 pt-2">
                <li className="flex items-center space-x-2">
                  <span className="text-sial-blue">▪</span>
                  <span>{t("machinery.pkFeature1")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-blue">▪</span>
                  <span>{t("machinery.pkFeature2")}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-sial-blue">▪</span>
                  <span>{t("machinery.pkFeature3")}</span>
                </li>
              </ul>
            </div>
            <Link
              href="/contact?region=pakistan"
              className="text-xs font-bold text-sial-blue uppercase tracking-wider hover:text-sial-blue-dark flex items-center space-x-1 mt-6"
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
