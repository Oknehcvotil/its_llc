import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import uaTranslation from "../translations/ua.json";
import enTranslation from "../translations/en.json";

i18n.use(initReactI18next).init({
  resources: {
    ua: {
      translation: uaTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  fallbackLng: 'ua',
  lng: 'ua',
  interpolation: {
    escapeValue: false, // Разрешить использование HTML в переводах
  },
});

export default i18n;
