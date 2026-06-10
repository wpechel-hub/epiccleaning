"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0F11]/98 backdrop-blur-md border-b border-[#1e1e1e] py-4"
          : "bg-[#0F0F11]/80 backdrop-blur-sm border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-0.5">
          <Image
            src="/logo_semfundo.png"
            alt="Epic Cleaning Co"
            width={80}
            height={80}
            priority
          />
          <span className="font-display text-xl font-bold text-white tracking-wide">
            Epic <span className="text-[#C9A84C]">Cleaning</span> Co
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-semibold tracking-[0.15em] uppercase transition-colors ${
                pathname === link.href
                  ? "text-[#C9A84C]"
                  : "text-white/40 hover:text-white/80"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center px-6 py-2.5 bg-[#C9A84C] hover:bg-[#EBD094] text-black text-xs font-bold tracking-[0.15em] uppercase transition-colors"
          >
            Get a Quote
          </Link>
          <button
            className="md:hidden text-white/60 hover:text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#080808] border-t border-[#1e1e1e]">
          <nav className="flex flex-col py-5 px-6 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`py-3 text-xs font-semibold tracking-[0.15em] uppercase border-b border-[#1a1a1a] transition-colors ${
                  pathname === link.href ? "text-[#C9A84C]" : "text-white/40 hover:text-[#C9A84C]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-5 py-3 bg-[#C9A84C] text-black font-bold text-xs tracking-widest uppercase"
            >
              Get a Free Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
