import { useEffect, useState, useRef } from 'react';
import { Squash as Hamburger } from 'hamburger-react';
import {
    HeaderWrapper, Nav, Logo, Menu, MenuItem, MenuLink, Controls, ThemeToggleButton,
    LangDropdown, LangButton, FlagIcon, LangCode, LangOptions, LangOption, MobileHamburger
} from './styles';
import gbIcon from '../../assets/icons/gb.svg';
import plIcon from '../../assets/icons/pl.svg';
import { motion, AnimatePresence } from "motion/react";

const Header = ({ toggleTheme, isDark }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const menuRef = useRef(null);
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleIsOpen = () => {
        setIsOpen(prev => !prev);
    };

    const handleLangOpen = () => {
        setIsLangOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
            if (isLangOpen && !langRef.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [isOpen, isLangOpen]);


    return (
        <HeaderWrapper $isScrolled={isScrolled}>
            <Nav role="navigation" aria-label="Main navigation">
                <Logo href="#hero">Seb.dev</Logo>
                <Menu id="main-menu" $isOpen={isOpen} >
                    <MenuItem><MenuLink href="#hero">Home</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#about">About</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#skills">Skills</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#projects">Projects</MenuLink></MenuItem>
                    <MenuItem><MenuLink href="#contact">Contact</MenuLink></MenuItem>
                </Menu>
                <Controls>
                    <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle dark mode">
                        <AnimatePresence mode="wait">
                        {isDark ? (
                            <motion.span
                                key="moon"
                                initial={{ opacity: 0, scale: 0.6, rotate: -30 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.6, rotate: 30 }}
                                transition={{ duration: 0.4 }}
                            >
                                🌙
                            </motion.span>
                        ) : (
                            <motion.span
                                key="sun"
                                initial={{ opacity: 0, scale: 0.6, rotate: 30 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.6, rotate: -30 }}
                                transition={{ duration: 0.4 }}
                            >
                                ☀️
                            </motion.span>
                        )}
                    </AnimatePresence>
                </ThemeToggleButton>
                <LangDropdown aria-label="Change language" onClick={handleLangOpen} ref={langRef}>
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
                <MobileHamburger ref={menuRef}>
                    <Hamburger rounded toggled={isOpen} toggle={handleIsOpen} aria-expanded={handleIsOpen} />
                </MobileHamburger>
            </Controls>
        </Nav>
        </HeaderWrapper >
    );

};

export default Header;