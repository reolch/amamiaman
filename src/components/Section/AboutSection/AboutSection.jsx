import styles from './AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.section} aria-labelledby="about-section-heading">
      <div className={styles.content}>
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