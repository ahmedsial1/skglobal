"use client";

import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import NetworkDirectory from "@/components/NetworkDirectory";
import { useLanguage } from "@/context/LanguageContext";

// Local translation data for Chairman and Executive Leadership
const chairmanData = {
  en: {
    title: "Group Chairman",
    name: "CH Munawar Hussain Sial",
    quote: "Integrity and trust form the foundation of global commerce. We build enduring bridges.",
    desc1: "CH Munawar Hussain Sial, our Group Chairman, oversees the governance, trust-building, and long-term joint ventures of SIAL Group. Under his guidance, the Group has maintained an impeccable compliance record and solid relationships with international trade ministries and logistics authorities.",
    desc2: "His leadership ensures that SIAL Group operates with high corporate responsibility, upholding regional standards and prioritizing community development alongside global trading activities.",
    badge: "🏛️ Global Governance & Joint Ventures"
  },
  ar: {
    title: "رئيس المجموعة",
    name: "ش. منور حسين سيال",
    quote: "النزاهة والثقة تشكلان أساس التجارة العالمية. نحن نبني جسوراً متينة.",
    desc1: "ش. منور حسين سيال، رئيس مجموعتنا، يشرف على الحوكمة وبناء الثقة والمشاريع المشتركة طويلة الأجل لمجموعة SIAL. تحت توجيهه، حافظت المجموعة على سجل امتثال لا تشوبه شائبة وعلاقات متينة مع وزارات التجارة الدولية وسلطات الخدمات اللوجستية.",
    desc2: "تضمن قيادته أن تعمل مجموعة SIAL بمسؤولية مؤسسية عالية، ودعم المعايير الإقليمية وإعطاء الأولوية لتنمية المجتمع جنباً إلى جنب مع أنشطة التجارة العالمية.",
    badge: "🏛️ الحوكمة العالمية والمشاريع المشتركة"
  },
  zh: {
    title: "集团董事长",
    name: "CH Munawar Hussain Sial",
    quote: "诚信与信任是全球贸易的基石。我们建立持久的桥梁。",
    desc1: "集团董事长 CH Munawar Hussain Sial 监督 SIAL 集团的治理、信任建立和长期合资企业。在他的指导下，集团保持了无可挑剔的合规记录，并与国际贸易部 and 物流 authorities 建立了稳固的关系。",
    desc2: "他的领导确保 SIAL 集团以高度的企业责任开展业务，维护地区标准，并在开展全球贸易活动的同时优先考虑社区发展。",
    badge: "🏛️ 全球治理与合资企业"
  },
  ko: {
    title: "그룹 회장",
    name: "CH Munawar Hussain Sial",
    quote: "정직과 신뢰는 글로벌 상거래의 기초입니다. 우리는 지속 가능한 다리를 건설합니다.",
    desc1: "그룹 회장인 CH Munawar Hussain Sial은 SIAL 그룹의 지배 구조, 신뢰 구축 및 장기 합작 투자를 감독합니다. 그의 지도하에 그룹은 무결점 준수 기록을 유지하고 국제 무역 부처 및 물류 당국과 견고한 관계를 유지해 왔습니다.",
    desc2: "그의 리더십은 SIAL 그룹이 높은 기업 책임감을 가지고 운영되도록 보장하며, 글로벌 무역 활동과 함께 지역 표준을 준수하고 지역 사회 개발을 우선시합니다.",
    badge: "🏛️ 글로벌 거버넌스 및 합작 투자"
  },
  ur: {
    title: "گروپ چیئرمین",
    name: "چوہدری منور حسین سیال",
    quote: "دیانت اور اعتماد عالمی تجارت کی بنیاد ہیں۔ ہم پائیدار روابط استوار کرتے ہیں۔",
    desc1: "چوہدری منور حسین سیال، ہمارے گروپ چیئرمین، SIAL گروپ کے گورننس، اعتماد سازی اور طویل مدتی مشترکہ منصوبوں کی نگرانی کرتے ہیں۔ ان کی رہنمائی میں، گروپ نے ایک بے داغ تعمیل کا ریکارڈ اور بین الاقوامی تجارتی وزارتوں اور لاجسٹکس حکام کے ساتھ مضبوط تعلقات برقرار رکھے ہیں۔",
    desc2: "ان کی قیادت اس بات کو یقینی بناتی ہے کہ SIAL گروپ اعلیٰ کارپوریٹ ذمہ داری کے ساتھ کام کرے، علاقائی معیارات کو برقرار رکھے اور عالمی تجارتی سرگرمیوں کے ساتھ ساتھ کمیونٹی کی ترقی کو ترجیح دے۔",
    badge: "🏛️ گلوبل گورننس اور مشترکہ منصوبے"
  }
};

const sectionTranslations = {
  en: {
    leadershipTitle: "Executive Leadership Profile",
    leadershipHeading: "Our Group Leadership"
  },
  ar: {
    leadershipTitle: "ملف القيادة التنفيذية",
    leadershipHeading: "قيادة مجموعتنا"
  },
  zh: {
    leadershipTitle: "行政领导层档案",
    leadershipHeading: "我们的集团领导层"
  },
  ko: {
    leadershipTitle: "경영진 프로필",
    leadershipHeading: "그룹 경영진"
  },
  ur: {
    leadershipTitle: "ایگزیکٹو لیڈرشپ پروفائل",
    leadershipHeading: "ہماری گروپ لیڈرشپ"
  }
};

