import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const zimoInitial = { opacity: 0, x: -100 };
const zimoAnimation = { opacity: [0, 1], x: [-100, 0] };
const textInitial = { opacity: 0, x: 100 };
const textAnimation = { opacity: [0, 1], x: [100, 0] };
const civicaInitial = { opacity: 0, y: -100 };
const civicaAnimation = { opacity: [0, 1], y: [-100, 0] };
const barclaysInitial = { opacity: 0, y: 100 };
const barclaysAnimation = { opacity: [0, 1], y: [100, 0] };

const SeventhSection = () => {
  const containerRef = useRef();
  const containerIsInView = useInView(containerRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] grid top-[10%] lg:top-[0%] lg:grid-cols-3 px-4 md:px-[40px] 2xl:px-[60px] overflow-hidden"
    >
      {/* Left */}
      <div className="row-span-1 flex flex-col justify-center items-center space-y-2">
        <motion.div
          initial={zimoInitial}
          animate={containerIsInView ? zimoAnimation : zimoInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src="/seventh_section/section_seventh_logo_zimo.png"
            alt="ZIMO Logo"
            width={308.3}
            height={83.37}
            className="w-[200px] lg:w-[250px] 3xl:w-[308.3px]"
          />
        </motion.div>
        <motion.p
          initial={textInitial}
          animate={containerIsInView ? textAnimation : textInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          className="text-center font-medium text-4xl lg:text-[44px] 3xl:text-[56px] tracking-widest text-gray-500"
        >
          PARTNERS
        </motion.p>
      </div>

      {/* Center */}
      <div className="row-span-1 flex flex-col justify-center items-center space-y-5">
        <motion.div
          initial={civicaInitial}
          animate={containerIsInView ? civicaAnimation : civicaInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src="/seventh_section/CIVICA_logo.png"
            alt="CIVICA Logo"
            width={296.81}
            height={40}
            className="w-[200px] lg:w-[250px] 3xl:w-[296.81px]"
          />
        </motion.div>
        <motion.div
          initial={barclaysInitial}
          animate={containerIsInView ? barclaysAnimation : barclaysInitial}
          transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
        >
          <Image
            src="/seventh_section/BARCLAYS_logo.png"
            alt="BARCLAYS Logo"
            width={237.2}
            height={40}
            className="w-[150px] lg:w-[190px] 3xl:w-[237.2px]"
          />
        </motion.div>
      </div>

      {/* Right */}
      <div className="row-span-1"></div>
    </div>
  );
};

export default SeventhSection;
