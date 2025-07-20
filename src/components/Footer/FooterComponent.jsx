import { useLanguage } from '../../i18n/LanguageContext';
import SocialsIcons from '../common/SocialsIcons/SocialsIcons';
import {
    Footer, FooterContainer, FooterNavContainer, FooterHeader,
    FooterNav, FooterNavItem, FooterNavLink, FooterSocials, FooterParagraph, FooterSpan
} from './styles';

const FooterComponent = () => {
    const { t } = useLanguage();
    return (
        <Footer>
            <FooterContainer>
                <FooterNavContainer>
                    <FooterHeader>Seb.dev</FooterHeader>
                    <FooterNav>
                        <FooterNavItem>
                            <FooterNavLink>{t("home")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>{t("about")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>{t("skills")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>{t("projects")}</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>{t("contact")}</FooterNavLink>
                        </FooterNavItem>
                    </FooterNav>
                    <FooterSocials>
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