"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface AnnouncementBarProps {
  scrolled: boolean;
}

export default function AnnouncementBar({ scrolled }: AnnouncementBarProps) {
  const { t } = useLanguage();
  const tagline = t("navbar.announcement");

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#1E40AF] text-white flex items-center justify-center font-sans font-semibold tracking-wide text-[11px] sm:text-xs md:text-sm h-[32px] sm:h-[36px] md:h-[40px] border-b border-blue-700/35 transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Mobile view: Continuous marquee ticker */}
      <div className="md:hidden w-full overflow-hidden whitespace-nowrap relative flex items-center" dir="ltr">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          <span className="px-6 flex items-center space-x-2">
            <span>⚡</span>
            <span>{tagline}</span>
          </span>
          <span className="px-6 flex items-center space-x-2">
            <span>⚡</span>
            <span>{tagline}</span>
          </span>
        </div>
      </div>

      {/* Desktop view: Centered static text */}
      <div className="hidden md:flex items-center justify-center px-4 w-full h-full space-x-2">
        <span className="text-blue-200">⚡</span>
        <span className="text-slate-100">{tagline}</span>
      </div>
    </div>
  );
}
