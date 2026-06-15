import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";

export const metadata: Metadata = {
  title: "Industrial Hardware Division | Infrastructure Pipelines",
  description:
    "Explore our Industrial Hardware Division, delivering bulk imports of construction materials and heavy hardware for Mozambique infrastructure projects directly from our China procurement hub.",
};

export default function Hardware() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Industrial Division</span>
            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Industrial Hardware & Construction Materials
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2">
              Facilitating the import, clearance, and distribution of high-strength structural materials. Connecting large-scale infrastructure developments in East Africa with direct production sources.
            </p>
          </div>
        </ScrollReveal>

        {/* Mozambique Section */}
        <ScrollReveal delay={0.15}>
          <section className="glassmorphism p-8 md:p-12 rounded-2xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sial-gold/5 rounded-full blur-3xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-6">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded bg-sial-slate-light border border-white/10 text-xs font-bold text-sial-gold">🇲🇿 Africa Pipelines</span>
                  <span className="text-xs text-sial-gray-light font-semibold">Mozambique Distribution Hub</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Supporting Mozambique&apos;s Strategic Infrastructure Pipelines
                </h2>
                <p className="text-sm text-sial-gray-light leading-relaxed">
                  As Mozambique undergoes massive development in mining, gas logistics, and transport corridors, SIAL Group provides the physical foundation. We import and distribute bulk industrial hardware, structural steels, high-tensile fasteners, and safety gear. Through our regional clearing agents in Maputo and Beira, we manage the entire import workflow from container discharge to on-site project storage.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <HoverCard className="p-3 bg-sial-slate-dark rounded">
                    <span className="font-bold text-white block">Structural Materials</span>
                    <span className="text-sial-gray-light mt-0.5 block">Rebars, structural beams, wire meshes, and formwork solutions.</span>
                  </HoverCard>
                  <HoverCard className="p-3 bg-sial-slate-dark rounded">
                    <span className="font-bold text-white block">Fasteners & Rigging</span>
                    <span className="text-sial-gray-light mt-0.5 block">High-tensile bolts, anchors, shackles, wire ropes, and hoisting tackle.</span>
                  </HoverCard>
                  <HoverCard className="p-3 bg-sial-slate-dark rounded">
                    <span className="font-bold text-white block">Site Safety & Piping</span>
                    <span className="text-sial-gray-light mt-0.5 block">Steel pipes, valves, specialized safety gear, and industrial tools.</span>
                  </HoverCard>
                </div>
              </div>

              <HoverCard className="lg:col-span-4 space-y-4 bg-sial-slate-light/50 p-6 rounded-lg">
                <h4 className="text-white font-bold text-sm border-b border-white/5 pb-2">Supply Integrity Status</h4>
                <ul className="space-y-2.5 text-xs text-sial-gray-light">
                  <li className="flex justify-between">
                    <span>Shipping Route:</span>
                    <span className="text-white font-semibold">Ningbo ➔ Maputo Port</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Clearance Time:</span>
                    <span className="text-white font-semibold">Under 7 Business Days</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Quality Assured:</span>
                    <span className="text-sial-gold font-bold">100% Factory Certified</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Distribution Reach:</span>
                    <span className="text-white font-semibold">Maputo, Beira, Nacala</span>
                  </li>
                </ul>
              </HoverCard>
            </div>
          </section>
        </ScrollReveal>

        {/* Sourcing Hub Section (China procurement node) */}
        <ScrollReveal delay={0.2}>
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
            <div className="lg:col-span-5 flex justify-center">
              {/* Sourcing Node Map Box */}
              <HoverCard className="slate-gradient p-8 rounded-xl w-full max-w-md space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
                <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">China Sourcing Node</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-sial-gold font-bold text-sm">1</span>
                    <div>
                      <h5 className="text-white font-semibold text-xs">Direct Factory Linkages</h5>
                      <p className="text-[11px] text-sial-gray-light mt-0.5">Direct partnership with leading steel mills and tool factories in Zhejiang and Jiangsu provinces.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-sial-gold font-bold text-sm">2</span>
                    <div>
                      <h5 className="text-white font-semibold text-xs">Bulk Price Advantage</h5>
                      <p className="text-[11px] text-sial-gray-light mt-0.5">Procuring large volumes directly from sources eliminates multi-layered broker commission markups.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-sial-gold font-bold text-sm">3</span>
                    <div>
                      <h5 className="text-white font-semibold text-xs">Custom Fabrication</h5>
                      <p className="text-[11px] text-sial-gray-light mt-0.5">Assuring structural steel can be pre-cut, pre-drilled, and fabricated to custom blueprints.</p>
                    </div>
                  </div>
                </div>
              </HoverCard>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">Procurement Integration</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Seamless Integration with Yiwu Sourcing Node
              </h3>
              <p className="text-sm text-sial-gray-light leading-relaxed">
                SIAL Group&apos;s procurement node in China coordinates the entire manufacturing, loading, and inspection pipeline. We conduct physical thickness audits, tension loading tests, and coating checks on all construction materials before sealing container locks. This direct pipeline protects African projects from sub-standard materials and excessive broker costs.
              </p>
              <Link
                href="/contact?division=hardware"
                className="inline-flex items-center space-x-2 text-xs font-bold text-sial-gold uppercase tracking-wider hover:text-white"
              >
                <span>Submit Bulk Material RFQ</span>
                <span>→</span>
              </Link>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
