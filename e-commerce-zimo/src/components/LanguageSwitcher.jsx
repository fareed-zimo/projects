import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, []);

  const handleChangeLanguage = (event) => {
    const language = event.target.value;
    localStorage.setItem("language", language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <select onChange={handleChangeLanguage} value={i18n.language}>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
        <option value="zh">Chinese</option>
        <option value="ur">Urdu</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
