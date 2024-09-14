import Image from "next/image";
import { Inter } from "next/font/google";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const boxRef = useRef();

  const { contextSafe } = useGSAP();

  const handleClick = contextSafe(() => {
    const animate = gsap.to(boxRef.current, {
      rotate: 360,
      duration: 1,
      onComplete: () => {
        animate.revert();
      },
    });
  });

  return (
    <main>
      <button onClick={handleClick} className="button">
        Animate
      </button>
      <div ref={boxRef} className="box"></div>
    </main>
  );
}
