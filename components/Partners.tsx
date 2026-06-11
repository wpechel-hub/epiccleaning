import Image from "next/image";

const partners = [
  { name: "The Towers", src: "/The towers.png", height: "h-24" },
  { name: "Best Company", src: "/best_company-removebg-preview.png", height: "h-24" },
  { name: "Fireclay Studios", src: "/fireclay.png", height: "h-24" },
  { name: "Summit Foot & Ankle", src: "/summit_foot_ankle.png", height: "h-16" },
  { name: "Main", src: "/logoMain.webp", height: "h-24" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-[#0F0F11] border-y border-[#1E1E22] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-[#D4AF6A]" />
          <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.3em] uppercase">
            Trusted By
          </span>
          <div className="h-px w-12 bg-[#D4AF6A]" />
        </div>
        <p className="font-display text-3xl sm:text-4xl font-bold text-white text-center mt-4">
          Companies That Choose <span className="text-gold-gradient italic">Epic Cleaning.</span>
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#0F0F11] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#0F0F11] to-transparent pointer-events-none" />

        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap">
          {[...partners, ...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className={`relative shrink-0 w-36 ${p.height} brightness-0 invert opacity-40 hover:opacity-90 transition-opacity duration-300`}
            >
              <Image
                src={p.src}
                alt={p.name}
                fill
                className="object-contain"
                sizes="144px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
