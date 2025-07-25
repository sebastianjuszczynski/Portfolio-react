import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../../styles/theme';

const renderWithTheme = (ui) => {
    return render(
        <ThemeProvider theme={lightTheme}>
            {ui}
        </ThemeProvider>
    );
};

export default renderWithTheme;