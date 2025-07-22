import { itemVariants } from '../common/Animations/animationsVariants';
import Section from '../common/Section/Section';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import { TextContainer } from '../common/Section/styles';
import { ImageWrapper } from './styles';

const About = ({ isDark }) => {

  return (
    <Section $isDark={isDark} $align="left" id="about">
      <TextContainer variants={itemVariants} $order="1" $alignItems="flex-start">
        <AboutText />
      </TextContainer>
      <ImageWrapper variants={itemVariants}>
        <AboutImage />
      </ImageWrapper>
    </Section>
  );
};

export default About;
