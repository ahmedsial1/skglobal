"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface AnnouncementBarProps {
  scrolled: boolean;
}

export default function AnnouncementBar({ scrolled }: AnnouncementBarProps) {
  const { t } = useLanguage();
  const tagline = t("navbar.announcement");

  // Create four copies of the tagline text to ensure gapless marquee looping on large displays
  const copies = Array(4).fill(tagline);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 bg-[#F8FAFC]/95 backdrop-blur-md text-slate-800 flex items-center justify-center font-sans font-semibold tracking-wider text-[11px] sm:text-xs h-[32px] sm:h-[36px] md:h-[40px] border-b border-slate-200/80 transition-transform duration-300 ${
        scrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="w-full overflow-hidden whitespace-nowrap relative flex items-center h-full" dir="ltr">
        <div className="animate-marquee whitespace-nowrap flex items-center select-none">
          {copies.map((text, index) => (
            <span key={index} className="px-10 flex items-center space-x-2 text-slate-600">
              <span className="text-sial-gold font-extrabold text-[12px] select-none">✦</span>
              <span>{text}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
