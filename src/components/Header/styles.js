import styled, { css } from "styled-components";
import { motion } from "motion/react";

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: ${({ theme, $isScrolled }) => $isScrolled ?
    theme.backgrounds.headerScrolled : theme.colors.transparent};
  transition: ${({ theme }) => theme.transition.all};
  z-index: 2;
`;

export const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: center;
gap: ${({ theme }) => theme.spacing.gap.base};
padding: ${({ theme }) => theme.spacing.padding.headerNav};
`;

export const Logo = styled(motion.a)`
  margin-right: auto;
  font-family: ${({ theme }) => theme.font.main};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  color: ${({ theme }) => theme.colors.accent};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
`;

export const Menu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  gap: ${({ theme }) => theme.spacing.gap.lg};
  top: 80px;
  bottom: 0;
  left: 0;
  right: 0;
  list-style: none;
  padding: ${({ theme }) => theme.spacing.padding.none};
  margin: 0;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
  background: ${({ theme }) => theme.backgrounds.menuMobile};
  transition: ${({ theme }) => theme.transition.all};
  z-index: 9999;

  @media (min-width: 1024px) {
    position: static;
    flex-direction: row;
    transform: none;
     background: ${({ theme }) => theme.colors.transparent};
    opacity: 1;
    gap: ${({ theme }) => theme.spacing.gap.base};
  }
`;

export const MenuItem = styled(motion.li)`
  margin: 0;
  padding: ${({ theme }) => theme.spacing.padding.none};
`;

export const MenuLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textWhite};
  font-size: ${({ theme }) => theme.font.sizes.lg};
  padding: ${({ theme }) => theme.spacing.padding.lg};
  transition: ${({ theme }) => theme.transition.color};
  white-space: nowrap;

   @media (min-width: 1024px) {
    position: relative;
    font-size: ${({ theme }) => theme.font.sizes.sm};
    color: ${({ theme }) => theme.colors.textMain};
  }
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.gap.sm};
 padding: ${({ theme }) => theme.spacing.padding.base};
`;

export const ThemeToggleButton = styled(motion.button)`
  position: relative;
  height: 2.5rem;
  line-height: 2.5rem;
  font-size: 30px;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition.color};
  overflow: hidden;
  outline: none;
`;

export const LangDropdown = styled(motion.div)`
  position: relative;
  z-index: 1;
`;

export const LangButton = styled.button`
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.base};
  padding: ${({theme}) => theme.spacing.padding.sm};
`;

export const FlagIcon = styled.img`
  width: 26px;
  height: auto;
`;

export const LangCode = styled.span`
  
`;

export const LangOptions = styled.ul`
  position: absolute;
  top: 100%;
  right: 0;
  left: 0;
  background: ${({ theme }) => theme.backgrounds.main};
  border: 2px solid ${({ theme }) => theme.colors.textMain};
  border-radius: ${({ theme }) => theme.borders.radius.sm};
  list-style: none;
  display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.margin.topSm};
`;

export const LangOption = styled.li`
  padding: ${({theme}) => theme.spacing.padding.xs};
  font-size: ${({ theme }) => theme.font.sizes.base};
  cursor: pointer;
  transition: ${({theme}) => theme.transition.background};
  @media (min-width: 1024px) {
    &:hover {
      background: ${({ theme }) => theme.colors.accentHover};
    }
  }
`;

export const MobileHamburger = styled(motion.div)`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;




