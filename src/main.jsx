import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles.js'
import useTheme from './hooks/useTheme.js'

const Root = () => {
  const { isDark, setIsDark, toggleTheme, theme } = useTheme()

  return (
    <StrictMode>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App toggleTheme={toggleTheme} isDark={isDark} />
      </ThemeProvider>
    </StrictMode>
  );
};


createRoot(document.getElementById('root')).render(<Root />);
