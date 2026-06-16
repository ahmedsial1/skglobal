"use client";

import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import { useLanguage, Language } from "@/context/LanguageContext";

const COUNTRY_NAME_MAP: Record<Language, Record<string, string>> = {
  en: { All: "All", Oman: "Oman", "South Korea": "South Korea", China: "China", "Saudi Arabia": "Saudi Arabia", Mozambique: "Mozambique", Pakistan: "Pakistan" },
  ar: { All: "الكل", Oman: "سلطنة عمان", "South Korea": "كوريا الجنوبية", China: "الصين", "Saudi Arabia": "المملكة العربية السعودية", Mozambique: "موزمبيق", Pakistan: "باكستان" },
  zh: { All: "全部", Oman: "阿曼", "South Korea": "韩国", China: "中国", "Saudi Arabia": "沙特阿拉伯", Mozambique: "莫桑比克", Pakistan: "巴基斯坦" },
  ko: { All: "전체", Oman: "오만", "South Korea": "대한민국", China: "중국", "Saudi Arabia": "사우디아라비아", Mozambique: "모잠비크", Pakistan: "파키스탄" },
  ur: { All: "تمام", Oman: "عمان", "South Korea": "جنوبی کوریا", China: "چین", "Saudi Arabia": "سعودی عرب", Mozambique: "موزمبیق", Pakistan: "پاکستان" }
};

const LABEL_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    inquiryRouter: "B2B Inquiry Router",
    officesDir: "Offices Directory",
    searchPlaceholder: "Search entities, roles, or addresses...",
    clear: "Clear",
    filterCountry: "Filter Country:",
    noOffices: "No offices found matching your filters.",
    faqBadge: "Enterprise FAQ",
    faqHeading: "SIAL Global Sourcing & Logistics FAQ",
    faqSub: "Critical operational answers for corporate procurement partners.",
  },
  ar: {
    inquiryRouter: "بوابة توجيه استفسارات B2B",
    officesDir: "دليل المكاتب الفروع",
    searchPlaceholder: "البحث عن الشركات أو الأدوار أو العناوين...",
    clear: "مسح",
    filterCountry: "تصفية حسب الدولة:",
    noOffices: "لم يتم العثور على مكاتب تطابق الفلاتر المحددة.",
    faqBadge: "الأسئلة الشائعة للمؤسسة",
    faqHeading: "الأسئلة الشائعة حول الخدمات اللوجستية والتوريد العالمي لسيال",
    faqSub: "إجابات تشغيلية هامة لشركاء الشراء والمشتريات من الشركات.",
  },
  zh: {
    inquiryRouter: "B2B 询盘分发",
    officesDir: "办事处名录",
    searchPlaceholder: "搜索实体、角色或地址...",
    clear: "清除",
    filterCountry: "筛选国家：",
    noOffices: "未找到匹配所选过滤器的办事处。",
    faqBadge: "企业常见问题",
    faqHeading: "SIAL 全球采购与物流常见问题",
    faqSub: "企业采购合作伙伴的关键业务解答。",
  },
  ko: {
    inquiryRouter: "B2B 문의 라우팅",
    officesDir: "지사 디렉토리",
    searchPlaceholder: "지사명, 업무, 주소 검색...",
    clear: "지우기",
    filterCountry: "국가 필터링:",
    noOffices: "필터와 일치하는 지사를 찾을 수 없습니다.",
    faqBadge: "기업 자주 묻는 질문",
    faqHeading: "SIAL 글로벌 조달 및 물류 FAQ",
    faqSub: "기업 조달 파트너를 위한 중요 운영 정보 답변.",
  },
  ur: {
    inquiryRouter: "B2B انکوائری روٹر",
    officesDir: "دفاتر کی ڈائرکٹری",
    searchPlaceholder: "کمپنیوں، کردار یا ایڈریس تلاش کریں...",
    clear: "صاف کریں",
    filterCountry: "ملک فلٹر کریں:",
    noOffices: "آپ کے فلٹرز سے مماثل کوئی دفتر نہیں ملا۔",
    faqBadge: "کارپوریٹ FAQ",
    faqHeading: "سیال گلوبل سورسنگ اور لاجسٹکس FAQ",
    faqSub: "کارپوریٹ سورسنگ شراکت داروں کے لیے اہم آپریشنل جوابات۔",
  }
};

