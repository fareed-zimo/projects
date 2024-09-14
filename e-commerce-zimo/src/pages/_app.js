import "@/styles/globals.css";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { appWithTranslation } from "next-i18next";
import i18n from "../components/i18n";
import { useRouter } from "next/router";
import { useEffect } from "react";

function App({ Component, pageProps }) {
  let persistor = persistStore(store);

  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    } else {
      const detectedLanguage = navigator.language.split("-")[0]; //detects the default language from browser settings
      const supportedLanguages = ["en", "ar", "ur", "zh"]; //supporting languages
      if (supportedLanguages.includes(detectedLanguage)) {
        // checks if the detected language is supported
        i18n.changeLanguage(detectedLanguage);
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default appWithTranslation(App);
