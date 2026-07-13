"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage, Language } from "@/context/LanguageContext";
import AnnouncementBar from "./AnnouncementBar";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "ar", label: "العربية (Arabic)" },
  { code: "zh", label: "中文 (Chinese)" },
  { code: "ko", label: "한국어 (Korean)" },
  { code: "ur", label: "اردو (Urdu)" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangChange = (lang: string) => {
    setLanguage(lang as Language);
    setLangOpen(false);
  };

  const navLinks = [
    { href: "/", label: t("navbar.home") },
    { href: "/about", label: t("navbar.about") },
    { href: "/machinery", label: t("navbar.machinery") },
    { href: "/spare-parts", label: t("navbar.parts") },
    { href: "/hardware", label: t("navbar.hardware") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const currentLangLabel = LANGUAGES.find((l) => l.code === language)?.label || "English";

  return (
    <>
      <AnnouncementBar scrolled={scrolled} />
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg"
            : "top-[32px] sm:top-[36px] md:top-[40px] bg-slate-900 border-b border-slate-800 py-6"
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/logo.png" alt="SIAL Group Logo" width={200} height={128} className="h-28 md:h-32 w-auto object-contain transition-transform duration-300 hover:scale-105" priority />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex flex-grow justify-center px-4">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-semibold tracking-wide transition-colors duration-200 hover:text-blue-400 whitespace-nowrap ${
                      isActive ? "text-blue-400 border-b-2 border-blue-400 pb-1" : "text-slate-300"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1 text-xs font-semibold text-slate-300 hover:text-blue-400 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/80 hover:bg-slate-700 transition duration-200"
              >
                <span>🌐 {currentLangLabel.split(" ")[0]}</span>
                <svg
                  className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-slate-800 border border-slate-700 shadow-xl overflow-hidden z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLangChange(lang.code)}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-slate-700 transition duration-150 ${
                        language === lang.code ? "text-blue-400 bg-slate-700/50" : "text-slate-200 hover:text-blue-400"
                      }`}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="text-xs uppercase tracking-wider font-bold text-white bg-sial-blue hover:bg-sial-blue-dark px-5 py-2.5 rounded-md transition duration-300 shadow-md shadow-blue-500/10"
            >
              {t("navbar.getInTouch")}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Language Selector for Mobile */}
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 text-xs text-slate-300 hover:text-blue-400 px-2 py-1 rounded border border-slate-700 bg-slate-800"
            >
              <span>🌐 {language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-blue-400 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Lang Dropdown Drawer overlay */}
      {langOpen && lgHiddenLangSelector()}

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100 visible" : "max-h-0 opacity-0 invisible overflow-hidden"
        }`}
      >
        <div className="px-4 pt-2 pb-6 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition duration-150 ${
                  isActive
                    ? "text-blue-400 bg-slate-800"
                    : "text-slate-300 hover:text-blue-400 hover:bg-slate-800"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-slate-800">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm uppercase tracking-wider font-bold text-white bg-sial-blue hover:bg-sial-blue-dark py-3 rounded-md transition duration-300 shadow-md"
            >
              {t("navbar.getInTouch")}
            </Link>
          </div>
        </div>
      </div>
      </nav>
    </>
  );

  function lgHiddenLangSelector() {
    return (
      <div className="lg:hidden absolute right-4 mt-1 w-40 rounded-md bg-slate-800 border border-slate-700 shadow-xl overflow-hidden z-50">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLangChange(lang.code)}
            className="block w-full text-left px-3 py-2 text-xs font-semibold text-slate-300 hover:text-blue-400 hover:bg-slate-700"
          >
            {lang.label}
          </button>
        ))}
      </div>
    );
  }
}
