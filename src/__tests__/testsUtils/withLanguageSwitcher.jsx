import { useLanguage } from '../../i18n/LanguageContext';

const LanguageSwitcher = ({ children }) => {
  const { setLang } = useLanguage();

  if (typeof window !== 'undefined') {
    window.setTestLang = setLang;
  }

  return children;
};

export default LanguageSwitcher;