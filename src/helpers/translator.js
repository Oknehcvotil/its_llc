import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uaTranslation from '../translations/ua.json';
import enTranslation from '../translations/en.json';

const savedLanguage = JSON.parse(localStorage.getItem('persist:language'));

const currentLanguage = () => {
  if (savedLanguage.value && savedLanguage.value === '"en"') {
    return 'en';
  }
  return 'ua';
};

i18n.use(initReactI18next).init({
  resources: {
    ua: {
      translation: uaTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
  fallbackLng: currentLanguage(),
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
