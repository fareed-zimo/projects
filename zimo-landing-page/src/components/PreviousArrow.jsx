import { useInView, motion } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const PreviousArrow = ({ onClick }) => {
  const arrowRef = useRef();
  const arrowIsInView = useInView(arrowRef, {
    amount: "some",
    triggerOnce: false,
  });

  return (
    <div
      className="hidden md:flex absolute right-[88px] top-[-70px] sm:top-[-80px] cursor-pointer"
      onClick={onClick}
      ref={arrowRef}
    >
      <motion.div
        initial={{ opacity: 0, x: 120 }}
        animate={
          arrowIsInView
            ? { opacity: [0, 1], x: [120, 0], rotate: [180, 0] }
            : { opacity: 0, x: 120 }
        }
        transition={{
          duration: 1.4,
          ease: "easeOut",
          delay: 1,
          type: "spring",
          bounce: 0.3,
        }}
      >
        <Image
          src={"/slider_images/previous_arrow.png"}
          alt="Previous Arrow"
          width={20}
          height={0}
          className="w-[15px] sm:w-[20px]"
        />
      </motion.div>
    </div>
  );
};

export default PreviousArrow;
