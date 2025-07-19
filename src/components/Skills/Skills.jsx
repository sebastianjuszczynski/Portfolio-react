import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { skillsData } from './skillsData.js';
import { ImagesContainer, Image, SkillsDescription, SkillsItem } from './styles';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';

const Skills = () => {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-200px' });
    return (
        <Section id="skills" $bg="transparent">
            <SectionContainer
                $direction="column"
                as={motion.div}
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                <TextContainer as={motion.div} variants={itemVariants}>
                    <SectionHeader
                        sub={t("skillsSubheader")}
                        span={t("skillsSpan")}
                        title={t("skillsTitle")}
                    />
                </TextContainer>
                <ImagesContainer>
                    {skillsData.map(({ name, image }) => (
                        <SkillsItem as={motion.div} variants={itemVariants} key={name} title={name}>
                            <Image src={image}
                                alt={`${name} logo`} loading="lazy" />
                        </SkillsItem>
                    ))}
                </ImagesContainer>
                <SkillsDescription as={motion.div} variants={itemVariants}>
                    {t("skillsDescription")}
                </SkillsDescription>
            </SectionContainer>
        </Section>
    );
};

export default Skills;