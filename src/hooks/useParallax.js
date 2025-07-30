'use client';

import { useEffect, useRef, useState } from 'react';

const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        if (elementTop < windowHeight && elementTop + elementHeight > 0) {
          const scrolled = windowHeight - elementTop;
          const rate = scrolled / (windowHeight + elementHeight);
          setOffset(rate * speed * 100);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};

export default useParallax;