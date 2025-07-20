import { useEffect, useState } from "react";
import { ArrowUpButton } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isBlurred, setIsBlurred] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        };

        const handleFocusIn = (e) => {
            if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
                setIsBlurred(true);
            }
        };

        const handleFocusOut = (e) => {
            if (["INPUT", "TEXTAREA"].includes(e.target.tagName)) {
                setIsBlurred(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("focusin", handleFocusIn);
        document.addEventListener("focusout", handleFocusOut);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("focusin", handleFocusIn);
            document.removeEventListener("focusout", handleFocusOut);
        };

    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <ArrowUpButton $isVisible={isVisible} $isBlurred={isBlurred}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            role="button"
            tabIndex={0}>
            <FontAwesomeIcon icon={faArrowUp} bounce />
        </ArrowUpButton>
    );
};

export default ScrollToTopButton;