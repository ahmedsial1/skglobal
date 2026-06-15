import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Spare Parts Division | Hyundai & Kia Genuine Parts",
  description:
    "Explore our high-volume distribution of new and used genuine replacement parts for Hyundai and Kia models, sourced directly via South Korea and Yiwu, China hubs.",
};

export default function SpareParts() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Block */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Automotive Division</span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
            Genuine Replacement Spare Parts
          </h1>
          <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
          <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2">
            High-volume distribution channels supplying new and used genuine spare parts for Korean passenger and commercial vehicles. Directly integrated with OEM manufacturers and verified exporters.
          </p>
        </div>

        {/* Division Focus: Hyundai & Kia */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">Core Specialization</span>
            <h2 className="text-3xl font-extrabold text-white leading-tight">
              Unrivaled Supply of Hyundai & Kia Components
            </h2>
            <p className="text-sm text-sial-gray-light leading-relaxed">
              We specialize in new and used genuine replacement parts for all major Hyundai and Kia models. Our volume distribution channels cater to GCC warehouse distributors, large-scale commercial fleets, and national retail chains. By bypassing multiple broker channels, we secure high-turnover components directly from origin.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-sial-slate-light/60 rounded border border-white/5">
                <h4 className="text-white font-bold text-sm">Engine & Drivetrain</h4>
                <p className="text-xs text-sial-gray-light mt-1">Full engines, gearboxes, pistons, and transmission components.</p>
              </div>
              <div className="p-4 bg-sial-slate-light/60 rounded border border-white/5">
                <h4 className="text-white font-bold text-sm">Suspension & Steering</h4>
                <p className="text-xs text-sial-gray-light mt-1">Shock absorbers, linkages, control arms, and steering racks.</p>
              </div>
              <div className="p-4 bg-sial-slate-light/60 rounded border border-white/5">
                <h4 className="text-white font-bold text-sm">Electrical & Body Panels</h4>
                <p className="text-xs text-sial-gray-light mt-1">Alternators, ECUs, headlamps, bumpers, and body moldings.</p>
              </div>
              <div className="p-4 bg-sial-slate-light/60 rounded border border-white/5">
                <h4 className="text-white font-bold text-sm">High-Wear Consumables</h4>
                <p className="text-xs text-sial-gray-light mt-1">Brake assemblies, filtration systems, spark plugs, and gaskets.</p>
              </div>
            </div>
          </div>

          <div className="glassmorphism p-8 rounded-xl shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sial-gold/5 rounded-full blur-3xl"></div>
            <h3 className="text-xl font-bold text-white mb-4 border-b border-white/5 pb-2">
              GCC Distribution Infrastructure
            </h3>
            
            <div className="space-y-4">
              <div className="border-l-4 border-sial-gold pl-4 space-y-1">
                <h4 className="text-sm font-bold text-white">Oman Hub (SIAL International LLC)</h4>
                <p className="text-xs text-sial-gray-light leading-relaxed">
                  Headquartered in Muscat with regional supply points, SIAL International LLC has a long-standing reputation for high-volume trade, supporting local commercial fleets and retailers with rapid delivery and full parts tracking.
                </p>
              </div>
              
              <div className="border-l-4 border-sial-gray-industrial pl-4 space-y-1">
                <h4 className="text-sm font-bold text-white">Saudi Arabia Expansion</h4>
                <p className="text-xs text-sial-gray-light leading-relaxed">
                  Replicating our successful Oman framework, our Riyadh-based operations now distribute high-volume spare parts to retailers and corporate transit fleets throughout Saudi Arabia&apos;s major economic corridors.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sourcing Integrity Node Section */}
        <section className="bg-sial-slate-light/40 border-y border-white/5 py-12 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">Direct Sourcing Integrity</h3>
              <p className="text-xs text-sial-gray-light">Ensuring genuine quality from factory to fleet via our proprietary procurement nodes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* South Korea */}
              <div className="slate-gradient p-6 rounded-xl border border-white/5 flex space-x-4">
                <div className="text-3xl">🇰🇷</div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-base">SIAL & Young A Trading Co. (Seoul HQ)</h4>
                  <p className="text-xs text-sial-gray-light leading-relaxed">
                    Our primary East Asian procurement node based in Seoul, South Korea. We coordinate directly with manufacturing hubs and authorized OEM channels to secure new parts, while inspecting and certifying used spare parts directly on-site before shipping container loadouts.
                  </p>
                </div>
              </div>

              {/* Yiwu China */}
              <div className="slate-gradient p-6 rounded-xl border border-white/5 flex space-x-4">
                <div className="text-3xl">🇨🇳</div>
                <div className="space-y-2">
                  <h4 className="text-white font-bold text-base">Yiwu SIAL International Trading Co. Ltd. (China)</h4>
                  <p className="text-xs text-sial-gray-light leading-relaxed">
                    Located in Yiwu, the global wholesale trade capital. This hub conducts meticulous quality audits and oversees export logistics of industrial-grade replacements, ensuring that every shipment meets strict international quality criteria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
