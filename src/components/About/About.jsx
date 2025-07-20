import { itemVariants } from '../common/Animations/animationsVariants';
import ScrollRevealSection from "../common/ScrollRevealSection/ScrollRevealSection";
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import { Section, SectionContainer } from '../common/Section/styles';
import { TextContainer, ImageWrapper } from './styles';

const About = ({ isDark }) => {

  return (
    <Section $isDark={isDark} $align="left" id="about">
      <ScrollRevealSection>
      <SectionContainer>
        <TextContainer variants={itemVariants}>
          <AboutText />
        </TextContainer>
        <ImageWrapper variants={itemVariants}>
          <AboutImage />
        </ImageWrapper>
      </SectionContainer>
      </ScrollRevealSection>
    </Section>
  );
};

export default About;
