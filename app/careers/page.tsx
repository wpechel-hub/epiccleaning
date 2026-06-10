import Header from "@/components/Header";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Careers | Epic Cleaning Co",
  description: "Join the Epic Cleaning Co team. Open positions in residential cleaning, commercial cleaning, and more.",
};

export default function CareersPage() {
  return (
    <>
      <Header />
      <main>
        <Careers />
      </main>
      <Footer />
    </>
  );
}
