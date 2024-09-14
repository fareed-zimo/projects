import React from "react";
import HeroSectionContent from "./HeroSectionContent";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const HeroSection = () => {
  const { i18n } = useTranslation("HomePage");
  const isRTL = i18n.language === "ur" || i18n.language === "ar";

  return (
    <section
      className="relative w-full h-full mx-auto bg-nordic-gray-light flex pt-12 md:pt-0 md:items-center bg-cover bg-right "
      style={{ maxWidth: "1600px", height: "32rem" }}
    >
      <div className="absolute w-full h-full overflow-hidden">
        <Image
          src="/HeroImage.jpg"
          alt="Hero Image"
          fill
          style={{
            objectFit: "cover",
          }}
          // style={{
          //   objectFit: "cover",
          //   objectPosition: "center",
          //   width: "100%",
          //   height: "100%",
          // }}
        />
      </div>
      <div className="relative h-full w-full overflow-hidden flex items-center">
        <div
          className={`absolute w-full h-full bg-black opacity-70 ${
            isRTL ? "-rotate-45 left-[280px]" : "rotate-45 right-[280px]"
          } `}
        />
        <HeroSectionContent />
      </div>
    </section>
  );
};

export default HeroSection;
