import { screen } from '@testing-library/react';
import SectionHeader from './SectionHeader';
import { lightTheme } from '../../../styles/theme';
import rendersWithTheme from'../../../__tests__/testsUtils/rendersWithTheme';

describe('SectionHeader', () => {
    let utils;
    beforeEach(() => {
        utils = rendersWithTheme(<SectionHeader sub="My" span="subtitle" title="Title" />)
    })
    test('renders all texts correctly from props', () => {
        expect(screen.getByText('My')).toBeInTheDocument();
        expect(screen.getByText('subtitle')).toBeInTheDocument();
        expect(screen.getByText('Title')).toBeInTheDocument();
    });

    test('renders span with correct color from theme', () => {
        const { getByText } = utils;
            const span = getByText(/subtitle/i)
            expect(span).toHaveStyle(`color: ${lightTheme.colors.accent}`);
    });
});