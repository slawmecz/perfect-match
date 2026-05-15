import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Promises } from "@/components/Promises";
import { CTABanner } from "@/components/CTABanner";
import { QuickLinks } from "@/components/QuickLinks";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Promises />
        <CTABanner />
        <QuickLinks />
      </main>
      <Footer />
    </>
  );
}
