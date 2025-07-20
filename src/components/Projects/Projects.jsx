import ScrollRevealSection from "../common/ScrollRevealSection/ScrollRevealSection";
import { itemVariants } from '../common/Animations/animationsVariants';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { dataProjects } from './dataProjects.js';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import { ProjectsContainer } from './styles.js'
import ProjectCard from './ProjectCard.jsx';


const Projects = () => {
    const { t } = useLanguage();

    return (
        <Section id="projects">
            <ScrollRevealSection>
                <SectionContainer $direction="column">
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
            </ScrollRevealSection>
        </Section>
    );
};

export default Projects;