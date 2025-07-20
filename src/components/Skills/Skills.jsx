import { useLanguage } from '../../i18n/LanguageContext';
import ScrollRevealSection from "../common/ScrollRevealSection/ScrollRevealSection";
import { itemVariants } from '../common/Animations/animationsVariants';
import { skillsData } from './skillsData.js';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles';
import { ImagesContainer, Image, SkillsDescription, SkillsItem } from './styles';

const Skills = () => {
    const { t } = useLanguage();

    return (
        <Section id="skills" $bg="transparent">
            <ScrollRevealSection>
                <SectionContainer $direction="column">
                    <TextContainer variants={itemVariants}>
                        <SectionHeader
                            sub={t("skillsSubheader")}
                            span={t("skillsSpan")}
                            title={t("skillsTitle")}
                        />
                    </TextContainer>
                    <ImagesContainer>
                        {skillsData.map(({ name, image }) => (
                            <SkillsItem variants={itemVariants} key={name} title={name}>
                                <Image src={image}
                                    alt={`${name} logo`} loading="lazy" />
                            </SkillsItem>
                        ))}
                    </ImagesContainer>
                    <SkillsDescription variants={itemVariants}>
                        {t("skillsDescription")}
                    </SkillsDescription>
                </SectionContainer>
            </ScrollRevealSection>
        </Section>
    );
};

export default Skills;