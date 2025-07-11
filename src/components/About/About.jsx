import aboutImage from '../../assets/images/code-thinking.svg';
import { useLanguage } from '../../i18n/LanguageContext';
import SectionHeader from '../common/SectionHeader/SectionHeader';
import { Section, SectionContainer, TextContainer, SectionDescription, SectionLink, ImageContainer, Image
} from './styles';


const About = () => {
    const { t } = useLanguage();
    return (
        <Section id="about">
            <SectionContainer>
                <TextContainer>
                    <SectionHeader
                        sub={t("aboutSubheader")}
                        span={t("aboutSpan")}
                        title={t("aboutTitle")}
                    />
                    <SectionDescription>{t('aboutDescription')}
                    </SectionDescription>
                    <SectionLink href="#contact">{t("aboutLink")}</SectionLink>
                </TextContainer>
                <ImageContainer>
                    <Image src={aboutImage} alt="Developer thinking about code" loading="lazy" />
                </ImageContainer>
            </SectionContainer>
        </Section>
    )
};

export default About;