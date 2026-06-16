"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import NetworkDirectory from "@/components/NetworkDirectory";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sial-navy-light/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-20">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">{t("about.whoWeAre")}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#FACC15] uppercase font-heading text-center">
              {t("about.title")}
            </h1>
            <div className="h-0.5 w-24 bg-[#FACC15] mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-[#F9FAFB] font-sans leading-relaxed pt-2 max-w-4xl mx-auto text-center md:text-justify text-balance">
              {t("about.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* CEO & Founder Profile */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">{t("about.ceoProfileTitle")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase">
                {t("about.ceoProfileHeading")}
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative p-[1px] bg-gradient-to-tr from-sial-gold to-sial-gray-dark rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                  {/* Background CEO Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('/ceo.jpg')` }}
                  ></div>
                  {/* Overlay with dark gradient to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sial-slate-dark via-sial-slate-dark/40 to-transparent flex flex-col justify-end p-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-widest text-sial-gold font-bold">Group CEO & Founder</span>
                      <h3 className="text-2xl font-black text-white">Muhammad Amjad</h3>
                    </div>
                    <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                      &ldquo;{t("about.ceoQuote")}&rdquo;
                    </p>
                    <div className="pt-2 border-t border-white/10 flex items-center space-x-2 text-xs text-sial-gray-medium">
                      <span>{t("about.ceoDelegate")}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  {t("about.ceoDesc1")}
                </p>
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  {t("about.ceoDesc2")}
                </p>
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  {t("about.ceoDesc3")}
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-sial-gray-medium uppercase block">{t("about.focusAreas")}</span>
                    <span className="text-sm font-semibold text-white mt-1 block">{t("about.focusValue")}</span>
                  </div>
                  <div>
                    <span className="text-xs text-sial-gray-medium uppercase block">{t("about.strategicHubs")}</span>
                    <span className="text-sm font-semibold text-white mt-1 block">{t("about.strategicValue")}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Pillars of Excellence Grid */}
        <section className="space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">{t("about.pillarsTitle")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
                {t("about.pillarsHeading")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HoverCard className="glassmorphism p-8 rounded-xl space-y-4">
              <span className="text-3xl">⛓️</span>
              <h3 className="text-lg font-bold text-white">{t("about.pillar1Title")}</h3>
              <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                {t("about.pillar1Desc")}
              </p>
            </HoverCard>

            <HoverCard className="glassmorphism p-8 rounded-xl space-y-4 border-t-2 border-t-sial-gold">
              <span className="text-3xl">🤝</span>
              <h3 className="text-lg font-bold text-white">{t("about.pillar2Title")}</h3>
              <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                {t("about.pillar2Desc")}
              </p>
            </HoverCard>

            <HoverCard className="glassmorphism p-8 rounded-xl space-y-4">
              <span className="text-3xl">⚖️</span>
              <h3 className="text-lg font-bold text-white">{t("about.pillar3Title")}</h3>
              <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                {t("about.pillar3Desc")}
              </p>
            </HoverCard>
          </div>
        </section>

        {/* Global Network Directory Section */}
        <section id="network" className="space-y-12 pt-16 border-t border-white/5">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
                {t("about.networkTitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                {t("about.networkHeading")}
              </h2>
              <p className="text-xs sm:text-sm text-sial-gray-light font-light max-w-2xl mx-auto">
                {t("about.networkDesc")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <NetworkDirectory />
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
