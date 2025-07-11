
import AboutText from './AboutText';
import AboutImage from './AboutImage';
import {
    Section, SectionContainer, TextContainer
} from './styles';


const About = () => (
    <Section id="about">
        <SectionContainer>
            <TextContainer>
                <AboutText />
            </TextContainer>
            <AboutImage />
        </SectionContainer>
    </Section>
);

export default About;