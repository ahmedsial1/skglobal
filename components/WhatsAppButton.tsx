"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

const tooltips = {
  en: "Chat on WhatsApp",
  ar: "تواصل معنا عبر واتساب",
  zh: "在WhatsApp上聊天",
  ko: "WhatsApp으로 문의하기",
  ur: "واٹس ایپ پر رابطہ کریں"
};

export default function WhatsAppButton() {
  const { language } = useLanguage();
  const [hovered, setHovered] = useState(false);

  // Fallback to English if language is not key in tooltips
  const langKey = (language && tooltips[language as keyof typeof tooltips] ? language : "en") as keyof typeof tooltips;
  const tooltipText = tooltips[langKey];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center select-none">
      {/* Tooltip Label */}
      <div
        className={`mr-3 px-3 py-2 bg-slate-900/90 backdrop-blur-xs text-white text-xs font-bold font-sans rounded-lg shadow-lg border border-slate-700/50 transition-all duration-300 origin-right ${
          hovered ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95 pointer-events-none"
        }`}
        style={{ direction: langKey === "ar" ? "rtl" : "ltr" }}
      >
        {tooltipText}
      </div>

      {/* Floating Button */}
      <a
        href="https://wa.me/821055489938"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-hidden focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping opacity-75 group-hover:animate-none"></span>
        
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.74.002-2.583-1.002-5.01-2.83-6.84C16.626 2.186 14.19 1.182 11.6 1.182c-5.442 0-9.87 4.37-9.874 9.741-.002 1.812.486 3.578 1.413 5.161l-.973 3.548 3.65-.949zM17.18 14.39c-.282-.142-1.67-.82-1.927-.914-.257-.095-.444-.142-.631.142-.187.284-.724.914-.887 1.102-.163.188-.327.212-.609.071-.282-.142-1.192-.438-2.272-1.399-.84-.748-1.407-1.671-1.572-1.955-.165-.284-.018-.438.123-.578.127-.127.282-.328.423-.492.14-.164.187-.282.281-.472.093-.19.047-.354-.024-.496-.07-.142-.63-1.517-.863-2.078-.227-.546-.456-.472-.63-.48l-.538-.01c-.187 0-.49.07-.747.354-.257.284-.982.96-.982 2.342 0 1.382 1.005 2.718 1.146 2.907.14.188 1.98 3.017 4.8 4.217.671.286 1.196.457 1.605.586.673.214 1.287.184 1.77.112.54-.08 1.67-.682 1.904-1.34.234-.658.234-1.222.164-1.34-.07-.118-.257-.188-.539-.33z" />
        </svg>
      </a>
    </div>
  );
}
