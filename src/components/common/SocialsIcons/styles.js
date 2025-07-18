import styled from "styled-components";

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
    color: ${({ theme, $isFooter }) => $isFooter ? theme.colors.textWhite : theme.colors.accent};
    border: 1px solid ${({ theme, $isFooter }) => $isFooter ? theme.colors.textWhite : theme.colors.accent};
    border-radius: ${({ theme }) => theme.borders.radius.rounded};
    transition: ${({ theme }) => theme.transition.all};

    &::before {
    content: "";
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-color:${({ theme, $isFooter }) => $isFooter ? theme.colors.textWhite : theme.colors.accent};
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
    color: ${({ theme, $isFooter }) => $isFooter ? theme.backgrounds.menuMobile : theme.backgrounds.headerScrolled};
  }

  @media (max-width: 360px) {
    width: 26px;
    height: 26px;
  }

`;