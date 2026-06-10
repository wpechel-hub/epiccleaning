import Link from "next/link";
import { Home, HardHat, Building2, Sparkles, MoveRight, Handshake, ArrowRight } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Cleaning", description: "Meticulous home cleaning tailored to your lifestyle. Transparent pricing, immaculate results." },
  { icon: HardHat, title: "Post-Construction", description: "We eliminate every trace of construction — dust, debris, residue — revealing your pristine new space." },
  { icon: Building2, title: "Commercial Cleaning", description: "Elevate your business environment. We uphold the standards your clients and team deserve." },
  { icon: Sparkles, title: "Deep Cleaning", description: "A comprehensive reset targeting areas overlooked in routine cleaning. Transformative results." },
  { icon: MoveRight, title: "Move In / Move Out", description: "Seamless transitions between properties with thorough cleaning of every square inch." },
  { icon: Handshake, title: "Partnership Services", description: "Bespoke solutions for real estate agencies, property managers, and businesses." },
];

export default function ServicesPreview() {
  return (
    <section className="py-28 bg-[#18181B]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Our Expertise
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Every Space,<br />
              <span className="text-gold-gradient italic">Perfected.</span>
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 text-sm text-white/40 hover:text-[#D4AF6A] transition-colors font-medium tracking-wide shrink-0"
          >
            View all services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group relative bg-[#0F0F11] border border-[#27272A] hover:border-[#D4AF6A]/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF6A]/5"
              >
                {/* Top-right corner accent on hover */}
                <div className="absolute top-0 right-0 w-0 h-0 group-hover:w-10 group-hover:h-10 transition-all duration-300 overflow-hidden">
                  <div className="absolute top-0 right-0 w-px h-8 bg-[#D4AF6A]" />
                  <div className="absolute top-0 right-0 h-px w-8 bg-[#D4AF6A]" />
                </div>

                <div className="w-12 h-12 border border-[#27272A] group-hover:border-[#D4AF6A]/30 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-[#D4AF6A]" />
                </div>

                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-3">
                  {s.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
