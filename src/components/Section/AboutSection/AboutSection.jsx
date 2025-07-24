"use client";
import { useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';

const AboutSection = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const aboutSection = sectionRef.current;
    const aboutContent = contentRef.current;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          aboutContent.classList.add(styles.contentAnimate);
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => {
      if (aboutSection) {
        observer.unobserve(aboutSection);
      }
    };
  }, []);

  return (
    <section className={styles.section} ref={sectionRef} aria-labelledby="about-section-heading">
      <div className={styles.content} ref={contentRef}>
        <h2 id="about-section-heading">
          大自然で子どもから大人まで<br />
          マリンスポーツを楽しめる！
        </h2>
        <p>
          シーカヤックで奄美の美しい海を探索。
          <br />
          モーターボートでシュノーケリング、
          <br />
          サンゴを見ながらお魚たちと泳ぐことが出来ます。
          <br />
          グラスボードでサンゴ礁の海をご案内。
          <br />
          大島海峡の海遊びは「あまん」におまかせ！
        </p>
      </div>
    </section>
  );
};

export default AboutSection;