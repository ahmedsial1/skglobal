"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const [selectedLang, setSelectedLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/machinery", label: "Heavy Machinery" },
    { href: "/spare-parts", label: "Spare Parts" },
    { href: "/hardware", label: "Industrial Hardware" },
    { href: "/contact", label: "Contact" },
  ];

  const currentLangLabel = LANGUAGES.find((l) => l.code === selectedLang)?.label || "English";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sial-slate-dark/85 backdrop-blur-md border-b border-sial-gold/10 py-4 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="SIAL Group Logo" className="h-20 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-sial-gold ${
                      isActive ? "text-sial-gold border-b-2 border-sial-gold pb-1" : "text-sial-gray-light"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-1 text-xs font-semibold text-sial-gray-light hover:text-white px-3 py-1.5 rounded-full border border-sial-gray-dark bg-sial-slate-light/50 transition duration-200"
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
                <div className="absolute right-0 mt-2 w-48 rounded-lg bg-sial-slate-light border border-white/10 shadow-2xl overflow-hidden z-50">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setSelectedLang(lang.code);
                        setLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs font-medium hover:bg-sial-slate-dark transition duration-150 ${
                        selectedLang === lang.code ? "text-sial-gold bg-sial-slate-dark/50" : "text-sial-gray-light hover:text-white"
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
              className="text-xs uppercase tracking-wider font-bold text-sial-slate-dark bg-sial-gold hover:bg-sial-gold-dark px-5 py-2.5 rounded-md transition duration-300 shadow-md gold-glow-hover"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            {/* Language Selector for Mobile (inline simplified) */}
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center space-x-1 text-xs text-sial-gray-light hover:text-white px-2 py-1 rounded border border-sial-gray-dark bg-sial-slate-light/50"
            >
              <span>🌐 {selectedLang.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sial-gray-light hover:text-white focus:outline-none"
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
        <div className="px-4 pt-2 pb-6 bg-sial-slate-dark/95 backdrop-blur-lg border-b border-white/5 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2.5 rounded-md text-base font-semibold tracking-wide transition duration-150 ${
                  isActive
                    ? "text-sial-gold bg-sial-slate-light/50"
                    : "text-sial-gray-light hover:text-white hover:bg-sial-slate-light/20"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/5">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm uppercase tracking-wider font-bold text-sial-slate-dark bg-sial-gold hover:bg-sial-gold-dark py-3 rounded-md transition duration-300 shadow-md"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );

  function lgHiddenLangSelector() {
    return (
      <div className="lg:hidden absolute right-4 mt-1 w-40 rounded-md bg-sial-slate-light border border-white/10 shadow-xl overflow-hidden z-50">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => {
              setSelectedLang(lang.code);
              setLangOpen(false);
            }}
            className="block w-full text-left px-3 py-2 text-xs font-semibold text-sial-gray-light hover:text-white hover:bg-sial-slate-dark/50"
          >
            {lang.label}
          </button>
        ))}
      </div>
    );
  }
}
