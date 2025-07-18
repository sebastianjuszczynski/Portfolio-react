import { SocialItem, SocialLink, SocialIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';

const SocialsIcons = ({ isFooter = false }) => {
    return (
        <>
            <SocialItem>
                <SocialLink href="https://www.linkedin.com/in/sebastian-juszczynski-52982a243/" target="_blank"
                    aria-label="LinkedIn">
                    <SocialIcon $isFooter={isFooter}><FontAwesomeIcon icon={faLinkedinIn} /></SocialIcon>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="https://github.com/sebastianjuszczynski" target="_blank" aria-label="Github">
                    <SocialIcon $isFooter={isFooter}><FontAwesomeIcon icon={faGithub} /></SocialIcon>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="https://www.facebook.com/sebastian.juszczynski.3/" target="_blank" aria-label="Facebook">
                    <SocialIcon $isFooter={isFooter}><FontAwesomeIcon icon={faFacebookF} /></SocialIcon>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink href="https://www.instagram.com/sjuszczynski/" target="_blank" aria-label="Instagram">
                    <SocialIcon $isFooter={isFooter}><FontAwesomeIcon icon={faInstagram} /></SocialIcon>
                </SocialLink>
            </SocialItem>
        </>
    );
};

export default SocialsIcons;