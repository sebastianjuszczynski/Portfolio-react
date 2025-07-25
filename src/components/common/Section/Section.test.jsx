import Section from './Section';
import { lightTheme } from '../../../styles/theme';
import rendersWithTheme from'../../../__tests__/testsUtils/rendersWithTheme';

describe('Section component', () => {
  test('renders children inside layout', () => {
    const { getByText } = rendersWithTheme(<Section><p>Default</p></Section>);
    expect(getByText(/default/i)).toBeInTheDocument();
  });

  test('applies transparent background if isDark is true', () => {
    const { container } = rendersWithTheme(<Section $isDark />);
    expect(container.firstChild).toHaveStyleRule('background', lightTheme.colors.transparent);
  });

  test('applies transparent background if $bg="transparent"', () => {
    const { container } = rendersWithTheme(<Section $bg="transparent" />);
    expect(container.firstChild).toHaveStyleRule('background', lightTheme.colors.transparent);
  });

  test('applies default background if no isDark and bg=secondary', () => {
    const { container } = rendersWithTheme(<Section />);
    expect(container.firstChild).toHaveStyleRule('background', lightTheme.backgrounds.secondary);
  });
});
