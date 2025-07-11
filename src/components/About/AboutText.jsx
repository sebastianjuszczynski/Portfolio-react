import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { SectionDescription, SectionLink } from './styles';

const AboutText = () => {
    const { t } = useLanguage();

    return (
        <>
            <SectionHeader
                sub={t("aboutSubheader")}
                span={t("aboutSpan")}
                title={t("aboutTitle")}
            />
            <SectionDescription>{t('aboutDescription')}
            </SectionDescription>
            <SectionLink href="#contact">{t("aboutLink")}</SectionLink>
        </>
    );
};

export default AboutText;