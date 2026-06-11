"use client";

import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Kitchen", "Bathroom", "Dining Room", "Storage"];

const items = [
  {
    label: "Kitchen",
    category: "Kitchen",
    src: "/Kitchen.png",
    span: "col-span-2 row-span-2",
  },
  {
    label: "Bathroom",
    category: "Bathroom",
    src: "/Bathroom.png",
    span: "",
  },
  {
    label: "Dining Room",
    category: "Dining Room",
    src: "/Dinner.png",
    span: "",
  },
  {
    label: "Cupboard",
    category: "Storage",
    src: "/Cupboard.png",
    span: "col-span-2",
  },
];

export default function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="min-h-screen bg-[#0F0F11] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Our Work
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white leading-tight">
              Results That<br />
              <span className="text-gold-gradient italic">Speak for Themselves.</span>
            </h1>
          </div>
          <p className="text-white/40 text-lg leading-relaxed lg:pb-2">
            Every space we clean receives the same meticulous attention to detail. These are just some of the spaces we&apos;ve transformed across Utah.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs font-semibold tracking-widest uppercase border transition-all ${
                active === cat
                  ? "border-[#D4AF6A] bg-[#D4AF6A]/10 text-[#D4AF6A]"
                  : "border-[#27272A] text-white/30 hover:border-[#D4AF6A]/30 hover:text-white/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 auto-rows-[220px]">
          {filtered.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              onClick={() => setLightbox(item.src)}
              className={`${item.span} relative overflow-hidden border border-[#1E1E22] cursor-pointer group`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-[#D4AF6A] text-xs tracking-wider uppercase mt-0.5">{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-white/20 mt-12 tracking-wider">
          Follow us on{" "}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF6A]/50 hover:text-[#D4AF6A] transition-colors">
            Instagram
          </a>{" "}
          for real before &amp; after photos from our team.
        </p>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-pointer"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image src={lightbox} alt="Gallery" fill className="object-contain" sizes="100vw" />
          </div>
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 w-10 h-10 border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-all text-lg"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
