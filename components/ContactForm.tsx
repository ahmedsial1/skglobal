"use client";

import React, { useState } from "react";
import { useLanguage, Language } from "@/context/LanguageContext";

const REGIONS_DATA: Record<Language, Array<{ id: string; label: string }>> = {
  en: [
    { id: "gcc-oman", label: "Oman (SK Transports / SIAL LLC)" },
    { id: "gcc-saudi", label: "Saudi Arabia (SIAL International Co.)" },
    { id: "asia-pk", label: "Pakistan (SIAL International Pakistan)" },
    { id: "asia-kr", label: "South Korea (SIAL & Young A HQ)" },
    { id: "asia-cn", label: "China (Yiwu Procurement Hub)" },
    { id: "africa-mz", label: "Mozambique (African Logistics)" },
  ],
  ar: [
    { id: "gcc-oman", label: "عمان (إس كي للنقل / سيال ش.م.م)" },
    { id: "gcc-saudi", label: "المملكة العربية السعودية (شركة سيال الدولية)" },
    { id: "asia-pk", label: "باكستان (سيال الدولية باكستان)" },
    { id: "asia-kr", label: "كوريا الجنوبية (المقر الرئيسي لسيال و يونغ إيه)" },
    { id: "asia-cn", label: "الصين (مركز مشتريات إيو)" },
    { id: "africa-mz", label: "موزمبيق (الخدمات اللوجستية الأفريقية)" },
  ],
  zh: [
    { id: "gcc-oman", label: "阿曼 (SK 运输 / SIAL LLC)" },
    { id: "gcc-saudi", label: "沙特阿拉伯 (SIAL 国际公司)" },
    { id: "asia-pk", label: "巴基斯坦 (SIAL 国际巴基斯坦)" },
    { id: "asia-kr", label: "韩国 (SIAL & Young A 总部)" },
    { id: "asia-cn", label: "中国 (义乌采购中心)" },
    { id: "africa-mz", label: "莫桑比克 (非洲物流)" },
  ],
  ko: [
    { id: "gcc-oman", label: "오만 (SK Transports / SIAL LLC)" },
    { id: "gcc-saudi", label: "사우디아라비아 (SIAL International Co.)" },
    { id: "asia-pk", label: "파키스탄 (SIAL International Pakistan)" },
    { id: "asia-kr", label: "대한민국 (SIAL & Young A HQ)" },
    { id: "asia-cn", label: "중국 (이우 조달 허브)" },
    { id: "africa-mz", label: "모잠비크 (아프리카 물류)" },
  ],
  ur: [
    { id: "gcc-oman", label: "عمان (ایس کے ٹرانسپورٹ / سیال کمپنی)" },
    { id: "gcc-saudi", label: "سعودی عرب (سیال انٹرنیشنل کمپنی)" },
    { id: "asia-pk", label: "پاکستان (سیال انٹرنیشنل پاکستان)" },
    { id: "asia-kr", label: "جنوبی کوریا (سیال اینڈ ینگ اے ہیڈ کوارٹر)" },
    { id: "asia-cn", label: "چین (ییوو سورسنگ ہب)" },
    { id: "africa-mz", label: "موزمبیق (افریقن لاجسٹکس)" },
  ],
};

const DIVISIONS_DATA: Record<Language, Array<{ id: string; label: string }>> = {
  en: [
    { id: "machinery", label: "Heavy Machinery (Crane Sales & Rentals)" },
    { id: "spare-parts", label: "Automotive Spare Parts (Hyundai & Kia)" },
    { id: "hardware", label: "Industrial Hardware & Construction Materials" },
    { id: "general", label: "General Corporate Inquiries / Governance" },
  ],
  ar: [
    { id: "machinery", label: "الآليات الثقيلة (مبيعات وتأجير الرافعات)" },
    { id: "spare-parts", label: "قطع غيار السيارات (هيونداي وكيا)" },
    { id: "hardware", label: "المعدات الصناعية ومواد البناء" },
    { id: "general", label: "الاستفسارات العامة للشركة / الحوكمة" },
  ],
  zh: [
    { id: "machinery", label: "重型机械 (起重机销售与租赁)" },
    { id: "spare-parts", label: "汽车配件 (现代 & 起亚)" },
    { id: "hardware", label: "工业五金与建筑材料" },
    { id: "general", label: "一般公司咨询 / 合规治理" },
  ],
  ko: [
    { id: "machinery", label: "중장비 (크레인 판매 및 임대)" },
    { id: "spare-parts", label: "자동차 부품 (현대 & 기아)" },
    { id: "hardware", label: "산업용 하드웨어 및 건축 자재" },
    { id: "general", label: "일반 기업 문의 / 합규 거버넌스" },
  ],
  ur: [
    { id: "machinery", label: "ہیوی مشینری (کرین کی فروخت اور کرایہ)" },
    { id: "spare-parts", label: "گاڑیوں کے پارٹس (ہنڈائی اور کیا)" },
    { id: "hardware", label: "انڈسٹریل ہارڈویئر اور تعمیری مواد" },
    { id: "general", label: "عام کارپوریٹ انکوائریز / گورننس" },
  ],
};

