import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const logoInitial = { opacity: 0, x: -100 };
const headerInitial = { opacity: 0, y: -100 };
const headerAnimation = { opacity: [0, 1], y: [-100, 0] };
const textInitial = { opacity: 0, x: 100 };
const textAnimation = { opacity: [0, 1], x: [100, 0] };
const userIdInitial = { opacity: 0, x: -100 };
const userIdAnimation = { opacity: [0, 1], x: [-100, 0] };
const arrowInitial = { x: -5 };
const arrowAnimation = { x: [-5, 0] };

const FifthSection = () => {
  const containerRef = useRef();
  const containerIsInView = useInView(containerRef, {
    amount: 0.5,
    once: false,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100vh] flex overflow-hidden"
    >
      <div className="relative w-full h-full pointer-events-none select-none">
        <Image
          src="/section_5.png"
          alt="Section 5 Image"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>
      {/* BODY SECTION  */}

      <div className="absolute flex flex-col w-full h-screen md:justify-center lg:flex-row ">
        <motion.div
          initial={logoInitial}
          animate={
            containerIsInView ? { opacity: [0, 1], x: [-100, 0] } : logoInitial
          }
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="absolute flex items-center justify-start w-full h-full px-4 md:px-[40px] 2xl:px-[60px] lg:relative"
        >
          <Image
            src={"/section_5/section_fifth_logo.png"}
            alt="Logo"
            width={547.74}
            height={134}
            className="w-[400px] 2xl:w-[547.74px]"
          />
        </motion.div>
        <div className="flex flex-col items-center px-4 pt-10 space-y-5 ">
          <div className="order-1 md:absolute flex flex-col justify-end space-y-4 text-white top-10 lg:top-[68px] px-4 md:px-[40px] lg:px-0 lg:right-[40px] 2xl:right-[60px] lg:w-[31%] xl:w-[30%] 2xl:w-[33%]">
            <motion.p
              initial={headerInitial}
              animate={containerIsInView ? headerAnimation : headerInitial}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="text-[13px] lg:text-[17px] xl:text-[23px] 2xl:text-[31px] 3xl:text-[40px] text-left tracking-[5px]"
            >
              PERSONALISED FOR YOU
            </motion.p>
            <motion.p
              initial={textInitial}
              animate={containerIsInView ? textAnimation : textInitial}
              transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
              className="text-[9px] lg:text-[9px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[20px] sm:text-justify w-full mt-5 opacity-60 tracking-[2px] 2xl:tracking-[3px] leading-[20px] lg:leading-[30px] 3xl:leading-[40px]"
            >
              DELIVERING THOUSANDS OF PERSONALISED ALERTS EVERYDAY, OUR USERS
              CAN BE FIRST IN LINE WHEN THAT OPPERTUNITY OF A LIFETIME IS HERE.
            </motion.p>
          </div>
          <div className="order-2 md:relative flex items-end justify-start md:justify-end w-full h-full pb-10 md:items-center px-4 md:px-0 md:right-[40px] 2xl:right-[60px]">
            <motion.div
              initial={userIdInitial}
              animate={containerIsInView ? userIdAnimation : userIdInitial}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex items-center space-x-3"
            >
              <p className="text-white whitespace-nowrap text-[9px] lg:text-[9px] xl:text-[12px] 2xl:text-[15px] 3xl:text-[20px] order-1 tracking-[3px] text-right">
                CREATE USER ID
              </p>
              <motion.div
                initial={arrowInitial}
                animate={containerIsInView ? arrowAnimation : arrowInitial}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: 0.7,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="relative order-2 select-none w-[30px] md:w-[35px] lg:w-[44.87px]"
              >
                <Image
                  src={"/section_5/forward_arrow.png"}
                  alt="forwrd Arrow"
                  width={44.87}
                  height={18.07}
                  className="w-full h-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
