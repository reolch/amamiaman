'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './ParallaxBanner.module.css';

interface ParallaxBannerProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  /** パララックス強度 0〜1（デフォルト: 0.6）大きいほど動きが大きい */
  speed?: number;
}

const ParallaxBanner = ({
  src,
  alt,
  title,
  subtitle,
  speed = 0.6,
}: ParallaxBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    const container = containerRef.current;
    const imageWrap = imageWrapRef.current;
    if (!container || !imageWrap) return;

    const rect = container.getBoundingClientRect();
    const windowH = window.innerHeight;
    const elTop = rect.top;
    const elH = rect.height;

    if (elTop < windowH && elTop + elH > 0) {
      // progress: 0（画面下端から出現）→ 1（画面上端から退場）
      const progress = Math.max(0, Math.min(1, (windowH - elTop) / (windowH + elH)));
      // 移動幅 = バナー高さの 30% × speed（inset -100px で余裕あり）
      const maxOffset = elH * 0.3 * speed;
      const offset = (progress - 0.5) * 2 * maxOffset;
      imageWrap.style.transform = `translateY(${offset}px)`;
    }
  }, [speed]);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = requestAnimationFrame(() => {
        updateParallax();
        rafRef.current = null;
      });
    };

    updateParallax();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [updateParallax]);

  return (
    <div className={styles.banner} ref={containerRef}>
      <div className={styles.imageWrap} ref={imageWrapRef}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          priority
          sizes="100vw"
        />
      </div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ParallaxBanner;
