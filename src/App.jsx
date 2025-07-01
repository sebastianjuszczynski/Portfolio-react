import { useState } from 'react';
import Intro from './components/Intro/Intro';
import Header from './components/Header/Header';

const App = ({ toggleTheme, isDark}) => {
  const [showIntro, setShowIntro] = useState(true);

  const handleIntroComplete = () => {
    setShowIntro(false);
  };

  return (
    <>
      {showIntro && <Intro onComplete={handleIntroComplete} />}
      {!showIntro && (
        <>
          <Header toggleTheme={toggleTheme} isDark={isDark} />
        </>
      )}
    </>
  );
};

export default App
