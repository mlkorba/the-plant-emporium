import { Hero } from "@/components/Hero";
import { SectionOne } from "@/components/SectionOne";
import { SectionTwo } from "@/components/SectionTwo";
import { SectionThree } from "@/components/SectionThree";
import { SectionFour } from "@/components/SectionFour";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        {/* <SectionFour />  */}
      </main>
    </>
  );
}
