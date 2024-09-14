import React from "react";
import TopCard from "./TopCard";
import Image from "next/image";

const images = [
  {
    src: "/top_selling_section/rome.png",
    name: "Rome, Italy",
    price: "5.42k",
    duration: "10 Days Trip",
  },
  {
    src: "/top_selling_section/london.png",
    name: "London, UK",
    price: "4.2k",
    duration: "12 Days Trip",
  },
  {
    src: "/top_selling_section/europe.png",
    name: "Full Europe",
    price: "15k",
    duration: "28 Days Trip",
  },
];

const TopDesitions = () => {
  return (
    <div className="relative px-4 lg:px-[80px] 2xl:px-[140px] space-y-20">
      {/* <div className="BackgroundImage absolute inset-0 w-[100vw] h-[100vh] overflow-hidden">
        <div className="overlay_div" />
        <Image
          src={"/background3.jpg"}
          width={1920}
          height={0}
          className="object-cover obje"
        />
      </div> */}
      <div className="relative w-full flex flex-col justify-center text-center top-[30px]">
        <div className="flex flex-col">
          <p className="uppercase font-semibold text-[#5E6282] text-[16px] lg:text-[18px]">
            Top Selling
          </p>
          <p className="font-bold font-serif text-[#14183E] text-[30px] lg:text-[50px]">
            Top Destinations
          </p>
        </div>
        <div className=" flex flex-col space-y-[70px] lg:space-y-0 lg:space-x-10 lg:flex-row justify-center items-center mt-8">
          {images.map((img, index) => (
            <div className="" key={index}>
              <TopCard img={img} />{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopDesitions;
