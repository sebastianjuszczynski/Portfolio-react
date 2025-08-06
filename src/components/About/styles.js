import styled from "styled-components";
import { motion } from 'framer-motion';

export const SectionDescription = styled.p`
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.4;
    max-width: 60ch;
    margin: ${({ theme }) => theme.spacing.margin.base};
    font-size: ${({ theme }) => theme.font.sizes.base};

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.font.sizes.sm};
    }

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.lg};
    }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
    }

`;

export const SectionLink = styled.a`
    display: block;
    border: none;
    background: ${({ theme }) => theme.gradients.accent};
    color: ${({ theme }) => theme.colors.textWhite};
    text-decoration: none;
    padding: ${({ theme }) => theme.spacing.padding.button};
    border-radius: ${({ theme }) => theme.borders.radius.full};
    cursor: pointer;
    font-size: ${({ theme }) => theme.font.sizes.sm};
    max-width: 70%;
    margin: ${({ theme }) => theme.spacing.margin.lg};
    text-transform: uppercase;
    letter-spacing: 1px;

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.lg};
    }

    @media (min-width: 1024px) {
        position: relative;
        overflow: hidden;
        padding: ${({ theme }) => theme.spacing.padding.lg};
        z-index: 0;
        text-align: left;
        font-size: ${({ theme }) => theme.font.sizes.sm};
        width: 300px;
        margin: 0;

        &::before {
        content: "";
        position: absolute;
        inset: 0;
        background: ${({ theme }) => theme.gradients.accentHover};
        opacity: 0;
        transition: ${({ theme }) => theme.transition.opacity};
        z-index: -1;
        }

        &:hover::before {
            opacity: 1;
        }
    }
`;

export const ImageWrapper = styled(motion.div)`
    display: block;
`;

export const ImageContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.transparent};
    border-radius: ${({ theme }) => theme.borders.radius.base};
    border: 2px solid ${({ theme }) => theme.colors.accentHover};
    overflow: hidden;
    aspect-ratio: 16 / 9;

    @media (min-width: 1024px) {
        max-width: 450px;
        height: auto;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media (min-width: 768px) {
        max-width: 560px;
    }

    @media (min-width: 1024px) {
        display: block;
        width: 100%;
    }
`;



