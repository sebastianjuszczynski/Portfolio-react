import styled from "styled-components";
import LinkIcon from '../../assets/icons/link.svg?react';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.gap.lg};
    border-radius: ${({ theme }) => theme.borders.radius.base};
    background: ${({ theme }) => theme.backgrounds.main};
    padding: ${({ theme }) => theme.spacing.padding.xl};
    margin-bottom: ${({ theme }) => theme.spacing.margin.bottomLg};
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    background-position: center;
    background-size: cover;
    display: block;
`;

export const ProjectVideo = styled.video`
    width: 100%;
    height: auto;
    border-radius: ${({ theme }) => theme.borders.radius.sm};
    background-position: center;
    background-size: cover;
    display: none;
`;

export const ProjectContent = styled.div`
    text-align: left;
`;

export const ProjectTitle = styled.h3`
    font-size: ${({ theme }) => theme.font.sizes.lg};
    margin: 0;
    color: ${({ theme }) => theme.colors.accent};
`;

export const ProjectDescription = styled.p`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textSecondary};
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
`;

export const TechImage = styled.img`
    width: 20px;
    height: 20px;
`;

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.font.sizes.base};
    display: inline-flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.gap.xs};
`;

export const LinkImage = styled(LinkIcon)`
    width: 20px;
    height: 20px;
    display: block;    
`;

export const LinkSpan = styled.span`

`;

