import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/images/building-a-website.svg';
import {
    Section, SectionContainer, ImageContainer, Image, TextContainer, TextTitle, TitleSpan, TextDescription,
    SocialsContainer, SocialItem, SocialLink, SocialIcon, ArrowContainer, Arrow
} from './styles'

const Hero = () => {
    const [clicked, setClicked] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { t } = useLanguage();

    return (
        <Section>
            <SectionContainer>
                <ImageContainer $clicked={clicked}
                onClick={isMobile ? () => setClicked(!clicked) : undefined}
                onMouseEnter={!isMobile ? () => setClicked(!clicked) : undefined}
                onMouseLeave={!isMobile ? () => setClicked(!clicked) : undefined}>
                    <Image src={heroImage}
                        alt="Developer writing code" loading="lazy"/>
                </ImageContainer>
                <TextContainer>
                    <TextTitle>
                        {t("titleSpan")}
                        <TitleSpan>Sebastian</TitleSpan>
                    </TextTitle>
                    <TextDescription>{t("titleDescription")}</TextDescription>
                    <SocialsContainer>
                        <SocialItem>
                            <SocialLink href="https://www.linkedin.com/in/sebastian-juszczynski-52982a243/" target="_blank"
                                aria-label="LinkedIn">
                                <SocialIcon><FontAwesomeIcon icon={faLinkedinIn} /></SocialIcon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href="https://github.com/sebastianjuszczynski" target="_blank" aria-label="Github">
                                <SocialIcon><FontAwesomeIcon icon={faGithub} /></SocialIcon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href="https://www.facebook.com/sebastian.juszczynski.3/" target="_blank" aria-label="Facebook">
                                <SocialIcon><FontAwesomeIcon icon={faFacebookF} /></SocialIcon>
                            </SocialLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialLink href="https://www.instagram.com/sjuszczynski/" target="_blank" aria-label="Instagram">
                                <SocialIcon><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
                            </SocialLink>
                        </SocialItem>
                    </SocialsContainer>
                </TextContainer>
            </SectionContainer>
            <ArrowContainer>
                <Arrow href="#about" aria-label="Scroll to skills section">
                    <FontAwesomeIcon icon={faAngleDown} bounce />
                </Arrow>
            </ArrowContainer>
        </Section>
    )


}

export default Hero;