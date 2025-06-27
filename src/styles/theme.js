const sharedTheme = {
    colors: {
        error: '#e53935',
        valid: '#4caf50',
        textWhite: '#FFFFFF',
        transparent: 'transparent',
        heroImage: '#0B1013',
        inputs: '#e5dcf8',
    },
    font: {
        main: "'Inter', sans-serif",
        logo: "'Orbitron', sans-serif",
        sizes: {
            base: '1rem',
            sm: '0.875rem',
            lg: '1.5rem',
            xl: '2rem',
            xxl: '2.5rem',
        },
    },

    spacing: {
        gap: {
            xs: '0.25rem',
            sm: '0.5rem',
            base: '1rem',
            lg: '2rem',
            xl: '4rem',
        },
        margin: {
            center: '0 auto',
            base: '1rem auto',
            lg: '2rem auto',
            xl: '3rem auto',
            topSm: '0.25rem',
            topLg: '3rem',
            topXl: '5rem',
            bottomSm: '0.5rem',
            bottomLg: '2rem',
            bottomXl: '7rem',
        },
        padding: {
            none: '0',
            xs: '0.25rem 0.25rem',
            sm: '0.25rem 0.5rem',
            base: '1rem',
            lg: '1rem 1.25rem',
            xl: '2rem 2rem 0.5rem 2rem',
            xxl: '3rem',
            headerNavSm: '0 0.5rem',
            headerNav: '0 1rem',
            techIcons: '0.5rem 0.6rem',
            button: '0.5rem',
            image: '2rem 0.625rem',
        },
    },

    borders: {
        radius: {
            sm: '0.25rem',
            base: '0.5rem',
            lg: '1rem',
            full: '9999px',
            rounded: '50%',
        },

        focus: (theme) => `2px solid ${theme.colors.accentHover}`,
        error: (theme) => `2px solid ${theme.colors.error}`,
        valid: (theme) => `2px solid ${theme.colors.valid}`,
    },

    transition: {
        opacity: 'opacity 0.4s ease-in-out',
        color: 'color 0.4s ease-in-out',
        transform: 'transform 0.4s ease-in-out',
        background: 'background-color 0.4s ease-in-out',
        top: 'top 0.4s ease-in-out',
        all: 'all 0.4s ease-in-out',
    },
};

export const darkTheme = {
    ...sharedTheme,
    isDark: true,
    colors: {
        ...sharedTheme.colors,
        textMain: '#FAFAFA',
        textSecondary: '#7f7985',
        accent: '#FFFFFF',
        accentHover: '#A880F9',
    },
    backgrounds: {
        main: 'linear-gradient(to top right, #0F0715 0%, #25153F 20%, #0F0715 40%, #25153F 60%, #0F0715 80%, #25153F 100%)',
        menuMobile: '#2A1454',
        headerScrolled: 'rgba(0, 0, 0, 0.8)',
    },
    gradients: {
        accent: 'linear-gradient(to right, #5d27ca 0%, #7b4ed1 50%, #9672d9 100%)',
        accentHover: 'linear-gradient(to right, #9672d9 0%, #7b4ed1 50%, #5d27ca 100%)',
    },
    
};
export const lightTheme = {
    ...sharedTheme,
    isDark: false,
    colors: {
        ...sharedTheme.colors,
        textMain: '#2A1454',
        textSecondary: '#6B6670',
        accent: '#2A1454',
        accentHover: '#A880F9',
    },
    backgrounds: {
        main: 'linear-gradient(to top right, #FFFFFF, #EADFFE)',
        menuMobile: '#2A1454',
        headerScrolled: '#FFFFFF',
        secondary: '#F6F3FC',
    },
    gradients: {
        accent: 'linear-gradient(to right, #9672e4 0%, #2a0a69 100%)',
        accentHover: 'linear-gradient(to right, #2a0a69 0%, #9672e4 100%)',
    },
    
};