const OFFICES_DATA: Record<Language, Array<{
  country: string;
  countryEn: string;
  entity: string;
  role: string;
  address: string;
  email: string;
  contact: string;
  details?: string[];
}>> = {
  en: [
    {
      country: "South Korea",
      countryEn: "South Korea",
      entity: "Sial & Young A Trading Co.",
      role: "Strategic Automotive Sourcing HQ",
      address: "Seoul, Incheon, South Korea",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      country: "China",
      countryEn: "China",
      entity: "Yiwu Sial International Trading Co. Ltd.",
      role: "Premier Industrial Hardware Node",
      address: "Yiwu, Zhejiang, China",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      country: "Oman (GCC HQ)",
      countryEn: "Oman",
      entity: "Yahya Bin Khalfan LLC",
      role: "Logistics, Automotive Trading & Parts Hub",
      address: "Muscat, Sultanate of Oman",
      email: "sialautotraders@gmail.com",
      contact: "SK Transports Affiliated",
      details: [
        "Automotive Parts: Backbone of genuine Hyundai & Kia spare parts supply.",
        "Network: 12-15 branches operating nationwide across the Sultanate.",
        "Logistics: SK Transports crane rentals, sales & heavy fleet management.",
        "Inventory: Advanced real-time tracking via integrated Odoo ERP systems."
      ]
    },
    {
      country: "Oman",
      countryEn: "Oman",
      entity: "Sial Kingdom LLC",
      role: "Industrial Trading & Local Distribution",
      address: "Near Abu Zaki Tile Store, Road 6, Way No 7749, Mabila'h Sanaiya, Seeb, Muscat, Oman",
      email: "sialautotraders@gmail.com",
      contact: "Muscat B2B Desk",
    },
    {
      country: "Oman",
      countryEn: "Oman",
      entity: "Sial International LLC",
      role: "Genuine & Aftermarket Auto Parts Supply",
      address: "Al Mabaila Al Janubiyya, Seeb Wilayat, Muscat, Oman",
      email: "sialautotraders@gmail.com",
      contact: "Parts Distribution Node",
    },
    {
      country: "Saudi Arabia",
      countryEn: "Saudi Arabia",
      entity: "Sial International LLC",
      role: "GCC Heavy Machinery & Fleet Operations",
      address: "Jeddah, Saudi Arabia",
      email: "sialautotraders@gmail.com",
      contact: "Jeddah Regional Desk",
    },
    {
      country: "Mozambique",
      countryEn: "Mozambique",
      entity: "SIAL KINGDOM TRADING CO, LDA",
      role: "Logistics Node & Industrial Importation",
      address: "Main AV. Nacala Road, Nampula 3100, Mozambique",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      details: [
        "Storefront: Premier industrial hardware storefront in Nampula.",
        "Clearance: Strategic Nacala port shipping and clearing pipeline.",
        "Inventory: Complete selection of genuine tools, construction steel, and hardware.",
        "Contact: +258 86 990 0800 / sialautotraders@gmail.com"
      ]
    },
    {
      country: "Pakistan",
      countryEn: "Pakistan",
      entity: "Sial Traders",
      role: "Regional Distribution & Automotive Import",
      address: "Sialkot, Punjab, Pakistan",
      email: "sialautotraders@gmail.com",
      contact: "South Asia Import Desk",
    },
    {
      country: "Pakistan",
      countryEn: "Pakistan",
      entity: "Sial International (Pvt) Limited",
      role: "Corporate Head Office & Machinery Import",
      address: "Sialkot, Punjab, Pakistan",
      email: "sialautotraders@gmail.com",
      contact: "Corporate Affairs Node",
    },
    {
      country: "Pakistan",
      countryEn: "Pakistan",
      entity: "Sial & Co",
      role: "Logistics, Shipping & Supply Chain Operations",
      address: "Sialkot, Punjab, Pakistan",
      email: "sialautotraders@gmail.com",
      contact: "Local Logistics Desk",
    },
  ],
  ar: [
    {
      country: "كوريا الجنوبية",
      countryEn: "South Korea",
      entity: "شركة سيال و يونغ إيه للتجارة",
      role: "المقر الاستراتيجي لتوريد قطع غيار السيارات",
      address: "سيول، إنتشون، كوريا الجنوبية",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      country: "الصين",
      countryEn: "China",
      entity: "شركة إيو سيال للتجارة الدولية المحدودة",
      role: "المركز الرئيسي للمعدات الصناعية",
      address: "إيو، جيجيانغ، الصين",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      country: "عمان (مقر دول مجلس التعاون)",
      countryEn: "Oman",
      entity: "شركة يحيى بن خلفان ش.م.م",
      role: "اللوجستيات وتجارة السيارات ومركز قطع الغيار",
      address: "مسقط، سلطنة عمان",
      email: "sialautotraders@gmail.com",
      contact: "تابعة لإس كي للنقل",
      details: [
        "قطع غيار السيارات: العمود الفقري لتوريد قطع غيار هيونداي وكيا الأصلية.",
        "الشبكة: 12-15 فرعاً نشطاً في جميع أنحاء البلاد.",
        "اللوجستيات: تأجير ومبيعات وإدارة أسطول الرافعات والآليات الثقيلة.",
        "المخزون: تتبع متقدم بالوقت الحقيقي عبر أنظمة Odoo ERP المتكاملة."
      ]
    },
    {
      country: "عمان",
      countryEn: "Oman",
      entity: "شركة سيال كينجدوم ش.م.م",
      role: "التجارة الصناعية والتوزيع المحلي",
      address: "بالقرب من محل أبو زكي للبلاط، شارع 6، سكة 7749، المعبيلة الصناعية، السيب، مسقط، عمان",
      email: "sialautotraders@gmail.com",
      contact: "مكتب مسقط B2B",
    },
    {
      country: "عمان",
      countryEn: "Oman",
      entity: "شركة سيال الدولية ش.م.م",
      role: "توريد قطع غيار السيارات الأصلية والتجارية",
      address: "المعبيلة الجنوبية، ولاية السيب، مسقط، سلطنة عمان",
      email: "sialautotraders@gmail.com",
      contact: "عقدة توزيع قطع الغيار",
    },
    {
      country: "المملكة العربية السعودية",
      countryEn: "Saudi Arabia",
      entity: "شركة سيال الدولية ش.م.م",
      role: "الآليات الثقيلة وعمليات الأسطول لدول الخليج",
      address: "جدة، المملكة العربية السعودية",
      email: "sialautotraders@gmail.com",
      contact: "المكتب الإقليمي بجدة",
    },
    {
      country: "موزمبيق",
      countryEn: "Mozambique",
      entity: "SIAL KINGDOM TRADING CO, LDA",
      role: "مركز اللوجستيات والاستيراد الصناعي",
      address: "شارع ناكالا الرئيسي، نامبولا 3100، موزمبيق",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      details: [
        "الواجهة: متجر الأدوات الصناعية الرئيسي في نامبولا.",
        "التخليص: خط شحن وتخليص جمركي استراتيجي عبر ميناء ناكالا.",
        "المخزون: تشكيلة كاملة من الأدوات الأصلية، فولاذ البناء، والمعدات.",
        "الاتصال: +258 86 990 0800 / sialautotraders@gmail.com"
      ]
    },
    {
      country: "باكستان",
      countryEn: "Pakistan",
      entity: "سيال تريدرز",
      role: "التوزيع الإقليمي واستيراد قطع غيار السيارات",
      address: "سيالكوت، البنجاب، باكستان",
      email: "sialautotraders@gmail.com",
      contact: "مكتب استيراد جنوب آسيا",
    },
    {
      country: "باكستان",
      countryEn: "Pakistan",
      entity: "شركة سيال الدولية (الخاصة) المحدودة",
      role: "المكتب الرئيسي واستيراد الآليات",
      address: "سيالكوت، البنجاب، باكستان",
      email: "sialautotraders@gmail.com",
      contact: "عقدة الشؤون المؤسسية",
    },
    {
      country: "باكستان",
      countryEn: "Pakistan",
      entity: "سيال وشركائه",
      role: "اللوجستيات والشحن وعمليات سلسلة التوريد",
      address: "سيالكوت، البنجاب، باكستان",
      email: "sialautotraders@gmail.com",
      contact: "المكتب اللوجستي المحلي",
    },
  ],
  zh: [
    {
      country: "韩国",
      countryEn: "South Korea",
      entity: "Sial & Young A Trading Co.",
      role: "战略汽车配件采购总部",
      address: "韩国首尔、仁川",
      email: "sialautotraders@gmail.com",
      contact: "微信：SIALautoparts",
    },
    {
      country: "中国",
      countryEn: "China",
      entity: "义乌市西阿尔国际贸易有限公司",
      role: "首要工业五金采购枢纽",
      address: "中国浙江省义乌市",
      email: "sialautotraders@gmail.com",
      contact: "微信：SIALautoparts",
    },
    {
      country: "阿曼 (海湾地区总部)",
      countryEn: "Oman",
      entity: "Yahya Bin Khalfan LLC (雅雅汽配)",
      role: "物流、汽车贸易与配件枢纽",
      address: "阿曼苏丹国马斯喀特",
      email: "sialautotraders@gmail.com",
      contact: "SK 运输合作机构",
      details: [
        "汽车配件: 现代和起亚原装零件供应的绝对支柱。",
        "网络: 在阿曼全国范围内设有 12-15 个活跃分支。",
        "物流: SK 运输起重机租赁、销售与重型车队管理。",
        "库存: 通过集成 Odoo ERP 系统实施先进的实时跟踪。"
      ]
    },
    {
      country: "阿曼",
      countryEn: "Oman",
      entity: "Sial Kingdom LLC (西阿尔王国)",
      role: "工业贸易与本地分销",
      address: "阿曼马斯喀特塞卜马贝拉工业区 Road 6, Way No 7749",
      email: "sialautotraders@gmail.com",
      contact: "马斯喀特 B2B 事务部",
    },
    {
      country: "阿曼",
      countryEn: "Oman",
      entity: "Sial International LLC",
      role: "正品与售后汽车配件供应",
      address: "阿曼马斯喀特塞卜 Al Mabaila Al Janubiyya",
      email: "sialautotraders@gmail.com",
      contact: "配件分销中心",
    },
    {
      country: "沙特阿拉伯",
      countryEn: "Saudi Arabia",
      entity: "Sial International LLC",
      role: "海湾地区重型机械与车队运营",
      address: "沙特阿拉伯吉达",
      email: "sialautotraders@gmail.com",
      contact: "吉达区域事务部",
    },
    {
      country: "莫桑比克",
      countryEn: "Mozambique",
      entity: "SIAL KINGDOM TRADING CO, LDA",
      role: "物流枢纽及工业物资进口",
      address: "莫桑比克楠普拉市主干道纳卡拉路3100号",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      details: [
        "门店: 位于楠普拉的优质工业五金与建材展示门店。",
        "清关: 依托纳卡拉港的战略航运与高效清关通道。",
        "库存: 备有齐全的正品工具、建筑钢材及工业五金零配件。",
        "联系方式: +258 86 990 0800 / sialautotraders@gmail.com"
      ]
    },
    {
      country: "巴基斯坦",
      countryEn: "Pakistan",
      entity: "Sial Trader's (西阿尔贸易)",
      role: "区域分销与汽车配件进口",
      address: "巴基斯坦旁遮普省锡亚尔科特",
      email: "sialautotraders@gmail.com",
      contact: "南亚进口事务部",
    },
    {
      country: "巴基斯坦",
      countryEn: "Pakistan",
      entity: "Sial International (Pvt) Limited",
      role: "企业总部及机械进口",
      address: "巴基斯坦旁遮普省锡亚尔科特",
      email: "sialautotraders@gmail.com",
      contact: "企业事务部节点",
    },
    {
      country: "巴基斯坦",
      countryEn: "Pakistan",
      entity: "Sial & Co",
      role: "物流、航运与供应链管理",
      address: "巴基斯坦旁遮普省锡亚尔科特",
      email: "sialautotraders@gmail.com",
      contact: "本地物流部",
    },
  ],
  ko: [
    {
      country: "대한민국",
      countryEn: "South Korea",
      entity: "Sial & Young A Trading Co.",
      role: "자동차 부품 글로벌 조달 거점 본부",
      address: "대한민국 서울, 인천",
      email: "sialautotraders@gmail.com",
      contact: "WeChat ID: SIALautoparts",
    },
    {
      country: "중국",
      countryEn: "China",
      entity: "Yiwu Sial International Trading Co. Ltd.",
      role: "산업용 하드웨어 핵심 조달 거점",
      address: "중국 절강성 이우시",
      email: "sialautotraders@gmail.com",
      contact: "WeChat ID: SIALautoparts",
    },
    {
      country: "오만 (GCC 본부)",
      countryEn: "Oman",
      entity: "Yahya Bin Khalfan LLC",
      role: "물류, 자동차 교역 및 부품 종합 센터",
      address: "오만 수لط네이트 무스카트",
      email: "sialautotraders@gmail.com",
      contact: "SK Transports 제휴",
      details: [
        "자동차 부품: 현대 및 기아 정품 예비 부품 공급의 중추.",
        "네트워크: 오만 전역에 걸쳐 12-15개 직영 지점망 가동.",
        "물류: SK Transports 크레인 임대, 판매 및 중장비 차량단 관리.",
        "재고: 통합 Odoo ERP 시스템을 통한 고도화된 실시간 재고 추적."
      ]
    },
    {
      country: "오만",
      countryEn: "Oman",
      entity: "Sial Kingdom LLC",
      role: "산업 무역 및 현지 유통",
      address: "오만 무스카트 시브 마벨라 산업단지 Way 7749, Road 6",
      email: "sialautotraders@gmail.com",
      contact: "무스카트 B2B 데스크",
    },
    {
      country: "오만",
      countryEn: "Oman",
      entity: "Sial International LLC",
      role: "순정 및 에프터마켓 자동차 부품 공급",
      address: "오만 무스카트 시브 알 마벨라 알 자누비야",
      email: "sialautotraders@gmail.com",
      contact: "부품 유통 노드",
    },
    {
      country: "사우디아라비아",
      countryEn: "Saudi Arabia",
      entity: "Sial International LLC",
      role: "GCC 중장비 크레인 & 차량단 관리",
      address: "사우디아라비아 제다",
      email: "sialautotraders@gmail.com",
      contact: "제다 지역 본부 데스크",
    },
    {
      country: "모잠비크",
      countryEn: "Mozambique",
      entity: "SIAL KINGDOM TRADING CO, LDA",
      role: "아프리카 물류 거점 및 산업 자재 수입",
      address: "모잠비크 남풀라 메인 Nacala Road 3100",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      details: [
        "오프라인 매장: 남풀라 소재 프리미엄 산업 하드웨어 및 건자재 전시장.",
        "통관: 나칼라 항구를 통한 전략적 해상 운송 및 고속 통관 파이프라인.",
        "재고: 정품 수공구, 건설용 구조강 및 오프라인 하드웨어 자재 완비.",
        "연락처: +258 86 990 0800 / sialautotraders@gmail.com"
      ]
    },
    {
      country: "파키스탄",
      countryEn: "Pakistan",
      entity: "Sial Trader's",
      role: "지역 유통 및 자동차 부품 수입",
      address: "파키스탄 펀자브 주 시알코트",
      email: "sialautotraders@gmail.com",
      contact: "남아시아 수입 전담 부서",
    },
    {
      country: "파키스탄",
      countryEn: "Pakistan",
      entity: "Sial International (Pvt) Limited",
      role: "법인 본사 및 건설 중장비 수입",
      address: "파키스탄 펀자브 주 시알코트",
      email: "sialautotraders@gmail.com",
      contact: "대관/기업 홍보 부서",
    },
    {
      country: "파키스탄",
      countryEn: "Pakistan",
      entity: "Sial & Co",
      role: "물류, 선적 및 공급망 운영",
      address: "파키스탄 펀자브 주 시알코트",
      email: "sialautotraders@gmail.com",
      contact: "현지 물류 전담 부서",
    },
  ],
  ur: [
    {
      country: "جنوبی کوریا",
      countryEn: "South Korea",
      entity: "سیال اینڈ ینگ اے ٹریڈنگ کمپنی",
      role: "گاڑیوں کے پارٹس کا اسٹریٹجک سورسنگ ہیڈ کوارٹر",
      address: "سیول، انچیون، جنوبی کوریا",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      country: "چین",
      countryEn: "China",
      entity: "ییوو سیال انٹرنیشنل ٹریڈنگ کمپنی لمیٹڈ",
      role: "انڈسٹریل ہارڈویئر کا بنیادی مرکز",
      address: "ییوو، ژجیانگ، چین",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      country: "عمان (GCC ہیڈ کوارٹر)",
      countryEn: "Oman",
      entity: "یحییٰ بن خلفان کمپنی",
      role: "لاجسٹکس، گاڑیوں کی تجارت اور پارٹس ہب",
      address: "مسقط، سلطنت عمان",
      email: "sialautotraders@gmail.com",
      contact: "ایس کے ٹرانسپورٹ کے ساتھ الحاق شدہ",
      details: [
        "آٹو پارٹس: ہنڈائی اور کیا کے حقیقی اسپیئر پارٹس کی فراہمی کا مرکز۔",
        "نیٹ ورک: عمان بھر میں 12 سے 15 فعال برانچوں کا جال۔",
        "لاجسٹکس: ایس کے ٹرانسپورٹس کرین کرایہ، فروخت اور ہیوی بیڑے کا انتظام۔",
        "انونٹری: Odoo ERP سسٹم کے ذریعے لائیو انونٹری ٹریکنگ۔"
      ]
    },
    {
      country: "عمان",
      countryEn: "Oman",
      entity: "سیال کنگڈم ٹریڈنگ کمپنی",
      role: "صنعتی تجارت اور مقامی تقسیم",
      address: "نزد ابو ذکی ٹائل اسٹور، روڈ 6، معبیلہ صنعتی علاقہ، السیب، مسقط، عمان",
      email: "sialautotraders@gmail.com",
      contact: "مسقط B2B ڈیسک",
    },
    {
      country: "عمان",
      countryEn: "Oman",
      entity: "سیال انٹرنیشنل کمپنی",
      role: "حقیقی اور متبادل آٹو پارٹس کی فراہمی",
      address: "المعبیلہ الجنوبیہ، ولایت السیب، مسقط، عمان",
      email: "sialautotraders@gmail.com",
      contact: "پارٹس ڈسٹری بیوشن نوڈ",
    },
    {
      country: "سعودی عرب",
      countryEn: "Saudi Arabia",
      entity: "سیال انٹرنیشنل کمپنی",
      role: "جی سی سی ہیوی مشینری اور کرین آپریشنز",
      address: "جدہ، سعودی عرب",
      email: "sialautotraders@gmail.com",
      contact: "جدہ علاقائی ڈیسک",
    },
    {
      country: "موزمبیق",
      countryEn: "Mozambique",
      entity: "SIAL KINGDOM TRADING CO, LDA",
      role: "لاجسٹکس اور صنعتی درآمد کا مرکز",
      address: "مین اے وی۔ ناکالا روڈ، نامپولا 3100، موزمبیق",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      details: [
        "سٹور فرنٹ: نامپولا میں پریمیئر صنعتی ہارڈویئر اور تعمیراتی مواد کا سٹور۔",
        "کلیئرنس: ناکالا بندرگاہ کے ذریعے اسٹریٹجک شپنگ اور کسٹمز کلیئرنس پائپ لائن۔",
        "انونٹری: حقیقی ٹولز، تعمیراتی اسٹیل اور ہارڈویئر کا مکمل اسٹاک۔",
        "رابطہ: +258 86 990 0800 / sialautotraders@gmail.com"
      ]
    },
    {
      country: "پاکستان",
      countryEn: "Pakistan",
      entity: "سیال ٹریڈرز",
      role: "علاقائی تقسیم اور گاڑیوں کے پارٹس کی درآمد",
      address: "سیالکوٹ، پنجاب، پاکستان",
      email: "sialautotraders@gmail.com",
      contact: "جنوبی ایشیا امپورٹ ڈیسک",
    },
    {
      country: "پاکستان",
      countryEn: "Pakistan",
      entity: "سیال انٹرنیشنل (پرائیویٹ) لمیٹڈ",
      role: "کارپوریٹ ہیڈ آفس اور مشینری کی درآمد",
      address: "سیالکوٹ، پنجاب، پاکستان",
      email: "sialautotraders@gmail.com",
      contact: "کارپوریٹ افیئرز نوڈ",
    },
    {
      country: "پاکستان",
      countryEn: "Pakistan",
      entity: "سیال اینڈ کمپنی",
      role: "لاجسٹکس، شپنگ اور سپلائی چین آپریشنز",
      address: "سیالکوٹ، پنجاب، پاکستان",
      email: "sialautotraders@gmail.com",
      contact: "مقامی لاجسٹکس ڈیسک",
    },
  ]
};

