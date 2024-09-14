import BackgroundHandle from "@/components/BackgroundHandle";
import HomePage from "@/components/HomePage";
import { isMobileScreen } from "@/src/features/metadataSlice";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { color, text } = useSelector((state) => state.theme.data);
  const { currentImage } = useSelector((state) => state.background);
  const { imageBg, mobileScreen } = useSelector((state) => state.metadata);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      dispatch(isMobileScreen(window.innerWidth < 1024));
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main
      style={{ backgroundColor: color, color: text, transitionDuration: "1s" }}
      className={`${inter.className}`}
    >
      {imageBg && (
        <div className="absolute overflow-hidden w-screen h-screen pointer-events-none select-none">
          <Image
            priority
            src={currentImage}
            height={1080}
            width={1920}
            quality={100}
            alt="Background Image"
            className="bg-center object-cover w-screen h-screen"
          />
        </div>
      )}
      <BackgroundHandle />
      <HomePage />
    </main>
  );
}
