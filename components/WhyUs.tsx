import { ShieldCheck, Leaf, RotateCcw, Clock, Star, UserCheck } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Fully Insured",
    description: "Every job is covered. You can relax knowing your property and our team are fully protected on every visit.",
  },
  {
    icon: UserCheck,
    title: "Background-Checked Team",
    description: "Every cleaner is thoroughly vetted. We only hire professionals you can trust in your home or business.",
  },
  {
    icon: Star,
    title: "5-Star Rated",
    description: "Hundreds of satisfied clients across Utah rate us 5 stars. Our reputation is built on consistent excellence.",
  },
  {
    icon: RotateCcw,
    title: "Satisfaction Guaranteed",
    description: "Not 100% happy? We come back and make it right at no extra charge. No questions asked.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description: "We offer sustainable, non-toxic cleaning products that are safe for your family, pets, and the environment.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description: "Weekly, bi-weekly, monthly, or one-time. We work around your schedule and life.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-28 bg-[#0F0F11]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Why Epic Cleaning
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              The Standard Others<br />
              <span className="text-gold-gradient italic">Aspire To.</span>
            </h2>
          </div>
          <p className="text-white/40 text-lg leading-relaxed lg:pb-2">
            We don&apos;t just clean — we deliver a premium experience from the first call to the final shine. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E1E22]">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group bg-[#0F0F11] hover:bg-[#18181B] p-8 transition-colors"
              >
                <div className="w-11 h-11 border border-[#27272A] group-hover:border-[#D4AF6A]/40 flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-5 h-5 text-[#D4AF6A]" />
                </div>
                <h3 className="text-sm font-bold text-white tracking-widest uppercase mb-3">
                  {r.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {r.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
