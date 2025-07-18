import { SocialItem, SocialLink, SocialIcon } from './styles';
import { socials } from './SocialsIconsData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SocialsIcons = ({ isFooter = false }) => {
    return (
        <>
            {socials.map(({ href, label, icon }) => (
                <SocialItem key={label}>
                    <SocialLink href={href} target="_blank"
                        aria-label={label}>
                        <SocialIcon $isFooter={isFooter}><FontAwesomeIcon icon={icon} /></SocialIcon>
                    </SocialLink>
                </SocialItem>
            ))}
        </>
    );
};

export default SocialsIcons;