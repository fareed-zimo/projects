import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const FourthSection = () => {
  const containerRef = useRef();
  const containerIsInView = useInView(containerRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] flex overflow-visible"
    >
      <div className="absolute h-full flex flex-col items-center gap-x-10 lg:gap-x-0 justify-center lg:justify-between w-full lg:space-x-10 space-y-10 lg:space-y-0 lg:flex-row px-4 md:px-[40px] 2xl:px-[60px]">
        <div className="flex flex-col justify-start lg:items-start">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={"/fourth_section/section_4_logo.png"}
                alt="logo"
                width={565.7}
                height={377}
                className="w-auto sm:w-[300px] lg:w-[420px] 2xl:w-[483px] 3xl:w-[565.7px]"
              />
            </motion.div>
          </div>

          <div className="leading-[25px]  md:leading-[30px] lg:leading-[50px] 3xl:leading-[70px] mt-4 md:mt-8">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
            >
              <span className="text-lg sm:text-xl lg:text-[30px] 2xl:text-[35px] 3xl:text-[40px] tracking-[5px] pt-7 text-left">
                ONE SOURCE
                <br />
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            >
              <span className="text-2xl sm:text-3xl lg:text-[37px] 2xl:text-[48px] 3xl:text-[60px] font-thin 2xl:tracking-[7px] tracking-[5px] pt-2 text-center lg:text-left">
                ENTRY TICKETS
                <br />
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [-100, 0] }
                  : { opacity: 0, x: -100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 1.7 }}
            >
              <span className="text-xs sm:text-sm lg:text-[17px] 3xl:text-[20px] tracking-[3px] pt-2 text-gray-500 text-center lg:text-left">
                FOR ALL PREMIUM LISTINGS
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], x: [100, 0] }
                  : { opacity: 0, x: 100 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            >
              <Image
                src={"/fourth_section/section_4_image_1.png"}
                alt="House"
                width={1083}
                height={718}
                className="w-[500px] sm:w-[600px] lg:w-[700px] 2xl:w-[900px] 3xl:w-[1083px]"
              />
            </motion.div>
          </div>
          <div>
            <motion.p
              initial={{ opacity: 0, y: -50 }}
              animate={
                containerIsInView
                  ? { opacity: [0, 1], y: [-50, 0] }
                  : { opacity: 0, y: -50 }
              }
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              className="text-[10px] sm:text-[15px] md:text-[20px] lg:text-[15px] 2xl:text-[24px] 3xl:text-[30px] tracking-[3px] pt-7 text-center"
            >
              LET YOUR DREAMS FIND YOU
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
