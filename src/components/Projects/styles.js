import styled from "styled-components";
import { motion } from "framer-motion";
import LinkIcon from "../../assets/icons/link.svg?react";

export const ProjectsContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MediaWrapper = styled(motion.div)`
    width: 100%;
    aspect-ratio: 16 / 9;
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    overflow: hidden;

    @media (min-width: 768px) {
        margin: ${({ theme }) => theme.spacing.margin.center};
    }

    @media (min-width: 1024px) {
        min-width: 300px;
    }
`;

export const ProjectImage = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    transition: transform 0.3s ease-in-out;
`;

export const LayoutCenter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gap.xl};
`;

export const ProjectCard = styled(motion.article)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.gap.lg};
    border-radius: ${({ theme }) => theme.borders.radius.base};
    background: ${({ theme }) => theme.backgrounds.main};
    padding: ${({ theme }) => theme.spacing.padding.xl};
    margin-bottom: ${({ theme }) => theme.spacing.margin.bottomLg};

    @media (min-width: 768px) {
        width: 350px;
        margin: ${({ theme }) => theme.spacing.margin.center};
        margin-bottom: 30px;
        padding-bottom: 30px;
    }

    @media (min-width: 1024px) {
        flex: 0 0 calc(33.3% - 2rem);
        margin-right: 2rem;
    }

    &:hover ${ProjectImage} {
        transform: scale(1.03);
    }
`;

export const ProjectContent = styled(motion.div)`
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: ${({ theme }) => theme.spacing.gap.sm};
`;

export const ProjectTitle = styled(motion.h3)`
    font-size: ${({ theme }) => theme.font.sizes.lg};
    color: ${({ theme }) => theme.colors.accent};
    margin: 0;
`;

export const ProjectDescription = styled(motion.p)`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
    margin: 0;
    min-height: 48px;
    line-height: 1.5;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
    }
`;

export const ProjectTech = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.padding.techIcons};
    gap: ${({ theme }) => theme.spacing.gap.sm};
    background: ${({ theme }) => theme.gradients.accent};
    border-radius: ${({ theme }) => theme.borders.radius.full};
    margin: 1rem 0;
    width: fit-content;
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
        transition: ${({ theme }) => theme.transition.transform};
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

export const ProjectLink = styled(motion.a)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.font.sizes.base};
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.gap.xs};

    @media (min-width: 1024px) {
        transition: ${({ theme }) => theme.transition.color};
    }

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
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

export const LinkSpan = styled.span``;