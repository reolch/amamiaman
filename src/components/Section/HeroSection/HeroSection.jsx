"use client";
// src/components/Section/HeroSection/HeroSection.jsx
import { useState, useEffect } from 'react';
import styles from './HeroSection.module.css'; // CSS Module をインポート
import useParallax from '../../../hooks/useParallax';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const slides = [
  {
    id: 1,
    image: '/assets/images/pages/トップページ/スライドショー/slide1.webp',
    catchphrase: '',
    description: '',
    alt: '奄美大島の美しい海とマリンアクティビティの様子を紹介するあまみあまんのメイン画像',
  },
  {
    id: 2,
    image: '/assets/images/pages/トップページ/スライドショー/slide2.webp',
    catchphrase: '',
    description: '',
    alt: '奄美大島でのシュノーケリング体験とクリアブルーの海の絶景',
  },
  {
    id: 3,
    image: '/assets/images/pages/トップページ/スライドショー/slide3.webp',
    catchphrase: '',
    description: '',
    alt: '奄美大島のシーカヤック体験と透明度の高い美しい海',
  },
  {
    id: 4,
    image: '/assets/images/pages/トップページ/スライドショー/slide4.webp',
    catchphrase: '',
    description: '',
    alt: '奄美大島のグラスボート体験で見る珊瑚礁と熱帯魚の世界',
  },
  {
    id: 5,
    image: '/assets/images/pages/トップページ/スライドショー/slide5.webp',
    catchphrase: '',
    description: '',
    alt: '奄美大島の夕焼けとマリンアクティビティを楽しむ観光客',
  },
  {
    id: 6,
    image: '/assets/images/pages/トップページ/スライドショー/slide6.webp',
    catchphrase: '',
    description: '',
    alt: '奄美大島あまみあまんの宿泊施設と美しい自然環境',
  }
];


const HeroSection = ({ animationType = 'fade' }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideInterval = 5000;
  
  const [heroRef, , hasHeroIntersected] = useIntersectionObserver();
  const [parallaxRef, parallaxOffset] = useParallax(0.5);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setTimeout(() => setIsAnimating(false), 1200);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1200);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={(el) => {
        heroRef.current = el;
        parallaxRef.current = el;
      }}
      className={`${styles['hero-section']} ${hasHeroIntersected ? styles['hero-section--visible'] : ''}`}
      style={{
        '--parallax-offset': `${parallaxOffset}px`
      }}
    >
      <div className={`${styles['hero-section__slideshow']} ${styles[`hero-section__slideshow--${animationType}`]}`}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles['hero-section__slide']} ${
              index === currentSlide ? styles['hero-section__slide--active'] : ''
            } ${styles[`hero-section__slide--${index < currentSlide ? 'prev' : index > currentSlide ? 'next' : 'current'}`]}`}
            aria-hidden={index !== currentSlide}
            style={{
              '--slide-index': index,
              '--current-index': currentSlide,
              '--parallax-speed': `${0.3 + (index * 0.1)}`,
            }}
          >
            <div className={styles['hero-section__image-wrapper']}>
              <img
                src={slide.image}
                alt={slide.alt}
                className={styles['hero-section__slide-image']}
                loading="lazy"
              />
            </div>
            {index === currentSlide && (
              <div className={`${styles['hero-section__catchphrase']} ${styles['hero-section__catchphrase--animated']}`}>
                <h1 className={styles['hero-section__title']}>{slide.catchphrase}</h1>
                <p className={styles['hero-section__description']}>{slide.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
