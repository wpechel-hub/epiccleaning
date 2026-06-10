import Link from "next/link";
import { Home, HardHat, Building2, Sparkles, MoveRight, Handshake, ArrowRight, UserRound, KeyRound } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Home,
    title: "Residential Cleaning",
    description:
      "Meticulous home cleaning tailored to your lifestyle and schedule. Transparent pricing, immaculate results — experience the difference of a truly professional clean.",
  },
  {
    num: "02",
    icon: HardHat,
    title: "Post-Construction Cleaning",
    description:
      "Newly built or renovated? We eliminate every trace of construction — dust, debris, residue — from floors, windows, fixtures, and surfaces, revealing your pristine space.",
  },
  {
    num: "03",
    icon: Building2,
    title: "Commercial Cleaning",
    description:
      "Elevate your business environment. We uphold the standards your clients and team deserve, creating positive impressions that reflect your brand's commitment to quality.",
  },
  {
    num: "04",
    icon: Sparkles,
    title: "Deep Cleaning",
    description:
      "A comprehensive reset that goes far beyond the surface. We target baseboards, ceiling fans, inside cabinets, blinds, and every hard-to-reach area. Transformative results.",
  },
  {
    num: "05",
    icon: MoveRight,
    title: "Move In / Move Out Cleaning",
    description:
      "Seamless transitions between properties with thorough cleaning of kitchens, bathrooms, and every living space. Helping you start fresh — or leave on perfect terms.",
  },
  {
    num: "06",
    icon: UserRound,
    title: "Dedicated Maid Service",
    description:
      "A full-time cleaning professional assigned exclusively to your home. Consistent presence, trusted routine — your private residence always maintained to an immaculate standard.",
  },
  {
    num: "07",
    icon: KeyRound,
    title: "Short-Term Rental Cleaning",
    description:
      "Specialized turnover cleaning for Airbnb, VRBO, and vacation rental properties. Fast, reliable, and thorough between every guest — so every check-in feels like the first.",
  },
  {
    num: "08",
    icon: Handshake,
    title: "Partnership Services",
    description:
      "Bespoke cleaning solutions tailored for real estate agencies, property managers, and discerning businesses with specialized or recurring cleaning requirements.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#080808] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
            Our Expertise
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
          Every Space,<br />
          <span className="text-gold-gradient italic">Perfected.</span>
        </h1>
        <p className="text-white/40 text-lg mb-16 max-w-xl">
          From private residences to commercial spaces — we have the right solution for every need throughout Utah.
        </p>

        {/* Services list */}
        <div className="divide-y divide-[#141414]">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.num}
                className="group flex items-start gap-6 sm:gap-10 py-8 hover:bg-[#0e0e0e] -mx-6 px-6 sm:-mx-10 sm:px-10 lg:-mx-16 lg:px-16 transition-colors"
              >
                {/* Number */}
                <span className="font-display text-5xl font-bold text-[#C9A84C] leading-none select-none hidden sm:block shrink-0 w-16 text-right transition-all duration-300" style={{ textShadow: "0 0 18px rgba(201,168,76,0.5), 0 0 40px rgba(201,168,76,0.25)" }}>
                  {s.num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 border border-[#1e1e1e] group-hover:border-[#C9A84C]/30 flex items-center justify-center shrink-0 transition-colors mt-0.5">
                  <Icon className="w-5 h-5 text-white/20 group-hover:text-[#C9A84C] transition-colors" />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-white/70 group-hover:text-white transition-colors mb-2 tracking-wide uppercase text-sm">
                    {s.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                    {s.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-8 border-t border-[#141414] flex items-center gap-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E8C96B] text-black font-bold text-sm tracking-wide transition-colors"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
