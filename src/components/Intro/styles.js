import styled from 'styled-components';

export const IntroWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.backgrounds.main};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  height: 100vh;
`;

export const Logo = styled.h1`
  font-family: ${({ theme }) => theme.font.logo};
  font-size: ${({ theme }) => theme.font.sizes.xxl};
  font-weight: 100;
  color: ${({ theme }) => theme.colors.accent};
  opacity: 0;
  transform: translateY(30px);
`;