import styled from "styled-components";

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

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.gap.xl};

    @media (min-width: 1024px) {
        flex-direction: ${({ $direction }) => $direction || "row"};
    }
`;
