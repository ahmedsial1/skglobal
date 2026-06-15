"use client";

import React, { useState } from "react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";

const OFFICES = [
  {
    country: "South Korea",
    entity: "Sial & Young A Trading Co.",
    role: "Strategic Automotive Sourcing HQ",
    address: "Seoul, Incheon, South Korea",
    email: "sialautotraders@gmail.com",
    contact: "WeChat: SIALautoparts",
  },
  {
    country: "China",
    entity: "Yiwu Sial International Trading Co. Ltd.",
    role: "Premier Industrial Hardware Node",
    address: "Yiwu, Zhejiang, China",
    email: "sialautotraders@gmail.com",
    contact: "WeChat: SIALautoparts",
  },
  {
    country: "Oman (GCC HQ)",
    entity: "Yahya Bin Khalfan Bin Mohammed Al Sayabi Modern Trading LLC",
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
    entity: "Sial Kingdom LLC",
    role: "Industrial Trading & Local Distribution",
    address: "Near Abu Zaki Tile Store, Road 6, Way No 7749, Mabila'h Sanaiya, Seeb, Muscat, Oman",
    email: "sialautotraders@gmail.com",
    contact: "Muscat B2B Desk",
  },
  {
    country: "Oman",
    entity: "Sial International LLC",
    role: "Genuine & Aftermarket Auto Parts Supply",
    address: "Al Mabaila Al Janubiyya, Seeb Wilayat, Muscat, Oman",
    email: "sialautotraders@gmail.com",
    contact: "Parts Distribution Node",
  },
  {
    country: "Saudi Arabia",
    entity: "Sial International LLC",
    role: "GCC Heavy Machinery & Fleet Operations",
    address: "Jeddah, Saudi Arabia",
    email: "sialautotraders@gmail.com",
    contact: "Jeddah Regional Desk",
  },
  {
    country: "Mozambique",
    entity: "Sial Kingdom LLC",
    role: "Logistics Node & Industrial Importation",
    address: "Nampula, Maputo, Mozambique",
    email: "sialautotraders@gmail.com",
    contact: "East Africa Hub Desk",
  },
  {
    country: "Pakistan",
    entity: "Sial Traders",
    role: "Regional Distribution & Automotive Import",
    address: "Sialkot, Punjab, Pakistan",
    email: "sialautotraders@gmail.com",
    contact: "South Asia Import Desk",
  },
  {
    country: "Pakistan",
    entity: "Sial International (Pvt) Limited",
    role: "Corporate Head Office & Machinery Import",
    address: "Sialkot, Punjab, Pakistan",
    email: "sialautotraders@gmail.com",
    contact: "Corporate Affairs Node",
  },
  {
    country: "Pakistan",
    entity: "Sial & Co",
    role: "Logistics, Shipping & Supply Chain Operations",
    address: "Sialkot, Punjab, Pakistan",
    email: "sialautotraders@gmail.com",
    contact: "Local Logistics Desk",
  },
];

const FAQS = [
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
];

const COUNTRIES = ["All", "Oman", "South Korea", "China", "Saudi Arabia", "Mozambique", "Pakistan"];

export default function Contact() {
  const [activeTab, setActiveTab] = useState<"form" | "directory">("form");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredOffices = OFFICES.filter((office) => {
    const matchesSearch =
      office.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      office.address.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCountry =
      selectedCountry === "All" ||
      office.country.toLowerCase().includes(selectedCountry.toLowerCase());

    return matchesSearch && matchesCountry;
  });

  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-16">
        
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Global Gateway</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase text-center">
              Connect with Our Enterprise Nodes
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 text-center max-w-2xl mx-auto">
              Use our B2B routing system to send requirements to division desks, or locate coordinates for our 10 network companies.
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
            B2B Inquiry Router
          </button>
          <button
            onClick={() => setActiveTab("directory")}
            className={`w-1/2 py-3 text-xs font-bold uppercase tracking-wider rounded transition-all duration-300 ${
              activeTab === "directory"
                ? "bg-sial-gold text-sial-slate-dark shadow-md"
                : "text-sial-gray-light hover:text-white"
            }`}
          >
            Offices Directory ({OFFICES.length})
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
                      placeholder="Search entities, roles, or addresses..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-sial-slate-dark border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-sial-gray-medium focus:outline-none focus:border-sial-gold transition duration-200"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery("")}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-sial-gray-light hover:text-white"
                      >
                        Clear
                      </button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2 items-center">
                    <span className="text-[10px] uppercase tracking-wider font-extrabold text-sial-gray-light mr-2">Filter Country:</span>
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
                        {country}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Grid List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredOffices.map((office, idx) => (
                  <ScrollReveal key={idx} delay={0.05 * idx}>
                    <HoverCard className="slate-gradient p-6 rounded-xl space-y-4 flex flex-col justify-between border border-white/5 min-h-[300px]">
                      <div className="space-y-3">
                        <div className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-bold text-sial-gold uppercase tracking-wider">
                              {office.country}
                            </span>
                            <span className="text-lg">
                              {office.country.includes("Korea") && "🇰🇷"}
                              {office.country.includes("China") && "🇨🇳"}
                              {office.country.includes("Oman") && "🇴🇲"}
                              {office.country.includes("Saudi") && "🇸🇦"}
                              {office.country.includes("Mozambique") && "🇲🇿"}
                              {office.country.includes("Pakistan") && "🇵🇰"}
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
                  No offices found matching your filters.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Collapsible FAQ Accordion Section */}
        <ScrollReveal>
          <section className="max-w-4xl mx-auto space-y-6 pt-12 border-t border-white/5">
            <div className="text-center space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Enterprise FAQ</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                SIAL Global Sourcing & Logistics FAQ
              </h3>
              <p className="text-xs text-sial-gray-light">Critical operational answers for corporate procurement partners.</p>
            </div>

            <div className="space-y-4 pt-4">
              {FAQS.map((faq, idx) => (
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
