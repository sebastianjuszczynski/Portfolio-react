import aboutImage from '../../assets/images/code-thinking.svg';
import { ImageContainer, Image } from './styles';

const AboutImage = () => (
    <>
        <ImageContainer data-testid="image-wrapper">
            <Image src={aboutImage} alt="Developer thinking about code" loading="lazy" />
        </ImageContainer>
    </>
);

export default AboutImage;