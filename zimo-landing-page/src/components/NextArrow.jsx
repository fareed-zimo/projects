import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const NextArrow = ({ onClick }) => {
  const arrowRef = useRef();
  const arrowIsInView = useInView(arrowRef, {
    amount: "some",
    triggerOnce: false,
  });

  return (
    <div
      className="hidden md:flex absolute right-0 top-[-70px] sm:top-[-80px] cursor-pointer"
      onClick={onClick}
      ref={arrowRef}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={arrowIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src={"/slider_images/next_arrow.png"}
          alt="Next Arrow"
          width={20}
          height={0}
          className="w-[15px] sm:w-[20px]"
        />
      </motion.div>
    </div>
  );
};

export default NextArrow;
