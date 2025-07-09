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
}
a {
    text-decoration: none;
}

.no-scroll {
    overflow: hidden;
    height: 100vh;
}
`