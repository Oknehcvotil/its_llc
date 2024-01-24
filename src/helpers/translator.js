import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import uaTranslation from '../assets/translations/ua.json';
import enTranslation from '../assets/translations/en.json';

const savedLanguage = JSON.parse(localStorage.getItem('persist:language'));

const currentLanguage = () => (savedLanguage?.value === '"en"' ? 'en' : 'ua');

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
