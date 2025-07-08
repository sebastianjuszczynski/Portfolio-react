import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacing.margin.center};
    padding: ${({ theme }) =>  theme.spacing.padding.lg };
    gap: ${({ theme }) => theme.spacing.gap.base};
    color: ${({ theme }) => theme.colors.textMain};
    height: 100vh;
`;

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) =>  theme.spacing.padding.lg };
    gap: ${({ theme }) => theme.spacing.gap.base};
    margin-top: 60px;
`;

export const ImageContainer = styled.div`
    padding: ${({ theme }) =>  theme.spacing.padding.image };
    background-color: ${({ theme }) => theme.colors.heroImage };
    border-radius: ${({ theme }) => theme.borders.radius.lg};
    will-change: transform;
    transform: ${({ $clicked }) => $clicked ? 'skewX(0deg) skewY(0deg)' : 'skewX(-4deg) skewY(4deg)'};
    box-shadow: ${({ $clicked, theme }) => $clicked ? `0 0 0 2px ${theme.colors.accentHover}` : 'none' };
    transition: ${({ theme }) => theme.transition.all};
`;

export const Image = styled.img`
    max-width: 85%;
    height: auto;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gap.base};
`;


export const TextTitle = styled.h2`
    margin-top: ${({ theme }) => theme.spacing.margin.topLg};
    margin-bottom: ${({ theme }) => theme.spacing.margin.bottomSm};
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-weight: 600;
    line-height: 1.2;
`;

export const TitleSpan = styled.span`
    display: block;
    background: ${({ theme }) => theme.gradients.accent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;

export const TextDescription = styled.p`
    font-size: ${({ theme }) => theme.font.sizes.lg};
    max-width: 32ch;
    letter-spacing: 2px;
`;

export const SocialsContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ theme }) => theme.spacing.margin.center};
    padding: ${({ theme }) =>  theme.spacing.padding.none };
    gap: ${({ theme }) => theme.spacing.gap.base};
`;

export const SocialItem = styled.li`
    list-style: none;
`;

export const SocialLink = styled.a`
    text-decoration: none;
`;

export const SocialIcon = styled.span`
    position: relative;
    z-index: 1;
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.colors.accent};
    border: 1px solid ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borders.radius.rounded};
    transition: ${({ theme }) => theme.transition.all};

    &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
    border-radius: ${({ theme }) => theme.borders.radius.rounded};
    transform: scale(0);
    opacity: 0.4;
    transition: ${({ theme }) => theme.transition.all};
  }

  &:hover::before {
    transform: scale(1);
    opacity: 1;
  }
  svg {
    z-index: 1;
    transition: ${({ theme }) => theme.transition.color};
  }

  &:hover svg {
    color: ${({ theme }) => theme.backgrounds.headerScrolled};
  }

`;

export const ArrowContainer = styled.div`
    position: relative;
    display: inline-block;
    /* margin-bottom: ${({ theme }) => theme.spacing.margin.bottomXl}; */
`;

export const Arrow = styled.a`
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.font.sizes.xxl}
`;