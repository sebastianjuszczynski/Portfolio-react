import { screen } from '@testing-library/react';
import 'jest-styled-components';
import AboutImage from './AboutImage';
import { lightTheme } from '../../styles/theme';
import rendersWithTheme from'../../__tests__/testsUtils/rendersWithTheme';

describe('AboutImage component', () => {
    let utils;
    beforeEach(() => {
        utils = rendersWithTheme(<AboutImage />)
    });
    test('image has correct alt and lazy loading attribute', () => {
        const image = screen.getByAltText(/developer thinking about code/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('loading', 'lazy');
    });

    test('ImageContainer has correct border from theme', () => {
        const { getByTestId } = utils;
        const wrapper = getByTestId('image-wrapper');
        expect(wrapper).toHaveStyleRule('border', `2px solid ${lightTheme.colors.accentHover}`);
    });

    test('ImageContainer has correct padding from shared theme', () => {
        const { getByTestId } = utils;
        const wrapper = getByTestId('image-wrapper');
        expect(wrapper).toHaveStyleRule('padding', lightTheme.spacing.padding.image);
    });
});