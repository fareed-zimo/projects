"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { Tween } from "gsap/gsap-core";

const HeroSection = () => {
  useGSAP(() => {
    const text = new SplitType("#TravelText");
    Tween.set("#TravelText", { autoAlpha: 1 });
    gsap.fromTo(
      ".char",
      { y: 115 },
      {
        autoAlpha: 1,
        duration: 0.1,
        y: 0,
        stagger: 0.05,
        delay: 0.2,
      }
    );
  });

  return (
    <div className="relative px-4 lg:px-[80px] 2xl:px-[140px] ">
      <div className="absolute -translate-y-[15%] right-0 translate-x-[5%]">
        <Image
          src={"/hero_section/Decore.png"}
          width={1922.31}
          height={0}
          className="w-auto lg:w-[730px] 3xl:w-[900px]"
        />
      </div>
      <div className="relative h-[50px] w-full top-[30px]">
        <Navbar />
      </div>
      <div className="relative flex items-center top-[15vh] lg:top-[25vh]">
        {/* <div className="absolute w-full hidden lg:flex justify-end select-none">
          <Image
            src={"/hero_section/hero.png"}
            width={941}
            height={0}
            className="w-auto lg:w-[750px] 2xl:w-[800px] 3xl:w-[941px]"
          />
        </div> */}
        <div className="lg:w-1/2 space-y-8  z-10">
          <p className="font-bold text-[#DF6951] text-[14px] lg:text-[18px] 2xl:text-[20px] 3xl:text-[25px] uppercase">
            Best Destinations around the world
          </p>
          <div className="relative">
            <p
              id="TravelText"
              className={` invisible font-bold font-serif text-[48px] lg:text-[84px] 3xl:text-[109px] text-[#181E4B]  leading-[60px] lg:leading-[89px] 3xl:leading-[100px]`}
            >
              <span className="travelSpan ">Travel, enjoy</span>
              <span className="travelSpan ">and live a new</span>
              <span className="travelSpan ">and full life</span>
            </p>
            {/* <div className="absolute  top-[68px] 3xl:top-[74px] left-[279px] 3xl:left-[335px] -z-10">
              <img src={"/hero_section/enjoy_underline.svg"} width={400} />
            </div> */}
          </div>
          <p className="font-medium text-[12px] lg:text-[14px] 2xl:text-[16px] 3xl:text-[20px] text-[#5E6282] leading-[18px] lg:leading-[30px] w-[75%]">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex space-x-8 text-[16px] 3xl:text-[20px] outline-none">
            <button className="bg-[#F1A501] text-white px-5 3x:px-7 py-2 3xl:py-4 rounded-[10px] shadow-[0_20px_70px_0px_rgba(241,165,1,0.15)]">
              Find out more
            </button>
            <button className="flex items-center space-x-5">
              <div className="rounded-full bg-[#DF6951] w-[52px] h-[52px] flex justify-center items-center">
                <Image
                  src={"/hero_section/Polygon.png"}
                  width={52}
                  height={0}
                  className="w-auto"
                />
              </div>
              <p>Play Demo</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
