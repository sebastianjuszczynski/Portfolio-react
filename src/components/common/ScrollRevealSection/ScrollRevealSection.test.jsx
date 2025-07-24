import { render, screen } from '@testing-library/react';
import ScrollRevealSection from './ScrollRevealSection';

vi.mock('../../../hooks/useScrollReveal', () => ({
    useScrollReveal: () => ({
        ref: { current: null },
        isInView: true
    })
}));

describe('ScrollRevealSection', () => {
    test('renders children correctly', () => {
        render(
            <ScrollRevealSection>
                <p>Test</p>
            </ScrollRevealSection>
        );
        
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    test('renders correct DOM structure when in view', () => {
        const { container } = render(
            <ScrollRevealSection>
                <div>Child</div>
            </ScrollRevealSection>
        );

        expect(container.firstChild).toMatchSnapshot();
    });
});

