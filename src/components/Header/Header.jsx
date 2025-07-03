import { Squash as Hamburger } from 'hamburger-react';
import { useHeaderLogic } from './useHeaderLogic';
import { useLanguage } from '../../i18n/LanguageContext';
import {
    HeaderWrapper, Nav, Logo, Menu, MenuItem, MenuLink, Controls, ThemeToggleButton,
    LangDropdown, LangButton, FlagIcon, LangCode, LangOptions, LangOption, MobileHamburger
} from './styles';
import { containerVariants, itemVariants } from './headerVariants';
import gbIcon from '../../assets/icons/gb.svg';
import plIcon from '../../assets/icons/pl.svg';
import { motion, AnimatePresence } from "motion/react";

const Header = ({ toggleTheme, isDark }) => {
    const {
        isScrolled,
        isOpen,
        isLangOpen,
        handleIsOpen,
        handleLangOpen,
        menuRef,
        langRef,
    } = useHeaderLogic();

    const { lang, setLang, t } = useLanguage();

    return (
        <HeaderWrapper $isScrolled={isScrolled}>
            <Nav role="navigation" aria-label="Main navigation" as={motion.nav}
                variants={containerVariants}
                initial="hidden"
                animate="visible">
                <Logo href="#hero" variants={itemVariants}>Seb.dev</Logo>
                <Menu id="main-menu" $isOpen={isOpen} >
                    <MenuItem variants={itemVariants}><MenuLink href="#hero">{t("home")}</MenuLink></MenuItem>
                    <MenuItem variants={itemVariants}><MenuLink href="#about">{t("about")}</MenuLink></MenuItem>
                    <MenuItem variants={itemVariants}><MenuLink href="#skills">{t("skills")}</MenuLink></MenuItem>
                    <MenuItem variants={itemVariants}><MenuLink href="#projects">{t("projects")}</MenuLink></MenuItem>
                    <MenuItem variants={itemVariants}><MenuLink href="#contact">{t("contact")}</MenuLink></MenuItem>
                </Menu>
                <Controls>
                    <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle dark mode" variants={itemVariants}>
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
                    <LangDropdown aria-label="Change language" onClick={handleLangOpen} ref={langRef} variants={itemVariants}>
                        <LangButton type="button" aria-haspopup="listbox"
                            aria-expanded="false">
                            <FlagIcon src={lang === "en" ? gbIcon : plIcon} alt={lang === "en" ? "English" : "Polski"} />
                            <LangCode> {lang.toUpperCase()}</LangCode>
                        </LangButton>
                        <LangOptions role="listbox" $isOpen={isLangOpen}>
                            <LangOption onClick={() => setLang("en")}>
                                <FlagIcon src={gbIcon} alt="English" /> EN
                            </LangOption>
                            <LangOption onClick={() => setLang("pl")}>
                                <FlagIcon src={plIcon} alt="Polski" /> PL
                            </LangOption>
                        </LangOptions>
                    </LangDropdown>
                    <MobileHamburger ref={menuRef} variants={itemVariants}>
                        <Hamburger rounded toggled={isOpen} toggle={handleIsOpen} aria-expanded={handleIsOpen} />
                    </MobileHamburger>
                </Controls>
            </Nav>
        </HeaderWrapper >
    );

};

export default Header;