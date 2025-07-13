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
            <SectionContainer $direction="column">
                <TextContainer>
                    <SectionHeader
                        sub={t("projectsSubheader")}
                        span={t("projectsSpan")}
                        title={t("projectsTitle")}
                    />
                </TextContainer>
                <ProjectsContainer>
                    {dataProjects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </ProjectsContainer>
            </SectionContainer>
        </Section>
    );
};

export default Projects;