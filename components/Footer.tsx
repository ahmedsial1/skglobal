import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sial-slate-dark border-t border-sial-gold/10 pt-16 pb-8 text-sial-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Profile */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src="/logo.png" alt="SIAL Group Logo" className="h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <p className="text-sm text-sial-gray-light leading-relaxed">
              An 18-year legacy of global excellence in heavy industries, automotive parts distribution, and industrial hardware. Operating proprietary sourcing hubs in South Korea and China to deliver uncompromised quality.
            </p>
          </div>

          {/* Business Divisions */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Divisions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/machinery" className="hover:text-sial-gold transition duration-200">
                  Heavy Machinery Division
                </Link>
              </li>
              <li>
                <Link href="/spare-parts" className="hover:text-sial-gold transition duration-200">
                  Automotive Spare Parts
                </Link>
              </li>
              <li>
                <Link href="/hardware" className="hover:text-sial-gold transition duration-200">
                  Industrial Hardware
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Operations */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Global Operations</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex flex-col">
                <span className="text-white font-medium">GCC Network</span>
                <span className="text-xs text-sial-gray-medium">Oman (SK Transports) & Saudi Arabia</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">East Asia Nodes</span>
                <span className="text-xs text-sial-gray-medium">Seoul, South Korea & Yiwu, China</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">Africa Pipelines</span>
                <span className="text-xs text-sial-gray-medium">Maputo, Mozambique distribution</span>
              </li>
              <li className="flex flex-col">
                <span className="text-white font-medium">South Asia Node</span>
                <span className="text-xs text-sial-gray-medium">SIAL International Pakistan Pvt Ltd</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Corporate Contacts</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start space-x-2">
                <span className="text-sial-gold text-base">📧</span>
                <div>
                  <span className="block text-xs text-sial-gray-medium uppercase">Central Email</span>
                  <a
                    href="mailto:sialautotraders@gmail.com"
                    className="text-white font-semibold hover:text-sial-gold transition duration-200"
                  >
                    sialautotraders@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-sial-gold text-base">💬</span>
                <div>
                  <span className="block text-xs text-sial-gray-medium uppercase">WeChat Enterprise ID</span>
                  <span className="text-white font-mono font-semibold">SIALautoparts</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom border and copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-sial-gray-medium">
          <p>&copy; {new Date().getFullYear()} SIAL Group. All Rights Reserved. Multi-jurisdictional governance assured.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/about" className="hover:text-white transition duration-200">
              CEO&apos;s Message
            </Link>
            <Link href="/contact" className="hover:text-white transition duration-200">
              B2B Inquiry routing
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
