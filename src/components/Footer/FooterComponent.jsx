import SocialsIcons from '../common/SocialsIcons/SocialsIcons';
import {
    Footer, FooterContainer, FooterNavContainer, FooterHeader,
    FooterNav, FooterNavItem, FooterNavLink, FooterSocials, FooterParagraph, FooterSpan
} from './styles';

const FooterComponent = () => {
    return (
        <Footer>
            <FooterContainer>
                <FooterNavContainer>
                    <FooterHeader>Seb.dev</FooterHeader>
                    <FooterNav>
                        <FooterNavItem>
                            <FooterNavLink>Home</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>About</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>Skills</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>Projects</FooterNavLink>
                        </FooterNavItem>
                        <FooterNavItem>
                            <FooterNavLink>Contact</FooterNavLink>
                        </FooterNavItem>
                    </FooterNav>
                    <FooterSocials>
                        <SocialsIcons isFooter />
                    </FooterSocials>
                </FooterNavContainer>

            </FooterContainer>
            <FooterParagraph>&copy;All rights reserved by
                <FooterSpan> Seb.dev</FooterSpan>
            </FooterParagraph>
        </Footer>
    );
};

export default FooterComponent;