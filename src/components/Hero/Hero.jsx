import { useState } from 'react';
import useInMobile from '../../hooks/useInMobile';
import { useLanguage } from '../../i18n/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/images/building-a-website.png';
import {
    Section, SectionContainer, ImageContainer, Image, TextContainer, TextTitle, TitleSpan, TextDescription,
    SocialsContainer, ArrowContainer, Arrow, AnimationWrapper
} from './styles'
import SocialsIcons from '../common/SocialsIcons/SocialsIcons';
import { heroContainerVariants, heroItemVariants, arrowVariants } from '../common/Animations/animationsVariants'

const Hero = () => {
    const [clicked, setClicked] = useState(false);
    const isMobile = useInMobile();

    const { t } = useLanguage();

    return (
        <Section id="home">
            <SectionContainer
                variants={heroContainerVariants}
                initial="hidden"
                animate="visible">
                <AnimationWrapper
                    variants={heroItemVariants}>
                    <ImageContainer
                        data-testid="hero-image-container"
                        $clicked={clicked}
                        onClick={isMobile ? () => setClicked(!clicked) : undefined}
                        onMouseEnter={!isMobile ? () => setClicked(true) : undefined}
                        onMouseLeave={!isMobile ? () => setClicked(false) : undefined}
                    >
                        <Image src={heroImage} alt="Developer writing code" loading="lazy" />
                    </ImageContainer>
                </AnimationWrapper>
                <TextContainer>
                    <TextTitle variants={heroItemVariants}>
                        {t("titleSpan")}
                        <TitleSpan variants={heroItemVariants} data-testid="hero-span">Sebastian</TitleSpan>
                    </TextTitle>
                    <TextDescription variants={heroItemVariants}>{t("titleDescription")}</TextDescription>
                    <SocialsContainer variants={heroItemVariants} data-testid="hero-socials">
                        <SocialsIcons />
                    </SocialsContainer>
                </TextContainer>
            </SectionContainer>
            <ArrowContainer
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
            >
                <Arrow href="#about" aria-label="Scroll to about section">
                    <FontAwesomeIcon icon={faAngleDown} bounce />
                </Arrow>
            </ArrowContainer>
        </Section>
    )


}

export default Hero;