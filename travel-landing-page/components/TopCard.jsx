import Image from "next/image";
import React from "react";

const TopCard = ({ img }) => {
  const { src, name, price, duration } = img;
  return (
    <div className="TopCardContainer w-[270px] 2xl:w-[300px]  rounded-[24px] shadow-[0_16px_26px_0px_rgba(0,0,0,0.09)]">
      <div className="relative">
        <div>
          <Image src={src} width={314} height={0} className="rounded-[24px]" />
        </div>
        <div className="absolute rounded-[24px] rounded-t-none -translate-y-[100%] h-[130px] w-full bg-white p-5 space-y-5">
          <div className="flex justify-between ">
            <p>{name}</p>
            <p>${price}</p>
          </div>
          <div className="flex items-center space-x-4">
            <div>
              <Image
                src={"/top_selling_section/pointer.png"}
                width={16.25}
                height={0}
              />
            </div>

            <p className="flex justify-start ">{duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