export default function About() {
  const { t, language } = useLanguage();

  // Resolve localization
  const currentLang = (language && chairmanData[language as keyof typeof chairmanData] ? language : "en") as keyof typeof chairmanData;
  const chair = chairmanData[currentLang];
  const sectionTrans = sectionTranslations[currentLang];

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Floating Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-sial-blue/15 blur-[100px] z-0 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-[50%] right-[-10%] w-[25rem] h-[25rem] rounded-full bg-sial-gold/15 blur-[100px] z-0 animate-blob-2 pointer-events-none"></div>

      {/* Grid Pattern Underlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-20">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">{t("about.whoWeAre")}</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase font-heading text-center">
              {t("about.title")}
            </h1>
            <div className="h-0.5 w-24 bg-sial-blue mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed pt-2 max-w-4xl mx-auto text-center md:text-justify text-balance">
              {t("about.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* CEO & Founder Profile */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-blue">{sectionTrans.leadershipTitle}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight uppercase">
                {sectionTrans.leadershipHeading}
              </h2>
              <div className="h-1 w-20 bg-sial-blue mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              {/* Chairman Profile */}
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="relative p-[1px] bg-gradient-to-tr from-sial-blue to-slate-200 rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('/chairman.jpg')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent flex flex-col justify-end p-8 space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-widest text-sial-blue font-bold">{chair.title}</span>
                        <h3 className="text-2xl font-black text-slate-900">{chair.name}</h3>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        &ldquo;{chair.quote}&rdquo;
                      </p>
                      <div className="pt-2 border-t border-slate-200 flex items-center space-x-2 text-xs text-slate-500">
                        <span>{chair.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-sm text-slate-600 leading-relaxed text-justify font-sans">
                    {chair.desc1}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify font-sans">
                    {chair.desc2}
                  </p>
                </div>
              </div>

              {/* CEO Profile */}
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="relative p-[1px] bg-gradient-to-tr from-sial-blue to-slate-200 rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                      style={{ backgroundImage: `url('/ceo.jpg')` }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent flex flex-col justify-end p-8 space-y-4">
                      <div className="space-y-1">
                        <span className="text-xs uppercase tracking-widest text-sial-blue font-bold">Group CEO & Founder</span>
                        <h3 className="text-2xl font-black text-slate-900">Muhammad Amjad</h3>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed text-justify">
                        &ldquo;{t("about.ceoQuote")}&rdquo;
                      </p>
                      <div className="pt-2 border-t border-slate-200 flex items-center space-x-2 text-xs text-slate-500">
                        <span>{t("about.ceoDelegate")}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 pt-4">
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    {t("about.ceoDesc1")}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    {t("about.ceoDesc2")}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed text-justify">
                    {t("about.ceoDesc3")}
                  </p>
                  <div className="grid grid-cols-2 gap-6 pt-4 border-t border-slate-200">
                    <div>
                      <span className="text-xs text-slate-500 uppercase block">{t("about.focusAreas")}</span>
                      <span className="text-sm font-semibold text-slate-900 mt-1 block">{t("about.focusValue")}</span>
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 uppercase block">{t("about.strategicHubs")}</span>
                      <span className="text-sm font-semibold text-slate-900 mt-1 block">{t("about.strategicValue")}</span>
                    </div>
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
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">{t("about.pillarsTitle")}</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 uppercase tracking-wider">
                {t("about.pillarsHeading")}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HoverCard className="glass-card p-8 rounded-xl space-y-4 shadow-sm">
              <span className="text-3xl">⛓️</span>
              <h3 className="text-lg font-bold text-slate-900">{t("about.pillar1Title")}</h3>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                {t("about.pillar1Desc")}
              </p>
            </HoverCard>

            <HoverCard className="glass-card p-8 rounded-xl space-y-4 border-t-2 border-t-sial-blue shadow-sm">
              <span className="text-3xl">🤝</span>
              <h3 className="text-lg font-bold text-slate-900">{t("about.pillar2Title")}</h3>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                {t("about.pillar2Desc")}
              </p>
            </HoverCard>

            <HoverCard className="glass-card p-8 rounded-xl space-y-4 shadow-sm">
              <span className="text-3xl">⚖️</span>
              <h3 className="text-lg font-bold text-slate-900">{t("about.pillar3Title")}</h3>
              <p className="text-xs text-slate-600 leading-relaxed text-justify">
                {t("about.pillar3Desc")}
              </p>
            </HoverCard>
          </div>
        </section>

        {/* Global Network Directory Section */}
        <section id="network" className="space-y-12 pt-16 border-t border-slate-200">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">
                {t("about.networkTitle")}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 uppercase tracking-wider">
                {t("about.networkHeading")}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-light max-w-2xl mx-auto">
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
