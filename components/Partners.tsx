import Image from "next/image";

const partners = [
  { name: "The Towers", src: "/The towers.png" },
  { name: "Best Company", src: "/best_company.png" },
  { name: "Fireclay Studios", src: "/fireclay_studios.png" },
  { name: "Summit Foot & Ankle", src: "/summit_foot_ankle.png" },
];

export default function Partners() {
  return (
    <section className="py-20 bg-[#0F0F11] border-y border-[#1E1E22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#D4AF6A]" />
            <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.3em] uppercase">
              Trusted By
            </span>
            <div className="h-px w-12 bg-[#D4AF6A]" />
          </div>
          <p className="font-display text-3xl sm:text-4xl font-bold text-white">
            Companies That Choose <span className="text-gold-gradient italic">Epic Cleaning.</span>
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1E1E22]">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-[#0F0F11] hover:bg-[#18181B] transition-colors duration-300 flex items-center justify-center py-10 px-8 group"
            >
              <div className="relative w-full h-16 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="200px"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
