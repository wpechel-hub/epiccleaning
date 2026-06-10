const items = [
  { label: "Kitchen Deep Clean", emoji: "🍳", span: "" },
  { label: "Bathroom Refresh", emoji: "🚿", span: "" },
  { label: "Living Room Sparkle", emoji: "🛋️", span: "sm:col-span-2" },
  { label: "Office Cleaning", emoji: "🏢", span: "sm:col-span-2" },
  { label: "Post-Construction", emoji: "🔨", span: "" },
  { label: "Move-Out Ready", emoji: "🏠", span: "" },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full border border-[#C9A84C]/30 bg-[#C9A84C]/10 text-[#C9A84C] text-sm font-semibold mb-4">
            Our Work
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
            See the Difference
          </h1>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Every space we clean gets the same meticulous attention to detail.
            Results that speak for themselves.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 auto-rows-[200px]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`${item.span} relative rounded-2xl border border-[#2a2a2a] bg-[#141414] hover:border-[#C9A84C]/40 transition-colors flex flex-col items-center justify-center gap-3 cursor-pointer group overflow-hidden`}
            >
              {/* Gold glow on hover */}
              <div className="absolute inset-0 bg-[#C9A84C]/0 group-hover:bg-[#C9A84C]/5 transition-colors" />
              <span className="text-5xl relative z-10">{item.emoji}</span>
              <span className="text-xs font-semibold text-white/50 group-hover:text-[#C9A84C] transition-colors relative z-10 px-3 py-1 rounded-full border border-[#2a2a2a] group-hover:border-[#C9A84C]/30 bg-[#0a0a0a]">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-white/30 mt-10">
          Follow us on{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C9A84C] hover:underline"
          >
            Instagram
          </a>{" "}
          for before &amp; after photos and updates.
        </p>
      </div>
    </div>
  );
}
