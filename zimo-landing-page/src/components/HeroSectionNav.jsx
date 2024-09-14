import Image from "next/image";
import React, { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";

const initialNavObjs = { opacity: 0, x: -100 };
const animateNavObjs = { opacity: 1, x: 0 };

const HeroSectionNav = () => {
  return (
    <div className="absolute flex justify-between w-full pt-[30px] lg:pt-[40px] 2xl:pt-[50px] 3xl:pt-[68px] px-4 md:px-[40px] 2xl:px-[60px]">
      {/* left content */}
      <div className="relative flex flex-row items-baseline justify-start w-1/2 space-x-3 lg:items-end lg:space-x-7 lg:w-1/3">
        <motion.div
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="relative pointer-events-none select-none"
        >
          <Image
            src="/left-logo1.png"
            alt="Left Logo 1 Image"
            width={65.96}
            height={50}
            className="w-[40px] xl:w-[46px] 2xl:w-[52.96px] 3xl:w-[65.96px]"
          />
        </motion.div>

        <motion.div
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="relative pointer-events-none select-none"
        >
          <Image
            src="/left-logo2.png"
            alt="Left Logo 2 Image"
            width={184.9}
            height={50}
            className="w-[112px] xl:w-[130px] 2xl:w-[153px] 3xl:w-[184.9px]"
          />
        </motion.div>
        <motion.h1
          initial={initialNavObjs}
          animate={animateNavObjs}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className=" text-white text-[9px] lg:text-[11px] xl:text-[13px] 2xl:text-[14px] 3xl:text-[14.66px] tracking-[2.5px] lg:tracking-[4px]"
        >
          ABOUT
        </motion.h1>
      </div>

      {/* center content */}
      <div className="relative justify-center hidden w-1/3 pointer-events-none select-none lg:flex">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <Image
            src="/center-logo.png"
            alt="Center Logo Image"
            width={204.38}
            height={50}
            className="w-[131px] xl:w-[149px] 2xl:w-[178px] 3xl:w-[204.38px] h-auto"
          />
        </motion.div>
      </div>

      {/* right content */}
      <div className="flex flex-row items-center justify-end w-1/2 lg:w-1/3 space-x-7 md:space-x-10 lg:space-x-14 2xl:space-x-20">
        <NavLinks />
      </div>
    </div>
  );
};

export default HeroSectionNav;
