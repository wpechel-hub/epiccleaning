"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Karly Frixione",
    info: "6 reviews · 2 years ago",
    rating: 5,
    text: "Love love Epic Cleaning! I've worked with many other cleaners in the past and I'm so impressed. Every person I've referred them to loves them! Thank you for having the best service!",
  },
  {
    name: "Kurt LeSueur",
    info: "8 reviews · 2 years ago",
    rating: 5,
    text: "Epic Cleaning is the best! Will took great care of us — scheduling and communication was perfect and super simple. We got the deep clean and OH MY GOSH was it Epic! Nothing like walking into a super clean home that smells amazing. Signed up for recurring cleanings and couldn't be happier!",
  },
  {
    name: "Katie Karren",
    info: "Local Guide · 13 reviews · 6 months ago",
    rating: 5,
    text: "Have used them many times and referred to family members — always had a great experience. It's easy to schedule via text.",
  },
  {
    name: "George R.",
    info: "3 reviews · 2 years ago",
    rating: 5,
    text: "Absolutely thrilled with Epic Cleaning! Their attention to detail is impeccable, and the results speak for themselves. Not a speck of dust was left behind, and my space has never looked better. Five stars all the way!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const total = reviews.length;
  const visible = 2; // cards visible at once on desktop

  const go = useCallback(
    (dir: 1 | -1) => {
      if (animating) return;
      setAnimating(true);
      setCurrent((prev) => (prev + dir + total) % total);
      setTimeout(() => setAnimating(false), 400);
    },
    [animating, total]
  );

  useEffect(() => {
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [go]);

  const getIndex = (offset: number) => (current + offset + total) % total;

  return (
    <section className="py-28 bg-[#0F0F11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Google Reviews
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              What They Say<br />
              <span className="text-gold-gradient italic">About Us.</span>
            </h2>
          </div>

          {/* Rating + nav */}
          <div className="flex items-center gap-6">
            <div className="text-right">
              <div className="flex gap-0.5 justify-end mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#D4AF6A] fill-[#D4AF6A]" />
                ))}
              </div>
              <p className="text-white font-bold text-xl">5.0</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => go(-1)}
                className="w-10 h-10 border border-[#27272A] hover:border-[#D4AF6A]/50 flex items-center justify-center text-white/40 hover:text-[#D4AF6A] transition-all"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => go(1)}
                className="w-10 h-10 border border-[#27272A] hover:border-[#D4AF6A]/50 flex items-center justify-center text-white/40 hover:text-[#D4AF6A] transition-all"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="grid sm:grid-cols-2 gap-5">
          {Array.from({ length: visible }).map((_, slot) => {
            const r = reviews[getIndex(slot)];
            return (
              <div
                key={`${slot}-${getIndex(slot)}`}
                className="relative rounded-2xl border border-white/[0.07] bg-white/[0.03] backdrop-blur-md p-8 transition-all duration-400"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,106,0.06) 0%, rgba(255,255,255,0.03) 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(212,175,106,0.1)",
                }}
              >
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-[#D4AF6A]/20 mb-5" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#D4AF6A] fill-[#D4AF6A]" />
                  ))}
                </div>

                <p className="font-display text-lg italic text-white/75 leading-relaxed mb-8">
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#D4AF6A]/30 to-transparent mb-5" />

                <div className="flex items-center gap-3">
                  {/* Avatar initial */}
                  <div className="w-9 h-9 rounded-full bg-[#D4AF6A]/15 border border-[#D4AF6A]/30 flex items-center justify-center text-[#D4AF6A] font-bold text-sm shrink-0">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{r.name}</p>
                    <p className="text-white/30 text-xs mt-0.5">{r.info}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => { if (!animating) { setAnimating(true); setCurrent(i); setTimeout(() => setAnimating(false), 400); } }}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-1.5 bg-[#D4AF6A]"
                  : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
