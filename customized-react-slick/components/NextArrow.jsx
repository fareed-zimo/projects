import Image from "next/image";
import React, { useRef } from "react";

const NextArrow = ({ onClick, hoveredIndex }) => {
  return (
    <div
      className={`flex absolute right-[10px] sm:right-[20px] lg:right-[54px] top-[-40px] sm:top-[-57px] cursor-pointer ${
        hoveredIndex ? "-z-10" : "z-10"
      }`}
      onClick={onClick}
    >
      <Image
        src={"/slider_images/next_arrow.png"}
        alt="Next Arrow"
        width={30}
        height={0}
        className="w-[10px] sm:w-[15px] 2xl:w-[15px]"
      />
    </div>
  );
};

export default NextArrow;
