import type { Metadata } from "next";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services | Epic Cleaning Co",
  description:
    "Residential, commercial, deep cleaning, post-construction and move in/out cleaning services throughout Utah.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  );
}
