import { useLanguage } from '../../i18n/LanguageContext';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { skillsData } from './skillsData.js';
import { ImagesContainer, Image, SkillsDescription, SkillsItem } from './styles';

const Skills = () => {
    const { t } = useLanguage();
    return (
        <Section id="skills" $bg="transparent">
            <SectionContainer $direction="column">
                <TextContainer>
                    <SectionHeader
                        sub={t("skillsSubheader")}
                        span={t("skillsSpan")}
                        title={t("skillsTitle")}
                    />
                </TextContainer>
                <ImagesContainer>
                    {skillsData.map(({ name, image }) => (
        <SkillsItem key={name} title={name}>
                        <Image src={image}
                            alt={`${name} logo`} loading="lazy" />
                    </SkillsItem>
        ))}
                </ImagesContainer>
                <SkillsDescription>
                    {t("skillsDescription")}
                </SkillsDescription>
            </SectionContainer>
        </Section>
    );
};

export default Skills;