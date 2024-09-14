import Image from "next/image";
import React from "react";
import ZiFiWSvg from "./icons/ZiFi";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { text } = useSelector((state) => state.theme.data);
  const { inInfo } = useSelector((state) => state.metadata);

  return (
    <div
      className={`${
        inInfo ? "absolute" : "relative"
      } w-full flex justify-between items-center padding_zifi pt-[12px] lg:pt-[3.7dvh]`}
    >
      {/* left */}
      <div className="order-2 lg:order-1">
        <ZiFiWSvg
          fill={text}
          className="w-[48.49px] sm:w-[8.9805dvh] SvgColorTransition"
        />
      </div>
      {/* center */}
      <div className="order-1 lg:order-2 w-[2.77dvh] lg:w-auto">
        <p
          className={`absolute ${
            inInfo && "hidden lg:flex"
          } flex justify-center items-center inset-0 translate-y-[7dvh] lg:translate-y-0 lg:relative uppercase text-[10px] 2xl:text-[15px] tracking-[5px]`}
        >
          Your Internet Speed
        </p>
      </div>
      {/* right */}
      <div className="order-3">
        <Image
          src={"/Logos-icons/uk.png"}
          width={50}
          height={0}
          alt="UK Flag"
          className="w-[25px] sm:w-[4.62dvh]"
        />
      </div>
    </div>
  );
};

export default Navbar;
