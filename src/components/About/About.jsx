import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import { Section, SectionContainer } from '../common/Section/styles';
import { TextContainer } from './styles';
import { containerVariants, itemVariants } from '../common/Animations/animationsVariants';

const About = ({ isDark }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-200px' });

  return (
    <Section $isDark={isDark} $align="left" id="about">
      <SectionContainer
        as={motion.div}
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <TextContainer as={motion.div} variants={itemVariants}>
          <AboutText />
        </TextContainer>
        <motion.div variants={itemVariants}>
          <AboutImage />
        </motion.div>
      </SectionContainer>
    </Section>
  );
};

export default About;
