"use client";

import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "What types of cleaning services do you offer?",
    a: "We offer a wide range of services, including residential cleaning, commercial cleaning, post-construction cleaning, deep cleaning, routine maintenance, and custom services tailored to meet your specific needs.",
  },
  {
    q: "How often should I schedule a cleaning?",
    a: "This depends on your needs and the type of space. We offer weekly, bi-weekly, monthly, and one-time cleaning options. Our team can help you determine the ideal frequency to keep your environment spotless.",
  },
  {
    q: "What's included in a deep cleaning?",
    a: "Deep cleaning focuses on areas not usually covered in routine cleaning — baseboards, ceiling fans, inside cabinets, blinds, and other hard-to-reach areas where dust and grime accumulate over time.",
  },
  {
    q: "Do you bring your own cleaning supplies?",
    a: "Yes, our team comes fully equipped with all necessary products and equipment. However, if you prefer us to use specific products, just let us know in advance.",
  },
  {
    q: "Do you offer eco-friendly cleaning services?",
    a: "Yes! We have eco-friendly product options and sustainable practices to minimize environmental impact. Simply request eco-friendly products when booking.",
  },
  {
    q: "Do I need to be home during the cleaning?",
    a: "Not at all. You can arrange access for our team and carry on with your day. Rest assured, your space will be treated with the utmost respect and care.",
  },
  {
    q: "Do you have a satisfaction guarantee?",
    a: "Absolutely. Your satisfaction is our priority. If something doesn't meet your expectations, contact us and we'll make it right — no questions asked.",
  },
  {
    q: "What should I do to prepare before the team arrives?",
    a: "To help us maximize cleaning time, we recommend organizing personal items, securing valuables, and keeping pets in a safe area. This way, we can focus entirely on cleaning.",
  },
  {
    q: "How can I pay for services?",
    a: "We accept payments via credit card, debit, and ACH. Invoices are sent after cleaning, and payments are due within 72 hours of receipt.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0F0F11] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Two-column header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                FAQ
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight">
              Questions<br />
              <span className="text-gold-gradient italic">Answered.</span>
            </h1>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-white/40 text-lg leading-relaxed">
              Everything you need to know before booking your first clean. Can&apos;t find what you&apos;re looking for?
            </p>
            <Link
              href="/contact"
              className="mt-5 self-start text-[#D4AF6A] text-sm font-semibold tracking-wider hover:text-[#EBD094] transition-colors underline underline-offset-4"
            >
              Contact us directly →
            </Link>
          </div>
        </div>

        {/* FAQ accordion */}
        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0 items-start">
          {/* Left column: odd items */}
          <div>
            {faqs.filter((_, i) => i % 2 === 0).map((faq, idx) => {
              const globalIdx = idx * 2;
              const isOpen = open === globalIdx;
              return (
                <div key={globalIdx} className="border-b border-[#1E1E22]">
                  <button
                    onClick={() => setOpen(isOpen ? null : globalIdx)}
                    className="w-full flex items-start gap-5 py-7 text-left group"
                  >
                    {/* Number */}
                    <span className={`font-display text-3xl font-bold leading-none mt-0.5 transition-colors shrink-0 ${isOpen ? "text-[#D4AF6A]" : "text-[#27272A] group-hover:text-[#D4AF6A]/40"}`}>
                      {String(globalIdx + 1).padStart(2, "0")}
                    </span>
                    {/* Question */}
                    <div className="flex-1">
                      <p className={`font-semibold transition-colors text-sm sm:text-base ${isOpen ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                        {faq.q}
                      </p>
                      {/* Answer */}
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 mt-4" : "max-h-0"}`}>
                        <div className="flex gap-3">
                          <div className="w-px bg-[#D4AF6A]/40 shrink-0 mt-1" />
                          <p className="text-white/40 text-sm leading-relaxed pb-1">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Indicator */}
                    <div className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all ${isOpen ? "border-[#D4AF6A] bg-[#D4AF6A]" : "border-[#27272A] group-hover:border-[#D4AF6A]/40"}`}>
                      <span className={`text-xs font-bold transition-colors ${isOpen ? "text-black" : "text-white/30"}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right column: even items */}
          <div>
            {faqs.filter((_, i) => i % 2 === 1).map((faq, idx) => {
              const globalIdx = idx * 2 + 1;
              const isOpen = open === globalIdx;
              return (
                <div key={globalIdx} className="border-b border-[#1E1E22]">
                  <button
                    onClick={() => setOpen(isOpen ? null : globalIdx)}
                    className="w-full flex items-start gap-5 py-7 text-left group"
                  >
                    <span className={`font-display text-3xl font-bold leading-none mt-0.5 transition-colors shrink-0 ${isOpen ? "text-[#D4AF6A]" : "text-[#27272A] group-hover:text-[#D4AF6A]/40"}`}>
                      {String(globalIdx + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <p className={`font-semibold transition-colors text-sm sm:text-base ${isOpen ? "text-white" : "text-white/60 group-hover:text-white/80"}`}>
                        {faq.q}
                      </p>
                      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-48 mt-4" : "max-h-0"}`}>
                        <div className="flex gap-3">
                          <div className="w-px bg-[#D4AF6A]/40 shrink-0 mt-1" />
                          <p className="text-white/40 text-sm leading-relaxed pb-1">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`w-5 h-5 border flex items-center justify-center shrink-0 mt-0.5 transition-all ${isOpen ? "border-[#D4AF6A] bg-[#D4AF6A]" : "border-[#27272A] group-hover:border-[#D4AF6A]/40"}`}>
                      <span className={`text-xs font-bold transition-colors ${isOpen ? "text-black" : "text-white/30"}`}>
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border border-[#D4AF6A]/15 bg-[#D4AF6A]/5 p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-2xl font-bold text-white mb-1">
              Still have questions?
            </p>
            <p className="text-white/40 text-sm">
              Our team is ready to help — reach out any time.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-[#D4AF6A] hover:bg-[#EBD094] text-black font-bold text-sm tracking-wide transition-colors"
            >
              Contact Us
            </Link>
            <a
              href="tel:8015154003"
              className="px-6 py-3 border border-[#D4AF6A]/30 hover:border-[#D4AF6A] text-white/60 hover:text-[#D4AF6A] font-semibold text-sm tracking-wide transition-all"
            >
              (801) 515-4003
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
