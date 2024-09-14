import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Card = ({ img }) => {
  const cardRef = useRef();
  const cardIsInView = useInView(cardRef, {
    amount: "some",
    triggerOnce: true,
  });

  return (
    <div ref={cardRef}>
      <motion.div
        className="relative flex items-end"
        initial={{
          y: 300,
        }}
        animate={
          cardIsInView
            ? {
                y: 0,
                rotateY: [180, 0],
                transition: {
                  type: "spring",
                  bounce: 0.4,
                  duration: 1.6,
                },
              }
            : null
        }
        viewport={{ once: false, amount: 0.8 }}
      >
        <img src={img.src} alt={img.alt} className="w-full h-auto" />
        <p className="absolute w-full justify-center items-center pb-4 text-white uppercase flex text-[9px] lg:text-[11px] xl:text-[14px] 3xl:text-[24px] tracking-[3px]">
          {img.alt}
        </p>
      </motion.div>
    </div>
  );
};

export default Card;
