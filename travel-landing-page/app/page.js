"use client";
import BookTrip from "@/components/BookTrip";
import CategorySection from "@/components/CategorySection";
import HeroSection from "@/components/HeroSection";
import TopDesitions from "@/components/TopDesitions";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.utils.toArray(".SectionContainer").forEach((section, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=1000",
          scrub: true,
          pin: section,
        },
      });
      if (index % 2 === 0) {
        tl.fromTo(section, { xPercent: 100 }, { xPercent: 0, duration: 1 });
      } else {
        tl.fromTo(section, { xPercent: -100 }, { xPercent: 0, duration: 1 });
      }
    });
  });

  return (
    <main className="overflow-hidden">
      <section className="h-screen lg:h-[140vh] 2xl:h-[120vh] 3xl:h-[110vh] w-full ">
        <HeroSection />
      </section>
      <section className="h-[180vh] lg:h-screen w-full">
        <CategorySection />
      </section>
      <section
        id="TopDestionation"
        className="SectionContainer h-[230vh] lg:h-screen w-full"
      >
        <TopDesitions />
      </section>
      <section
        id="BookTrip"
        className="SectionContainer h-[180vh] lg:h-screen w-full"
      >
        <BookTrip />
      </section>
    </main>
  );
}
