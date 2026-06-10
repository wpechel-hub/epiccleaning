"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Send } from "lucide-react";

const positions = [
  {
    title: "Residential Cleaner",
    type: "Full-time · Part-time",
    description:
      "Join our residential team and help Utah homeowners experience the difference of a truly professional clean. Flexible hours, competitive pay.",
  },
  {
    title: "Commercial Cleaner",
    type: "Full-time",
    description:
      "Work with businesses across Utah to maintain clean, professional environments. Evening and weekend shifts available.",
  },
  {
    title: "Team Lead",
    type: "Full-time",
    description:
      "Lead a team of cleaners, ensure quality standards, and be the face of Epic Cleaning Co on every job. Leadership experience preferred.",
  },
  {
    title: "Scheduling Coordinator",
    type: "Full-time",
    description:
      "Handle client communications, scheduling, and logistics. Organized, people-oriented, and comfortable with digital tools.",
  },
];

const perks = [
  "Competitive pay with performance bonuses",
  "Flexible scheduling",
  "Fully supplied — we provide all equipment",
  "Supportive team environment",
  "Growth opportunities within the company",
  "Background check & training provided",
];

export default function Careers() {
  const [selected, setSelected] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <div className="min-h-screen bg-[#0F0F11] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Join Our Team
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight">
              Build Something<br />
              <span className="text-gold-gradient italic">Epic With Us.</span>
            </h1>
          </div>
          <p className="text-white/40 text-lg leading-relaxed lg:pb-2">
            We&apos;re always looking for dedicated, detail-oriented people to join the Epic Cleaning Co family. Great pay, flexible hours, and a team that truly cares.
          </p>
        </div>

        {/* Open positions */}
        <div className="mb-20">
          <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-6">
            Open Positions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {positions.map((p) => (
              <button
                key={p.title}
                onClick={() => setSelected(p.title)}
                className={`group text-left p-7 border transition-all duration-200 hover:-translate-y-0.5 ${
                  selected === p.title
                    ? "border-[#D4AF6A]/60 bg-[#D4AF6A]/8"
                    : "border-[#27272A] bg-[#18181B] hover:border-[#D4AF6A]/30"
                }`}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className={`font-bold text-sm tracking-widest uppercase transition-colors ${
                    selected === p.title ? "text-[#D4AF6A]" : "text-white group-hover:text-white/90"
                  }`}>
                    {p.title}
                  </h3>
                  {selected === p.title && (
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF6A] shrink-0 mt-0.5" />
                  )}
                </div>
                <p className="text-[#D4AF6A]/60 text-xs tracking-wider uppercase mb-3">{p.type}</p>
                <p className="text-white/40 text-sm leading-relaxed">{p.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Why join us */}
          <div>
            <h2 className="text-xs font-semibold tracking-[0.25em] uppercase text-white/30 mb-6">
              Why Epic Cleaning Co
            </h2>
            <ul className="space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3 text-white/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF6A] mt-2 shrink-0" />
                  <span className="text-sm">{perk}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 border-l-2 border-[#D4AF6A] pl-6">
              <p className="font-display text-xl italic text-white/60 leading-relaxed">
                &ldquo;We take care of our team the same way we take care of our clients — with respect, consistency, and genuine care.&rdquo;
              </p>
              <p className="text-[#D4AF6A] text-xs tracking-widest uppercase font-semibold mt-3">
                — Epic Cleaning Co Team
              </p>
            </div>
          </div>

          {/* Application form */}
          <div className="bg-[#18181B] border border-[#27272A] p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-14 h-14 border border-[#D4AF6A]/30 bg-[#D4AF6A]/10 flex items-center justify-center mx-auto mb-5">
                  <Send className="w-6 h-6 text-[#D4AF6A]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Application Sent!</h3>
                <p className="text-white/40 text-sm">We&apos;ll be in touch within 48 hours.</p>
                <Link href="/" className="inline-flex items-center gap-2 mt-6 text-[#D4AF6A] text-sm font-semibold hover:text-[#EBD094] transition-colors">
                  Back to Home <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <>
                <p className="text-[#D4AF6A] text-xs font-semibold tracking-[0.2em] uppercase mb-6">
                  Apply Now {selected && `— ${selected}`}
                </p>
                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-white/30 tracking-widest uppercase mb-2">Name *</label>
                      <input
                        type="text" required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0F0F11] border border-[#27272A] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF6A]/50 transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-white/30 tracking-widest uppercase mb-2">Email *</label>
                      <input
                        type="email" required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0F0F11] border border-[#27272A] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF6A]/50 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/30 tracking-widest uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0F0F11] border border-[#27272A] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF6A]/50 transition-colors"
                      placeholder="(801) 000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/30 tracking-widest uppercase mb-2">
                      Position Interested In
                    </label>
                    <select
                      value={selected}
                      onChange={(e) => setSelected(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0F0F11] border border-[#27272A] text-white text-sm focus:outline-none focus:border-[#D4AF6A]/50 transition-colors"
                    >
                      <option value="">Select a position...</option>
                      {positions.map((p) => (
                        <option key={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-white/30 tracking-widest uppercase mb-2">Tell us about yourself</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0F0F11] border border-[#27272A] text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#D4AF6A]/50 transition-colors resize-none"
                      placeholder="Previous experience, availability, why you want to join..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#D4AF6A] hover:bg-[#EBD094] text-black font-bold text-sm tracking-wide transition-colors"
                  >
                    Submit Application
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
