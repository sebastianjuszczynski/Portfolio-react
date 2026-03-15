import { useLanguage } from '../../i18n/LanguageContext.jsx';
import ScrollRevealSection from "../common/ScrollRevealSection/ScrollRevealSection";
import { itemVariants } from '../common/Animations/animationsVariants';
import LinkIcon from '../../assets/icons/link.svg';

import {
    ProjectCard as Card,
    ProjectImage,
    MediaWrapper,
    ProjectContent,
    ProjectTitle,
    ProjectDescription,
    ProjectTech,
    TechImage,
    ProjectLink,
    LinkImage,
    LinkSpan,
    LayoutCenter
} from './styles.js';


const ProjectCard = ({ title, description, image, tech, link }) => {
    const { lang, t } = useLanguage();

    return (
        <ScrollRevealSection>
            <Card>

                <LayoutCenter>

                    <MediaWrapper variants={itemVariants}>
                        <ProjectImage
                            src={image}
                            alt={title}
                            loading="lazy"
                        />
                    </MediaWrapper>

                    <ProjectContent variants={itemVariants}>

                        <ProjectTitle variants={itemVariants}>
                            {title}
                        </ProjectTitle>

                        <ProjectDescription variants={itemVariants}>
                            {description[lang]}
                        </ProjectDescription>

                        <ProjectTech variants={itemVariants}>
                            {tech.map(t => (
                                <TechImage
                                    key={t}
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${t}/${t}-original.svg`}
                                    alt={`${t} logo`}
                                    loading="lazy"
                                    title={t}
                                    aria-label={`Technology: ${t}`}
                                />
                            ))}
                        </ProjectTech>

                        <ProjectLink
                            variants={itemVariants}
                            href={link}
                            target="_blank"
                            rel="noopener"
                            aria-label={`Check ${title} website`}
                        >
                            <LinkImage src={LinkIcon} />
                            <LinkSpan>{t("projectsLink")}</LinkSpan>
                        </ProjectLink>

                    </ProjectContent>

                </LayoutCenter>

            </Card>
        </ScrollRevealSection>
    );
};

export default ProjectCard;