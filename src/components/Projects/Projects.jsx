import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { dataProjects } from './dataProjects.js';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import { ProjectsContainer } from './styles.js'
import ProjectCard from './ProjectCard.jsx';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';

const Projects = () => {
    const { t } = useLanguage();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-200px' });

    return (
        <Section id="projects">
            <SectionContainer
                $direction="column"
                as={motion.div}
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                <TextContainer as={motion.div} variants={itemVariants}>
                    <SectionHeader
                        sub={t("projectsSubheader")}
                        span={t("projectsSpan")}
                        title={t("projectsTitle")}
                    />
                </TextContainer>
                <ProjectsContainer as={motion.div} variants={itemVariants}>
                    {dataProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />   
                    ))}
                </ProjectsContainer>
            </SectionContainer>
        </Section>
    );
};

export default Projects;