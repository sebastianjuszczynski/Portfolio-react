import styled from 'styled-components'
import Header from './components/Header/Header';

const Title = styled.h1`
color: ${({ theme }) => theme.colors.textMain};
text-align: center;
`;


const App = ({ toggleTheme, isDark}) => {

  return (
    <>
    <Header toggleTheme={toggleTheme} isDark={isDark}/>
    </>
  )
}

export default App
