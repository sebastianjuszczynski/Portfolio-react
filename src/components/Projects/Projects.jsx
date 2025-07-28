
import { itemVariants } from '../common/Animations/animationsVariants';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { dataProjects } from './dataProjects.js';
import { TextContainer } from '../common/Section/styles.js';
import { ProjectsContainer } from './styles.js'
import ProjectCard from './ProjectCard.jsx';
import Section from "../common/Section/Section.jsx";


const Projects = () => {
    const { t } = useLanguage();

    return (
        <Section id="projects" data-testid="projects-section" $direction="column">
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
        </Section>
    );
};

export default Projects;