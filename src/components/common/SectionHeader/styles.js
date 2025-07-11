import styled from "styled-components";

export const Subheader = styled.h3`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    margin-bottom: 0;
    font-weight: 900;

    @media (min-width: 1024px) {
        margin-bottom: ${({ theme }) => theme.spacing.margin.bottomSm};
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 300;
`;

export const Title = styled.h2`
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