import { Star } from "lucide-react";

const reviews = [
  {
    name: "Karly Frixione",
    info: "6 reviews · 2 years ago",
    rating: 5,
    text: "Love love Epic Cleaning! I've worked with many other cleaners in the past and I'm so impressed with Epic Cleaning! Every person I've referred them to loves them! Thank you Epic Cleaning for having the best service!",
  },
  {
    name: "Kurt LeSueur",
    info: "8 reviews · 2 years ago",
    rating: 5,
    text: "Epic Cleaning is the best! Will took great care of us — scheduling and communication was perfect and super simple. We got the deep clean and OH MY GOSH was it Epic! There is nothing quite like walking into a super clean home that smells amazing. They cleaned the house better than it's ever been cleaned before! Signed up for recurring cleanings and couldn't be happier. Would (and have) recommended going with Epic!",
  },
  {
    name: "Katie Karren",
    info: "Local Guide · 13 reviews · 6 months ago",
    rating: 5,
    text: "Have used them many times and referred to family members — always had a great experience. It's easy to schedule via text.",
  },
  {
    name: "George R.",
    info: "3 reviews · 2 years ago",
    rating: 5,
    text: "Absolutely thrilled with Epic Cleaning! Their attention to detail is impeccable, and the results speak for themselves. Not a speck of dust was left behind, and my space has never looked better. The team went above and beyond my expectations. I highly recommend Epic Cleaning to anyone in need of top-notch cleaning services. Five stars all the way!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#0F0F11]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF6A]" />
              <span className="text-[#D4AF6A] text-xs font-semibold tracking-[0.25em] uppercase">
                Client Testimonials
              </span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              What They Say<br />
              <span className="text-gold-gradient italic">About Us.</span>
            </h2>
          </div>

          {/* Overall rating */}
          <div className="text-right shrink-0">
            <div className="flex gap-0.5 justify-end mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4AF6A] fill-[#D4AF6A]" />
              ))}
            </div>
            <p className="text-white text-2xl font-bold">5.0</p>
            <p className="text-white/30 text-xs tracking-widest uppercase">Google Reviews</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 gap-px bg-[#1E1E22]">
          {reviews.map((r) => (
            <div key={r.name} className="bg-[#0F0F11] p-8 sm:p-10 hover:bg-[#18181B] transition-colors">
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-[#D4AF6A] fill-[#D4AF6A]" />
                ))}
              </div>

              <p className="font-display text-lg italic text-white/70 leading-relaxed mb-8">
                &ldquo;{r.text}&rdquo;
              </p>

              <div>
                <p className="font-semibold text-white text-sm">{r.name}</p>
                <p className="text-white/30 text-xs mt-0.5">{r.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
