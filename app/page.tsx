"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
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
    leadershipTitle: "Executive Leadership Message",
    leadershipHeading: "Our Group Leadership"
  },
  ar: {
    leadershipTitle: "رسالة القيادة التنفيذية",
    leadershipHeading: "قيادتنا للمجموعة"
  },
  zh: {
    leadershipTitle: "行政领导层致辞",
    leadershipHeading: "我们的集团领导层"
  },
  ko: {
    leadershipTitle: "경영진 메시지",
    leadershipHeading: "그룹 경영진"
  },
  ur: {
    leadershipTitle: "ایگزیکٹو لیڈرشپ پیغام",
    leadershipHeading: "ہماری گروپ لیڈرشپ"
  }
};

export default function Home() {
  const { t, language } = useLanguage();

  // Resolve localization
  const currentLang = (language && chairmanData[language as keyof typeof chairmanData] ? language : "en") as keyof typeof chairmanData;
  const chair = chairmanData[currentLang];
  const sectionTrans = sectionTranslations[currentLang];

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#f1f5f9,transparent_60%)] opacity-80 z-0"></div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* Hero Section */}
      <section className="relative z-20 pt-20 pb-24 md:pt-32 md:pb-40 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <ScrollReveal delay={0.1} duration={0.8}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            {/* Left Column: Text & CTAs */}
            <div className="lg:col-span-7 text-start space-y-6 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border border-sial-blue/20 bg-sial-blue/5 text-xs font-bold uppercase tracking-widest text-sial-blue">
                <span>{t("home.legacyBadge")}</span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-slate-900 uppercase font-sans">
                {t("home.heroTitle")}{" "}
                <span className="gold-gradient-text block mt-2">{t("home.heroHighlight")}</span>
              </h1>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-600 font-light leading-relaxed text-justify">
                {t("home.heroDesc")}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-sm rounded-md shadow-lg shadow-blue-500/10 transition duration-300 transform hover:-translate-y-0.5 text-center"
                >
                  {t("home.routeInquiry")}
                </Link>
                <Link
                  href="/about"
                  className="w-full sm:w-auto px-8 py-4 border border-slate-300 hover:border-sial-blue text-slate-800 hover:text-sial-blue font-bold uppercase tracking-wider text-sm rounded-md transition duration-300 text-center"
                >
                  {t("home.ceoBio")}
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image */}
            <div className="lg:col-span-5 flex justify-center items-stretch w-full">
              <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] lg:aspect-auto lg:h-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl shadow-slate-200/50 transition-all duration-300">
                <Image
                  src="/hero_storefront.png"
                  alt="SIAL Group Storefront - Multi-Jurisdictional Industrial Trading and Spare Parts"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-w-768px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Sourcing Hub Advantage Section */}
      <section className="relative py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <ScrollReveal>
            <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
                {t("home.edgeTitle")}{" "}
                <span className="text-sial-blue">{t("home.edgeHighlight")}</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                {t("home.edgeDesc")}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="space-y-6">
                  {/* South Korea */}
                  <HoverCard className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 shadow-sm">
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
                        <h4 className="text-slate-900 font-bold text-base leading-snug">{t("home.koreaTitle")}</h4>
                      </div>
                      <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider">{t("home.koreaEntity")}</span>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">
                        {t("home.koreaDesc")}
                      </p>
                    </div>
                  </HoverCard>

                  {/* China */}
                  <HoverCard className="p-5 bg-white border border-slate-200 rounded-xl space-y-4 shadow-sm">
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
                        <h4 className="text-slate-900 font-bold text-base leading-snug">{t("home.chinaTitle")}</h4>
                      </div>
                      <span className="text-[11px] font-bold text-sial-blue block uppercase tracking-wider">{t("home.chinaEntity")}</span>
                      <p className="text-xs text-slate-600 leading-relaxed text-justify">
                        {t("home.chinaDesc")}
                      </p>
                    </div>
                  </HoverCard>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sial-blue/5 rounded-full blur-3xl"></div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
                  {t("home.whyChooseTitle")}
                </h3>
                <ul className="space-y-6 text-xs text-slate-600">
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-blue text-base">✓</span>
                      <span className="text-slate-900 font-bold">{t("home.whyChoose1Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose1Desc")}</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-blue text-base">✓</span>
                      <span className="text-slate-900 font-bold">{t("home.whyChoose2Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose2Desc")}</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-blue text-base">✓</span>
                      <span className="text-slate-900 font-bold">{t("home.whyChoose3Title")}</span>
                    </div>
                    <p className="pl-6">{t("home.whyChoose3Desc")}</p>
                  </li>
                  <li className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <span className="text-sial-blue text-base">✓</span>
                      <span className="text-slate-900 font-bold">{t("home.whyChoose4Title")}</span>
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
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 border-t border-slate-200">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-blue">{sectionTrans.leadershipTitle}</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight">
              {sectionTrans.leadershipHeading}
            </h2>
            <div className="h-1 w-20 bg-sial-blue mx-auto mt-4"></div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Chairman Column */}
            <div className="flex flex-col items-center text-center space-y-6 bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs">
              <div className="relative p-[1px] bg-gradient-to-tr from-sial-blue to-slate-200 rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                <Image
                  src="/chairman.jpg"
                  alt={`${chair.name} - SIAL Group Chairman`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 384px"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent flex flex-col justify-end p-8 space-y-3 text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sial-blue font-bold font-sans">{chair.title}</span>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight font-sans">{chair.name}</h3>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-relaxed italic text-justify font-sans">
                    &ldquo;{chair.quote}&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-left w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-sial-blue">{chair.badge}</span>
                <p className="text-sm text-slate-600 leading-relaxed text-justify font-light">
                  {chair.desc1}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed text-justify font-light">
                  {chair.desc2}
                </p>
              </div>
            </div>

            {/* CEO Column */}
            <div className="flex flex-col items-center text-center space-y-6 bg-slate-50/50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-xs">
              <div className="relative p-[1px] bg-gradient-to-tr from-sial-blue to-slate-200 rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                <Image
                  src="/ceo.jpg"
                  alt="Muhammad Amjad - SIAL Group CEO"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 384px"
                />
                {/* Overlay details */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent flex flex-col justify-end p-8 space-y-3 text-left">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-sial-blue font-bold font-sans">Group CEO & Founder</span>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight font-sans">Muhammad Amjad</h3>
                  </div>
                  <p className="text-[11px] text-slate-700 leading-relaxed italic text-justify font-sans">
                    &ldquo;Resilience is building proprietary pipelines that ensure our partners never fail.&rdquo;
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-left w-full">
                <span className="text-xs font-bold uppercase tracking-wider text-sial-blue">{t("footer.governance")}</span>
                <p className="text-sm text-slate-600 leading-relaxed text-justify font-light">
                  {t("home.ceoDesc1")}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed text-justify font-light">
                  {t("home.ceoDesc2")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-slate-200 flex justify-center gap-4">
            <Link
              href="/about"
              className="px-6 py-3 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 font-bold uppercase tracking-wider text-xs rounded transition duration-300 text-center"
            >
              {t("home.ceoBio")}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-sial-blue hover:bg-sial-blue-dark text-white font-extrabold uppercase tracking-widest text-xs rounded transition duration-300 text-center shadow-md shadow-blue-500/10"
            >
              {t("home.ceoConsultation")}
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Business Divisions Grid */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <ScrollReveal>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t("home.divisionsTitle")}
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t("home.divisionsSubtitle")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Heavy Machinery */}
          <HoverCard className="group bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col justify-between h-96 shadow-sm">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">🏗️</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sial-blue transition duration-200">
                {t("home.machineryTitle")}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t("home.machineryDesc")}
              </p>
            </div>
            <Link
              href="/machinery"
              className="text-xs font-bold text-sial-blue uppercase tracking-wider flex items-center space-x-1 hover:text-sial-blue-dark"
            >
              <span>{t("home.ceoBio").split(" ")[0]}</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Spare Parts */}
          <HoverCard className="group bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col justify-between h-96 shadow-sm">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">⚙️</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sial-blue transition duration-200">
                {t("home.partsTitle")}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t("home.partsDesc")}
              </p>
            </div>
            <Link
              href="/spare-parts"
              className="text-xs font-bold text-sial-blue uppercase tracking-wider flex items-center space-x-1 hover:text-sial-blue-dark"
            >
              <span>{t("home.ceoBio").split(" ")[0]}</span>
              <span>→</span>
            </Link>
          </HoverCard>

          {/* Hardware */}
          <HoverCard className="group bg-slate-50 border border-slate-200 p-8 rounded-xl flex flex-col justify-between h-96 shadow-sm">
            <div>
              <span className="text-4xl mb-6 block group-hover:scale-110 transition duration-300 origin-left">⛓️</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sial-blue transition duration-200">
                {t("home.hardwareTitle")}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {t("home.hardwareDesc")}
              </p>
            </div>
            <Link
              href="/hardware"
              className="text-xs font-bold text-sial-blue uppercase tracking-wider flex items-center space-x-1 hover:text-sial-blue-dark"
            >
              <span>{t("home.ceoBio").split(" ")[0]}</span>
              <span>→</span>
            </Link>
          </HoverCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-sial-blue">18+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-2 block">{t("home.stats1")}</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-slate-900">6+</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-2 block">{t("home.stats2")}</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-slate-900 font-sans">0</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-2 block">{t("home.stats3")}</span>
              </div>
              <div>
                <span className="block text-4xl sm:text-5xl font-extrabold text-sial-blue">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-2 block">{t("home.stats4")}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
