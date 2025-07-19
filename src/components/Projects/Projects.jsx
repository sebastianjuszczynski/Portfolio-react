import { useScrollReveal } from '../../hooks/useScrollReveal';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { dataProjects } from './dataProjects.js';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import { ProjectsContainer } from './styles.js'
import ProjectCard from './ProjectCard.jsx';


const Projects = () => {
    const { t } = useLanguage();
    const { ref, isInView } = useScrollReveal();

    return (
        <Section id="projects">
            <SectionContainer
                $direction="column"
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}>
                <TextContainer variants={itemVariants}>
                    <SectionHeader
                        sub={t("projectsSubheader")}
                        span={t("projectsSpan")}
                        title={t("projectsTitle")}
                    />
                </TextContainer>
                <ProjectsContainer variants={itemVariants}>
                    {dataProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </ProjectsContainer>
            </SectionContainer>
        </Section>
    );
};

export default Projects;