const FORM_TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    formTitle: "Direct B2B Inquiry Form",
    formDesc: "Inquiries are securely routed using multi-jurisdictional compliance protocols.",
    repName: "Representative Name",
    corpEmail: "Corporate Email",
    companyName: "Company Name",
    routeRegion: "Route by Region",
    routeDivision: "Route by Division",
    messageLabel: "Brief Requirements / Message",
    placeholderMessage: "Please outline the product requirements, volume metrics, and destination port details...",
    btnRoute: "Route B2B Inquiry",
    btnRouting: "Routing B2B Inquiry...",
    successTitle: "Inquiry Routed Successfully",
    successDescPre: "Your B2B inquiry has been secured and routed to our ",
    successDescMid: " team under the ",
    successDescPost: ".",
    ticketId: "Ticket ID",
    routedNode: "Routed Node",
    priorityStatus: "Priority Status",
    priorityVal: "Active Tier-1",
    btnSubmitAnother: "Submit Another Inquiry",
  },
  ar: {
    formTitle: "نموذج استفسار B2B المباشر",
    formDesc: "يتم توجيه الاستفسارات بشكل آمن باستخدام بروتوكولات الامتثال متعددة الولايات القضائية.",
    repName: "اسم الممثل",
    corpEmail: "البريد الإلكتروني للشركة",
    companyName: "اسم الشركة",
    routeRegion: "توجيه حسب المنطقة",
    routeDivision: "توجيه حسب القسم",
    messageLabel: "متطلبات موجزة / الرسالة",
    placeholderMessage: "يرجى تحديد متطلبات المنتج ومقاييس الحجم وتفاصيل ميناء الوصول...",
    btnRoute: "توجيه استفسار B2B",
    btnRouting: "جاري توجيه استفسار B2B...",
    successTitle: "تم توجيه الاستفسار بنجاح",
    successDescPre: "تم تأمين استفسار B2B الخاص بك وتوجيهه إلى فريقنا في ",
    successDescMid: " التابع لقسم ",
    successDescPost: ".",
    ticketId: "معرف التذكرة",
    routedNode: "العقدة الموجهة",
    priorityStatus: "حالة الأولوية",
    priorityVal: "نشط - المستوى 1",
    btnSubmitAnother: "إرسال استفسار آخر",
  },
  zh: {
    formTitle: "直接 B2B 询盘表单",
    formDesc: "询盘依据多司法管辖区合规协议进行安全分发。",
    repName: "代表姓名",
    corpEmail: "公司邮箱",
    companyName: "公司名称",
    routeRegion: "按区域分发",
    routeDivision: "按部门分发",
    messageLabel: "简要需求 / 留言",
    placeholderMessage: "请简述产品需求、采购量及目的地港口详情...",
    btnRoute: "提交 B2B 询盘",
    btnRouting: "正在分发 B2B 询盘...",
    successTitle: "询盘分发成功",
    successDescPre: "您的 B2B 询盘已安全加密，并分发至我们的 ",
    successDescMid: " 团队，归属于 ",
    successDescPost: " 业务部。",
    ticketId: "工单 ID",
    routedNode: "分发节点",
    priorityStatus: "优先级状态",
    priorityVal: "活跃第1层",
    btnSubmitAnother: "提交另一个询盘",
  },
  ko: {
    formTitle: "B2B 직통 문의 양식",
    formDesc: "다국적 준수 프로토콜에 따라 문의가 안전하게 라우팅됩니다.",
    repName: "대표자명",
    corpEmail: "회사 이메일",
    companyName: "회사명",
    routeRegion: "지역별 라우팅",
    routeDivision: "사업부별 라우팅",
    messageLabel: "간략한 요구 사항 / 메시지",
    placeholderMessage: "제품 요구 사항, 수량 기준 및 목적지 항구 세부 정보를 기재해 주세요...",
    btnRoute: "B2B 문의 라우팅",
    btnRouting: "B2B 문의 라우팅 중...",
    successTitle: "문의 라우팅 완료",
    successDescPre: "귀하의 B2B 문의가 보안 처리되어 ",
    successDescMid: " 팀의 ",
    successDescPost: " 부서로 전달되었습니다.",
    ticketId: "티켓 ID",
    routedNode: "라우팅된 노드",
    priorityStatus: "우선순위 상태",
    priorityVal: "활성 티어-1",
    btnSubmitAnother: "추가 문의 제출",
  },
  ur: {
    formTitle: "براہ راست B2B انکوائری فارم",
    formDesc: "کثیر قانونی دائرہ کار کے تعمیل پروٹوکول کے تحت انکوائریاں محفوظ طریقے سے منتقل کی جاتی ہیں۔",
    repName: "نمائندہ کا نام",
    corpEmail: "کارپوریٹ ای میل",
    companyName: "کمپنی کا نام",
    routeRegion: "علاقے کے لحاظ سے روٹ",
    routeDivision: "ڈویژن کے لحاظ سے روٹ",
    messageLabel: "مختصر ضروریات / پیغام",
    placeholderMessage: "براہ کرم پروڈکٹ کی ضروریات، والیوم میٹرکس اور منزل کی بندرگاہ کی تفصیلات خاکہ بنائیں...",
    btnRoute: "B2B انکوائری روٹ کریں",
    btnRouting: "B2B انکوائری روٹ کی جا رہی ہے...",
    successTitle: "انکوائری کامیابی سے منتقل ہو گئی",
    successDescPre: "آپ کی B2B انکوائری محفوظ کر لی گئی ہے اور اسے ",
    successDescMid: " ٹیم کے پاس ڈویژن ",
    successDescPost: " کے تحت منتقل کر دیا گیا ہے۔",
    ticketId: "ٹکٹ ID",
    routedNode: "روٹ شدہ نوڈ",
    priorityStatus: "ترجیحی حیثیت",
    priorityVal: "فعال ٹائر-1",
    btnSubmitAnother: "ایک اور انکوائری جمع کروائیں",
  },
};

