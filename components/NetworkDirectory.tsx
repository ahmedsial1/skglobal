"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HoverCard from "@/components/HoverCard";

const COUNTRIES = [
  "All Countries",
  "Oman",
  "Pakistan",
  "South Korea",
  "China",
  "Saudi Arabia",
  "Mozambique",
];

const NETWORK_COMPANIES = [
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
    name: "Sial Kingdom LLC",
    country: "Mozambique",
    address: "Nampula, Maputo, Mozambique",
    role: "Logistics Node & Industrial Importation",
    email: "sialautotraders@gmail.com",
    contact: "East Africa Hub Desk",
  }
];

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
  const [selectedCountry, setSelectedCountry] = useState("All Countries");

  const filteredCompanies = NETWORK_COMPANIES.filter((c) => {
    if (selectedCountry === "All Countries") return true;
    return c.country === selectedCountry;
  });

  return (
    <div className="space-y-12">
      {/* Country Filters / Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-white/5 pb-6">
        {COUNTRIES.map((country) => {
          const isActive = selectedCountry === country;
          return (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
                isActive
                  ? "bg-sial-gold text-sial-slate-dark shadow-lg shadow-sial-gold/20"
                  : "bg-sial-slate-light/40 text-sial-gray-light hover:text-white border border-white/5 hover:bg-sial-slate-light/60"
              }`}
            >
              {country}
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
                className={`slate-gradient p-6 rounded-xl flex flex-col justify-between h-full border ${
                  company.isEnhanced
                    ? "border-sial-gold/20 relative overflow-hidden"
                    : "border-white/5"
                }`}
              >
                {company.isEnhanced && (
                  <div className="absolute top-0 right-0 w-24 h-24 bg-sial-gold/5 rounded-full blur-2xl"></div>
                )}
                
                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-black text-sial-gold uppercase tracking-widest">
                        {company.country}
                      </span>
                      {company.isEnhanced && (
                        <span className="text-[9px] font-bold text-sial-gold bg-sial-gold/10 px-2 py-0.5 rounded border border-sial-gold/20 uppercase tracking-wider">
                          Elite Hub
                        </span>
                      )}
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-lg font-bold text-white tracking-tight leading-snug">
                          {company.name}
                        </h3>
                        <p className="text-[11px] text-sial-gray-medium font-semibold uppercase tracking-wider">
                          {company.role}
                        </p>
                      </div>
                      {(company as any).logo && (
                        <div className="relative w-12 h-12 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center p-1.5 flex-shrink-0">
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
                    <div className="p-3.5 rounded-lg bg-sial-gold/5 border border-sial-gold/15 space-y-3 shadow-inner">
                      <div className="flex items-center justify-between border-b border-sial-gold/10 pb-1.5">
                        <span className="text-[9px] uppercase tracking-widest text-sial-gold font-black">
                          Operations Dashboard
                        </span>
                        <span className="flex h-1.5 w-1.5 relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sial-gold opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sial-gold"></span>
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[10px]">
                        <div className="bg-sial-slate-dark/50 p-2 rounded border border-white/5">
                          <span className="text-sial-gray-medium text-[8px] uppercase tracking-wider block">Branch Footprint</span>
                          <span className="text-white font-bold block mt-0.5">{company.enhancedDetails.branches}</span>
                        </div>
                        <div className="bg-sial-slate-dark/50 p-2 rounded border border-white/5">
                          <span className="text-sial-gray-medium text-[8px] uppercase tracking-wider block">ERP System</span>
                          <span className="text-white font-bold block mt-0.5">{company.enhancedDetails.erp}</span>
                        </div>
                        <div className="bg-sial-slate-dark/50 p-2 rounded border border-white/5">
                          <span className="text-sial-gray-medium text-[8px] uppercase tracking-wider block">Logistics Link</span>
                          {company.id === "yahya-bin-khalfan-om" ? (
                            <a
                              href="https://www.sktransportsoman.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sial-gold hover:text-white font-bold block mt-0.5 transition duration-150 flex items-center space-x-0.5"
                            >
                              <span>SK Transports Fleet</span>
                              <span className="text-[8px]">↗</span>
                            </a>
                          ) : (
                            <span className="text-white font-bold block mt-0.5">{company.enhancedDetails.logistics}</span>
                          )}
                        </div>
                        <div className="bg-sial-slate-dark/50 p-2 rounded border border-white/5">
                          <span className="text-sial-gray-medium text-[8px] uppercase tracking-wider block">Trading Focus</span>
                          <span className="text-white font-bold block mt-0.5">{company.enhancedDetails.backbone}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-1.5 text-xs text-sial-gray-light pt-4 border-t border-white/5 mt-4">
                  <p className="line-clamp-2">📍 {company.address}</p>
                  <p>📧 {company.email}</p>
                  <p className="text-[11px] font-mono text-sial-gold pt-1">{company.contact}</p>
                  {(company as any).website && (
                    <div className="pt-2">
                      <a
                        href={(company as any).website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-[10px] font-extrabold text-sial-gold hover:text-white uppercase tracking-widest border border-sial-gold/20 hover:border-white px-2.5 py-1.5 rounded transition duration-200"
                      >
                        <span>Visit Website</span>
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
