import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Image from "next/image";
import UserIcon from "./icons/UserIcon";
import ArrowBack from "./icons/ArrowBack";
import WifiSvg from "./icons/WifiSvg";
import { useDispatch, useSelector } from "react-redux";
import { infoTabOpen } from "@/src/features/metadataSlice";

const speedArray = [
  {
    speed: 175.31,
    src: "/Logos-icons/ZIFI Download Arrow Green.svg",
    name: "Download",
  },
  {
    speed: 52.97,
    src: "/Logos-icons/ZIFI Upload Arrow Purple.svg",
    name: "Upload",
  },
];

const Information = ({ setInfo }) => {
  const { text, secondary } = useSelector((state) => state.theme.data);
  const dispatch = useDispatch();

  const fillColor = text;
  return (
    <div
      className={`${
        secondary === "black"
          ? "bg-black bg-opacity-90"
          : "bg-white bg-opacity-80"
      }  w-full h-screen overflow-hidden`}
    >
      <Navbar inInfo={true} />

      <div className="w-full h-[93%] items-center lg:h-full py-[12dvh] padding_zifi space-y-5 2xl:space-y-10">
        <p className="text-[1.7dvh] lg:text-[2dvh] flex justify-center lg:justify-normal lg:flex-none -translate-y-[3.29dvh] lg:translate-y-0 uppercase opacity-50 tracking-[1.5px]">
          More Information
        </p>
        <div
          className="cursor-pointer absolute lg:relative inset-y-0 lg:inset-y-auto"
          onClick={() => dispatch(infoTabOpen(false))}
        >
          <ArrowBack
            fill={fillColor}
            className="w-[2.77dvh] SvgColorTransition"
          />
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row">
          {/* left side */}

          <div className="-mt-[6.5dvh] lg:mt-0 text-[1.2dvh] lg:text-[1.85dvh] flex flex-col w-full lg:w-1/2 h-1/2 lg:h-full space-y-[2dvh] lg:space-y-[4dvh] leading-[2.5dvh] lg:leading-[3.5dvh]">
            {/* Country Info */}
            <div className="flex items-center space-x-5">
              <div>
                <Image
                  src={"/Logos-icons/uk.png"}
                  width={50}
                  height={0}
                  alt="UK FLag"
                  className="w-[2.79dvh] lg:w-[4.62dvh]"
                />
              </div>

              <div className="opacity-50 uppercase tracking-[1.5px] firstColumnWidth">
                <p>City</p>
                <p>Country</p>
              </div>
              <div className="uppercase tracking-[1.5px]">
                <p>London</p>
                <p>United Kingdom</p>
              </div>
            </div>

            {/* Device Info */}
            <div className="flex items-center space-x-5">
              <div>
                <UserIcon
                  fill={fillColor}
                  className="w-[2.79dvh] lg:w-[4.62dvh] SvgColorTransition"
                />
              </div>

              <div className="opacity-50 uppercase tracking-[1.5px] firstColumnWidth">
                <p>LATITUDE</p>
                <p>LONGITUDE</p>
                <p>INTERNAL IP</p>
                <p>EXTERNAL IP</p>
                <p>MAC ADDRESS</p>
              </div>
              <div className="uppercase tracking-[1.5px]">
                <p>51.514882</p>
                <p>-0.123563</p>
                <p>10.0.0.186</p>
                <p>82.41.174.63</p>
                <p>5D:C3:07:7A:C4:88</p>
              </div>
            </div>

            {/* Wifi Info */}
            <div className="flex items-center space-x-5">
              <div>
                <WifiSvg
                  fill={fillColor}
                  className="w-[2.79dvh] lg:w-[4.62dvh] SvgColorTransition"
                />
              </div>

              <div className="opacity-50 uppercase tracking-[1.5px] firstColumnWidth">
                <p>PROVIDER</p>
                <p>ROUTER NAME</p>
                <p>SERVER</p>
                <p>PING</p>
              </div>
              <div className="uppercase tracking-[1.5px]">
                <p>VIRGIN MEDIA</p>
                <p>TP LINK</p>
                <p>LONDON</p>
                <p>12 ms</p>
              </div>
            </div>

            {/* Date Time Info */}
            <div className="flex items-center space-x-5">
              <div className="w-[2.79dvh] lg:w-[4.62dvh]" />

              <div className="opacity-50 uppercase tracking-[1.5px] firstColumnWidth">
                <p>Date</p>
                <p>Time</p>
              </div>
              <div className="uppercase tracking-[1.5px]">
                <p>27/03/2024</p>
                <p>15:45</p>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 h-1/2 lg:h-full -translate-y-[8dvh] -space-y-7">
            {speedArray.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center space-x-2"
              >
                <div>
                  <p className="text-[12.5dvh] lg:text-[23.8dvh] select-none">
                    {item.speed}
                  </p>
                </div>

                <div className="-translate-y-3 lg:-translate-y-2  ">
                  <div className="flex lg:flex-col items-center lg:items-center lg:space-y-3 font-light tracking-[1.5px]  ">
                    <p className="text-[3.2dvh] lg:text-[2.77dvh] ml-2 lg:ml-0 order-2 lg:order-1">
                      Mbps
                    </p>
                    <Image
                      src={item.src}
                      width={42.86}
                      height={0}
                      alt={item.name}
                      className="order-1 lg:order-2 w-[23.62px] lg:w-[42.86px]"
                    />
                  </div>

                  <p className="absolute inset-x-0 lg:inset-x-auto flex lg:flex-none justify-center lg:justify-normal lg:right-0 -translate-y-[7dvh] lg:translate-y-[5dvh] uppercase text-[1.4dvh] lg:text-[2dvh] tracking-[1.5px]">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer inInfo={true} />
    </div>
  );
};

export default Information;
