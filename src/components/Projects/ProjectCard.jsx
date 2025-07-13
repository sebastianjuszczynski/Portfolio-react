import { useState, useEffect } from 'react';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import LinkIcon from '../../assets/icons/link.svg';
import {
    ProjectCard as Card, ProjectImage,
    ProjectVideo, MediaWrapper, ProjectContent,
    ProjectTitle, ProjectDescription, ProjectTech,
    TechImage, ProjectLink, LinkImage, LinkSpan
} from './styles.js'


const ProjectCard = ({ title, description, image, video, tech, link }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const { lang, t } = useLanguage();

        useEffect(() => {
            const handleResize = () => {
                setIsMobile(window.innerWidth < 768);
            };
    
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);

    return (
        <Card $isMobile={isMobile}
            onMouseEnter={e => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                    video.currentTime = 0;
                    video.play();
                }
            }}
            onMouseLeave={e => {
                const video = e.currentTarget.querySelector("video");
                if (video) {
                    video.pause();
                }
            }}
        >
            <MediaWrapper>
                <ProjectImage src={image}
                    alt={title} loading="lazy" />
                <ProjectVideo muted preload="none" loop playsInline loading="lazy">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </ProjectVideo>
            </MediaWrapper>
            <ProjectContent>
                <ProjectTitle>{title}</ProjectTitle>
                <ProjectDescription>{description[lang]}</ProjectDescription>
                <ProjectTech>
                    {tech.map(t => (
                        <TechImage key={t} src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-original.svg`}
                            alt={`${t} logo`} loading="lazy" title={t} aria-label={`Technology: ${t}`} />
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
        </Card>
    );
};

export default ProjectCard;