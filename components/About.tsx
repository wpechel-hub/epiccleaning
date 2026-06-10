import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

const highlights = [
  "Fully insured and background-checked team",
  "Eco-friendly product options available",
  "Satisfaction guarantee — we make it right",
  "Flexible scheduling: weekly, bi-weekly, monthly",
  "Residential and commercial expertise",
  "Serving all of Utah",
];

const stats = [
  { value: "500+", label: "Clients Served" },
  { value: "5.0★", label: "Average Rating" },
  { value: "100%", label: "Satisfaction Rate" },
  { value: "<24h", label: "Response Time" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#080808] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-16">
          <div className="h-px w-8 bg-[#C9A84C]" />
          <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase">
            About Epic Cleaning Co
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-8">
              Utah&apos;s Standard for{" "}
              <span className="text-gold-gradient italic">Premium</span>{" "}
              Cleanliness
            </h1>

            <p className="text-white/50 text-lg leading-relaxed mb-6">
              At Epic Cleaning Co, we believe everyone deserves a clean,
              healthy space. Our dedicated team brings the same commitment to
              excellence whether we&apos;re cleaning a private residence or a
              large commercial facility.
            </p>
            <p className="text-white/50 leading-relaxed mb-10">
              We pay meticulous attention to every detail and hold ourselves to
              consistently high standards. Your satisfaction isn&apos;t just a
              goal — it&apos;s our guarantee. If something doesn&apos;t meet your
              expectations, we return and make it right, no questions asked.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-white/60">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] hover:bg-[#E8C96B] text-black font-bold text-sm tracking-wide transition-colors"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: stats */}
          <div>
            <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] mb-px">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[#080808] p-8 text-center">
                  <div className="font-display text-4xl font-bold text-[#C9A84C] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/30 tracking-widest uppercase font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Promise card */}
            <div className="bg-[#111111] border-l-2 border-[#C9A84C] p-8">
              <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase mb-3">
                Our Promise
              </p>
              <p className="font-display text-xl italic text-white/70 leading-relaxed">
                &ldquo;We treat every space with the utmost respect and care.
                Your trust is the foundation of everything we do at Epic
                Cleaning Co.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