const FAQS_DATA: Record<Language, Array<{ question: string; answer: string }>> = {
  en: [
    {
      question: "How are B2B inquiries routed to different regional offices?",
      answer: "Our B2B inquiry routing system processes incoming requests automatically based on the selected region and product division. For example, a heavy machinery request for Saudi Arabia is immediately routed to our SIAL International Company team in Jeddah, while automotive parts requests are routed to our Seoul procurement node or Oman hub respectively."
    },
    {
      question: "What compliance standards and certifications do SIAL products adhere to?",
      answer: "SIAL Group operates under strict international and regional compliance protocols. Our heavy machinery division operators are OPAL certified in Oman, and our hardware imports conform to SASO standards in Saudi Arabia. In East Africa, we work with licensed clearing agents at the Maputo and Beira ports to ensure 100% compliance with customs and tax policies."
    },
    {
      question: "What are the shipping corridors and estimated delivery lead times?",
      answer: "We leverage direct factory-to-port pipelines to eliminate middleman margins. Shipments originate directly from key East Asian logistics hubs, including Incheon/Busan (South Korea) and Ningbo/Shanghai (China). Average shipping transit to GCC ports is 14-20 days, and to Maputo/Beira ports in East Africa is 25-30 days, including pre-cleared logistics routes."
    },
    {
      question: "Can we request custom product fabrication or OEM packaging?",
      answer: "Yes. SIAL Group operates physical quality audit and procurement nodes at manufacturing sites in Seoul and Yiwu. We offer customized product sizing, fabrication (pre-cutting/drilling of structural steels), and wholesale OEM branding for automotive spare parts (Hyundai and Kia replacements) depending on container-load volumes."
    }
  ],
  ar: [
    {
      question: "كيف يتم توجيه استفسارات B2B إلى المكاتب الإقليمية المختلفة؟",
      answer: "يقوم نظام توجيه استفسارات B2B لدينا بمعالجة الطلبات الواردة تلقائيًا بناءً على المنطقة المحددة وقسم المنتجات. على سبيل المثال، يتم توجيه طلب الآليات الثقيلة للمملكة العربية السعودية فورًا إلى فريق شركة سيال الدولية في جدة، بينما يتم توجيه طلبات قطع غيار السيارات إلى مركز مشترياتنا في سيول أو مركز عمان على التوالي."
    },
    {
      question: "ما هي معايير الامتثال والشهادات التي تلتزم بها منتجات سيال؟",
      answer: "تعمل مجموعة سيال تحت بروتوكولات امتثال دولية وإقليمية صارمة. مشغلو قسم الآليات الثقيلة لدينا معتمدون من OPAL في عمان، وتتوافق وارداتنا من المعدات مع معايير SASO في المملكة العربية السعودية. وفي شرق أفريقيا، نعمل مع وكلاء تخليص مرخصين في موانئ مابوتو وبيرا لضمان الامتثال بنسبة 100٪ للسياسات الجمركية والضريبية."
    },
    {
      question: "ما هي ممرات الشحن ومواعيد التسليم التقريبية؟",
      answer: "نحن نستفيد من خطوط الإمداد المباشرة من المصنع إلى الميناء لإلغاء هوامش الوسطاء. تبدأ الشحنات مباشرة من المراكز اللوجستية الرئيسية في شرق آسيا، بما في ذلك إنشون/بوسان (كوريا الجنوبية) ونينغبو/شنغهاي (الصين). متوسط وقت الشحن إلى موانئ دول مجلس التعاون الخليجي هو 14-20 يومًا، وإلى موانئ مابوتو/بيرا في شرق أفريقيا هو 25-30 يومًا، بما في ذلك المسارات اللوجستية المخلصة مسبقًا."
    },
    {
      question: "هل يمكننا طلب تصنيع منتج مخصص أو تغليف OEM؟",
      answer: "نعم. تدير مجموعة سيال مراكز تدقيق جودة ومشتريات ميدانية في مواقع التصنيع في سيول وإيو. نحن نقدم أحجامًا مخصصة للمنتجات، والتصنيع المخصص (القطع والثقب المسبق للفولاذ الإنشائي)، وعلامة تجارية OEM لقطع غيار السيارات بالجملة (بدائل هيونداي وكيا) اعتمادًا على حجم حاويات الشحن."
    }
  ],
  zh: [
    {
      question: "B2B 询盘是如何分发到不同区域办公室的？",
      answer: "我们的 B2B 询盘分发系统根据所选区域和产品部门自动处理来单。例如，沙特阿拉伯的重型机械需求会立即分发给吉达的 SIAL 国际公司团队，而汽车配件需求则分别路由至首尔采购中心或阿曼枢纽。"
    },
    {
      question: "SIAL 的产品符合哪些合规标准和认证？",
      answer: "SIAL 集团在严格的国际和地方法规下运营。我们的重型机械部门操作员在阿曼拥有 OPAL 认证，五金进口符合沙特阿拉伯的 SASO 标准。在东非，我们与马普托和贝拉港的持牌清关代理人紧密合作，确保100%符合海关及税务政策。"
    },
    {
      question: "运输航线和预计交付周期是多少？",
      answer: "我们利用从工厂到港口的直通专线来消除中间商差价。货物直接由东亚核心物流枢纽发出，包括仁川/釜山（韩国）和宁波/上海（中国）。到海湾合作委员会（GCC）港口的平均海运时间为 14-20 天，到东非马普托/贝拉港的时间为 25-30 天，已包含预清关物流通道。"
    },
    {
      question: "我们可以要求定制产品加工或 OEM 包装吗？",
      answer: "可以。SIAL 集团在首尔和义乌的生产现场设有物理质量审核与采购中心。我们根据集装箱装载量，提供定制产品尺寸、加工（结构钢的预切割/钻孔）以及汽车配件（现代和起亚替代件）的大宗 OEM 包装品牌化。"
    }
  ],
  ko: [
    {
      question: "B2B 문의는 각 지역 사무소로 어떻게 라우팅되나요?",
      answer: "당사의 B2B 문의 라우팅 시스템은 선택한 지역 및 제품 사업부에 따라 접수된 요청을 자동으로 처리합니다. 예를 들어 사우디아라비아 중장비 요청은 제다의 SIAL International Company 팀으로 즉시 라우팅되며, 자동차 부품 요청은 서울 조달 노드 또는 오만 허브로 각각 라우팅됩니다."
    },
    {
      question: "SIAL 제품은 어떤 준수 표준 및 인증을 따르나요?",
      answer: "SIAL 그룹은 엄격한 국제 및 지역 규정 준수 프로토콜에 따라 운영됩니다. 당사의 중장비 부문 작업자는 오만에서 OPAL 인증을 받았으며, 하드웨어 수입품은 사우디아라비아의 SASO 표준을 준수합니다. 동아프리카에서는 마푸토 및 베이라 항구의 라이선스 통관 대행사와 협력하여 세관 및 세금 정책을 100% 준수합니다."
    },
    {
      question: "운송 경로 및 예상 배송 리드 타임은 어떻게 되나요?",
      answer: "우리는 중개 마진을 없애기 위해 공장에서 항구까지 직배송 라인을 활용합니다. 발송물은 인천/부산(한국) 및 닝보/상하이(중국)를 포함한 동아프리카의 주요 물류 허브에서 직접 출발합니다. GCC 항구로의 평균 해상 운송 시간은 14-20일이며, 동아프리카의 마푸토/베이라 항구까지는 사전 통관 물류 경로를 포함하여 25-30일이 소요됩니다."
    },
    {
      question: "맞춤형 제품 제작 또는 OEM 포장을 요청할 수 있나요?",
      answer: "네, 가능합니다. SIAL 그룹은 서울과 이우의 제조 현장에서 물리적 품질 감사 및 조달 노드를 운영하고 있습니다. 컨테이너 적재량에 따라 자동차 예비 부품(현대 및 기아 교체품)에 대한 맞춤형 제품 크기 조정, 제작(구조용 강의 사전 절단/드릴링) 및 도매 OEM 브랜드 지정을 제공합니다."
    }
  ],
  ur: [
    {
      question: "B2B پوچھ گچھ کو مختلف علاقائی دفاتر میں کیسے منتقل کیا جاتا ہے؟",
      answer: "ہمارا B2B انکوائری روٹنگ سسٹم منتخب علاقے اور پروڈکٹ ڈویژن کی بنیاد پر آنے والی درخواستوں پر خود کار طریقے سے کارروائی کرتا ہے۔ مثال کے طور پر، سعودی عرب کے لیے ہیوی مشینری کی درخواست فوری طور پر جدہ میں ہماری سیال انٹرنیشنل کمپنی کی ٹیم کو بھیجی جاتی ہے، جبکہ آٹو پارٹس کی درخواستیں بالترتیب ہمارے سیول سورسنگ ڈیسک یا عمان ہب کو بھیجی جاتی ہے۔"
    },
    {
      question: "سیال مصنوعات کن تعمیل کے معیارات اور سرٹیفیکیشنز پر عمل کرتی ہیں؟",
      answer: "سیال گروپ سخت بین الاقوامی اور علاقائی تعمیل پروٹوکول کے تحت کام کرتا ہے۔ ہماری ہیوی مشینری ڈویژن کے آپریٹرز عمان میں OPAL سے تصدیق شدہ ہیں، اور ہماری ہارڈویئر درآمدات سعودی عرب میں SASO معیارات کے مطابق ہیں۔ مشرقی افریقہ میں، ہم کسٹم اور ٹیکس پالیسیوں کی 100% تعمیل کو یقینی بنانے کے لیے ماپوتو اور بیرا بندرگاہوں پر لائسنس یافتہ کلیئرنگ ایجنٹوں کے ساتھ کام کرتے ہیں۔"
    },
    {
      question: "شپنگ راہداریاں اور متوقع ترسیل کے اوقات کیا ہیں؟",
      answer: "ہم بیچوان کے منافع کو ختم کرنے کے لیے فیکٹری سے پورٹ تک براہ راست پائپ لائنوں کا فائدہ اٹھاتے ہیں۔ ترسیل براہ راست مشرقی ایشیا کے اہم لاجسٹکس مراکز بشمول انچیون/بوسان (جنوبی کوریا) اور ننگبو/شنگھائی (چین) سے شروع ہوتی ہے۔ جی سی سی بندرگاہوں کے لیے اوسط شپنگ ٹرانزٹ 14-20 دن ہے، اور مشرقی افریقہ میں ماپوتو/بیرا بندرگاہوں کے لیے 25-30 دن ہے، بشمول پہلے سے کلیئر شدہ لاجسٹکس راستے۔"
    },
    {
      question: "کیا ہم اپنی مرضی کے مطابق پروڈکٹ فیبریکیشن یا OEM پیکیجنگ کی درخواست کر سکتے ہیں؟",
      answer: "جی ہاں۔ سیال گروپ سیول اور ییوو میں مینوفیکچرنگ سائٹس پر جسمانی معیار کی آڈٹ اور سورسنگ ڈیسک چلاتا ہے۔ ہم کنٹینر لوڈ والیوم کے لحاظ سے اپنی مرضی کے مطابق پروڈکٹ سائز، فیبریکیشن (اسٹرکچرل اسٹیل کی پہلے سے کٹنگ/ڈرِلنگ)، اور آٹو اسپیئر پارٹس (ہنڈائی اور کیا ریپلیسمنٹ) کے لیے ہول سیل OEM برانڈنگ پیش کرتے ہیں۔"
    }
  ]
};

