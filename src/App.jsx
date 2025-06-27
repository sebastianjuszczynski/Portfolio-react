import styled from 'styled-components'

const Title = styled.h1`
color: ${({ theme }) => theme.colors.textMain};
text-align: center;
`;
const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.accent};
  transition: ${({ theme }) => theme.transition.color};
`;

const App = ({ toggleTheme, isDark}) => {

  return (
    <>
    <ToggleButton onClick={toggleTheme} aria-label="Toggle theme">
        {isDark ? '🌙' : '☀️'}
      </ToggleButton>
      <Title>Portfolio</Title>
      <p isDark={isDark}>Ciemny motyw: {isDark ? 'tak' : 'nie'}</p>
    </>
  )
}

export default App
