import styled from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    margin: ${({ theme }) => theme.spacing.margin.center};
    gap: ${({ theme }) => theme.spacing.gap.base};
    color: ${({ theme }) => theme.colors.textMain};
    height: calc(100vh - 50px);

    @media (min-width: 1024px) {
        align-items: center;
        justify-content: space-around;
    };
`;

export const SectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.padding.xl};
    gap: ${({ theme }) => theme.spacing.gap.base};

    @media (min-width: 1024px) {
        flex-direction: row;
        justify-content: space-around;
        width: 85%;
        margin-top: 60px;
    }
`;
export const AnimationWrapper = styled(motion.div)`
    display: block
`;

export const ImageContainer = styled(motion.div)`
    background-color: ${({ theme }) => theme.colors.transparent};
    border-radius: ${({ theme }) => theme.borders.radius.lg};
    will-change: transform;
    transform: ${({ $clicked }) => $clicked ? 'skewX(0deg) skewY(0deg)' : 'skewX(-4deg) skewY(4deg)'};
    box-shadow: ${({ $clicked, theme }) => $clicked ? `0 0 0 3px ${theme.colors.accentHover}` : 'none'};
    transition: ${({ theme }) => theme.transition.all};
    width: 100%;
    height:100%;

    @media (min-width: 768px) {
         width: 90%;
         margin: 0 auto;
    }
    @media (min-width: 1024px) {
        width: 100%;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: ${({ theme }) => theme.borders.radius.lg};
    object-fit: cover;

    @media (max-width: 360px) {
        max-width: 100%;
    }

    @media (min-width: 1024px) {
        max-width: 500px;
        height: auto;
        display: block;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing.gap.base};

    @media (min-width: 1024px) {
        order: -1;
        text-align: left;
        align-items: flex-start;
    }
`;

export const TextTitle = styled(motion.h2)`
    margin-top: ${({ theme }) => theme.spacing.margin.topLg};
    margin-bottom: ${({ theme }) => theme.spacing.margin.bottomSm};
    font-size: ${({ theme }) => theme.font.sizes.xxl};
    font-weight: 600;
    line-height: 1.2;

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.font.sizes.xl};
    }
`;

export const TitleSpan = styled(motion.span)`
    display: block;
    background: ${({ theme }) => theme.gradients.accent};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`;

export const TextDescription = styled(motion.p)`
    font-size: ${({ theme }) => theme.font.sizes.lg};
    max-width: 32ch;
    letter-spacing: 2px;

    @media (max-width: 360px) {
        font-size: ${({ theme }) => theme.font.sizes.base};
    }
`;

export const SocialsContainer = styled(motion.ul)`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: ${({ theme }) => theme.spacing.margin.center};
    padding: ${({ theme }) => theme.spacing.padding.none};
    gap: ${({ theme }) => theme.spacing.gap.base};

    @media (min-width: 1024px) {
        justify-content: flex-start;
        margin: 0;
    }
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

  @media (max-width: 360px) {
    width: 26px;
    height: 26px;
  }

`;

export const ArrowContainer = styled(motion.div)`
    position: relative;
    display: inline-block;
`;

export const Arrow = styled.a`
    color: ${({ theme }) => theme.colors.accent};
    font-size: ${({ theme }) => theme.font.sizes.xxl}
`;