const COUNTRIES = ["All", "Oman", "South Korea", "China", "Saudi Arabia", "Mozambique", "Pakistan"];

export default function Contact() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"form" | "directory">("form");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const label = LABEL_TRANSLATIONS[language] || LABEL_TRANSLATIONS["en"];
  const officesList = OFFICES_DATA[language] || OFFICES_DATA["en"];
  const faqsList = FAQS_DATA[language] || FAQS_DATA["en"];

  const filteredOffices = officesList.filter((office) => {
    const matchesSearch =
      office.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry =
      selectedCountry === "All" ||
      office.countryEn.toLowerCase() === selectedCountry.toLowerCase();

    return matchesSearch && matchesCountry;
  });

  const getCountryName = (cName: string) => {
    return COUNTRY_NAME_MAP[language]?.[cName] || cName;
  };

  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
              {t("contact.badge")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase text-center leading-tight">
              {t("contact.heading")}
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              {t("contact.desc")}
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher Controls */}
        <div className="flex justify-center max-w-md mx-auto p-1 bg-sial-slate-light border border-white/5 rounded-lg">
          <button
            onClick={() => setActiveTab("form")}
            className={`w-1/2 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
              activeTab === "form"
                ? "bg-sial-gold text-sial-slate-dark shadow-md"
                : "text-sial-gray-light hover:text-white"
            }`}
          >
            {label.inquiryRouter}
          </button>
          <button
            onClick={() => setActiveTab("directory")}
            className={`w-1/2 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
              activeTab === "directory"
                ? "bg-sial-gold text-sial-slate-dark shadow-md"
                : "text-sial-gray-light hover:text-white"
            }`}
          >
            {label.officesDir} ({officesList.length})
          </button>
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[500px]">
          {activeTab === "form" ? (
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          ) : (
            <div className="space-y-8 max-w-6xl mx-auto font-sans">
              
              {/* Directory Filter Controls */}
              <ScrollReveal>
                <div className="bg-sial-slate-light p-6 rounded-xl border border-white/5 space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder={label.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-sial-slate-dark border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-sial-gray-medium focus:outline-none focus:border-sial-gold transition duration-200"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-sial-gray-light hover:text-white"
                      >
                        {label.clear}
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 items-center">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-sial-gray-light mr-2">
                      {label.filterCountry}
                    </span>
                    {COUNTRIES.map((country) => (
                      <button
                        key={country}
                        onClick={() => setSelectedCountry(country)}
                        className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wide border transition duration-200 ${
                          selectedCountry === country
                            ? "bg-sial-gold border-sial-gold text-sial-slate-dark"
                            : "bg-sial-slate-dark border-white/10 text-sial-gray-light hover:border-white/20 hover:text-white"
                        }`}
                      >
                        {getCountryName(country)}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Grid List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOffices.map((office, idx) => (
                  <ScrollReveal key={idx} delay={0.05 * idx}>
                    <HoverCard className="slate-gradient p-6 rounded-xl space-y-4 flex flex-col justify-between border border-white/5 min-h-[300px] h-full">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-sial-gold uppercase tracking-wider">
                              {office.country}
                            </span>
                            <span className="text-lg">
                              {office.countryEn.includes("Korea") && "🇰🇷"}
                              {office.countryEn.includes("China") && "🇨🇳"}
                              {office.countryEn.includes("Oman") && "🇴🇲"}
                              {office.countryEn.includes("Saudi") && "🇸🇦"}
                              {office.countryEn.includes("Mozambique") && "🇲🇿"}
                              {office.countryEn.includes("Pakistan") && "🇵🇰"}
                            </span>
                          </div>
                          <h4 className="text-base font-extrabold text-white leading-snug">{office.entity}</h4>
                          <span className="text-[10px] text-sial-gray-medium font-bold uppercase tracking-wider block">
                            {office.role}
                          </span>
                        </div>

                        {office.details && (
                          <ul className="text-[10px] text-sial-gray-light space-y-1 pt-2 border-t border-white/5 list-disc list-inside">
                            {office.details.map((detail, dIdx) => {
                              const [title, desc] = detail.split(":");
                              return (
                                <li key={dIdx} className="leading-relaxed list-none pl-1 text-justify">
                                  <span className="text-sial-gold font-bold mr-1">• {title}:</span>
                                  <span>{desc}</span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>

                      <div className="space-y-2 text-xs text-sial-gray-light pt-2 border-t border-white/5 font-sans mt-auto">
                        <p className="text-justify text-[11px] leading-relaxed">📍 {office.address}</p>
                        <div className="flex flex-col space-y-1 pt-1 text-[11px] font-mono text-sial-gray-medium">
                          <span>📧 {office.email}</span>
                          <span className="text-sial-gold">{office.contact}</span>
                        </div>
                      </div>
                    </HoverCard>
                  </ScrollReveal>
                ))}
              </div>

              {filteredOffices.length === 0 && (
                <div className="text-center py-12 text-sial-gray-light text-sm">
                  {label.noOffices}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Collapsible FAQ Accordion Section */}
        <ScrollReveal>
          <section className="max-w-4xl mx-auto space-y-6 pt-12 border-t border-white/5">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
                {label.faqBadge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight leading-tight">
                {label.faqHeading}
              </h3>
              <p className="text-xs text-sial-gray-light">{label.faqSub}</p>
            </div>

            <div className="space-y-4 pt-4">
              {faqsList.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-sial-slate-light border border-white/5 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 flex justify-between items-center text-left hover:bg-sial-slate-dark/30 transition duration-200"
                  >
                    <span className="text-sm font-bold text-white tracking-wide">{faq.question}</span>
                    <span className="text-sial-gold font-bold text-lg leading-none select-none ml-4">
                      {openFaq === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-sial-gray-light leading-relaxed border-t border-white/5 bg-sial-slate-dark/20 text-justify">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </ScrollReveal>

      </div>
    </div>
  );
}
