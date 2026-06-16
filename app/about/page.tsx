import React from "react";
import { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import HoverCard from "@/components/HoverCard";
import NetworkDirectory from "@/components/NetworkDirectory";

export const metadata: Metadata = {
  title: "About Us & Leadership Profile",
  description:
    "Discover SIAL Group's 18-year legacy of multi-jurisdictional governance, global supply chain resilience, and international trade negotiation expertise under the leadership of CEO Muhammad Amjad.",
};

export default function About() {
  return (
    <div className="bg-sial-slate-dark text-white min-h-screen py-16 md:py-24">
      {/* Background radial accent */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sial-navy-light/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-20">
        {/* Header Block */}
        <ScrollReveal>
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Who We Are</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase">
              18 Years of Multi-Jurisdictional Governance
            </h1>
            <div className="h-1 w-20 bg-sial-gold mx-auto mt-4"></div>
            <p className="text-sm sm:text-base text-sial-gray-light font-light leading-relaxed pt-2 max-w-2xl mx-auto text-center">
              Established on the principles of transparency, high-level diplomatic negotiation, and absolute quality control, SIAL Group has grown from an East Asian trade node into a global enterprise.
            </p>
          </div>
        </ScrollReveal>

        {/* CEO & Founder Profile */}
        <ScrollReveal delay={0.15}>
          <section className="space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-sial-gold">Executive Leadership Profile</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase">
                Muhammad Amjad: A Legacy of Supply Chain Vision
              </h2>
              <div className="h-1 w-20 bg-sial-gold mx-auto mt-2"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative p-[1px] bg-gradient-to-tr from-sial-gold to-sial-gray-dark rounded-2xl w-full max-w-sm aspect-[4/5] overflow-hidden shadow-2xl group">
                  {/* Background CEO Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url('/ceo.jpg')` }}
                  ></div>
                  {/* Overlay with dark gradient to make text readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sial-slate-dark via-sial-slate-dark/40 to-transparent flex flex-col justify-end p-8 space-y-4">
                    <div className="space-y-1">
                      <span className="text-xs uppercase tracking-widest text-sial-gold font-bold">Group CEO & Founder</span>
                      <h3 className="text-2xl font-black text-white">Muhammad Amjad</h3>
                    </div>
                    <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                      &ldquo;Resilience is not merely surviving supply chain blockades; it is building proprietary pipelines that ensure our partners never fail.&rdquo;
                    </p>
                    <div className="pt-2 border-t border-white/10 flex items-center space-x-2 text-xs text-sial-gray-medium">
                      <span>🏛️ GCC & East Asia Trade Delegate</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  Muhammad Amjad, the Group CEO and Founder, established SIAL Group with the target of building direct, high-trust cross-border relationships. Recognizing early on that middleman margins eroded supply chain efficiency, he spent nearly two decades creating direct sourcing networks.
                </p>
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  His international trade negotiation expertise is backed by a robust legal and governance framework. His operations span multiple jurisdictions, allowing SIAL Group to seamlessly navigate trade compliance, import duties, and customs protocols across South Korea, China, the GCC (Oman and Saudi Arabia), and Africa (Mozambique).
                </p>
                <p className="text-sm text-sial-gray-light leading-relaxed text-justify">
                  To support these operations and optimize client-facing delivery, SIAL Group hosts specialized online platforms, including <a href="https://www.sktransportsoman.com" target="_blank" rel="noopener noreferrer" className="text-sial-gold hover:underline font-semibold">SK Transports Oman</a> for heavy machinery fleet operations, and both <a href="https://www.sialkingdom.com" target="_blank" rel="noopener noreferrer" className="text-sial-gold hover:underline font-semibold">Sial Kingdom</a> and <a href="https://www.yahyaautoparts.com" target="_blank" rel="noopener noreferrer" className="text-sial-gold hover:underline font-semibold">Yahya Auto Parts</a> for automotive spare parts sourcing and mechanical services.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
                  <div>
                    <span className="text-xs text-sial-gray-medium uppercase block">Focus Areas</span>
                    <span className="text-sm font-semibold text-white mt-1 block">Cross-Border Tariffs & Compliance</span>
                  </div>
                  <div>
                    <span className="text-xs text-sial-gray-medium uppercase block">Strategic Hubs</span>
                    <span className="text-sm font-semibold text-white mt-1 block">Seoul, Yiwu, Muscat, Riyadh</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Pillars of Excellence Grid */}
        <section className="space-y-12">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">Enterprise Core</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase tracking-wider">
                Corporate Capabilities
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <HoverCard className="glassmorphism p-8 rounded-xl space-y-4">
              <span className="text-3xl">⛓️</span>
              <h3 className="text-lg font-bold text-white">Global Supply Chain Resilience</h3>
              <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                By maintaining ownership of procurement hubs in China and Korea, SIAL Group guarantees stock availability and shields customers from sudden maritime logjams and geopolitical supply shocks.
              </p>
            </HoverCard>

            <HoverCard className="glassmorphism p-8 rounded-xl space-y-4 border-t-2 border-t-sial-gold">
              <span className="text-3xl">🤝</span>
              <h3 className="text-lg font-bold text-white">Trade Negotiation Expertise</h3>
              <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                Our CEO&apos;s direct relationships with international port authorities and shipping lines allow for expedited clearance and highly favorable freight arrangements.
              </p>
            </HoverCard>

            <HoverCard className="glassmorphism p-8 rounded-xl space-y-4">
              <span className="text-3xl">⚖️</span>
              <h3 className="text-lg font-bold text-white">Multi-Jurisdictional Governance</h3>
              <p className="text-xs text-sial-gray-light leading-relaxed text-justify">
                Strict adherence to regional corporate compliance laws, including SASO in Saudi Arabia, OPAL in Oman, and customs clearing protocols in Mozambique and South Asia.
              </p>
            </HoverCard>
          </div>
        </section>
        {/* Global Network Directory Section */}
        <section id="network" className="space-y-12 pt-16 border-t border-white/5">
          <ScrollReveal>
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-sial-gold">
                Enterprise Footprint
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white uppercase tracking-wider">
                Our Global Corporate Network
              </h2>
              <p className="text-xs sm:text-sm text-sial-gray-light font-light max-w-2xl mx-auto">
                SIAL Group operates across multiple international jurisdictions. Filter our 10 registered subsidiaries, logistics pipelines, and direct sourcing hubs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <NetworkDirectory />
          </ScrollReveal>
        </section>
      </div>
    </div>
  );
}
