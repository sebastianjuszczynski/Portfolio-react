import { useEffect, useState } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import {
    HeaderWrapper, Nav, Logo, Menu, MenuItem, MenuLink, Controls, ThemeToggleButton,
    LangDropdown, LangButton, FlagIcon, LangCode, LangOptions, LangOption, MobileHamburger
} from './styles';
import gbIcon from '../../assets/icons/gb.svg';
import plIcon from '../../assets/icons/pl.svg';

const Header = ({ toggleTheme, isDark }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleIsOpen = () => {
        setIsOpen((prev) => {
            const newValue = !prev;
            console.log(newValue)
            return newValue;
        });
    };

    const handleLangOpen = () => {
        setIsLangOpen(prev => !prev);
    };


    


    return (
        <HeaderWrapper $isScrolled={isScrolled}>
            <Nav role="navigation" aria-label="Main navigation">
                <Logo href="#hero">Seb.dev</Logo>
                <Menu id="main-menu" $isOpen={isOpen}>
                    <MenuItem><MenuLink href="#hero">Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#about">About</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#skills">Skills</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#projects">Projects</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#contact">Contact</MenuLink></MenuItem>
                </Menu>
                <Controls>
                    <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle dark mode">
                        {isDark ? '🌙' : '☀️'}
                    </ThemeToggleButton>
                    <LangDropdown aria-label="Change language" onClick={handleLangOpen} >
                        <LangButton type="button" aria-haspopup="listbox"
                            aria-expanded="false">
                            <FlagIcon src={gbIcon} alt="English" />
                            <LangCode> EN</LangCode>
                        </LangButton>
                        <LangOptions role="listbox" $isOpen={isLangOpen}>
                            <LangOption>
                                <FlagIcon src={gbIcon} alt="English" /> EN
                            </LangOption>
                            <LangOption>
                                <FlagIcon src={plIcon} alt="Polski" /> PL
                            </LangOption>
                        </LangOptions>
                    </LangDropdown>
                    <MobileHamburger>
                        <Hamburger rounded toggled={isOpen} toggle={handleIsOpen} aria-expanded={handleIsOpen} />
                    </MobileHamburger>
                </Controls>
            </Nav>
        </HeaderWrapper>
    );

};

export default Header;