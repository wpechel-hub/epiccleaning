import Link from "next/link";
import { ArrowRight, Shield, Award } from "lucide-react";

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "5.0", label: "Star Rating" },
  { value: "100%", label: "Satisfaction" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Deep ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C9A84C]/6 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#C9A84C]/4 rounded-full blur-[120px]" />
      </div>

      {/* Fine grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column */}
          <div>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
                Premium Cleaning Services
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 text-white">
              The Art of
              <br />
              <span className="text-gold-gradient italic">Exceptional</span>
              <br />
              Cleanliness
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-md">
              We deliver more than clean spaces — we create environments where
              precision meets comfort. Serving Utah&apos;s most discerning homes
              and businesses.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-14">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E8C96B] text-black font-bold text-sm tracking-wide transition-all duration-200 rounded-none"
              >
                Request a Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-white/15 hover:border-[#C9A84C]/50 text-white/70 hover:text-[#C9A84C] font-medium text-sm tracking-wide transition-all duration-200 rounded-none"
              >
                Our Services
              </Link>
            </div>

            {/* Trust marks */}
            <div className="flex items-center gap-6 text-xs text-white/30 font-medium tracking-wider uppercase">
              <span className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#C9A84C]" /> Fully Insured
              </span>
              <span className="w-px h-4 bg-white/10" />
              <span className="flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#C9A84C]" /> Background Checked
              </span>
            </div>
          </div>

          {/* Right column: stats card */}
          <div className="relative">
            {/* Main card */}
            <div className="border border-[#C9A84C]/20 bg-[#111111] p-10">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-[#C9A84C]" />
                <div className="absolute top-0 right-0 h-px w-8 bg-[#C9A84C]" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-px h-8 bg-[#C9A84C]" />
                <div className="absolute bottom-0 left-0 h-px w-8 bg-[#C9A84C]" />
              </div>

              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-8">
                By the Numbers
              </p>

              <div className="grid grid-cols-3 divide-x divide-[#222]">
                {stats.map((s) => (
                  <div key={s.label} className="text-center px-4 first:pl-0 last:pr-0">
                    <div className="font-display text-4xl font-bold text-white mb-1">
                      {s.value}
                    </div>
                    <div className="text-xs text-white/30 tracking-widest uppercase">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="gold-rule my-8" />

              <p className="font-display text-xl italic text-white/70 leading-relaxed mb-6">
                &ldquo;We treat every space with the utmost respect and care. Your
                trust is the foundation of everything we do.&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs tracking-widest uppercase font-semibold">
                  Epic Cleaning Co — Utah
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-[#C9A84C] px-5 py-3 hidden lg:block">
              <p className="text-black text-xs font-bold tracking-widest uppercase">
                Satisfaction
              </p>
              <p className="text-black text-xs font-bold tracking-widest uppercase">
                Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 gold-rule" />
    </section>
  );
}
