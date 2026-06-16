"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-sial-slate-dark text-white">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b,transparent_60%)] opacity-35 z-0"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25"></div>

      {/* Hero Section */}
      <section className="relative z-20 pt-20 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <ScrollReveal delay={0.1} duration={0.8}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 text-start space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sial-gold/30 bg-sial-gold/5 text-xs font-bold uppercase tracking-widest text-sial-gold">
                <span>{t("home.legacyBadge")}</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white uppercase font-sans">
                {t("home.heroTitle")}{" "}
                <span className="gold-gradient-text block mt-2">{t("home.heroHighlight")}</span>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-sial-gray-light font-light leading-relaxed text-justify">
                {t("home.heroDesc")}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-sm rounded-md shadow-lg transition duration-300 transform hover:-translate-y-0.5 gold-glow text-center"
                >
                  {t("home.routeInquiry")}
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-8 py-4 border border-sial-gray-industrial hover:border-white text-white font-bold uppercase tracking-wider text-sm rounded-md transition duration-300 text-center"
                >
                  {t("home.ceoBio")}
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl gold-glow-hover transition-all duration-300">
                <Image
                  src="/shipping_port.png"
                  alt="SIAL Group Global Cargo Shipping Port at Sunset - Multi-Jurisdictional Industrial Trading"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sial-slate-dark/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Sourcing Hub Advantage Section */}
      <section className="relative py-20 bg-sial-slate-light/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {t("home.edgeTitle")}{" "}
                <span className="text-sial-gold">{t("home.edgeHighlight")}</span>
              </h2>
              <p className="text-base text-sial-gray-light leading-relaxed">
                {t("home.edgeDesc")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-6">
                  {/* South Korea */}
                  <HoverCard className="p-5 bg-sial-slate-dark/40 border border-white/5 rounded-xl space-y-4">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                      <Image
                        src="/seoul_hq.png"
                        alt="Advanced Clean R&D Sourcing Node - Seoul, South Korea"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 384px"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🇰🇷</span>
                        <h4 className="text-white font-bold text-base leading-snug">{t("home.koreaTitle")}</h4>
                      </div>
                      <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">{t("home.koreaEntity")}</span>
                      <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                        {t("home.koreaDesc")}
                      </p>
                    </div>
                  </HoverCard>

                  {/* China */}
                  <HoverCard className="p-5 bg-sial-slate-dark/40 border border-white/5 rounded-xl space-y-4">
                    <div className="relative w-full h-40 rounded-lg overflow-hidden">
                      <Image
                        src="/china_logistics.png"
                        alt="Efficient Hardware Sourcing and Procurement Logistics - Yiwu, China"
                        fill
                        className="object-cover"
                        sizes="(max-w-768px) 100vw, 384px"
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">🇨🇳</span>
                        <h4 className="text-white font-bold text-base leading-snug">{t("home.chinaTitle")}</h4>
                      </div>
                      <span className="text-[11px] font-bold text-sial-gold block uppercase tracking-wider">{t("home.chinaEntity")}</span>
                      <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                        {t("home.chinaDesc")}
                      </p>
                    </div>
                  </HoverCard>
                </div>
              </div>

              <div className="glassmorphism p-8 rounded-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-4">
                  {t("home.whyChooseTitle")}
                </h3>
                <ul className="space-y-6 text-xs text-sial-gray-light">
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">{t("home.whyChoose1Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose1Desc")}</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">{t("home.whyChoose2Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose2Desc")}</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">{t("home.whyChoose3Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose3Desc")}</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-gold text-base">✓</span>
                      <span className="text-white font-bold">{t("home.whyChoose4Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose4Desc")}</p>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CEO & Leadership Profile Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 border-t border-white/5">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">{t("home.whyChoose4Desc").split(" ")[0]}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              {t("home.ceoMessageTitle")}
            </h2>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* CEO Image Column */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative p-[1px] bg-gradient-to-tr from-sial-gold to-sial-gray-dark rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                <Image
                  src="/ceo.jpg"
                  alt="Muhammad Amjad - SIAL Group CEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 384px"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-sial-slate-dark via-sial-slate-dark/30 to-transparent flex flex-col justify-end p-8 space-y-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sial-gold font-bold font-sans">Group CEO & Founder</span>
                    <h3 className="text-xl font-bold text-white leading-tight font-sans">Muhammad Amjad</h3>
                  </div>
                  <p className="text-[11px] text-sial-gray-light leading-relaxed italic text-justify font-sans">
                    &ldquo;Resilience is building proprietary pipelines that ensure our partners never fail.&rdquo;
                  </p>
                </div>
              </div>
            </div>

            {/* CEO Message Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">{t("footer.governance")}</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                {t("home.ceoSubtitle")}
              </h3>
              <p className="text-sm text-sial-gray-light leading-relaxed text-justify font-light">
                {t("home.ceoDesc1")}
              </p>
              <p className="text-sm text-sial-gray-light leading-relaxed text-justify font-light">
                {t("home.ceoDesc2")}
              </p>
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4">
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-6 py-3 bg-sial-slate-light border border-white/10 hover:border-sial-gold text-white font-bold uppercase tracking-wider text-xs rounded transition duration-300 text-center"
                >
                  {t("home.ceoBio")}
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 py-3 bg-sial-gold hover:bg-sial-gold-dark text-sial-slate-dark font-extrabold uppercase tracking-widest text-xs rounded transition duration-300 text-center shadow-md gold-glow-hover"
                >
                  {t("home.ceoConsultation")}
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Business Divisions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {t("home.divisionsTitle")}
            </h2>
            <p className="text-sial-gray-light max-w-2xl mx-auto">
              {t("home.divisionsSubtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Heavy Machinery */}
          <HoverCard className="group slate-gradient p-8 rounded-xl flex flex-col justify-between h-96">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">🏗️</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sial-gold transition duration-200">
                {t("home.machineryTitle")}
              </h3>
              <p className="text-xs text-sial-gray-light leading-relaxed">
                {t("home.machineryDesc")}
              </p>
            </div>
            <Link
              href="/machinery"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider flex items-center space-x-1 hover:text-white"
            >
              <span>{t("home.ceoBio").split(" ")[0]}</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Spare Parts */}
          <HoverCard className="group slate-gradient p-8 rounded-xl flex flex-col justify-between h-96">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">⚙️</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sial-gold transition duration-200">
                {t("home.partsTitle")}
              </h3>
              <p className="text-xs text-sial-gray-light leading-relaxed">
                {t("home.partsDesc")}
              </p>
            </div>
            <Link
              href="/spare-parts"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider flex items-center space-x-1 hover:text-white"
            >
              <span>{t("home.ceoBio").split(" ")[0]}</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Hardware */}
          <HoverCard className="group slate-gradient p-8 rounded-xl flex flex-col justify-between h-96">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">⛓️</span>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-sial-gold transition duration-200">
                {t("home.hardwareTitle")}
              </h3>
              <p className="text-xs text-sial-gray-light leading-relaxed">
                {t("home.hardwareDesc")}
              </p>
            </div>
            <Link
              href="/hardware"
              className="text-xs font-bold text-sial-gold uppercase tracking-wider flex items-center space-x-1 hover:text-white"
            >
              <span>{t("home.ceoBio").split(" ")[0]}</span>
              <span>→</span>
            </Link>
          </HoverCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-sial-slate-light border-t border-sial-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-sial-gold">18+</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">{t("home.stats1")}</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-white">6+</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">{t("home.stats2")}</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-white">0</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">{t("home.stats3")}</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-sial-gold">100%</span>
                <span className="text-xs text-sial-gray-light uppercase tracking-widest font-semibold mt-2 block">{t("home.stats4")}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
