import styled from "styled-components";
import LinkIcon from '../../assets/icons/link.svg?react';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;


export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    background-position: center;
    background-size: cover;
    display: block;

    @media (min-width: 768px) {
        width: 70%;
        margin: ${({ theme }) => theme.spacing.margin.center};
    }

    @media (min-width: 1024px) {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        width: 100%;
        max-width: 600px;
        transition: ${({ theme }) => theme.transition.transform}; 
    }
`;

export const ProjectVideo = styled.video`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    background-position: center;
    background-size: cover;
    display: none;

    @media (min-width: 768px) {
        width: 70%;
        margin: ${({ theme }) => theme.spacing.margin.center};
    }

    @media (min-width: 1024px) {
        aspect-ratio: 16 / 9;
        object-fit: cover;
        width: 100%;
        max-width: 600px;
        transition: ${({ theme }) => theme.transition.transform}; 
    }
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.gap.lg};
    border-radius: ${({ theme }) => theme.borders.radius.base};
    background: ${({ theme }) => theme.backgrounds.main};
    padding: ${({ theme }) => theme.spacing.padding.xxl};
    margin-bottom: ${({ theme }) => theme.spacing.margin.bottomLg};

    @media (min-width: 768px) {
        align-items: center;
    }

    @media (min-width: 1024px) {
        flex: 0 0 calc(33.3% - 2rem);
        margin-right: 2rem;
    }

    &:hover ${ProjectImage} {
        display: none;
    }

    &:hover ${ProjectVideo} {
        display: block;
    }
`;


export const ProjectContent = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: ${({ theme }) => theme.spacing.gap.sm};

    @media (min-width: 768px) {
        text-align: center;
    }

    @media (min-width: 1024px) {
        text-align: left;
    }
`;

export const ProjectTitle = styled.h3`
    font-size: ${({ theme }) => theme.font.sizes.lg};
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
`;

export const ProjectDescription = styled.p`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
    }
`;

export const ProjectTech = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.padding.techIcons};
    gap: ${({ theme }) => theme.spacing.gap.sm};
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: ${({ theme }) => theme.borders.radius.full};
    margin: 1rem 0;
    width: fit-content;

    @media (min-width: 768px) {
        margin: ${({ theme }) => theme.spacing.margin.base};
    }

    @media (min-width: 1024px) {
        margin: 1rem 0;
    }
`;

export const TechImage = styled.img`
    width: 20px;
    height: 20px;

    @media (min-width: 768px) {
        width: 26px;
        height: 26px;
    }

    @media (min-width: 1024px) {
        width: 20px;
        height: 20px;
        transition: ${({ theme }) => theme.transition.transform}
    }
    &:hover {
        transform: translateY(-5px);
    }
`;

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.font.sizes.base};
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.gap.xs};

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
    }

    @media (min-width: 1024px) {
        transition: ${({ theme }) => theme.transition.color}
    }
    &:hover {
        color: ${({ theme }) => theme.colors.accentHover}
    }
`;

export const LinkImage = styled(LinkIcon)`
    width: 20px;
    height: 20px;
    display: block;   
    
    @media (min-width: 768px) {
        width: 24px;
        height: 24px;
    }

    @media (min-width: 1024px) {
        width: 20px;
        height: 20px;
    }
`;

export const LinkSpan = styled.span`

`;

