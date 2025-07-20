import styled from "styled-components";

export const ArrowUpButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 50px;
    right: 20px;
    background-color: ${({ theme }) => theme.colors.transparent};
    color: ${({ theme }) => theme.colors.accentHover};
    width: 2.5rem;
    height: 2.5rem;
    border: 1px solid ${({ theme }) => theme.colors.accentHover};
    border-radius: ${({ theme }) => theme.borders.radius.full};
    font-size: ${({ theme }) => theme.font.sizes.base};
    text-decoration: none;
    padding: 0;
    transition: ${({ theme }) => theme.transition.all};
    opacity: ${({ $isVisible, $isBlurred }) => $isVisible
        ? ($isBlurred ? "0.3" : "1")
        : "0"};
    visibility: ${({ $isVisible }) => $isVisible ? "visible" : "hidden"};;
    pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};


    &:focus {
        outline: ${({ theme }) => theme.borders.focus(theme)};
        outline-offset: 4px;
    }
`;