import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Banner />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
