import EighthSection from "@/components/EighthSection";
import FifthSection from "@/components/FifthSection";
import FourthSection from "@/components/FourthSection";
import FramerMotionPrac from "@/components/FramerMotionPrac";
import HeroSection from "@/components/HeroSection";
import SecondSection from "@/components/SecondSection";
import SeventhSection from "@/components/SeventhSection";
import SixthSection from "@/components/SixthSection";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="h-screen">
        <FramerMotionPrac />
      </section>
      {/* <section name="SecondSection" className="h-screen">
        <SecondSection />
      </section>
      <section name="ThirdSection" className="h-screen">
        <ThirdSection />
      </section>
      <section className="h-screen md:h-[110vh] lg:h-screen">
        <FourthSection />
      </section>
      <section className="h-screen">
        <FifthSection />
      </section>
      <section className="h-screen">
        <SixthSection />
      </section>
      <section className="h-screen">
        <SeventhSection />
      </section>
      <section className="h-[150vh]">
        <EighthSection />
      </section> */}
    </main>
  );
}
