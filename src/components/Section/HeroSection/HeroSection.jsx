"use client";
// src/components/Section/HeroSection/HeroSection.jsx
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css'; // CSS Module をインポート

const slides = [
  {
    id: 1,
    image: '/assets/images/pages/トップページ/スライドショー/slide1.jpg',
    catchphrase: '',
    description: '',
    alt: '奄美大島の美しい海とマリンアクティビティの様子を紹介するあまみあまんのメイン画像',
  },
  {
    id: 2,
    image: '/assets/images/pages/トップページ/スライドショー/slide2.jpg',
    catchphrase: '',
    description: '',
    alt: '奄美大島でのシュノーケリング体験とクリアブルーの海の絶景',
  },
  {
    id: 3,
    image: '/assets/images/pages/トップページ/スライドショー/slide3.jpg',
    catchphrase: '',
    description: '',
    alt: '奄美大島のシーカヤック体験と透明度の高い美しい海',
  },
  {
    id: 4,
    image: '/assets/images/pages/トップページ/スライドショー/slide4.jpg',
    catchphrase: '',
    description: '',
    alt: '奄美大島のグラスボート体験で見る珊瑚礁と熱帯魚の世界',
  },
  {
    id: 5,
    image: '/assets/images/pages/トップページ/スライドショー/slide5.jpg',
    catchphrase: '',
    description: '',
    alt: '奄美大島の夕焼けとマリンアクティビティを楽しむ観光客',
  },
  {
    id: 6,
    image: '/assets/images/pages/トップページ/スライドショー/slide6.jpg',
    catchphrase: '',
    description: '',
    alt: '奄美大島あまみあまんの宿泊施設と美しい自然環境',
  }
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
              src={slide.image}
              alt={slide.alt}
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
