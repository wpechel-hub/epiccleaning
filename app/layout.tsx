import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Epic Cleaning Co | Premium Cleaning Services — Utah",
  description:
    "Utah's premier cleaning service delivering exceptional residential and commercial cleaning with uncompromising standards and meticulous attention to detail.",
  keywords:
    "premium cleaning service Utah, luxury cleaning, house cleaning, commercial cleaning, deep cleaning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full antialiased bg-[#0a0a0a] text-white">
        {children}
      </body>
    </html>
  );
}
