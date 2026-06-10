"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock } from "lucide-react";

const info = [
  { icon: Phone, label: "Phone", value: "(801) 515-4003", href: "tel:8015154003" },
  { icon: Mail, label: "Email", value: "epicleanco@gmail.com", href: "mailto:epicleanco@gmail.com" },
  { icon: MapPin, label: "Service Area", value: "Throughout Utah", href: null },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold mb-4">
            Contact Us
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Get a Free Quote
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Ready for a spotless space? Reach out and we&apos;ll get back to you
            within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-4">
            {info.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 bg-[#141414] rounded-2xl border border-[#2a2a2a]"
              >
                <div className="w-11 h-11 rounded-xl border border-[#C9A84C]/20 bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-[#C9A84C]" />
                </div>
                <div>
                  <p className="text-xs text-white/30 font-medium uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="text-white font-semibold hover:text-[#C9A84C] transition-colors">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white font-semibold">{value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="p-6 border border-[#C9A84C]/30 bg-[#C9A84C]/10 rounded-2xl">
              <p className="font-bold text-[#C9A84C] text-lg mb-1">Satisfaction Guaranteed</p>
              <p className="text-white/60 text-sm">
                If you&apos;re not 100% satisfied with our service, we&apos;ll come back
                and make it right — at no extra charge.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#141414] rounded-2xl p-8 border border-[#2a2a2a]">
            {submitted ? (
              <div className="text-center py-10">
                <div className="w-16 h-16 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 flex items-center justify-center mx-auto mb-4">
                  <Send className="w-7 h-7 text-[#C9A84C]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">Thank you! We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 text-sm transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 text-sm transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 text-sm transition-colors"
                    placeholder="(801) 000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">Service Needed</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-white focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 text-sm transition-colors"
                  >
                    <option value="" className="text-white/40">Select a service...</option>
                    <option>Residential Cleaning</option>
                    <option>Commercial Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>Post-Construction Cleaning</option>
                    <option>Move In / Move Out Cleaning</option>
                    <option>Partnership Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#2a2a2a] bg-[#0a0a0a] text-white placeholder-white/20 focus:outline-none focus:border-[#C9A84C]/50 focus:ring-1 focus:ring-[#C9A84C]/30 text-sm resize-none transition-colors"
                    placeholder="Tell us about your space and needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#C9A84C] hover:bg-[#E2C07A] text-black font-bold transition-colors"
                >
                  Send Message
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
