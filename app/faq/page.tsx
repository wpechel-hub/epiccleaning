import type { Metadata } from "next";
import Header from "@/components/Header";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "FAQ | Epic Cleaning Co",
  description:
    "Frequently asked questions about Epic Cleaning Co services, scheduling, pricing, and more.",
};

export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
