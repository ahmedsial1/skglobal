"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverCard from "@/components/HoverCard";
import { useLanguage, Language } from "@/context/LanguageContext";

const COUNTRY_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    "All Countries": "All Countries",
    "Oman": "Oman",
    "Pakistan": "Pakistan",
    "South Korea": "South Korea",
    "China": "China",
    "Saudi Arabia": "Saudi Arabia",
    "Mozambique": "Mozambique",
  },
  ar: {
    "All Countries": "جميع الدول",
    "Oman": "سلطنة عمان",
    "Pakistan": "باكستان",
    "South Korea": "كوريا الجنوبية",
    "China": "الصين",
    "Saudi Arabia": "المملكة العربية السعودية",
    "Mozambique": "موزمبيق",
  },
  zh: {
    "All Countries": "所有国家",
    "Oman": "阿曼",
    "Pakistan": "巴基斯坦",
    "South Korea": "韩国",
    "China": "中国",
    "Saudi Arabia": "沙特阿拉伯",
    "Mozambique": "莫桑比克",
  },
  ko: {
    "All Countries": "모든 국가",
    "Oman": "오만",
    "Pakistan": "파키스탄",
    "South Korea": "대한민국",
    "China": "중국",
    "Saudi Arabia": "사우디아라비아",
    "Mozambique": "모잠비크",
  },
  ur: {
    "All Countries": "تمام ممالک",
    "Oman": "عمان",
    "Pakistan": "پاکستان",
    "South Korea": "جنوبی کوریا",
    "China": "چین",
    "Saudi Arabia": "سعودی عرب",
    "Mozambique": "موزمبیق",
  }
};

const LABEL_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    eliteHub: "Elite Hub",
    opsDashboard: "Operations Dashboard",
    branchFootprint: "Branch Footprint",
    erpSystem: "ERP System",
    logisticsLink: "Logistics Link",
    tradingFocus: "Trading Focus",
    visitWebsite: "Visit Website",
    fleetFleet: "SK Transports Fleet",
  },
  ar: {
    eliteHub: "مركز متميز",
    opsDashboard: "لوحة العمليات",
    branchFootprint: "الفروع النشطة",
    erpSystem: "نظام ERP",
    logisticsLink: "الرابط اللوجستي",
    tradingFocus: "التركيز التجاري",
    visitWebsite: "زيارة الموقع",
    fleetFleet: "أسطول إس كي للنقل",
  },
  zh: {
    eliteHub: "精英枢纽",
    opsDashboard: "运营仪表盘",
    branchFootprint: "分支机构",
    erpSystem: "ERP 系统",
    logisticsLink: "物流链接",
    tradingFocus: "贸易焦点",
    visitWebsite: "访问网站",
    fleetFleet: "SK 运输车队",
  },
  ko: {
    eliteHub: "엘리트 허브",
    opsDashboard: "운영 대시보드",
    branchFootprint: "지사 현황",
    erpSystem: "ERP 시스템",
    logisticsLink: "물류 연계",
    tradingFocus: "거래 중점",
    visitWebsite: "웹사이트 방문",
    fleetFleet: "SK Transports 차량단",
  },
  ur: {
    eliteHub: "ایلیٹ ہب",
    opsDashboard: "آپریشنز ڈیش بورڈ",
    branchFootprint: "برانچ نیٹ ورک",
    erpSystem: "ERP سسٹم",
    logisticsLink: "لاجسٹکس لنک",
    tradingFocus: "ٹریڈنگ فوکس",
    visitWebsite: "ویب سائٹ دیکھیں",
    fleetFleet: "ایس کے ٹرانسپورٹ بیڑا",
  }
};

const COUNTRIES = [
  "All Countries",
  "Oman",
  "Pakistan",
  "South Korea",
  "China",
  "Saudi Arabia",
  "Mozambique",
];

