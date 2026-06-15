import React from "react";
import { Metadata } from "next";
import NetworkDirectory from "@/components/NetworkDirectory";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Global Corporate Network & Registered Subsidiaries",
  description:
    "Explore SIAL Group's multi-jurisdictional network of 10 registered companies and procurement nodes across South Korea, China, Oman, Saudi Arabia, Pakistan, and Mozambique.",
};

export default function Network() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sial-gold/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-sial-slate-light/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
              Enterprise Footprint
            </span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Our Global Corporate Network
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2">
              SIAL Group operates across multiple international jurisdictions. Filter our 10 registered subsidiaries, logistics pipelines, and direct sourcing hubs.
            </p>
          </div>
        </ScrollReveal>

        {/* Directory Filters and Grid */}
        <ScrollReveal delay={0.15}>
          <NetworkDirectory />
        </ScrollReveal>
      </div>
    </div>
  );
}
