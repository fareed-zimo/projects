import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const carInitial = { opacity: 0, x: -100 };
const logoInitial = { opacity: 0, x: 100 };

const EighthSection = () => {
  const carRef = useRef();
  const carIsInView = useInView(carRef, {
    amount: 0.3,
    once: false,
  });
  const logoRef = useRef();
  const logoIsInView = useInView(logoRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div className="relative w-full h-[150vh] flex border-gray-700 overflow-hidden">
      <div className="pointer-events-none select-none h-[100vh] relative w-full">
        <Image
          src="/eighth_section/background.png"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <div className="absolute inset-x-0 top-[100vh] transform -translate-y-1/2 flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-16 space-y-24 lg:space-y-0">
        <motion.div
          ref={carRef}
          initial={carInitial}
          animate={
            carIsInView
              ? { opacity: [0, 1], x: [-100, 0], rotateY: [180, 0] }
              : carInitial
          }
          transition={{
            duration: 2,
            ease: "easeOut",
            delay: 0.5,
            type: "spring",
            bounce: 0.3,
          }}
          className="mx-10 lg:mx-0"
        >
          <Image
            src="/eighth_section/car.png"
            alt="Car Image"
            width={519}
            height={778}
            className="w-[300px] lg:w-[270px] xl:w-[350px] 2xl:w-[400px] 3xl:w-[519px]"
          />
        </motion.div>
        <motion.div
          ref={logoRef}
          initial={logoInitial}
          animate={
            logoIsInView ? { opacity: [0, 1], x: [100, 0] } : logoInitial
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="pb-20 lg:pb-0 px-10 lg:px-0"
        >
          <Image
            src="/eighth_section/logo.png"
            alt="Logo Image"
            width={913.51}
            height={223.48}
            className="w-[500px] lg:w-[570px] 2xl:w-[650px] 3xl:w-[913.51px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default EighthSection;
