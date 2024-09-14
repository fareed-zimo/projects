import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

function useParallax(scrollYProgress, distance) {
  return useTransform(scrollYProgress, [0, 1], [100, distance]);
}

const SectionMapping = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 900);

  return (
    <>
      <div className="absolute">
        <Image
          src={"/hero_background.png"}
          width={1920}
          height={1080}
          style={{ y }}
          className=" object-cover w-screen h-screen"
          alt="hero background"
        />
      </div>
      <motion.h2
        className="text-white text-9xl font-black tracking-[10px] uppercase flex justify-center"
        style={{ y }}
      >{`Cityscape`}</motion.h2>
    </>
  );
};

export default SectionMapping;
