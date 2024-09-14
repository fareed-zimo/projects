import Image from "next/image";
import React from "react";

const CardCustomize = () => {
  return (
    <div className="CardElement flex flex-col lg:w-[20%] space-y-8 items-center justify-center rounded-b-[36px] py-5">
      <div>
        <Image
          src={"/category_section/customize.png"}
          width={50}
          height={0}
          className="-translate-y-[10%]"
        />
        <Image
          src={"/category_section/customize_block.png"}
          width={50}
          height={0}
          className="absolute -z-10 translate-x-[50%] -translate-y-[85%]"
        />
      </div>
      <div className="text-center flex flex-col items-center justify-center space-y-3">
        <p className="text-[18px] 2xl:text-[20px] text-[#1E1D4C] font-semibold">
          Customization
        </p>
        <p className="text-[14px] 2xl:text-[16px] text-[#5E6282] font-medium w-[70%]">
          We deliver outsourced aviation services for military customers
        </p>
      </div>
    </div>
  );
};

export default CardCustomize;
