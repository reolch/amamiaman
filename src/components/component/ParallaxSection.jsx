import React from 'react';
import styles from './ParallaxSection.module.css';

const ParallaxSection = ({ imageSrc, title, description }) => (
  <div className={styles.parallaxSection}>
    <div
      className={styles.parallax}
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className={styles.overlay}>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </div>
    <div className={styles.content}>
      <p className={styles.description}>{description}</p>
    </div>
  </div>
);

export default ParallaxSection;
