import Image from "next/image";
import React from "react";

const CardEvents = () => {
  return (
    <div className="CardElement flex flex-col lg:w-[20%] space-y-8 items-center justify-center rounded-b-[36px] py-5">
      <div className="">
        <Image src={"/category_section/mic.png"} width={40} height={0} />
        <Image
          src={"/category_section/mic_block.png"}
          width={50}
          height={0}
          className="absolute translate-x-[100%] -translate-y-[200%]"
        />
      </div>
      <div className="text-center flex flex-col items-center justify-center space-y-3">
        <p className="text-[18px] 2xl:text-[20px] text-[#1E1D4C] font-semibold">
          Local Events
        </p>
        <p className="text-[14px] 2xl:text-[16px] text-[#5E6282] font-medium w-[70%]">
          Barton vanity itself do in it. Preferd to men it engrossed listening.
        </p>
      </div>
    </div>
  );
};

export default CardEvents;
