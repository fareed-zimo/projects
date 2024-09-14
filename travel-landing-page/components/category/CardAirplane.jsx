import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import React from "react";

const CardAirplane = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".AnimateContent", {
      scrollTrigger: {
        trigger: ".AirPlaneCard",
        toggleActions: "restart none none none",
      },
      y: -200,
      delay: 0.5,
      opacity: 0,
      duration: 1,
    });

    const flapAnimation = gsap.fromTo(
      ".BorderDiv",
      { rotationX: 0 },
      {
        scrollTrigger: {
          trigger: ".AirPlaneCard",
          toggleActions: "restart none none none",
        },
        rotationX: 35,
        duration: 1,
        delay: 1.5,
        ease: "elastic",
        onComplete: () => {
          flapAnimation.reverse();
        },
      }
    );
  });
  return (
    <div className=" lg:w-[20%] AirPlaneCard">
      <div className="CardElement BorderDiv flex flex-col bg-white space-y-8 items-center justify-center rounded-[36px] border-t-0 rounded-t-none p-5 shadow-[0_22px_26px_0px_rgba(0,0,0,0.07)] lg:shadow-[0_52px_46px_0px_rgba(0,0,0,0.07)]">
        <div className="AnimateContent z-10">
          <Image
            src={"/category_section/airplane.png"}
            width={112.05}
            height={0}
          />
          <Image
            src={"/category_section/airplane_block.png"}
            width={50}
            height={0}
            className="absolute -z-10 -translate-y-[150%] translate-x-[50%]"
          />
        </div>
        <div className=" AnimateContent text-center flex flex-col items-center justify-center space-y-3">
          <p className="text-[18px] 2xl:text-[20px] text-[#1E1D4C] font-semibold">
            Best Flights
          </p>
          <p className="text-[14px] 2xl:text-[16px] text-[#5E6282] font-medium">
            Engrossed listening. Park gate sell they west hard for the.
          </p>
        </div>
      </div>
      <div className="no-animation absolute hidden lg:flex -z-10 bottom-0 -translate-x-[35%] translate-y-[35%]">
        <Image src={"/category_section/red_block.png"} width={100} height={0} />
      </div>
    </div>
  );
};

export default CardAirplane;
