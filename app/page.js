import { Navbar } from "@/components/Navbar";
import { Banner } from "@/components/Banner";
import { SectionOne } from "@/components/SectionOne";
import { SectionTwo } from "@/components/SectionTwo";
import { SectionThree } from "@/components/SectionThree";
import { SectionFour } from "@/components/SectionFour";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Banner />
        <SectionOne />
        {/* <SectionTwo /> */}
        {/* <SectionThree />
        <SectionFour /> */}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
