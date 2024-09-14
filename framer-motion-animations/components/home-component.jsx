import Image from "next/image";
import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import SectionMapping from "./section-mapping";

const HomeComponent = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <main>
      <motion.div
        className="progress fixed inset-0 z-50 top-10"
        style={{ scaleX }}
      />

      <section className="w-screen h-screen">
        <SectionMapping />
      </section>
      <section className="w-screen h-screen">
        <SectionMapping />
      </section>
      <section className="w-screen h-screen">
        <SectionMapping />
      </section>
      <section className="w-screen h-screen">
        <SectionMapping />
      </section>
    </main>
  );
};

export default HomeComponent;
