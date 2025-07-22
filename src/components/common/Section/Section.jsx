import { Section as StyledSection, SectionContainer } from './styles';
import ScrollRevealSection from '../ScrollRevealSection/ScrollRevealSection';

const Section = ({ children, $direction, ...rest }) => {
    return (
        <StyledSection {...rest}>
            <ScrollRevealSection>
                <SectionContainer $direction={$direction}>
                    {children}
                </SectionContainer>
            </ScrollRevealSection>
        </StyledSection>
    );
};

export default Section;