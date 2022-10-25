import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './languages/en/translationEN.json';
import translationHR from './languages/hr/translationHR.json';

const resources = {
    en: {
        translation: translationEN
    },
    hr: {
        translation: translationHR
    }
};

i18n
.use(initReactI18next)
.init({
    resources,
    lng: 'en',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
});

export default i18n;