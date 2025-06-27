import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyles.js'
import { darkTheme, lightTheme } from './styles/theme.js'

const Root = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newValue = !prev;
      localStorage.setItem('theme', newValue ? 'dark' : 'light');
      return newValue;
    });
  };

  const theme = isDark ? darkTheme : lightTheme;

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App toggleTheme={toggleTheme} isDark={isDark}/>
    </ThemeProvider>
  </StrictMode>
  );
};


createRoot(document.getElementById('root')).render(<Root />);
