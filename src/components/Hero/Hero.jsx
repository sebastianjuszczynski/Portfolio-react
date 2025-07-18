import { useState } from 'react';
import useInMobile from '../../hooks/useInMobile';
import { useLanguage } from '../../i18n/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import heroImage from '../../assets/images/building-a-website.svg';
import {
    Section, SectionContainer, ImageContainer, Image, TextContainer, TextTitle, TitleSpan, TextDescription,
    SocialsContainer, ArrowContainer, Arrow
} from './styles'
import SocialsIcons from '../common/SocialsIcons/SocialsIcons';

const Hero = () => {
    const [clicked, setClicked] = useState(false);
    const isMobile = useInMobile();

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
                        <SocialsIcons />
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