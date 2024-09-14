import Image from "next/image";
import { Inter } from "next/font/google";
import Read from "@/components/Read";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Read />
    </div>
  );
}
