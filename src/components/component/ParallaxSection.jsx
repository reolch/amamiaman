import React, { useEffect, useRef } from 'react';
import styles from './ParallaxSection.module.css';

const ParallaxSection = ({ backgroundImage, children, speed = 0.5 }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const parallaxElement = parallaxRef.current;
    
    const handleScroll = () => {
      if (!parallaxElement) return;
      
      const rect = parallaxElement.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const viewHeight = window.innerHeight;
      
      if (rect.top < viewHeight && rect.bottom > 0) {
        const yPos = -(scrolled * speed);
        parallaxElement.style.transform = `translate3d(0, ${yPos}px, 0)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div className={styles.parallaxWrapper}>
      <div
        ref={parallaxRef}
        className={styles.parallaxSection}
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
