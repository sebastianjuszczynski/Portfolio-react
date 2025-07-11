import aboutImage from '../../assets/images/code-thinking.svg';
import { ImageContainer, Image } from './styles';

const AboutImage = () => (
    <>
        <ImageContainer>
            <Image src={aboutImage} alt="Developer thinking about code" loading="lazy" />
        </ImageContainer>
    </>
);

export default AboutImage;