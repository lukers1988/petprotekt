import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationPL from './translations/translationPL.json';
import translationEN from './translations/translationEN.json';

i18n.use(initReactI18next).init({
    lng: navigator.language,
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: translationEN,
        pl: translationPL
    }
});

export default i18n;
