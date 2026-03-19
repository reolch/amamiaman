'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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

  // バナーが画面下端から入る → 画面上端から出るまでの進捗（0→1）
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // スプリングで滑らかに補間（サンプルと同じ設定）
  const spring = useSpring(scrollYProgress, { stiffness: 300, damping: 60 });

  // inset: -100px のバッファ内で移動（speed=1 で ±80px、speed=0.6 で ±48px）
  const maxPx = Math.round(80 * speed);
  const y = useTransform(spring, [0, 1], [`-${maxPx}px`, `${maxPx}px`]);

  return (
    <div className={styles.banner} ref={containerRef}>
      <motion.div className={styles.imageWrap} style={{ y }}>
        <Image
          src={src}
          alt={alt}
          fill
          className={styles.image}
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className={styles.overlay} aria-hidden="true" />
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </div>
  );
};

export default ParallaxBanner;
