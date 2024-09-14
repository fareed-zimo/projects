import Image from "next/image";
import React, { useRef } from "react";

const PreviousArrow = ({ onClick, hoveredIndex }) => {
  return (
    <div
      className={`flex absolute right-[62px] sm:right-[87px] lg:right-[154px] top-[-40px] sm:top-[-57px] cursor-pointer  ${
        hoveredIndex ? "z-0" : "z-10"
      }`}
      onClick={onClick}
    >
      <Image
        src={"/slider_images/previous_arrow.png"}
        alt="Previous Arrow"
        width={30}
        height={0}
        className="w-[10px] sm:w-[15px] 2xl:w-[15px]"
      />
    </div>
  );
};

export default PreviousArrow;
