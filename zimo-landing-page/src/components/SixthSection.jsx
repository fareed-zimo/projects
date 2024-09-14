import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const headerInitial = { opacity: 0, y: -100 };
const textOneInitial = { opacity: 0, x: -100 };
const textOneAnimation = { opacity: [0, 1], x: [-100, 0] };
const textTwoInitial = { opacity: 0, x: 100 };
const textTwoAnimation = { opacity: [0, 1], x: [100, 0] };

const SixthSection = () => {
  const containerRef = useRef();
  const containerIsInView = useInView(containerRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] flex py-10 px-5 border-b-[1px] border-gray-700 overflow-hidden"
    >
      <div className="pointer-events-none select-none  relative w-full h-full">
        <Image
          src="/world_map.png"
          alt="Section 6 Image"
          fill
          style={{ objectFit: "contain" }}
          quality={100}
          priority
        />
      </div>

      <div className="absolute inset-x-0 flex justify-center w-full top-[35%] px-4 md:px-[40px] 2xl:px-[60px]">
        <div className="flex flex-col items-center text-center">
          <motion.p
            initial={headerInitial}
            animate={
              containerIsInView
                ? { opacity: [0, 1], y: [-100, 0], rotateX: [180, 0] }
                : headerInitial
            }
            transition={{
              duration: 2,
              ease: "easeOut",
              delay: 0.2,
              type: "spring",
              bounce: 0.3,
            }}
            className="text-[20px] lg:text-[30px] 2xl:text-[35px] 3xl:text-[40px] font-medium tracking-[3px] lg:tracking-[5px] mb-8"
          >
            GLOBAL VISION
          </motion.p>
          <motion.p
            initial={textOneInitial}
            animate={containerIsInView ? textOneAnimation : textOneInitial}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
            className="text-[10px] lg:text-[15px] 2xl:text-[17.5px] 3xl:text-[20px] tracking-[1.5px] lg:tracking-[3px] mb-2"
          >
            WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA.
          </motion.p>
          <motion.p
            initial={textTwoInitial}
            animate={containerIsInView ? textTwoAnimation : textTwoInitial}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
            className="text-[10px] lg:text-[15px] 2xl:text-[17.5px] 3xl:text-[20px] tracking-[1.5px] lg:tracking-[3px] "
          >
            BASED ACROSS THE GLOBE, MAKING UP OVER 23 DIFFERENT NATIONALITIES.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
