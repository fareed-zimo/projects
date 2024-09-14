"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useRef } from "react";

const Navbar = () => {
  useGSAP(() => {
    gsap.from(".links", {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
    });
    gsap.from(".logo", {
      x: -200,
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div className="flex justify-between items-center">
      <div className="logo">
        <Image
          src={"/hero_section/Logo.png"}
          width={114.91}
          height={0}
          className="w-auto"
        />
      </div>
      <div className="hidden lg:flex space-x-[60px] 3xl:space-x-[95px] text-[17px] items-center">
        <button className="links">Destinations</button>
        <button className="links">Hotels</button>
        <button className="links">Flights</button>
        <button className="links">Bookings</button>
        <button className="links">Login</button>
        <button className="links border-[1px] rounded-[5px] border-[#212832] px-5 py-2">
          Sign up
        </button>
        <select className="links bg-transparent outline-none">
          <option>EN</option>
          <option>CN</option>
          <option>PK</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
