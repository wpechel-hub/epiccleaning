import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-24 bg-[#0F0F11]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="relative border border-[#D4AF6A]/25 bg-[#18181B] p-12 sm:p-16 overflow-hidden">

          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-16 h-16">
            <div className="absolute top-0 left-0 w-px h-10 bg-[#D4AF6A]" />
            <div className="absolute top-0 left-0 h-px w-10 bg-[#D4AF6A]" />
          </div>
          <div className="absolute bottom-0 right-0 w-16 h-16">
            <div className="absolute bottom-0 right-0 w-px h-10 bg-[#D4AF6A]" />
            <div className="absolute bottom-0 right-0 h-px w-10 bg-[#D4AF6A]" />
          </div>

          {/* Glow */}
          <div className="absolute inset-0 bg-[#D4AF6A]/3 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
            <div className="max-w-xl">
              <p className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
                Ready to Experience the Difference?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Your Space Deserves<br />
                <span className="text-gold-gradient italic">Nothing Less.</span>
              </h2>
              <p className="text-white/40 mt-4 text-base leading-relaxed">
                Join hundreds of Utah clients who trust Epic Cleaning Co for exceptional results, every single time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#D4AF6A] hover:bg-[#EBD094] text-black font-bold text-sm tracking-wide transition-all"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:8015154003"
                className="inline-flex items-center gap-2.5 px-8 py-4 border border-[#D4AF6A]/30 hover:border-[#D4AF6A] text-white/70 hover:text-[#D4AF6A] font-semibold text-sm tracking-wide transition-all"
              >
                <Phone className="w-4 h-4" />
                (801) 515-4003
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
