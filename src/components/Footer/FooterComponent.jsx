import { useLanguage } from '../../i18n/LanguageContext';
import SocialsIcons from '../common/SocialsIcons/SocialsIcons';
import {
    Footer, FooterContainer, FooterNavContainer, FooterHeader,
    FooterNav, FooterNavItem, FooterNavLink, FooterSocials, FooterParagraph, FooterSpan
} from './styles';

const FooterComponent = () => {
    const { t } = useLanguage();
    return (
        <Footer id='footer'>
            <FooterContainer>
                <FooterNavContainer>
                    <FooterHeader href="#home">Seb.dev</FooterHeader>
                    <FooterNav>
                        <FooterNavItem>
                            <FooterNavLink href="#home">{t("home")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink href="#about">{t("about")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink href="#skills">{t("skills")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink href="#projects">{t("projects")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink href="#contact">{t("contact")}</FooterNavLink>
                        </FooterNavItem>
                    </FooterNav>
                    <FooterSocials data-testid="footer-socials">
                        <SocialsIcons isFooter />
                    </FooterSocials>
                </FooterNavContainer>
            </FooterContainer>
            <FooterParagraph>&copy;{t("footerParagraph")}
                <FooterSpan> Seb.dev</FooterSpan>
            </FooterParagraph>
        </Footer>
    );
};

export default FooterComponent;