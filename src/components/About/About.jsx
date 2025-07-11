
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import { Section, SectionContainer } from '../common/Section/styles';
import { TextContainer } from './styles';


const About = ({ isDark }) => (
    <Section $isDark={isDark} $align="left" id="about">
        <SectionContainer>
            <TextContainer>
                <AboutText />
            </TextContainer>
            <AboutImage />
        </SectionContainer>
    </Section>
);

export default About;