import { Button } from "@mui/material";
import React from "react";
import { useTranslation } from "next-i18next";

const HeroSectionContent = () => {
  const { t, i18n } = useTranslation("pages");
  const isRTL = i18n.language === "ur" || i18n.language === "ar";
  const isEnglish = i18n.language === "en";
  const isChinese = i18n.language === "zh";
  const isUrdu = i18n.language === "ur";
  const isArabic = i18n.language === "ar";

  const hero = (key) => {
    return t(`HomePage.hero.${key}`);
  };

  console.log(hero("limited_time.class"));

  return (
    <div
      className={`overflow-hidden relative w-full h-full flex flex-col justify-center items-center lg:items-start ${
        isRTL ? "lg:items-end" : "lg:items-start"
      } `}
    >
      <div
        dir={isRTL ? "rtl" : "ltr"}
        className={`flex flex-col px-4 lg:px-52`}
      >
        <h1
          className={`${hero(
            "limited_time.class"
          )} font-semibold font-sans mb-4 text-purple-300 `}
        >
          {hero("limited_time.text")}
        </h1>
        <h1
          className={`text-white ${hero(
            "limited_time.class"
          )} font-semibold font-mono mb-4`}
        >
          {hero("fashion.text")}
        </h1>
        <h1
          className={`text-white ${hero(
            "limited_time.class"
          )} font-semibold font-sans mb-4 `}
        >
          {hero("look_your_best.text")}
        </h1>
        <Button
          variant="contained"
          color="secondary"
          style={{
            fontSize: isChinese ? 16 : 14,
          }}
          className={`w-[170px] text-2xl`}
        >
          {hero("explore_now.text")}
        </Button>
      </div>
    </div>
  );
};

export default HeroSectionContent;
