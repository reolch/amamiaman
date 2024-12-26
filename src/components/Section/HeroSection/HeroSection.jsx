// src/components/Section/HeroSection/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css'; // CSS Module をインポート

const slides = [
  {
    id: 1,
    url: process.env.PUBLIC_URL + '/slide1.jpg',
    catchphrase: 'キャッチフレーズ1',
    description: '説明文1',
  },
  {
    id: 2,
    url: process.env.PUBLIC_URL + '/slide2.jpg',
    catchphrase: 'キャッチフレーズ2',
    description: '説明文2',
  },
  {
    id: 3,
    url: process.env.PUBLIC_URL + '/slide3.jpg',
    catchphrase: 'キャッチフレーズ3',
    description: '説明文3',
  },
  {
    id: 4,
    url: process.env.PUBLIC_URL + '/slide4.jpg',
    catchphrase: 'キャッチフレーズ4',
    description: '説明文4',
  },
  {
    id: 5,
    url: process.env.PUBLIC_URL + '/slide5.jpg',
    catchphrase: '探検する',
    description: '宝石のように美しい海を',
  },
];


const HeroSection = ({ animationType = 'fade' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = 5000;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles['hero-section']}>
      <div className={`${styles['hero-section__slideshow']} ${styles[`hero-section__slideshow--${animationType}`]}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles['hero-section__slide']} ${
              index === currentSlide ? styles['hero-section__slide--active'] : ''
            }`}
            aria-hidden={index !== currentSlide}
          >
            <img
              src={slide.url}
              alt={slide.catchphrase}
              className={styles['hero-section__slide-image']}
              loading="lazy"
            />
            {index === currentSlide && (
              <div className={styles['hero-section__catchphrase']}>
                <h1 className={styles['hero-section__title']}>{slide.catchphrase}</h1>
                <p className={styles['hero-section__description']}>{slide.description}</p>
              </div>
            )}
          </div>
        ))}
        <button
          className={`${styles['hero-section__nav-button']} ${styles['hero-section__nav-button--prev']}`}
          onClick={prevSlide}
          aria-label="前のスライド"
        >
          ❮
        </button>
        <button
          className={`${styles['hero-section__nav-button']} ${styles['hero-section__nav-button--next']}`}
          onClick={nextSlide}
          aria-label="次のスライド"
        >
          ❯
        </button>
        <div className={styles['hero-section__indicators']}>
          {slides.map((_, index) => (
            <button
              key={index}
              className={`${styles['hero-section__indicator']} ${
                index === currentSlide ? styles['hero-section__indicator--active'] : ''
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`スライド${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
