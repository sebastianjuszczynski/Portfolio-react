import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollReveal = (options = { once: true, margin: '-200px' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, options);

  return { ref, isInView };
};