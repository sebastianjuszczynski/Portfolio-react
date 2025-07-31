import { useEffect, useRef } from 'react';
import { IntroWrapper, Logo } from './styles';
import { gsap } from 'gsap';

const Intro = ({ onComplete }) => {
  const logoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power2.out' },
      onComplete: onComplete,
    });

    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
    }).to(logoRef.current, {
      opacity: 0,
      y: -40,
      duration: 0.8,
      delay: 0.5,
    });
  }, [onComplete]);

  return (
    <IntroWrapper>
      <Logo ref={logoRef} data-testid="intro-logo">
        SEB.DEV
      </Logo>
    </IntroWrapper>
  );
};

export default Intro;
