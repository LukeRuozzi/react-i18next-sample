import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import MyLanguageDetector from './LanguageDetector';

i18n
  .use(MyLanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
