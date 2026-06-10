import type { Metadata } from "next";
import Header from "@/components/Header";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Us | Epic Cleaning Co",
  description:
    "Learn about Epic Cleaning Co — Utah's trusted cleaning service committed to excellence, detail, and your satisfaction.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
