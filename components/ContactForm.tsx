"use client";

import React, { useState } from "react";

const REGIONS = [
  { id: "gcc-oman", label: "Oman (SK Transports / SIAL LLC)" },
  { id: "gcc-saudi", label: "Saudi Arabia (SIAL International Co.)" },
  { id: "asia-pk", label: "Pakistan (SIAL International Pakistan)" },
  { id: "asia-kr", label: "South Korea (SIAL & Young A HQ)" },
  { id: "asia-cn", label: "China (Yiwu Procurement Hub)" },
  { id: "africa-mz", label: "Mozambique (African Logistics)" },
];

const DIVISIONS = [
  { id: "machinery", label: "Heavy Machinery (Crane Sales & Rentals)" },
  { id: "spare-parts", label: "Automotive Spare Parts (Hyundai & Kia)" },
  { id: "hardware", label: "Industrial Hardware & Construction Materials" },
  { id: "general", label: "General Corporate Inquiries / Governance" },
];

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    region: "gcc-oman",
    division: "machinery",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  if (submitted) {
    const selectedRegion = REGIONS.find((r) => r.id === formData.region)?.label;
    const selectedDivision = DIVISIONS.find((d) => d.id === formData.division)?.label;

    return (
      <div className="bg-sial-slate-light p-8 rounded-xl border border-sial-gold/20 shadow-2xl text-center space-y-6">
        <div className="text-4xl text-sial-gold animate-bounce">✓</div>
        <h3 className="text-xl font-bold text-white">Inquiry Routed Successfully</h3>
        <p className="text-xs text-sial-gray-light leading-relaxed max-w-sm mx-auto">
          Your B2B inquiry has been routed to our <strong className="text-white">{selectedRegion}</strong> team under the <strong className="text-white">{selectedDivision}</strong>.
        </p>
        <div className="bg-sial-slate-dark/50 p-4 rounded text-left text-xs space-y-2 font-mono text-sial-gray-medium">
          <p><span className="text-sial-gold">Ticket ID:</span> SIAL-{Math.floor(100000 + Math.random() * 900000)}</p>
          <p><span className="text-sial-gold">Routed Node:</span> {formData.region.toUpperCase()}-{formData.division.toUpperCase()}</p>
        </div>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              email: "",
              company: "",
              region: "gcc-oman",
              division: "machinery",
              message: "",
            });
          }}
          className="text-xs font-bold text-sial-gold hover:underline uppercase tracking-wider"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-sial-slate-light p-8 rounded-xl border border-white/5 shadow-2xl space-y-5">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-white">Direct B2B Inquiry Form</h3>
        <p className="text-xs text-sial-gray-light">Inquiries are securely routed using multi-jurisdictional compliance protocols.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-sial-gray-light uppercase tracking-wider">Representative Name</label>
          <input
            type="text"
            required
            placeholder="John Doe"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-sial-slate-dark border border-white/10 rounded px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sial-gold focus:ring-1 focus:ring-sial-gold/30 transition duration-200"
          />
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-sial-gray-light uppercase tracking-wider">Corporate Email</label>
          <input
            type="email"
            required
            placeholder="j.doe@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-sial-slate-dark border border-white/10 rounded px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sial-gold focus:ring-1 focus:ring-sial-gold/30 transition duration-200"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-sial-gray-light uppercase tracking-wider">Company Name</label>
        <input
          type="text"
          required
          placeholder="Enterprise Logistics Ltd"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          className="w-full bg-sial-slate-dark border border-white/10 rounded px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sial-gold focus:ring-1 focus:ring-sial-gold/30 transition duration-200"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-sial-gray-light uppercase tracking-wider">Route by Region</label>
          <select
            value={formData.region}
            onChange={(e) => setFormData({ ...formData, region: e.target.value })}
            className="w-full bg-sial-slate-dark border border-white/10 rounded px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sial-gold focus:ring-1 focus:ring-sial-gold/30 transition duration-200"
          >
            {REGIONS.map((region) => (
              <option key={region.id} value={region.id} className="bg-sial-slate-light">
                {region.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <label className="text-[11px] font-bold text-sial-gray-light uppercase tracking-wider">Route by Division</label>
          <select
            value={formData.division}
            onChange={(e) => setFormData({ ...formData, division: e.target.value })}
            className="w-full bg-sial-slate-dark border border-white/10 rounded px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sial-gold focus:ring-1 focus:ring-sial-gold/30 transition duration-200"
          >
            {DIVISIONS.map((div) => (
              <option key={div.id} value={div.id} className="bg-sial-slate-light">
                {div.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <label className="text-[11px] font-bold text-sial-gray-light uppercase tracking-wider">Specification / Inquiry Details</label>
        <textarea
          rows={4}
          required
          placeholder="Please describe your heavy machinery, spare parts, or hardware material specifications..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-sial-slate-dark border border-white/10 rounded px-3.5 py-2 text-xs text-white focus:outline-none focus:border-sial-gold focus:ring-1 focus:ring-sial-gold/30 transition duration-200 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 bg-sial-gold hover:bg-sial-gold-dark disabled:bg-sial-gold/50 text-sial-slate-dark font-extrabold uppercase tracking-wider text-xs rounded shadow-lg transition duration-200"
      >
        {loading ? "Routing B2B Request..." : "Submit Inquiry to Global Routing"}
      </button>
    </form>
  );
}
