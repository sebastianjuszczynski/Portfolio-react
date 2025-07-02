import { useState, useEffect } from 'react';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';

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
    <>
      {showIntro ? (
        <Intro onComplete={handleIntroComplete} />
      ) : (
        <>
          <Header toggleTheme={toggleTheme} isDark={isDark} />
        </>
      )}
    </>
  );
};

export default App;

