import aboutImage from '../../assets/images/code-thinking.svg';
import { useLanguage } from '../../i18n/LanguageContext';
import { Section, SectionContainer, TextContainer, SectionSubheader, SubheaderSpan, 
    SectionTitle, SectionDescription, SectionLink, ImageContainer, Image
} from './styles';


const About = () => {
    const { t } = useLanguage();
    return (
        <Section id="about">
            <SectionContainer>
                <TextContainer>
                    <SectionSubheader>
                        {t("aboutSubheader")}
                        <SubheaderSpan> {t("aboutSpan")}</SubheaderSpan>
                    </SectionSubheader>
                    <SectionTitle>{t("aboutTitle")}</SectionTitle>
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