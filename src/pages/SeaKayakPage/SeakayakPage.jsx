// src/components/SeaKayakPage/SeaKayakPage.jsx
import React from 'react';
import styles from './SeaKayakPage.module.css';
import seakayakImage1 from '../../assets/images/s.jpg';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const SeaKayakPage = () => {
  return (
    <main className={styles.section} aria-labelledby="sea-kayak-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="sea-kayak-heading" className={styles.title}>
          奄美のシーカヤックツアー
        </h1>

        {/* コンテンツブロック */}
        <section className={styles.content}>
          <figure className={styles.imageContainer}>
            <img
              src={seakayakImage1}
              alt="シーカヤックで奄美の海を楽しむ様子"
              loading="lazy"
              className={styles.image}
            />
            <figcaption className={styles.imageCaption}>奄美の美しい海景色</figcaption>
          </figure>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              <strong>シーカヤックで奄美の海を散策しませんか？</strong>
              <br />
              サンゴ礁の海を滑るように進むシーカヤックは最高です！
              <br />
              天気の良い日には、加計呂麻島までシーカヤックを漕いで行き、美しいビーチで
              <br className={styles.desktopOnly} />
              シュノーケリングを楽しむこともできます。
            </p>
          </div>
        </section>

        {/* 料金情報テーブル */}
        <section className={styles.pricingTable}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th scope="col">&nbsp;</th>
                <th scope="col">半日コース</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">料金（お一人様）</th>
                <td>大人:6,000円 子ども:4,000円</td>
              </tr>
              <tr>
                <th scope="row">案内時間</th>
                <td>8:00～17:00の間</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 詳細情報テーブル */}
        <section className={styles.detailsTable}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.label} scope="row">参加可能年齢</th>
                <td className={styles.value}>小学生以上（要相談）</td>
              </tr>
              <tr>
                <th className={styles.label} scope="row">用意する物</th>
                <td className={styles.value}>水着・タオル</td>
              </tr>
              <tr>
                <th className={styles.label} scope="row" rowSpan={7}>
                  予約時にお伝えいただく内容
                </th>
                <td className={styles.value}>代表者名</td>
              </tr>
              <tr>
                <td className={styles.value}>連絡先</td>
              </tr>
              <tr>
                <td className={styles.value}>参加人数</td>
              </tr>
              <tr>
                <td className={styles.value}>男性○名、女性○名</td>
              </tr>
              <tr>
                <td className={styles.value}>参加者全員のフルネーム</td>
              </tr>
              <tr>
                <td className={styles.value}>参加者全員の年齢</td>
              </tr>
              <tr>
                <td className={styles.value}>経験歴</td>
              </tr>
              <tr>
                <th className={styles.label} scope="row">備考</th>
                <td className={styles.value}>
                  必要な方は日焼け止めなどもご用意ください。ご予約は電話にて受付けています。
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* フッターノート */}
        <FooterNote text="表記価格は税込です。" />
      </div>
      <SocialShare />
    </main>
  );
};

export default SeaKayakPage;
