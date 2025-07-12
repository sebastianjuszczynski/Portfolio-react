import { useLanguage } from '../../i18n/LanguageContext.jsx';
import SectionHeader from '../common/SectionHeader/SectionHeader.jsx';
import { dataProjects } from './dataProjects.js';
import LinkIcon from '../../assets/icons/link.svg';
import { Section, SectionContainer, TextContainer } from '../common/Section/styles.js';
import { ProjectsContainer, ProjectCard, ProjectImage, ProjectVideo, ProjectContent, ProjectTitle, ProjectDescription, ProjectTech, TechImage, ProjectLink, LinkImage, LinkSpan} from './styles.js'

const Projects = () => {
    const { lang, t } = useLanguage();

    return (
        <Section id="projects">
            <SectionContainer>
                <TextContainer>
                    <SectionHeader
                        sub={t("projectsSubheader")}
                        span={t("projectsSpan")}
                        title={t("projectsTitle")}
                    />
                </TextContainer>
                <ProjectsContainer>
                    {dataProjects.map(({ title, description, image, video, tech, link }) => (
                        <ProjectCard key={title}>
                            <ProjectImage src={image}
                                alt={title} loading="lazy" />
                            <ProjectVideo muted preload="none" loop playsInline>
                                <source src={video} type="video/mp4" />
                                Your browser does not support the video tag.
                            </ProjectVideo>
                            <ProjectContent>
                                <ProjectTitle>{title}</ProjectTitle>
                                <ProjectDescription>{description[lang]}</ProjectDescription>
                                <ProjectTech>
                                    {tech.map(t => (
                                        <TechImage key={t} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-original.svg`}
                                            alt={`${t} logo`} loading="lazy" title={t} />
                                    ))}
                                </ProjectTech>
                                <ProjectLink
                                    href={link} target="_blank"
                                    rel="noopener" aria-label={`Check ${title} website`}
                                >
                                    <LinkImage src={LinkIcon} />
                                    <LinkSpan>{t("projectsLink")}</LinkSpan>
                                </ProjectLink>
                            </ProjectContent>
                        </ProjectCard>
                    ))}
                </ProjectsContainer>
            </SectionContainer>
        </Section>
    );
};

export default Projects;