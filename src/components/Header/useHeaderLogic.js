import { useEffect, useState, useRef } from 'react';

export const useHeaderLogic = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const menuRef = useRef(null);
    const langRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 30);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isOpen && !menuRef.current.contains(e.target)) {
                setIsOpen(false);
            }
            if (isLangOpen && !langRef.current.contains(e.target)) {
                setIsLangOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [isOpen, isLangOpen]);

    const handleIsOpen = () => setIsOpen((prev) => !prev);
    const handleLangOpen = () => setIsLangOpen((prev) => !prev);

    return {
        isScrolled,
        isOpen,
        isLangOpen,
        handleIsOpen,
        handleLangOpen,
        menuRef,
        langRef
    };

};