'use client';

import { useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import styles from './ParallaxBanner.module.css';

interface ParallaxBannerProps {
  /** 画像パス（/assets/... 形式） */
  src: string;
  /** 画像の alt テキスト */
  alt: string;
  /** バナー内に表示するページタイトル（h1） */
  title: string;
  /** タイトル下のサブテキスト（省略可） */
  subtitle?: string;
  /** パララックス強度（デフォルト: 0.4） */
  speed?: number;
}

/**
 * サービスページ用の全幅パララックスバナー。
 * PageWrapper の外側に配置することで画面幅いっぱいに表示される。
 */
const ParallaxBanner = ({
  src,
  alt,
  title,
  subtitle,
  speed = 0.4,
}: ParallaxBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const updateParallax = useCallback(() => {
    const container = containerRef.current;
    const imageWrap = imageWrapRef.current;
    if (!container || !imageWrap) return;

    const rect = container.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    if (elementTop < windowHeight && elementTop + elementHeight > 0) {
      const scrolled = windowHeight - elementTop;
      const total = windowHeight + elementHeight;
      const progress = Math.max(0, Math.min(1, scrolled / total));
      // 中央（progress=0.5）を基準に ±(speed×50)px
      const offset = (progress - 0.5) * speed * 100;
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

    updateParallax(); // 初期位置を設定
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
      {/* 画像ラッパー: コンテナより縦に大きく取りパララックスの余白を確保 */}
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

      {/* グラデーションオーバーレイ */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* タイトルテキスト */}
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ParallaxBanner;
