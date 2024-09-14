import Layout from "@/components/Layout";
import React from "react";
import { useTranslation } from "react-i18next";

const about = () => {
  const { t, i18n } = useTranslation("AboutPage");
  const isRTL = i18n.language === "ur" || i18n.language === "ar";

  return (
    <Layout>
      <div
        className={`flex flex-col px-24 py-12 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <p className="font-bold text-2xl">{t("headerText")}</p>
        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader1")}
        </p>
        <p>{t("paragraph1")}</p>
        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader2")}
        </p>
        <p>{t("paragraph2")}</p>
        <p>{t("paragraph2_5")}</p>
        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader3")}
        </p>
        <p>{t("paragraph3")}</p>
        <ul className={`px-5 py-2 list-inside  ${isRTL ? "" : "list-disc"}`}>
          <li>
            <span className="font-semibold">{t("listHeader3_1")}</span>{" "}
            {t("list3_1")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader3_2")}</span>{" "}
            {t("list3_2")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader3_3")}</span>{" "}
            {t("list3_3")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader3_4")}</span>{" "}
            {t("list3_4")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader3_5")}</span>{" "}
            {t("list3_5")}
          </li>
        </ul>
        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader4")}
        </p>
        <p>{t("paragraph4")}</p>

        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader5")}
        </p>
        <p>{t("paragraph5")}</p>
        <ul className={`px-5 py-2 list-inside ${isRTL ? "" : "list-disc"}`}>
          <li>
            <span className="font-semibold">{t("listHeader5_1")}</span>{" "}
            {t("list5_1")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader5_2")}</span>{" "}
            {t("list5_2")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader5_3")}</span>{" "}
            {t("list5_3")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader5_4")}</span>{" "}
            {t("list5_4")}
          </li>
        </ul>
        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader6")}
        </p>
        <p>{t("paragraph6")}</p>
        <p className="font-semibold text-xl pt-5 pb-1">
          {t("paragraphHeader7")}
        </p>
        <p>{t("paragraph7")}</p>
        <p className="font-semibold text-lg pt-5">{t("paragraphHeader8")}</p>
        <ul className={`px-5 py-2 list-inside ${isRTL ? "" : "list-disc"}`}>
          <li>
            <span className="font-semibold">{t("listHeader8_1")}</span>{" "}
            {t("list8_1")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader8_2")}</span>{" "}
            {t("list8_2")}
          </li>
          <li>
            <span className="font-semibold">{t("listHeader8_3")}</span>{" "}
            {t("list8_3")}
          </li>
        </ul>
        <p>{t("paragraph8")}</p>
      </div>
    </Layout>
  );
};

export default about;
