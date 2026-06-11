import Image from "next/image";

const partners = [
  { name: "The Towers", src: "/The towers.png" },
  { name: "Best Company", src: "/best_company.png" },
  { name: "Fireclay Studios", src: "/fireclay_studios.png" },
  { name: "Summit Foot & Ankle", src: "/summit_foot_ankle.png" },
];

export default function Partners() {
  return (
    <section className="py-16 bg-[#0F0F11] border-y border-[#1E1E22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:gap-16">
          <p className="text-white/20 text-xs font-semibold tracking-[0.25em] uppercase shrink-0">
            Trusted By
          </p>
          <div className="h-px bg-[#1E1E22] hidden sm:block w-8 shrink-0" />
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-10 sm:gap-14">
            {partners.map((p) => (
              <div key={p.name} className="relative h-10 w-32 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0">
                <Image
                  src={p.src}
                  alt={p.name}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
