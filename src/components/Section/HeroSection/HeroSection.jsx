"use client";
// src/components/Section/HeroSection/HeroSection.jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import NextImage from 'next/image';
import styles from './HeroSection.module.css';

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

const SLIDE_INTERVAL = 5000;
const ANIMATION_DURATION = 1000;

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // isAnimating を ref で管理 → stale closure を回避
  const isAnimatingRef = useRef(false);

  const nextSlide = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => {
      isAnimatingRef.current = false;
    }, ANIMATION_DURATION);
  }, []);

  // 次の2枚を事前ロード
  useEffect(() => {
    for (let i = 1; i <= 2; i++) {
      const nextIndex = (currentSlide + i) % slides.length;
      const img = new Image();
      img.src = slides[nextIndex].image;
    }
  }, [currentSlide]);

  // 自動スライド（nextSlide が useCallback で安定しているので deps に含めても安全）
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className={styles.heroSection} aria-label="スライドショー">
      <div className={styles.slideshow}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${styles.slide} ${index === currentSlide ? styles.slideActive : styles.slideHidden}`}
            aria-hidden={index !== currentSlide}
          >
            <div className={styles.imageWrapper}>
              <NextImage
                src={slide.image}
                alt={slide.alt}
                fill
                priority={index === 0}
                sizes="100vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            {index === currentSlide && (
              <div className={styles.catchphrase}>
                <h2 className={styles.catchphraseTitle}>{slide.catchphrase}</h2>
                <p className={styles.catchphraseDesc}>{slide.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
