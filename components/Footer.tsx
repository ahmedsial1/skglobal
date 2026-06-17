"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Profile */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/logo.png" alt="SIAL Group Logo" width={180} height={112} className="h-28 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <p className="text-xs text-slate-400 leading-relaxed text-justify">
              {t("home.heroDesc")}
            </p>
          </div>

          {/* Business Divisions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t("footer.divisions")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/machinery" className="hover:text-blue-400 transition duration-200">
                  {t("home.machineryTitle")}
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-blue-400 transition duration-200">
                  {t("home.partsTitle")}
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="hover:text-blue-400 transition duration-200">
                  {t("home.hardwareTitle")}
                </Link>
              </li>
            </ul>
            <div className="pt-4 border-t border-slate-800">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">{t("footer.platforms")}</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="https://www.sktransportsoman.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition duration-200 flex items-center space-x-1"
                  >
                    <span>SK Transports Oman</span>
                    <span className="text-[9px]">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.sialkingdom.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition duration-200 flex items-center space-x-1"
                  >
                    <span>Sial Kingdom Seeb</span>
                    <span className="text-[9px]">↗</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.yahyaautoparts.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition duration-200 flex items-center space-x-1"
                  >
                    <span>Yahya Auto Parts</span>
                    <span className="text-[9px]">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Operations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t("footer.operations")}</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex flex-col">
                <span className="text-slate-200 font-semibold">{t("footer.operations") && "GCC Network"}</span>
                <span className="text-xs text-slate-400">Oman (SK Transports) & Saudi Arabia</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-200 font-semibold">East Asia Nodes</span>
                <span className="text-xs text-slate-400">Seoul, South Korea & Yiwu, China</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-200 font-semibold">Africa Pipelines</span>
                <span className="text-xs text-slate-400">Maputo, Mozambique distribution</span>
              </li>
              <li className="flex flex-col">
                <span className="text-slate-200 font-semibold">South Asia Node</span>
                <span className="text-xs text-slate-400">SIAL International Pakistan Pvt Ltd</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">{t("footer.contacts")}</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 text-base">📧</span>
                <div>
                  <span className="block text-xs text-slate-400 uppercase">{t("footer.centralEmail")}</span>
                  <a
                    href="mailto:sialautotraders@gmail.com"
                    className="text-slate-200 font-semibold hover:text-blue-400 transition duration-200"
                  >
                    sialautotraders@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-blue-400 text-base">💬</span>
                <div>
                  <span className="block text-xs text-slate-400 uppercase">{t("footer.wechat")}</span>
                  <span className="text-slate-200 font-mono font-semibold">SIALautoparts</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} SIAL Group. {t("footer.governance")}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white transition duration-200">
              {t("footer.ceoMessage")}
            </Link>
            <Link href="/contact" className="hover:text-white transition duration-200">
              {t("footer.b2bInquiry")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
