import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { ProductSection } from "@/components/ProductSection";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Banner />
        <ProductSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