const NETWORK_COMPANIES_DATA: Record<Language, Array<{
  id: string;
  name: string;
  country: string;
  address: string;
  role: string;
  email: string;
  contact: string;
  isEnhanced?: boolean;
  enhancedDetails?: {
    branches: string;
    erp: string;
    logistics: string;
    backbone: string;
  };
  logo?: string;
  website?: string;
}>> = {
  en: [
    {
      id: "sial-traders-pk",
      name: "Sial Trader's",
      country: "Pakistan",
      address: "Sialkot, Punjab, Pakistan",
      role: "Regional Distribution & Automotive Import",
      email: "sialautotraders@gmail.com",
      contact: "South Asia Import Desk",
    },
    {
      id: "sial-intl-pk",
      name: "Sial International (Pvt) Limited",
      country: "Pakistan",
      address: "Sialkot, Punjab, Pakistan",
      role: "Corporate Head Office & Machinery Import",
      email: "sialautotraders@gmail.com",
      contact: "Corporate Affairs Desk",
    },
    {
      id: "sial-co-pk",
      name: "Sial & Co",
      country: "Pakistan",
      address: "Sialkot, Punjab, Pakistan",
      role: "Logistics, Shipping & Supply Chain Operations",
      email: "sialautotraders@gmail.com",
      contact: "Local Logistics Desk",
    },
    {
      id: "sial-kingdom-om",
      name: "Sial Kingdom LLC",
      country: "Oman",
      address: "Near Abu Zaki Tile Store, Road 6, Way No 7749, Mabila’h Sanaiya, Seeb, Muscat, Oman",
      role: "B2B Industrial Trading & Parts Sourcing",
      email: "sialautotraders@gmail.com",
      contact: "Muscat B2B Desk",
      isEnhanced: true,
      enhancedDetails: {
        branches: "3 Active Branches (Seeb, Suwaiq, Sohar)",
        erp: "Odoo ERP System Integrated",
        logistics: "Global Parts Sourcing",
        backbone: "Kia & Hyundai Specialist"
      },
      logo: "/sialkingdom_logo.png",
      website: "https://www.sialkingdom.com"
    },
    {
      id: "sial-intl-om",
      name: "Sial International LLC",
      country: "Oman",
      address: "Al Mabaila Al Janubiyya, Seeb Wilayat, Muscat, Oman",
      role: "Genuine & Aftermarket Auto Parts Supply",
      email: "sialautotraders@gmail.com",
      contact: "Hyundai & Kia Spares Desk",
    },
    {
      id: "yahya-bin-khalfan-om",
      name: "Yahya Bin Khalfan LLC",
      country: "Oman",
      address: "Muscat, Sultanate of Oman",
      role: "Logistics, Automotive Trading & Parts Hub",
      email: "sialautotraders@gmail.com",
      contact: "Oman Logistics HQ",
      isEnhanced: true,
      enhancedDetails: {
        branches: "12-15 Active Branches Nationwide",
        erp: "Odoo ERP System Integrated",
        logistics: "SK Transports Affiliated Fleet",
        backbone: "Hyundai & Kia Genuine Spares"
      },
      logo: "/yahyaautoparts_logo.png",
      website: "https://www.yahyaautoparts.com"
    },
    {
      id: "sk-transports-om",
      name: "SK Transports Oman",
      country: "Oman",
      address: "Muscat, Sultanate of Oman",
      role: "PDO Approved Heavy Lifting & Crane Rental",
      email: "sialautotraders@gmail.com",
      contact: "Heavy Lift Desk",
      isEnhanced: true,
      enhancedDetails: {
        branches: "Muscat, Sohar, Duqm, Salalah Operations",
        erp: "SANY Fleet Procurement ERP",
        logistics: "25T to 500T Mobile Cranes",
        backbone: "PDO Safety Compliance"
      },
      logo: "/sktransportsoman_logo.png",
      website: "https://www.sktransportsoman.com"
    },
    {
      id: "sial-young-a-kr",
      name: "Sial & Young A Trading Co.",
      country: "South Korea",
      address: "Seoul, Incheon, South Korea",
      role: "Strategic Automotive Sourcing HQ",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      id: "yiwu-sial-cn",
      name: "Yiwu Sial International Trading Co. Ltd.",
      country: "China",
      address: "Yiwu, Zhejiang, China",
      role: "Premier Industrial Hardware Node",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      id: "sial-intl-sa",
      name: "Sial International LLC",
      country: "Saudi Arabia",
      address: "Jeddah, Saudi Arabia",
      role: "Crane Sales, Rentals & Fleet Operations",
      email: "sialautotraders@gmail.com",
      contact: "Jeddah Regional Desk",
    },
    {
      id: "sial-kingdom-mz",
      name: "SIAL KINGDOM TRADING CO, LDA",
      country: "Mozambique",
      address: "Main AV. Nacala Road, Nampula 3100, Mozambique",
      role: "Logistics Node & Industrial Importation",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      isEnhanced: true,
      enhancedDetails: {
        branches: "Nampula Storefront & Warehouse",
        erp: "Odoo ERP System Integrated",
        logistics: "Nacala Port Clearing Pipeline",
        backbone: "Industrial Hardware & Steel"
      },
      logo: "/mozambique_storefront.png"
    }
  ],
  ar: [
    {
      id: "sial-traders-pk",
      name: "سيال تريدرز",
      country: "Pakistan",
      address: "سيالكوت، البنجاب، باكستان",
      role: "التوزيع الإقليمي واستيراد قطع غيار السيارات",
      email: "sialautotraders@gmail.com",
      contact: "مكتب استيراد جنوب آسيا",
    },
    {
      id: "sial-intl-pk",
      name: "سيال الدولية (الخاصة) المحدودة",
      country: "Pakistan",
      address: "سيالكوت، البنجاب، باكستان",
      role: "المكتب الرئيسي للشركة واستيراد الآليات",
      email: "sialautotraders@gmail.com",
      contact: "مكتب الشؤون المؤسسية",
    },
    {
      id: "sial-co-pk",
      name: "سيال وشركائه",
      country: "Pakistan",
      address: "سيالكوت، البنجاب، باكستان",
      role: "اللوجستيات والشحن وعمليات سلسلة التوريد",
      email: "sialautotraders@gmail.com",
      contact: "المكتب اللوجستي المحلي",
    },
    {
      id: "sial-kingdom-om",
      name: "شركة سيال كينجدوم ش.م.م",
      country: "Oman",
      address: "بالقرب من محل أبو زكي للبلاط، شارع 6، سكة 7749، المعبيلة الصناعية، السيب، مسقط، سلطنة عمان",
      role: "التجارة الصناعية وتوريد قطع الغيار B2B",
      email: "sialautotraders@gmail.com",
      contact: "مكتب مسقط B2B",
      isEnhanced: true,
      enhancedDetails: {
        branches: "3 فروع نشطة (السيب، السويق، صحار)",
        erp: "نظام Odoo ERP متكامل",
        logistics: "سورسينج عالمي للقطع",
        backbone: "أخصائي كيا وهيونداي"
      },
      logo: "/sialkingdom_logo.png",
      website: "https://www.sialkingdom.com"
    },
    {
      id: "sial-intl-om",
      name: "شركة سيال الدولية ش.م.م",
      country: "Oman",
      address: "المعبيلة الجنوبية، ولاية السيب، مسقط، سلطنة عمان",
      role: "توريد قطع غيار السيارات الأصلية والتجارية",
      email: "sialautotraders@gmail.com",
      contact: "مكتب قطع غيار هيونداي وكيا",
    },
    {
      id: "yahya-bin-khalfan-om",
      name: "شركة يحيى بن خلفان ش.م.م",
      country: "Oman",
      address: "مسقط، سلطنة عمان",
      role: "اللوجستيات وتجارة السيارات ومركز قطع الغيار",
      email: "sialautotraders@gmail.com",
      contact: "المقر اللوجستي لعمان",
      isEnhanced: true,
      enhancedDetails: {
        branches: "12-15 فرعاً نشطاً في جميع أنحاء البلاد",
        erp: "نظام Odoo ERP متكامل",
        logistics: "الأسطول التابع لإس كي للنقل",
        backbone: "قطع غيار هيونداي وكيا الأصلية"
      },
      logo: "/yahyaautoparts_logo.png",
      website: "https://www.yahyaautoparts.com"
    },
    {
      id: "sk-transports-om",
      name: "إس كي للنقل عمان",
      country: "Oman",
      address: "مسقط، سلطنة عمان",
      role: "تأجير الرافعات والرفع الثقيل المعتمد من PDO",
      email: "sialautotraders@gmail.com",
      contact: "مكتب الرفع الثقيل",
      isEnhanced: true,
      enhancedDetails: {
        branches: "عمليات مسقط، صحار، الدقم، صلالة",
        erp: "برنامج أسطول SANY للمشتريات",
        logistics: "رافعات متنقلة من 25 طن إلى 500 طن",
        backbone: "الالتزام بالسلامة لمؤسسة PDO"
      },
      logo: "/sktransportsoman_logo.png",
      website: "https://www.sktransportsoman.com"
    },
    {
      id: "sial-young-a-kr",
      name: "شركة سيال و يونغ إيه للتجارة",
      country: "South Korea",
      address: "سيول، إنتشون، كوريا الجنوبية",
      role: "المقر الاستراتيجي لتوريد قطع غيار السيارات",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      id: "yiwu-sial-cn",
      name: "شركة إيو سيال للتجارة الدولية المحدودة",
      country: "China",
      address: "إيو، جيجيانغ، الصين",
      role: "المركز الرئيسي للمعدات الصناعية",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      id: "sial-intl-sa",
      name: "شركة سيال الدولية ش.م.م",
      country: "Saudi Arabia",
      address: "جدة، المملكة العربية السعودية",
      role: "مبيعات وتأجير الرافعات وعمليات الأسطول",
      email: "sialautotraders@gmail.com",
      contact: "المكتب الإقليمي بجدة",
    },
    {
      id: "sial-kingdom-mz",
      name: "SIAL KINGDOM TRADING CO, LDA",
      country: "Mozambique",
      address: "شارع ناكالا الرئيسي، نامبولا 3100، موزمبيق",
      role: "مركز اللوجستيات والاستيراد الصناعي",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      isEnhanced: true,
      enhancedDetails: {
        branches: "متجر ومستودع نامبولا",
        erp: "نظام Odoo ERP متكامل",
        logistics: "ممر تخليص ميناء ناكالا",
        backbone: "المعدات الصناعية والحديد"
      },
      logo: "/mozambique_storefront.png"
    }
  ],
  zh: [
    {
      id: "sial-traders-pk",
      name: "Sial Trader's (西阿尔贸易)",
      country: "Pakistan",
      address: "巴基斯坦旁遮普省锡亚尔科特",
      role: "区域分销与汽车配件进口",
      email: "sialautotraders@gmail.com",
      contact: "南亚进口事务部",
    },
    {
      id: "sial-intl-pk",
      name: "Sial International (Pvt) Limited",
      country: "Pakistan",
      address: "巴基斯坦旁遮普省锡亚尔科特",
      role: "企业总部及机械进口",
      email: "sialautotraders@gmail.com",
      contact: "企业事务部",
    },
    {
      id: "sial-co-pk",
      name: "Sial & Co",
      country: "Pakistan",
      address: "巴基斯坦旁遮普省锡亚尔科特",
      role: "物流、航运与供应链管理",
      email: "sialautotraders@gmail.com",
      contact: "本地物流部",
    },
    {
      id: "sial-kingdom-om",
      name: "Sial Kingdom LLC (西阿尔王国)",
      country: "Oman",
      address: "阿曼马斯喀特塞卜马贝拉工业区 Road 6, Way No 7749",
      role: "B2B 工业贸易与零配件采购",
      email: "sialautotraders@gmail.com",
      contact: "马斯喀特 B2B 事务部",
      isEnhanced: true,
      enhancedDetails: {
        branches: "3 个活跃分部 (塞卜, 苏怀格, 苏哈尔)",
        erp: "已集成 Odoo ERP 系统",
        logistics: "全球零配件直接采购",
        backbone: "起亚与现代汽车配件专家"
      },
      logo: "/sialkingdom_logo.png",
      website: "https://www.sialkingdom.com"
    },
    {
      id: "sial-intl-om",
      name: "Sial International LLC",
      country: "Oman",
      address: "阿曼马斯喀特塞卜 Al Mabaila Al Janubiyya",
      role: "正品与售后汽车配件供应",
      email: "sialautotraders@gmail.com",
      contact: "现代与起亚配件事务部",
    },
    {
      id: "yahya-bin-khalfan-om",
      name: "Yahya Bin Khalfan LLC (雅雅汽配)",
      country: "Oman",
      address: "阿曼苏丹国马斯喀特",
      role: "物流、汽车贸易与配件枢纽",
      email: "sialautotraders@gmail.com",
      contact: "阿曼物流总部",
      isEnhanced: true,
      enhancedDetails: {
        branches: "全国 12-15 个活跃分支",
        erp: "已集成 Odoo ERP 系统",
        logistics: "SK 运输合作车队",
        backbone: "现代与起亚原厂正品配件"
      },
      logo: "/yahyaautoparts_logo.png",
      website: "https://www.yahyaautoparts.com"
    },
    {
      id: "sk-transports-om",
      name: "SK Transports Oman (SK 运输)",
      country: "Oman",
      address: "阿曼苏丹国马斯喀特",
      role: "PDO 认证重型吊装与起重机租赁",
      email: "sialautotraders@gmail.com",
      contact: "重型起重事务部",
      isEnhanced: true,
      enhancedDetails: {
        branches: "马斯喀特、苏哈尔、杜库姆、塞拉莱运营",
        erp: "SANY 起重车队采购 ERP",
        logistics: "25吨至500吨移动式起重机",
        backbone: "PDO 安全标准合规"
      },
      logo: "/sktransportsoman_logo.png",
      website: "https://www.sktransportsoman.com"
    },
    {
      id: "sial-young-a-kr",
      name: "Sial & Young A Trading Co.",
      country: "South Korea",
      address: "韩国首尔、仁川",
      role: "战略汽车配件采购总部",
      email: "sialautotraders@gmail.com",
      contact: "微信：SIALautoparts",
    },
    {
      id: "yiwu-sial-cn",
      name: "义乌市西阿尔国际贸易有限公司",
      country: "China",
      address: "中国浙江省义乌市",
      role: "首要工业五金采购枢纽",
      email: "sialautotraders@gmail.com",
      contact: "微信：SIALautoparts",
    },
    {
      id: "sial-intl-sa",
      name: "Sial International LLC",
      country: "Saudi Arabia",
      address: "沙特阿拉伯吉达",
      role: "起重机销售、租赁与车队运营",
      email: "sialautotraders@gmail.com",
      contact: "吉达区域事务部",
    },
    {
      id: "sial-kingdom-mz",
      name: "SIAL KINGDOM TRADING CO, LDA",
      country: "Mozambique",
      address: "莫桑比克楠普拉市主干道纳卡拉路3100号",
      role: "物流枢纽及工业物资进口",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      isEnhanced: true,
      enhancedDetails: {
        branches: "楠普拉门店与大型仓库",
        erp: "已集成 Odoo ERP 系统",
        logistics: "纳卡拉港口清关通道",
        backbone: "工业五金与建筑钢材"
      },
      logo: "/mozambique_storefront.png"
    }
  ],
  ko: [
    {
      id: "sial-traders-pk",
      name: "Sial Trader's (시알 트레이더스)",
      country: "Pakistan",
      address: "파키스탄 펀자브 주 시알코트",
      role: "지역 유통 및 자동차 부품 수입",
      email: "sialautotraders@gmail.com",
      contact: "남아시아 수입 전담 부서",
    },
    {
      id: "sial-intl-pk",
      name: "Sial International (Pvt) Limited",
      country: "Pakistan",
      address: "파키스탄 펀자브 주 시알코트",
      role: "법인 본사 및 건설 중장비 수입",
      email: "sialautotraders@gmail.com",
      contact: "대관/기업 홍보 부서",
    },
    {
      id: "sial-co-pk",
      name: "Sial & Co",
      country: "Pakistan",
      address: "파키스탄 펀자브 주 시알코트",
      role: "물류, 선적 및 공급망 운영",
      email: "sialautotraders@gmail.com",
      contact: "현지 물류 전담 부서",
    },
    {
      id: "sial-kingdom-om",
      name: "Sial Kingdom LLC (시알 킹덤)",
      country: "Oman",
      address: "오만 무스카트 시브 마벨라 산업단지 Way 7749, Road 6",
      role: "B2B 산업 무역 및 부품 조달",
      email: "sialautotraders@gmail.com",
      contact: "무스카트 B2B 데스크",
      isEnhanced: true,
      enhancedDetails: {
        branches: "3개 영업 지점 운영 (시브, 수와이크, 소하르)",
        erp: "Odoo ERP 통합 물류 관리 시스템 적용",
        logistics: "글로벌 부품 다이렉트 소싱",
        backbone: "기아 & 현대 자동차 정비 부품 전문"
      },
      logo: "/sialkingdom_logo.png",
      website: "https://www.sialkingdom.com"
    },
    {
      id: "sial-intl-om",
      name: "Sial International LLC",
      country: "Oman",
      address: "오만 무스카트 시브 알 마벨라 알 자누비야",
      role: "순정 및 에프터마켓 자동차 부품 공급",
      email: "sialautotraders@gmail.com",
      contact: "현대 & 기아 부품 전담 부서",
    },
    {
      id: "yahya-bin-khalfan-om",
      name: "Yahya Bin Khalfan LLC (야야 오토파츠)",
      country: "Oman",
      address: "오만 수لط네이트 무스카트",
      role: "물류, 자동차 교역 및 부품 종합 센터",
      email: "sialautotraders@gmail.com",
      contact: "오만 통합 물류 본부",
      isEnhanced: true,
      enhancedDetails: {
        branches: "전국 12-15개 직영 지점망 가동",
        erp: "Odoo ERP 통합 시스템 적용",
        logistics: "SK Transports 제휴 화물 차량단",
        backbone: "현대 & 기아 자동차 정품 부품 유통"
      },
      logo: "/yahyaautoparts_logo.png",
      website: "https://www.yahyaautoparts.com"
    },
    {
      id: "sk-transports-om",
      name: "SK Transports Oman (SK 트랜스포트)",
      country: "Oman",
      address: "오만 수لط네이트 무스카트",
      role: "PDO 승인 중장비 크레인 임대 & 엔지니어링",
      email: "sialautotraders@gmail.com",
      contact: "중장비 크레인 사업부",
      isEnhanced: true,
      enhancedDetails: {
        branches: "무스카트, 소하르, 두쿰, 살랄라 광역 현장 가동",
        erp: "SANY 장비 구매 전용 ERP 관리",
        logistics: "25톤~500톤 모바일 크레인 다수 보유",
        backbone: "PDO 최고 등급 안전 기준 충족"
      },
      logo: "/sktransportsoman_logo.png",
      website: "https://www.sktransportsoman.com"
    },
    {
      id: "sial-young-a-kr",
      name: "Sial & Young A Trading Co.",
      country: "South Korea",
      address: "대한민국 서울, 인천",
      role: "자동차 부품 글로벌 조달 거점 본부",
      email: "sialautotraders@gmail.com",
      contact: "WeChat ID: SIALautoparts",
    },
    {
      id: "yiwu-sial-cn",
      name: "Yiwu Sial International Trading Co. Ltd.",
      country: "China",
      address: "중국 절강성 이우시",
      role: "산업용 하드웨어 핵심 조달 거점",
      email: "sialautotraders@gmail.com",
      contact: "WeChat ID: SIALautoparts",
    },
    {
      id: "sial-intl-sa",
      name: "Sial International LLC",
      country: "Saudi Arabia",
      address: "사우디아라비아 제다",
      role: "크레인 장비 판매, 임대 및 엔지니어링",
      email: "sialautotraders@gmail.com",
      contact: "제다 지역 본부 데스크",
    },
    {
      id: "sial-kingdom-mz",
      name: "SIAL KINGDOM TRADING CO, LDA",
      country: "Mozambique",
      address: "모잠비크 남풀라 메인 Nacala Road 3100",
      role: "아프리카 물류 거점 및 산업 자재 수입",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      isEnhanced: true,
      enhancedDetails: {
        branches: "남풀라 전시장 및 보관창고",
        erp: "Odoo ERP 통합 물류 관리 적용",
        logistics: "나칼라 항구 통관 파이프라인",
        backbone: "산업 하드웨어 및 건설용 강재"
      },
      logo: "/mozambique_storefront.png"
    }
  ],
  ur: [
    {
      id: "sial-traders-pk",
      name: "سیال ٹریڈرز",
      country: "Pakistan",
      address: "سیالکوٹ، پنجاب، پاکستان",
      role: "علاقائی تقسیم اور گاڑیوں کے پارٹس کی درآمد",
      email: "sialautotraders@gmail.com",
      contact: "جنوبی ایشیا امپورٹ ڈیسک",
    },
    {
      id: "sial-intl-pk",
      name: "سیال انٹرنیشنل (پرائیویٹ) لمیٹڈ",
      country: "Pakistan",
      address: "سیالکوٹ، پنجاب، پاکستان",
      role: "کارپوریٹ ہیڈ آفس اور مشینری کی درآمد",
      email: "sialautotraders@gmail.com",
      contact: "کارپوریٹ افیئرز ڈیسک",
    },
    {
      id: "sial-co-pk",
      name: "سیال اینڈ کمپنی",
      country: "Pakistan",
      address: "سیالکوٹ، پنجاب، پاکستان",
      role: "لاجسٹکس، شپنگ اور سپلائی چین آپریشنز",
      email: "sialautotraders@gmail.com",
      contact: "مقامی لاجسٹکس ڈیسک",
    },
    {
      id: "sial-kingdom-om",
      name: "سیال کنگڈم ٹریڈنگ کمپنی",
      country: "Oman",
      address: "نزد ابو ذکی ٹائل اسٹور، روڈ 6، معبیلہ صنعتی علاقہ، السیب، مسقط، عمان",
      role: "B2B صنعتی تجارت اور پارٹس کی سورسنگ",
      email: "sialautotraders@gmail.com",
      contact: "مسقط B2B ڈیسک",
      isEnhanced: true,
      enhancedDetails: {
        branches: "3 فعال برانچیں (السیب، السویق، صحار)",
        erp: "Odoo ERP سسٹم مربوط ہے",
        logistics: "گاڑیوں کے پرزوں کی عالمی سورسنگ",
        backbone: "کیا اور ہنڈائی کے ماہر"
      },
      logo: "/sialkingdom_logo.png",
      website: "https://www.sialkingdom.com"
    },
    {
      id: "sial-intl-om",
      name: "سیال انٹرنیشنل کمپنی",
      country: "Oman",
      address: "المعبیلہ الجنوبیہ، ولایت السیب، مسقط، عمان",
      role: "حقیقی اور متبادل آٹو پارٹس کی فراہمی",
      email: "sialautotraders@gmail.com",
      contact: "ہنڈائی اور کیا اسپیئرز ڈیسک",
    },
    {
      id: "yahya-bin-khalfan-om",
      name: "یحییٰ بن خلفان کمپنی",
      country: "Oman",
      address: "مسقط، سلطنت عمان",
      role: "لاجسٹکس، گاڑیوں کی تجارت اور پارٹس ہب",
      email: "sialautotraders@gmail.com",
      contact: "عمان لاجسٹکس ہیڈ کوارٹر",
      isEnhanced: true,
      enhancedDetails: {
        branches: "ملک بھر میں 12 سے 15 فعال برانچیں",
        erp: "Odoo ERP سسٹم مربوط ہے",
        logistics: "ایس کے ٹرانسپورٹ کا الحاق شدہ بیڑا",
        backbone: "ہنڈائی اور کیا کے حقیقی اسپیئر پارٹس"
      },
      logo: "/yahyaautoparts_logo.png",
      website: "https://www.yahyaautoparts.com"
    },
    {
      id: "sk-transports-om",
      name: "ایس کے ٹرانسپورٹس عمان",
      country: "Oman",
      address: "مسقط، سلطنت عمان",
      role: "PDO سے منظور شدہ ہیوی لفٹنگ اور کرین رینٹل",
      email: "sialautotraders@gmail.com",
      contact: "ہیوی لفٹ ڈیسک",
      isEnhanced: true,
      enhancedDetails: {
        branches: "مسقط، صحار، دقم، صلالہ میں آپریشنز",
        erp: "SANY کرین بیڑے کا خریداری ERP",
        logistics: "25 ٹن سے 500 ٹن موبائل کرینیں",
        backbone: "PDO حفاظتی تعمیل"
      },
      logo: "/sktransportsoman_logo.png",
      website: "https://www.sktransportsoman.com"
    },
    {
      id: "sial-young-a-kr",
      name: "سیال اینڈ ینگ اے ٹریڈنگ کمپنی",
      country: "South Korea",
      address: "سیول، انچیون، جنوبی کوریا",
      role: "گاڑیوں کے پارٹس کا اسٹریٹجک سورسنگ ہیڈ کوارٹر",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      id: "yiwu-sial-cn",
      name: "ییوو سیال انٹرنیشنل ٹریڈنگ کمپنی لمیٹڈ",
      country: "China",
      address: "ییوو، ژجیانگ، چین",
      role: "انڈسٹریل ہارڈویئر کا بنیادی مرکز",
      email: "sialautotraders@gmail.com",
      contact: "WeChat: SIALautoparts",
    },
    {
      id: "sial-intl-sa",
      name: "سیال انٹرنیشنل کمپنی",
      country: "Saudi Arabia",
      address: "جدہ، سعودی عرب",
      role: "کرینوں کی فروخت، کرایہ اور آپریشنز",
      email: "sialautotraders@gmail.com",
      contact: "جدہ علاقائی ڈیسک",
    },
    {
      id: "sial-kingdom-mz",
      name: "SIAL KINGDOM TRADING CO, LDA",
      country: "Mozambique",
      address: "مین اے وی۔ ناکالا روڈ، نامپولا 3100، موزمبیق",
      role: "لاجسٹکس اور صنعتی درآمد کا مرکز",
      email: "sialautotraders@gmail.com",
      contact: "📞 +258 86 990 0800",
      isEnhanced: true,
      enhancedDetails: {
        branches: "نامپولا اسٹور اور گودام",
        erp: "Odoo ERP سسٹم مربوط ہے",
        logistics: "ناکالا پورٹ کلیئرنس پائپ لائن",
        backbone: "صنعتی ہارڈویئر اور اسٹیل"
      },
      logo: "/mozambique_storefront.png"
    }
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 15 } }
};

