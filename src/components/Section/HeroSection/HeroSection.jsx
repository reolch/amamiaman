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
    catchphrase: '奄美の海へ、感動の旅へ',
    description: '透明度抜群の海で、忘れられない体験を',
    alt: 'ヤマハタマリンサービスあまん 奄美大島シーカヤックと美しい海のメイン画像',
  },
  {
    id: 2,
    image: '/assets/images/pages/トップページ/スライドショー/slide2.webp',
    catchphrase: '神秘の水中世界へ',
    description: 'カラフルなサンゴと魚たちに会いに行こう',
    alt: 'あまん 奄美大島シュノーケリング体験とクリアブルーの海の絶景',
  },
  {
    id: 3,
    image: '/assets/images/pages/トップページ/スライドショー/slide3.webp',
    catchphrase: 'カヤックで冒険の海へ',
    description: '加計呂麻島の絶景を海上から楽しむ',
    alt: 'ヤマハタマリンサービスあまん 奄美大島シーカヤック体験と透明度の高い美しい海',
  },
  {
    id: 4,
    image: '/assets/images/pages/トップページ/スライドショー/slide4.webp',
    catchphrase: '海中散歩グラスボート',
    description: '服のまま楽しめる、奄美の海のパノラマ',
    alt: 'あまん 奄美大島グラスボート体験で見る珊瑚礁と熱帯魚の世界',
  },
  {
    id: 5,
    image: '/assets/images/pages/トップページ/スライドショー/slide5.webp',
    catchphrase: '夕暮れの感動体験',
    description: 'サンセットカヤックで、特別な時間を',
    alt: '加計呂麻島カヤックツアー 奄美大島の夕焼けとマリンアクティビティ',
  },
  {
    id: 6,
    image: '/assets/images/pages/トップページ/スライドショー/slide6.webp',
    catchphrase: 'ダイバーの楽園へ',
    description: '奄美大島南部の豊かな海を探検',
    alt: 'ヤマハタマリンサービスあまん 奄美大島南部ダイビング・奄美大島ダイビングショップ宿泊施設と美しい自然環境',
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


  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Preload next few images
    const preloadImages = () => {
      for (let i = 1; i <= 2; i++) {
        const nextIndex = (currentSlide + i) % slides.length;
        const img = new Image();
        img.src = slides[nextIndex].image;
      }
    };
    preloadImages();
  }, [currentSlide]);

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
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
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
