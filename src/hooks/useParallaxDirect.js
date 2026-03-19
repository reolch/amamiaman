'use client';

import { useEffect, useRef } from 'react';

/**
 * RAF ベースのパララックスフック。
 * スクロール時に直接 DOM の CSS カスタムプロパティを更新するため
 * React の再レンダリングが発生しない。
 *
 * @param {number} speed - パララックス強度（0〜1 推奨。正:下向き / 負:上向き）
 * @returns {React.RefObject} ref - パララックス対象の要素に付与する ref
 */
const useParallaxDirect = (speed = 0.3) => {
  const ref = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementTop = rect.top;
      const elementHeight = rect.height;

      // 要素が画面内にある場合のみ計算
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        // progress: 要素が画面に入り始めたとき 0、画面中央のとき 0.5、出たとき 1
        const scrolled = windowHeight - elementTop;
        const total = windowHeight + elementHeight;
        const progress = Math.max(0, Math.min(1, scrolled / total));
        // offset: 中央（progress=0.5）を基準に ±(speed*50)px
        const offset = (progress - 0.5) * speed * 100;
        el.style.setProperty('--parallax-offset', `${offset}px`);
      }
    };

    const onScroll = () => {
      if (rafRef.current) return; // 前のフレームがまだ処理中なら無視
      rafRef.current = requestAnimationFrame(() => {
        update();
        rafRef.current = null;
      });
    };

    update(); // 初期値をセット
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [speed]);

  return ref;
};

export default useParallaxDirect;
