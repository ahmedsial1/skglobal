import React from "react";
import { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";

export const metadata: Metadata = {
  title: "Global Contact & B2B Inquiry Routing",
  description:
    "Get in touch with SIAL Group. Route your heavy machinery, automotive spare parts, or hardware material inquiries by region or division.",
};

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

export default function Contact() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Global Gateway</span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Connect with Our Enterprise Nodes
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2">
              Use our B2B routing system to send requirements to division desks, or locate coordinates for our 10 network companies.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Column */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.15}>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Offices Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.2}>
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold block">Global Corporate Directory (10 Companies)</span>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OFFICES.map((office, idx) => (
                <ScrollReveal key={idx} delay={0.05 * idx + 0.1}>
                  <HoverCard
                    className="slate-gradient p-5 rounded-lg space-y-3 flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-sial-gold block uppercase tracking-wide">
                          {office.country}
                        </span>
                        <h4 className="text-sm font-bold text-white leading-snug">{office.entity}</h4>
                        <span className="text-[10px] text-sial-gray-medium font-semibold uppercase tracking-wider block">
                          {office.role}
                        </span>
                      </div>
                      
                      {office.details && (
                        <ul className="text-[10px] text-sial-gray-light space-y-1 pt-2 border-t border-white/5 list-disc list-inside">
                          {office.details.map((detail, dIdx) => {
                            const [title, desc] = detail.split(":");
                            return (
                              <li key={dIdx} className="leading-relaxed list-none pl-1">
                                <span className="text-sial-gold font-bold mr-1">• {title}:</span>
                                <span>{desc}</span>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>

                    <div className="space-y-1 text-xs text-sial-gray-light pt-2 border-t border-white/5">
                      <p className="line-clamp-2">📍 {office.address}</p>
                      <p>📧 {office.email}</p>
                      <p className="text-[11px] font-mono text-sial-gold">{office.contact}</p>
                    </div>
                  </HoverCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
