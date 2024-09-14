"use client";

import { Canvas } from "@react-three/fiber";
import Image from "next/image";
import Experience from "./_component/Experience";

export default function Home() {
  return (
    <Canvas camera={{ fov: 64, position: [2.3, 1.5, 2.3] }}>
      <Experience />
    </Canvas>
  );
}
