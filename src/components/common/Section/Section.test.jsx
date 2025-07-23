import { render } from '@testing-library/react';
import 'jest-styled-components';
import Section from './Section';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../../styles/theme';

describe('Section component', () => {
  test('renders children inside layout', () => {
    const { getByText } = render(
      <ThemeProvider theme={lightTheme}>
        <Section><p>Test content</p></Section>
      </ThemeProvider>
    );
    expect(getByText(/test content/i)).toBeInTheDocument();
  });

  test('applies transparent background if isDark is true', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Section $isDark />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyleRule('background', lightTheme.colors.transparent);
  });

  test('applies transparent background if $bg="transparent"', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Section $bg="transparent" />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyleRule('background', lightTheme.colors.transparent);
  });

  test('applies default background if no isDark and bg=secondary', () => {
    const { container } = render(
      <ThemeProvider theme={lightTheme}>
        <Section />
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyleRule('background', lightTheme.backgrounds.secondary);
  });
});
