import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: ${({ theme }) => theme.spacing.padding.xl};
    background-color: ${({ theme }) => theme.backgrounds.menuMobile};
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1200px;

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: center;
        width: 90%;
        margin-bottom: ${({ theme }) => theme.spacing.margin.bottomLg};
    }
`;

export const FooterNavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gap.lg};

    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        width: 100%;
  }
`;

export const FooterHeader = styled.a`
    font-family: ${({ theme }) => theme.font.logo};
    font-size: ${({ theme }) => theme.font.sizes.xl};
    font-weight: 100;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.textWhite};
    transition: ${({ theme }) => theme.transition.color};

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.font.sizes.lg};
    }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.font.sizes.lg};
        letter-spacing: 6px;
    }

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }
`;

export const FooterNav = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.font.sizes.base};
    list-style: none;
    cursor: pointer;
    padding: ${({ theme }) => theme.spacing.padding.base};
    gap: ${({ theme }) => theme.spacing.gap.base};
    margin: ${({ theme }) => theme.spacing.margin.base};

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.font.sizes.sm};
    }

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.lg};
    }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
        gap: ${({ theme }) => theme.spacing.gap.lg};
        flex-direction: row;
    }
`;

export const FooterNavItem = styled.li`
    list-style: none;
`;

export const FooterNavLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.textWhite};
    font-weight: 300;
    transition: ${({ theme }) => theme.transition.color};
    white-space: nowrap;

    &:hover {
        color: ${({ theme }) => theme.colors.accentHover};
    }
`;

export const FooterSocials = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    gap: 1.5rem;
    margin: ${({ theme }) => theme.spacing.margin.xl};
    padding: ${({ theme }) => theme.spacing.padding.none};

    @media (max-width: 360px) {
        margin: ${({ theme }) => theme.spacing.margin.lg};
    }
`;

export const FooterParagraph = styled.p`
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textWhite};

    @media (min-width: 768px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
    }

    @media (min-width: 1024px) {
        font-size: ${({ theme }) => theme.font.sizes.sm};
    }
`;

export const FooterSpan = styled.span`
    font-family: ${({ theme }) => theme.font.logo};
    text-transform: uppercase;
    letter-spacing: 3px;
`;
