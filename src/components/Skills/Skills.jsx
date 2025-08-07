import { useLanguage } from '../../i18n/LanguageContext';
import { itemVariants } from '../common/Animations/animationsVariants';
import { skillsData } from './skillsData.js';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import Section from '../common/Section/Section';
import { TextContainer } from '../common/Section/styles';
import { ImagesContainer, Image, SkillsDescription, SkillsItem } from './styles';

const Skills = () => {
    const { t } = useLanguage();

    return (
        <Section id="skills" $bg="transparent" $direction="column">
            <TextContainer variants={itemVariants}>
                <SectionHeader
                    sub={t("skillsSubheader")}
                    span={t("skillsSpan")}
                    title={t("skillsTitle")}
                />
            </TextContainer>
            <ImagesContainer>
                {skillsData.map(({ name, image }) => (
                    <SkillsItem variants={itemVariants} whileHover={{ y: -5, scale: 1.12 }} key={name} title={name}>
                        <Image src={image}
                            alt={`${name} logo`} loading="lazy" />
                    </SkillsItem>
                ))}
            </ImagesContainer>
            <SkillsDescription variants={itemVariants}>
                {t("skillsDescription")}
            </SkillsDescription>
        </Section>
    );
};

export default Skills;