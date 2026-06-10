import type { Metadata } from "next";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gallery | Epic Cleaning Co",
  description:
    "See our work — before and after photos of residential, commercial and specialty cleaning across Utah.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
