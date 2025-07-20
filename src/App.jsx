import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import FooterComponent from './components/Footer/FooterComponent';
import ScrollToTopButton from "./components/ScrollToTopButton/ScrollToTopButton";


const App = ({ toggleTheme, isDark }) => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  useEffect(() => {
    if (showIntro) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showIntro]);

  return (
    <LanguageProvider>
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Header toggleTheme={toggleTheme} isDark={isDark}/>
          <Hero />
          <About isDark={isDark}/>
          <Skills />
          <Projects />
          <Contact />
          <FooterComponent />
           <ScrollToTopButton />
        </>
      )}
    </LanguageProvider>
  );
};

export default App;

