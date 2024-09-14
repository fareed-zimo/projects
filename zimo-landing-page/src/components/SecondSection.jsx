import {
  useAnimation,
  useInView,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { Link } from "react-scroll";

const SecondSection = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center"],
  });

  const objectOne = useTransform(scrollYProgress, [0, 1], ["-600%", "0%"]);
  const objectOneOpacity = useTransform(
    scrollYProgress,
    [0.5, 1],
    ["2%", "100%"]
  );
  const objectTwo = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const objectThree = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] flex flex-col justify-between pt-10 pb-5 overflow-hidden"
    >
      <div className=" text-center font-medium w-full justify-center px-4 md:px-[40px] 2xl:px-[60px] top-10 md:top-[68px]">
        <motion.p
          style={{ translateY: objectOne, opacity: objectOneOpacity }}
          className="text-responsive-small tracking-[0.15em]"
        >
          A REAL ESTATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD
        </motion.p>
      </div>
      <motion.div
        style={{ translateX: objectTwo, opacity: objectOneOpacity }}
        className="lg:absolute px-4 md:px-[40px] 2xl:px-[60px] top-32 md:top-28 2xl:top-36 flex w-full justify-center md:justify-start select-none"
      >
        <div className="space-y-[-10px] md:space-y-[-20px] 2xl:space-y-[-35px] flex flex-col tracking-[0.1em] 2xl:tracking-[0.224em]">
          <p className="text-[11px] sm:text-[14px] md:text-[21px] lg:text-[23px] xl:text-[27px] 2xl:text-[32px] 3xl:text-[43px] mb-2 md:mb-4 2xl:mb-6 font-medium ">
            A REVOLUTIONARY PLATFORM
          </p>
          <p className="text-[20px] sm:text-[25px] md:text-[37px] lg:text-[40.4px] xl:text-[47px] 2xl:text-[57.3px] 3xl:text-[76px] font-medium text-justify">
            ENTRIES - SELLERS
          </p>
          <p className="text-[29px] sm:text-[35.6px] md:text-[52.3px] lg:text-[56.5px] xl:text-[65.5px] 2xl:text-[81.5px] 3xl:text-[106.5px] font-medium">
            WORLDWIDE
          </p>
        </div>
      </motion.div>

      <motion.div
        style={{ translateX: objectThree, opacity: objectOneOpacity }}
        className="lg:absolute justify-center space-y-4 2xl:space-y-8 flex flex-col inset-y-0 right-0 items-center md:items-end px-4 md:px-[40px] 2xl:px-[60px]"
      >
        <div className="pointer-events-none select-none">
          <Image
            src="/second_section/logo.png"
            alt="Left Logo 1 Image"
            width={589.6}
            height={144.24}
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[589.6px]"
          />
        </div>
        <p className="text-responsive-very-small tracking-[0.15em] leading:[20px] sm:leading-[20px] lg:leading-[30px] 2xl:leading-[37px] text-center w-[200px] sm:w-[250px] md:w-[300px] lg:w-[320px] xl:w-[350px] 2xl:w-[500px] 3xl:w-[589.6px]">
          CONNECTING USERS FROM ACROSS THE GLOBE TO FACILITATE LIFE'S MOST
          IMPORTANT PERSONAL TRANSACTIONS
        </p>
      </motion.div>
      <motion.div
        style={{ translateX: objectTwo, opacity: objectOneOpacity }}
        className="lg:absolute lg:top-[60%] xl:top-[60%] 2xl:top-[60%] space-y-2 2xl:space-y-8 flex flex-col w-full items-start px-4 md:px-[40px] 2xl:px-[60px]"
      >
        <p className="text-responsive-base 2xl:tracking-[0.15em] font-medium w-full text-left">
          THE BEST OF THE BEST
        </p>
        <p className="text-responsive-very-small tracking-[0.15em] leading-[20px] md:leading-[30px] 2xl:leading-[34px] md:w-1/2 2xl:w-[50%] text-left">
          A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND
          MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET
          FROM ACROSS THE WORLD.
        </p>
      </motion.div>
      <div className="bottom-5 flex justify-center w-full px-4 md:px-[40px] 2xl:px-[60px]">
        <div className="relative cursor-pointer animate-bounce">
          <Link
            activeClass="active"
            to="ThirdSection"
            spy={true}
            smooth={true}
            duration={500}
          >
            <Image
              src="/black_arrow.png"
              alt="Scroll Down Arrow Image"
              quality={100}
              width={83}
              height={0}
              className="w-[40px] md:w-[60px] 2xl:w-[83px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
