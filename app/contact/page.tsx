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
    country: "South Korea (Corporate HQ)",
    entity: "SIAL & Young A Trading Co.",
    role: "Proprietary Sourcing & Inspection Node",
    address: "Seoul, South Korea",
    email: "sialautotraders@gmail.com",
    contact: "WeChat: SIALautoparts",
  },
  {
    country: "China (Procurement Hub)",
    entity: "Yiwu SIAL International Trading Co. Ltd.",
    role: "Factory Verification & Quality Clearance",
    address: "Yiwu, Zhejiang Province, China",
    email: "sialautotraders@gmail.com",
    contact: "WeChat: SIALautoparts",
  },
  {
    country: "Oman (GCC HQ)",
    entity: "SK Transports Oman & SIAL International LLC",
    role: "Mobile Crane Sales, rentals & parts",
    address: "Muscat, Sultanate of Oman",
    email: "sialautotraders@gmail.com",
    contact: "Web: www.sktransportsoman.com",
  },
  {
    country: "Saudi Arabia (GCC Expansion)",
    entity: "SIAL International Company",
    role: "Fleet rentals, Crane sales & spare parts",
    address: "Riyadh, Kingdom of Saudi Arabia",
    email: "sialautotraders@gmail.com",
    contact: "Inquiries: B2B Routing Desk",
  },
  {
    country: "Pakistan (South Asia)",
    entity: "SIAL International Pakistan Pvt Ltd",
    role: "Machinery Import & Regional Distribution",
    address: "Lahore / Karachi, Pakistan",
    email: "sialautotraders@gmail.com",
    contact: "Support: East Asian Network Desk",
  },
  {
    country: "Mozambique (Africa Pipeline)",
    entity: "SIAL Mozambique Logistics Node",
    role: "Industrial Hardware & Steel Importation",
    address: "Maputo Port, Mozambique",
    email: "sialautotraders@gmail.com",
    contact: "Clearance: Beira & Maputo Agents",
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
              Use our smart routing form to send specifications directly to regional compliance desks, or locate our individual hub coordinates.
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
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold block">Global Office Coordinates</span>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {OFFICES.map((office, idx) => (
                <ScrollReveal key={idx} delay={0.1 * idx + 0.2}>
                  <HoverCard
                    className="slate-gradient p-5 rounded-lg space-y-3"
                  >
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-sial-gold block uppercase tracking-wide">
                        {office.country}
                      </span>
                      <h4 className="text-sm font-bold text-white leading-snug">{office.entity}</h4>
                      <span className="text-[10px] text-sial-gray-medium font-semibold uppercase tracking-wider block">
                        {office.role}
                      </span>
                    </div>
                    <div className="space-y-1 text-xs text-sial-gray-light pt-2 border-t border-white/5">
                      <p>📍 {office.address}</p>
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
