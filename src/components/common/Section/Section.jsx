import { Section as StyledSection, SectionContainer } from './styles';
import ScrollRevealSection from '../ScrollRevealSection/ScrollRevealSection';

const Section = ({ children, $direction, $gap, ...rest }) => {
    return (
        <StyledSection {...rest}>
            <ScrollRevealSection>
                <SectionContainer $direction={$direction} $gap={$gap}>
                    {children}
                </SectionContainer>
            </ScrollRevealSection>
        </StyledSection>
    );
};

export default Section;