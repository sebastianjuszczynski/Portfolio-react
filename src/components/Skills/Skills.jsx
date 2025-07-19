import { useLanguage } from '../../i18n/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';
import { skillsData } from './skillsData.js';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles';
import { ImagesContainer, Image, SkillsDescription, SkillsItem } from './styles';

const Skills = () => {
    const { t } = useLanguage();
    const { ref, isInView } = useScrollReveal();

    return (
        <Section id="skills" $bg="transparent">
            <SectionContainer
                $direction="column"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
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
        </Section>
    );
};

export default Skills;