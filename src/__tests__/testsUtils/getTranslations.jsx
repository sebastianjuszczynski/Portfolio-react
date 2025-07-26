import translations from '../../i18n/translations';

export const getTranslations = (lang = 'en') => (key) => translations[lang][key] || key;
