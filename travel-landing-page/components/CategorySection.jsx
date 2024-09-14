"use client";
import Image from "next/image";
import React from "react";
import CardSatellite from "./category/CardSatellite";
import CardAirplane from "./category/CardAirplane";
import CardEvents from "./category/CardEvents";
import CardCustomize from "./category/CardCustomize";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const CategorySection = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".CardsContainer > *:not(.AirPlaneCard)", {
      scrollTrigger: {
        trigger: ".CardsContainer",
        toggleActions: "restart none none none",
      },
      y: -200,
      delay: 0.5,
      opacity: 0,
      stagger: 0.5,
      duration: 1,
    });

    gsap.utils.toArray(".CardElement").forEach((card, index) => {
      ScrollTrigger.observe({
        target: card,
        onHover: () =>
          gsap.to(card, {
            boxShadow: "4px 10px 11px 0px rgba(0,0,0,0.3)",
            rotationX: 15,
            duration: 1,
          }),
        onHoverEnd: () =>
          gsap.to(card, {
            boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
            rotationX: 0,
            duration: 1,
          }),
      });
    });
  });

  return (
    <div className="relative px-4 lg:px-[80px] 2xl:px-[140px] space-y-20">
      <div className="absolute right-0 px-2 lg:px-[40px] 3xl:px-[70px] lg:top-[20px]">
        <Image
          src={"/category_section/stars.png"}
          width={153}
          height={0}
          className="w-[25vw] lg:w-[153px]"
        />
      </div>
      <div className="relative w-full flex justify-center text-center top-[30px]">
        <div className="flex flex-col">
          <p className="uppercase font-semibold text-[#5E6282] text-[16px] lg:text-[18px]">
            Category
          </p>
          <p className="font-bold font-serif text-[#14183E] text-[30px] lg:text-[50px]">
            We Offer Best Services
          </p>
        </div>
      </div>
      <div className="CardsContainer flex flex-col space-y-[70px] lg:space-y-0 lg:flex-row justify-between items-center">
        <CardSatellite />
        <CardAirplane />
        <CardEvents />
        <CardCustomize />
      </div>
    </div>
  );
};

export default CategorySection;
