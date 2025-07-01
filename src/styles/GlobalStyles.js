import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    font-size: ${({ theme }) => theme.font.sizes.base};
}

body {
    font-family: ${({ theme }) => theme.font.main};
    background: ${({ theme }) => theme.backgrounds.main};
    color: ${({ theme }) => theme.colors.textMain};
    transition: ${({ theme }) => theme.transition.all};
    height: 100vh;
}
a {
    text-decoration: none;
}

.main {
    padding-top: 80px;
    margin: ${({ theme }) => theme.spacing.margin.center};
}

.skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000;
    color: #fff;
    padding: 8px 16px;
    z-index: 2;
    transition: var(--transition-top);
    font-size: 14px;
    border-radius: 4px;
    text-decoration: none;
}

.skip-link:focus {
    top: 50px;
}

.no-scroll {
    overflow: hidden;
    height: 100svh;
}
`