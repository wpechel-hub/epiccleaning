"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
    q: "Can I book a same-day cleaning?",
    a: "We try to accommodate last-minute requests whenever possible. While we recommend scheduling in advance to ensure availability, we're always here to meet your urgent needs.",
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
    q: "How can I pay for services?",
    a: "We accept payments via credit card, debit, and ACH. Invoices are sent after cleaning, and payments are due within 72 hours of receipt.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold mb-4">
            FAQ
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-white/50 text-lg">
            Everything you need to know before booking.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-colors ${
                open === i
                  ? "border-[#C9A84C]/40 bg-[#141414]"
                  : "border-[#2a2a2a] bg-[#141414] hover:border-[#C9A84C]/20"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-white text-sm sm:text-base pr-4">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C9A84C] flex-shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-white/50 text-sm leading-relaxed border-t border-[#2a2a2a] pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/30 mt-10">
          Still have questions?{" "}
          <a href="/contact" className="text-[#C9A84C] hover:underline font-medium">
            Contact us
          </a>
          .
        </p>
      </div>
    </div>
  );
}
