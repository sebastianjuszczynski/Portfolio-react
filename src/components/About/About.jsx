import { useScrollReveal } from '../../hooks/useScrollReveal';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import { Section, SectionContainer } from '../common/Section/styles';
import { TextContainer, ImageWrapper } from './styles';

const About = ({ isDark }) => {
  const { ref, isInView } = useScrollReveal();

  return (
    <Section $isDark={isDark} $align="left" id="about">
      <SectionContainer
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <TextContainer variants={itemVariants}>
          <AboutText />
        </TextContainer>
        <ImageWrapper variants={itemVariants}>
          <AboutImage />
        </ImageWrapper>
      </SectionContainer>
    </Section>
  );
};

export default About;
