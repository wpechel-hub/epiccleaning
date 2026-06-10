import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

const services = [
  { label: "Residential Cleaning", href: "/services" },
  { label: "Commercial Cleaning", href: "/services" },
  { label: "Deep Cleaning", href: "/services" },
  { label: "Post-Construction", href: "/services" },
  { label: "Move In / Move Out", href: "/services" },
  { label: "Partnership Services", href: "/services" },
];

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#141414]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-0.5 mb-6">
              <Image
                src="/logo_semfundo.png"
                alt="Epic Cleaning Co"
                width={52}
                height={52}
              />
              <span className="font-display text-lg font-bold text-white">
                Epic <span className="text-[#C9A84C]">Cleaning</span> Co
              </span>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed mb-6">
              Utah&apos;s premier cleaning service. Exceptional results through
              meticulous attention to detail — every time.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-9 h-9 border border-[#1e1e1e] hover:border-[#C9A84C]/40 items-center justify-center text-white/30 hover:text-[#C9A84C] text-[10px] font-bold tracking-wider transition-colors uppercase"
              aria-label="Instagram"
            >
              IG
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white/30 font-semibold mb-5 text-[10px] uppercase tracking-[0.25em]">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link href={s.href} className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white/30 font-semibold mb-5 text-[10px] uppercase tracking-[0.25em]">
              Company
            </h3>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/40 hover:text-[#C9A84C] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white/30 font-semibold mb-5 text-[10px] uppercase tracking-[0.25em]">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:8015154003"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C9A84C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                  (801) 515-4003
                </a>
              </li>
              <li>
                <a
                  href="mailto:epicleanco@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/40 hover:text-[#C9A84C] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                  epicleanco@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-8 border border-[#C9A84C]/20 p-5">
              <Link href="/contact" className="text-white text-sm font-semibold hover:text-[#C9A84C] transition-colors">
                Request a Quote →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#101010]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-white/15 tracking-wider">
            © {new Date().getFullYear()} Epic Cleaning Co · All Rights Reserved
          </p>
          <p className="text-[11px] text-white/15 tracking-wider">
            Serving All of Utah · Fully Insured
          </p>
        </div>
      </div>
    </footer>
  );
}
