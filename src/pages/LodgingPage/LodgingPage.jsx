import React from 'react';
import styles from './LodgingPage.module.css'; // CSS Modulesをインポート
import lodgingImage from '../../assets/images/s.jpg'; // 画像をインポート
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote'; // FooterNoteをインポート

import item1 from '../../assets/images/LodgingGridItem1.jpg';
import item2 from '../../assets/images/LodgingGridItem2.jpg';
import item3 from '../../assets/images/LodgingGridItem3.jpg';
import item4 from '../../assets/images/LodgingGridItem4.jpg';
import item5 from '../../assets/images/LodgingGridItem5.jpg';

const LodgingPage = () => {
  return (
    <main className={styles.section} aria-labelledby="lodging-page-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="lodging-page-heading" className={styles.title}>
          奄美の民宿
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            当店は、低価格でご利用いただくために、素泊まり宿をご提供しています。
            <br />
            お部屋は、和室と洋室をご用意しています。
            <br />
            タオル類や、冷蔵庫など必要な物はこちらでご用意していますので、お気軽にお越しください。
          </p>
        </div>

        <div className={styles.grid}>
          <img
            className={`${styles.image} ${styles.item1}`}
            src={item1}
            alt="客室1の写真"
          />
          <img
            className={`${styles.image} ${styles.item2}`}
            src={item2}
            alt="客室2の写真"
          />
          <img
            className={`${styles.image} ${styles.item3}`}
            src={item3}
            alt="客室3の写真"
          />
          <img
            className={`${styles.image} ${styles.item4}`}
            src={item4}
            alt="客室4の写真"
          />
          <img
            className={`${styles.image} ${styles.item5}`}
            src={item5}
            alt="客室5の写真"
          />
        </div>

        {/* Details Section */}
        <section className={styles.details}>
          <h2 className={styles.detailsTitle}>民宿について</h2>

          {/* Pricing Table */}
          <div className={styles.pricingContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>1室1名様</th>
                  <th>1室2名様以上</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>料金</th>
                  <td>3,500円</td>
                  <td>3,000円（1名様）</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Information Table */}
          <table className={styles.table}>
            <tbody>
              <tr>
                <th rowSpan="7" className={styles.label}>
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
                <th className={styles.label}>備考</th>
                <td className={styles.value}>
                  必要な方は日焼け止めなどもご用意ください。ご予約はお電話にて受け付けています。
                </td>
              </tr>
            </tbody>
          </table>

          {/* フッターノート */}
          <FooterNote text="表記価格は税込です。" />
        </section>

        {/* Google Maps Embed */}
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!4v1539133983576!6m8!1m7!1sCAoSLEFGMVFpcE1YdjBDd1R6TVZYaWU0elIwelVJV2E2c1FpYTlqOEF0RVZyX1dN!2m2!1d28.139924840577!2d129.31941639943!3f52.63012139892771!4f-8.590569368625069!5f0.4000000000000002"
            allowFullScreen
            aria-hidden="false"
            tabIndex="0"
            title="Google Map"
            className={styles.iframe}
          ></iframe>
        </div>

        {/* ソーシャルシェア */}
        <SocialShare />
      </div>
    </main>
  );
};

export default LodgingPage;
