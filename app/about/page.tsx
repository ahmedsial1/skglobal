"use client";

import React, { useState } from "react";
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
    desc1: "CH Munawar Hussain Sial, our Group Chairman, oversees the global governance, trust-building initiatives, and long-term joint venture strategies of SIAL Group. Under his visionary guidance, the Group has maintained an impeccable compliance record and nurtured solid relationships with international trade ministries, logistics authorities, and key regulatory bodies across multiple continents.",
    desc2: "His strategic leadership ensures that SIAL Group operates with the highest level of corporate social responsibility. By upholding stringent regional safety and operational standards, he prioritizes sustainable community development and local job creation alongside the Group's rapid global trading activities and cross-border logistical expansions.",
    desc3: "To support the Group's long-term commercial sustainability and geographic reach, he establishes robust legal frameworks for international investments. His governance model ensures SIAL Group remains a premier trusted partner for state-owned enterprises, multinational corporations, and regional distributors, blending trade excellence with strict ethical accountability.",
    badge: "🏛️ Global Governance & Joint Ventures"
  },
  ar: {
    title: "رئيس المجموعة",
    name: "ش. منور حسين سيال",
    quote: "النزاهة والثقة تشكلان أساس التجارة العالمية. نحن نبني جسوراً متينة.",
    desc1: "ش. منور حسين سيال، رئيس مجموعتنا، يشرف على الحوكمة العالمية، ومبادرات بناء الثقة، واستراتيجيات المشاريع المشتركة طويلة الأجل لمجموعة SIAL. تحت توجيهه الرؤيوي، حافظت المجموعة على سجل امتثال لا تشوبه شائبة وعلاقات متينة مع وزارات التجارة الدولية وسلطات الخدمات اللوجستية والهيئات التنظيمية الرئيسية عبر قارات متعددة.",
    desc2: "تضمن قيادته الاستراتيجية أن تعمل مجموعة SIAL بأعلى مستوى من المسؤولية الاجتماعية للمؤسسات. ومن خلال دعم معايير السلامة والتشغيل الإقليمية الصارمة، فإنه يعطي الأولوية للتنمية المجتمعية المستدامة وخلق فرص العمل المحلية جنبًا إلى جنب مع أنشطة التجارة العالمية السريعة للمجموعة والتوسعات اللوجستية عابرة الحدود.",
    desc3: "ولدعم الاستدامة التجارية للمجموعة على المدى الطويل وتوسعها الجغرافي، يضع أطرًا قانونية قوية للاستثمارات الدولية. ويضمن نموذج الحوكمة الذي يتبعه أن تظل مجموعة SIAL شريكًا رئيسيًا موثوقًا للمؤسسات المملوكة للدولة، والشركات متعددة الجنسيات، والموزعين الإقليميين، من خلال الجمع بين التميز التجاري والمساءلة الأخلاقية الصارمة.",
    badge: "🏛️ الحوكمة العالمية والمشاريع المشتركة"
  },
  zh: {
    title: "集团董事长",
    name: "CH Munawar Hussain Sial",
    quote: "诚信与信任是全球贸易的基石。我们建立持久的桥梁。",
    desc1: "集团董事长 CH Munawar Hussain Sial 负责监督 SIAL 集团的的全球治理、信誉建设和长期合资战略。在他的远见指导下，集团保持了无可挑剔的合规记录，并与多个大洲的的国际贸易部门、物流机构 and 关键监管团队建立了稳固的关系。",
    desc2: "他的战略领导确保了 SIAL 集团以最高水平的企业社会责任开展业务。通过维护严格的地区安全和运营标准，他在推动集团快速全球贸易活动和跨境物流扩张的同时，优先考虑可持续的社区发展和本地就业机会。",
    desc3: "为了支持集团的长期商业可持续性和地理覆盖范围，他为国际投资建立了健全的法律框架。他的治理模式确保了 SIAL 集团始终是国有企业、跨国公司和区域分销商的首选信赖合作伙伴，将卓越的贸易表现与严格的伦理问责紧密结合。",
    badge: "🏛️ 全球治理与合资企业"
  },
  ko: {
    title: "그룹 회장",
    name: "CH Munawar Hussain Sial",
    quote: "정직과 신뢰는 글로벌 상거래의 기초입니다. 우리는 지속 가능한 다리를 건설합니다.",
    desc1: "그룹 회장인 CH Munawar Hussain Sial은 SIAL 그룹의 글로벌 거버넌스, 신뢰 구축 이니셔티브 및 장기 합작 투자 전략을 감독합니다. 그의 선견지명 있는 지도 아래, 그룹은 완벽한 규정 준수 기록을 유지해 왔으며 여러 대륙에 걸친 국제 무역 부처, 물류 당국 및 주요 규제 기관들과 견고한 관계를 육성해 왔습니다.",
    desc2: "그의 전략적 리더십은 SIAL 그룹이 최고 수준의 기업 사회적 책임을 바탕으로 운영되도록 보장합니다. 엄격한 지역 안전 및 운영 표준을 준수함으로써, 그는 그룹의 빠른 글로벌 무역 활동 및 국경을 초월한 물류 확장과 함께 지속 가능한 지역 사회 개발 및 현지 일자리 창출을 최우선 과제로 삼고 있습니다.",
    desc3: "그룹의 장기적인 상업적 지속 가능성과 지리적 범위를 지원하기 위해, 그는 국제 투자를 위한 강력한 법률 프레임워크를 수립합니다. 그의 거버넌스 모델은 SIAL 그룹이 상업적 탁월성과 엄격한 윤리적 책임성을 조화롭게 결합하여 국영 기업, 다국적 기업 및 지역 유통업체들이 가장 신뢰하는 최고의 파트너로 남을 수 있도록 보장합니다.",
    badge: "🏛️ 글로벌 거버넌스 및 합작 투자"
  },
  ur: {
    title: "گروپ چیئرمین",
    name: "چوہدری منور حسین سیال",
    quote: "دیانت اور اعتماد عالمی تجارت کی بنیاد ہیں۔ ہم پائیدار روابط استوار کرتے ہیں۔",
    desc1: "چوہدری منور حسین سیال، ہمارے گروپ چیئرمین، SIAL گروپ کے عالمی گورننس، اعتماد سازی کے اقدامات، اور طویل مدتی مشترکہ منصوبوں کی حکمت عملیوں کی نگرانی کرتے ہیں۔ ان کی دوراندیش رہنمائی میں، گروپ نے تعمیل کا ایک بے داغ ریکارڈ برقرار رکھا ہے اور متعدد براعظموں میں بین الاقوامی تجارتی وزارتوں، لاجسٹکس حکام، اور اہم ریگولیٹری اداروں کے ساتھ مضبوط تعلقات استوار کیے ہیں۔",
    desc2: "ان کی اسٹریٹجک قیادت اس بات کو یقینی بناتی ہے کہ SIAL گروپ کارپوریٹ سماجی ذمہ داری کے اعلیٰ ترین معیار کے ساتھ کام کرے۔ سخت علاقائی حفاظتی اور آپریشنل معیارات کو برقرار رکھتے ہوئے، وہ گروپ کی تیز رفتار عالمی تجارتی سرگرمیوں اور سرحد پار لاجسٹکس کی توسیع کے ساتھساتھ پائیدار کمیونٹی کی ترقی اور مقامی ملازمتوں کی تخلیق کو ترجیح دیتے ہیں۔",
    desc3: "گروپ کی طویل مدتی تجارتی پائیداری اور جغرافیائی رسائی کو سہارا دینے کے لیے، وہ بین الاقوامی سرمایہ کاری کے لیے مضبوط قانونی فریم ورک قائم کرتے ہیں۔ ان کا گورننس ماڈل اس بات کو یقینی بناتا ہے کہ سیال گروپ تجارتی عمدگی کو سخت اخلاقی جوابدہی کے ساتھ ملا کر سرکاری اداروں، کثیر القومی کمپنیوں اور علاقائی تقسیم کاروں کے لیے ایک اہم قابلِ اعتماد شراکت دار رہے۔",
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const [startX, setStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX === null) return;
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        // swipe left -> next slide
        setCurrentSlide((prev) => Math.min(prev + 1, 1));
      } else {
        // swipe right -> prev slide
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    }
    setStartX(null);
  };

  const renderCEO = () => (
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
        <p className="text-sm text-slate-600 leading-relaxed text-justify font-sans">
          {t("about.ceoDesc1")}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed text-justify font-sans">
          {t("about.ceoDesc2")}
        </p>
        <p className="text-sm text-slate-600 leading-relaxed text-justify font-sans">
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
  );

  const renderChairman = () => (
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
        <p className="text-sm text-slate-600 leading-relaxed text-justify font-sans">
          {chair.desc3}
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
  );

  return (
    <div className="bg-white text-slate-900 min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Floating Animated Mesh Blobs */}
      <div className="absolute top-[10%] left-[-10%] w-[30rem] h-[30rem] rounded-full bg-sial-blue/15 blur-[100px] z-0 animate-blob-1 pointer-events-none"></div>
      <div className="absolute top-[50%] right-[-10%] w-[25rem] h-[25rem] rounded-full bg-sial-gold/15 blur-[100px] z-0 animate-blob-2 pointer-events-none"></div>

      {/* Grid Pattern Underlay */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-20">
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

            {/* Desktop View */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
              {renderCEO()}
              {renderChairman()}
            </div>

            {/* Mobile Slider View */}
            <div 
              className="block md:hidden relative overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                <div className="w-full flex-shrink-0 px-2">
                  {renderCEO()}
                </div>
                <div className="w-full flex-shrink-0 px-2">
                  {renderChairman()}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between mt-8 px-4">
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentSlide(0)}
                  disabled={currentSlide === 0}
                  className={`p-2.5 rounded-full border transition duration-300 ${
                    currentSlide === 0 
                      ? "border-slate-200 text-slate-300 cursor-not-allowed" 
                      : "border-sial-blue text-sial-blue bg-sial-blue/5 hover:bg-sial-blue hover:text-white"
                  }`}
                  aria-label="Previous Slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Indicators */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => setCurrentSlide(0)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === 0 ? "w-8 bg-sial-blue" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label="CEO Slide"
                  />
                  <button
                    onClick={() => setCurrentSlide(1)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      currentSlide === 1 ? "w-8 bg-sial-blue" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label="Chairman Slide"
                  />
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentSlide(1)}
                  disabled={currentSlide === 1}
                  className={`p-2.5 rounded-full border transition duration-300 ${
                    currentSlide === 1 
                      ? "border-slate-200 text-slate-300 cursor-not-allowed" 
                      : "border-sial-blue text-sial-blue bg-sial-blue/5 hover:bg-sial-blue hover:text-white"
                  }`}
                  aria-label="Next Slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
