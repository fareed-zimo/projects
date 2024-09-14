import Image from "next/image";
import { Inter } from "next/font/google";
import SliderComponent from "@/components/SliderComponent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="absolute inset-x-0 bottom-10">
      <SliderComponent />
    </div>
  );
}
