'use client';

import styles from './AboutSection.module.css';
import useParallax from '../../../hooks/useParallax';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';

const AboutSection = () => {
  const [sectionRef, , hasSectionIntersected] = useIntersectionObserver();
  const [parallaxRef, parallaxOffset] = useParallax(0.3);

  const textLines = [
    'シーカヤックで奄美の美しい海を探索。',
    'モーターボートでシュノーケリング、',
    'サンゴを見ながらお魚たちと泳ぐことが出来ます。',
    'グラスボードでサンゴ礁の海をご案内。',
    '大島海峡の海遊びは「あまん」におまかせ！'
  ];

  return (
    <section 
      ref={(el) => {
        sectionRef.current = el;
        parallaxRef.current = el;
      }}
      className={`${styles.section} ${hasSectionIntersected ? styles.sectionVisible : ''}`}
      aria-labelledby="about-section-heading"
      style={{
        '--parallax-offset': `${parallaxOffset}px`
      }}
    >
      <div className={`${styles.content} ${hasSectionIntersected ? styles.contentVisible : ''}`}>
        <h2 
          id="about-section-heading"
          className={`${styles.title} ${hasSectionIntersected ? styles.titleVisible : ''}`}
        >
          <span className={styles.titleLine}>大自然で子どもから大人まで</span>
          <span className={styles.titleLine}>マリンスポーツを楽しめる！</span>
        </h2>
        <div className={styles.textContainer}>
          {textLines.map((line, index) => (
            <p 
              key={index}
              className={`${styles.textLine} ${hasSectionIntersected ? styles.textLineVisible : ''}`}
              style={{ '--line-index': index }}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;