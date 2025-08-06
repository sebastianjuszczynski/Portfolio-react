import styled from "styled-components";
import { motion } from 'framer-motion';

export const Section = styled.section`
    background: ${({ theme, $bg = "secondary", $isDark }) =>
        $isDark
            ? theme.colors.transparent
            : $bg === "transparent"
                ? theme.colors.transparent
                : theme.backgrounds.secondary};
    margin: ${({ theme }) => theme.spacing.margin.lg};
    padding: ${({ theme }) => theme.spacing.padding.xl};
    text-align: center;
    

    @media (min-width: 1024px) {
        text-align: ${({ $align }) => $align || "left"};
        padding: ${({ theme }) => theme.spacing.padding.xxl};
    }
`;

export const SectionContainer = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme, $gap }) =>
        $gap === "lg" ? theme.spacing.gap.lg : theme.spacing.gap.xl
    };    

    @media (min-width: 1024px) {
        flex-direction: ${({ $direction }) => $direction || "row"};
    }
`;

export const TextContainer = styled(motion.div)`
    @media (min-width: 1024px) {
        order: ${({ $order }) => $order || "0"};
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: ${({ $alignItems }) => $alignItems || "center"};
    }
`;


