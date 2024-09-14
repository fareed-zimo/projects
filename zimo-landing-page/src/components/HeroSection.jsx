import Image from "next/image";
import React from "react";
import HeroSectionNav from "./HeroSectionNav";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const initialBodyText = { opacity: 0, x: -100 };
const animateBodyText = { opacity: 1, x: 0 };

const HeroSection = () => {
  return (
    <div className="relative w-full h-[100vh] flex overflow-hidden">
      {/* The parent element must assign position: "relative", position: "fixed", or position: "absolute" style. */}
      {/* Alternatively, object-fit: "cover" will cause the image to fill the entire container and be cropped to preserve aspect ratio. For this to look correct, the overflow: "hidden" style should be assigned to the parent element. */}
      <div className="absolute w-full h-full pointer-events-none select-none bg-scroll">
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      <HeroSectionNav />

      {/* BODY SECTION  */}

      <div className="absolute flex-row justify-start items-center hidden w-full px-4 md:px-[40px] 2xl:px-[60px] space-x-3 lg:top-[115px] 2xl:top-[135px] 3xl:top-[177px] lg:flex">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={animateBodyText}
          transition={{ duration: 0.5, ease: "easeOut", delay: 1.2 }}
          className="relative block w-[14px] h-[10px] pointer-events-none select-none"
        >
          <Image
            src="/hero_right_content/back_arrow.png"
            alt="Left Logo 1 Image"
            fill
          />
        </motion.div>
        <motion.div
          initial={initialBodyText}
          animate={animateBodyText}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="lg:text-[12px] xl:text-base 3xl:text-[22px] text-white"
        >
          <p>BACK</p>
        </motion.div>
      </div>

      <div className="relative flex flex-col items-start justify-center w-full px-4 md:px-[40px] 2xl:px-[60px] text-white space-y-3 2xl:space-y-4">
        <div className="3xl:space-y-[-10px]">
          <motion.p
            initial={initialBodyText}
            animate={animateBodyText}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="text-[20px] md:text-[25px] xl:text-[30px] 3xl:text-[40px] tracking-[5px]"
          >
            DISCOVER
          </motion.p>
          <motion.p
            initial={initialBodyText}
            animate={animateBodyText}
            transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            className="text-[30px] md:text-[40px] xl:text-[50px] 3xl:text-[60px] tracking-[5px]"
          >
            A NEW WORLD
          </motion.p>
        </div>
        <motion.p
          initial={initialBodyText}
          animate={animateBodyText}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
          className="text-[10px] md:text-[12px] xl:text-[15px] 3xl:text-[20px] tracking-[2.2px] text-[#737373]"
        >
          FOR THOSE WHO WISH FOR MORE...
        </motion.p>
      </div>

      {/* SCROLL DOWN SECTION  */}
      <div className="absolute flex flex-col items-center w-full px-4 md:px-[40px] 2xl:px-[60px] space-y-8 md:space-y-7 3xl:space-y-14 bottom-5">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-[10px] md:text-[12px] 2xl:text-[20px] tracking-[2.2px] text-[#737373]"
        >
          BRING THE WORLD CLOSER TOGETHER
        </motion.p>
        <motion.div className="relative cursor-pointer animate-bounce">
          <Link
            activeClass="active"
            to="SecondSection"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Image
              src="/scroll_down_arrow.png"
              alt="Scroll Down Arrow Image"
              width={83}
              height={0}
              className="w-[40px] md:w-[60px] 2xl:w-[83px]"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