export default function NetworkDirectory() {
  const { language } = useLanguage();
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  const companiesList = NETWORK_COMPANIES_DATA[language] || NETWORK_COMPANIES_DATA["en"];

  const filteredCompanies = companiesList.filter((c) => {
    if (selectedCountry === "All Countries") return true;
    // Map selectedCountry to the corresponding company's EN country value to match data correctly
    const companyEnData = NETWORK_COMPANIES_DATA["en"].find(item => item.id === c.id);
    return companyEnData?.country === selectedCountry;
  });

  const getCountryName = (cName: string) => {
    return COUNTRY_TRANSLATIONS[language]?.[cName] || cName;
  };

  const getLabel = (lKey: string) => {
    return LABEL_TRANSLATIONS[language]?.[lKey] || lKey;
  };

  return (
    <div className="space-y-12">
      {/* Country Filters / Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-6">
        {COUNTRIES.map((country) => {
          const isActive = selectedCountry === country;
          return (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                isActive
                  ? "bg-sial-blue text-white shadow-lg shadow-blue-500/10"
                  : "bg-slate-100 text-slate-600 hover:text-sial-blue border border-slate-200 hover:bg-slate-200"
              }`}
            >
              {getCountryName(country)}
            </button>
          );
        })}
      </div>

      {/* Companies Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        key={selectedCountry}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredCompanies.map((company) => (
            <motion.div
              layout
              variants={itemVariants}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, scale: 0.95 }}
              key={company.id}
            >
              <HoverCard
                className={`bg-slate-50 p-6 rounded-xl flex flex-col justify-between h-full border shadow-sm ${
                  company.isEnhanced
                    ? "border-sial-blue/30 relative overflow-hidden"
                    : "border-slate-200"
                }`}
              >
                {company.isEnhanced && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sial-blue/5 rounded-full blur-2xl"></div>
                )}
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-sial-blue uppercase tracking-widest">
                        {getCountryName(company.country)}
                      </span>
                      {company.isEnhanced && (
                        <span className="text-[9px] font-bold text-sial-blue bg-sial-blue/10 px-2 py-0.5 rounded border border-sial-blue/20 uppercase tracking-wider">
                          {getLabel("eliteHub")}
                        </span>
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                          {company.name}
                        </h3>
                        <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                          {company.role}
                        </p>
                      </div>
                      {(company as any).logo && (
                        <div className="relative w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-1.5 flex-shrink-0 shadow-sm">
                          <img
                            src={(company as any).logo}
                            alt={`${company.name} Logo`}
                            className="object-contain max-w-full max-h-full"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Interactive Operation Dashboard for Yahya Bin Khalfan / Sial Kingdom / SK Transports */}
                  {company.isEnhanced && company.enhancedDetails && (
                    <div className="p-3.5 rounded-lg bg-blue-50/40 border border-sial-blue/15 space-y-3 shadow-inner">
                      <div className="flex items-center justify-between border-b border-sial-blue/10 pb-1.5">
                        <span className="text-[9px] uppercase tracking-widest text-sial-blue font-black">
                          {getLabel("opsDashboard")}
                        </span>
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sial-blue opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sial-blue"></span>
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="bg-white p-2 rounded border border-slate-200/60 shadow-sm">
                          <span className="text-slate-500 text-[8px] uppercase tracking-wider block">{getLabel("branchFootprint")}</span>
                          <span className="text-slate-900 font-bold block mt-0.5">{company.enhancedDetails.branches}</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200/60 shadow-sm">
                          <span className="text-slate-500 text-[8px] uppercase tracking-wider block">{getLabel("erpSystem")}</span>
                          <span className="text-slate-900 font-bold block mt-0.5">{company.enhancedDetails.erp}</span>
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200/60 shadow-sm">
                          <span className="text-slate-500 text-[8px] uppercase tracking-wider block">{getLabel("logisticsLink")}</span>
                          {company.id === "yahya-bin-khalfan-om" ? (
                            <a
                              href="https://www.sktransportsoman.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sial-blue hover:text-sial-blue-dark hover:underline font-bold block mt-0.5 transition duration-150 flex items-center space-x-0.5"
                            >
                              <span>{getLabel("fleetFleet")}</span>
                              <span className="text-[8px]">↗</span>
                            </a>
                          ) : (
                            <span className="text-slate-900 font-bold block mt-0.5">{company.enhancedDetails.logistics}</span>
                          )}
                        </div>
                        <div className="bg-white p-2 rounded border border-slate-200/60 shadow-sm">
                          <span className="text-slate-500 text-[8px] uppercase tracking-wider block">{getLabel("tradingFocus")}</span>
                          <span className="text-slate-900 font-bold block mt-0.5">{company.enhancedDetails.backbone}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 pt-4 border-t border-slate-200 mt-4">
                  <p className="line-clamp-2">📍 {company.address}</p>
                  <p>📧 {company.email}</p>
                  <p className="text-[11px] font-mono text-sial-blue font-semibold pt-1">{company.contact}</p>
                  {(company as any).website && (
                    <div className="pt-2">
                      <a
                        href={(company as any).website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold text-sial-blue hover:text-white uppercase tracking-widest border border-sial-blue/20 hover:bg-sial-blue px-2.5 py-1.5 rounded transition duration-200"
                      >
                        <span>{getLabel("visitWebsite")}</span>
                        <span className="text-[9px]">↗</span>
                      </a>
                    </div>
                  )}
                </div>
              </HoverCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
