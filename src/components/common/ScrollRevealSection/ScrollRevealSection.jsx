import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { containerVariants } from "../Animations/animationsVariants";
import { MotionTag } from "./styles";

const ScrollRevealSection = ({ children }) => {
    const { ref, isInView } = useScrollReveal();

    return (
        <MotionTag
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
        {children}
        </MotionTag>
    );
};

export default ScrollRevealSection;