export default function ContactForm() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    region: "gcc-oman",
    division: "machinery",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const regions = REGIONS_DATA[language] || REGIONS_DATA["en"];
  const divisions = DIVISIONS_DATA[language] || DIVISIONS_DATA["en"];
  const trans = FORM_TRANSLATIONS[language] || FORM_TRANSLATIONS["en"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    const selectedRegion = regions.find((r) => r.id === formData.region)?.label;
    const selectedDivision = divisions.find((d) => d.id === formData.division)?.label;

    return (
      <div className="bg-slate-50 p-8 sm:p-12 rounded-xl border border-slate-200 shadow-xl text-center space-y-6 max-w-2xl mx-auto font-sans">
        <div className="w-16 h-16 bg-blue-50 border border-sial-blue/30 rounded-full flex items-center justify-center mx-auto">
          <span className="text-3xl text-sial-blue">✓</span>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">{trans.successTitle}</h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
            {trans.successDescPre} <strong className="text-slate-900">{selectedRegion}</strong> {trans.successDescMid} <strong className="text-slate-900">{selectedDivision}</strong>{trans.successDescPost}
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg border border-slate-200 text-left text-xs space-y-3 font-mono text-slate-600 max-w-md mx-auto">
          <p className="flex justify-between">
            <span className="text-sial-blue font-bold">{trans.ticketId}:</span>
            <span className="text-slate-900 font-semibold">SIAL-{Math.floor(100000 + Math.random() * 900000)}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-sial-blue font-bold">{trans.routedNode}:</span>
            <span className="text-slate-900 font-semibold">{formData.region.toUpperCase()}-{formData.division.toUpperCase()}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-sial-blue font-bold">{trans.priorityStatus}:</span>
            <span className="text-emerald-600 font-bold uppercase">{trans.priorityVal}</span>
          </p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              region: "gcc-oman",
              division: "machinery",
              message: "",
            });
          }}
          className="px-6 py-2.5 bg-sial-blue hover:bg-sial-blue-dark text-white font-bold uppercase tracking-wider text-xs rounded transition duration-200 shadow-md shadow-blue-500/10"
        >
          {trans.btnSubmitAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 p-8 rounded-xl border border-slate-200 shadow-lg space-y-6 max-w-2xl mx-auto font-sans">
      <div className="space-y-2 text-center">
        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider">{trans.formTitle}</h3>
        <div className="h-0.5 w-12 bg-sial-blue mx-auto"></div>
        <p className="text-xs text-slate-600">{trans.formDesc}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{trans.repName}</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sial-blue focus:ring-1 focus:ring-sial-blue/30 transition duration-200"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{trans.corpEmail}</label>
          <input
            type="email"
            required
            placeholder="j.doe@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sial-blue focus:ring-1 focus:ring-sial-blue/30 transition duration-200"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{trans.companyName}</label>
        <input
          type="text"
          required
          placeholder="Enterprise Logistics Ltd"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sial-blue focus:ring-1 focus:ring-sial-blue/30 transition duration-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{trans.routeRegion}</label>
          <select
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sial-blue focus:ring-1 focus:ring-sial-blue/30 transition duration-200"
          >
            {regions.map((region) => (
              <option key={region.id} value={region.id} className="bg-white text-slate-900">
                {region.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{trans.routeDivision}</label>
          <select
            value={formData.division}
            onChange={(e) => setFormData({ ...formData, division: e.target.value })}
            className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sial-blue focus:ring-1 focus:ring-sial-blue/30 transition duration-200"
          >
            {divisions.map((div) => (
              <option key={div.id} value={div.id} className="bg-white text-slate-900">
                {div.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">{trans.messageLabel}</label>
        <textarea
          required
          rows={5}
          placeholder={trans.placeholderMessage}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-white border border-slate-300 rounded px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sial-blue focus:ring-1 focus:ring-sial-blue/30 transition duration-200 resize-none"
        ></textarea>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 bg-sial-blue hover:bg-sial-blue-dark disabled:bg-sial-blue/50 disabled:cursor-not-allowed text-white font-extrabold uppercase tracking-widest text-xs rounded transition duration-200 shadow-md shadow-blue-500/10"
        >
          {loading ? trans.btnRouting : trans.btnRoute}
        </button>
      </div>
    </form>
  );
}
