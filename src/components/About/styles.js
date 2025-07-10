import styled from "styled-components";

export const Section = styled.section`
    background: ${({ theme }) => theme.backgrounds.secondary};
    margin: ${({ theme }) => theme.spacing.margin.lg};
    padding: ${({ theme }) => theme.spacing.padding.xl};
    text-align: center;

    @media (min-width: 1024px) {
        text-align: left;
        padding: ${({ theme }) => theme.spacing.padding.xxl};
    }
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.gap.base};

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: ${({ theme }) => theme.spacing.gap.lg};
    }
`;

export const TextContainer = styled.div`
    @media (min-width: 1024px) {
        order: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`;

export const SectionSubheader = styled.h3`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    margin-bottom: 0;
    font-weight: 900;

    @media (min-width: 1024px) {
        margin-bottom: ${({ theme }) => theme.spacing.margin.bottomSm};
    }
`;

export const SubheaderSpan = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 300;
`;

export const SectionTitle = styled.h2`
    display: block;
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    background: ${({ theme }) => theme.gradients.accent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: ${({ theme }) => theme.colors.transparent};
    margin: 0;

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.font.sizes.xl};
    }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.font.sizes.xl};
    }
`;

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
    font-size: ${({ theme }) => theme.font.sizes.base};
    max-width: 70%;
    margin: ${({ theme }) => theme.spacing.margin.lg};

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
        letter-spacing: 1px;
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

export const ImageContainer = styled.div`
    background-color: ${({ theme }) => theme.colors.transparent};
    padding: ${({ theme }) => theme.spacing.padding.image};
    border-radius: ${({ theme }) => theme.borders.radius.base};
    border: 2px solid ${({ theme }) => theme.colors.accentHover};

    @media (min-width: 1024px) {
        max-width: 450px;
        height: auto;
        overflow: hidden;
    }
`;

export const Image = styled.img`
    max-width: 280px;
    height: auto;

    @media (min-width: 768px) {
        max-width: 460px;
    }

    @media (min-width: 1024px) {
        display: block;
        width: 100%;
        height: 160px;
    }
`;



