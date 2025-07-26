import translations from '../../i18n/translations';

const getTranslations = (lang = 'en') => (key) => translations[lang][key] || key;

export const tEn = getTranslations('en');
export const tPl = getTranslations('pl');

