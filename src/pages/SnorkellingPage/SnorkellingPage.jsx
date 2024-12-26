// src/components/Snorkelling/SnorkellingPage.jsx
import React from 'react';
import styles from './SnorkellingPage.module.css';
import item1 from '../../assets/images/IMG_0801.jpg';
import item2 from '../../assets/images/IMG_0808.jpg';
import item3 from '../../assets/images/IMG_0806.jpg';
import item4 from '../../assets/images/IMG_0804.jpg';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const SnorkellingPage = () => {
  return (
    <main className={styles.section} aria-labelledby="snorkelling-heading">
      <div className={styles.container}>
        <h1 id="snorkelling-heading" className={styles.title}>
          奄美のシュノーケリングツアー
        </h1>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            奄美の海でたくさんの魚にふれあえます！
          </p>
          <p className={styles.description}>
            サンゴ礁や魚をびっくりするほどたくさん見ることができます。
          </p>
          <p className={styles.description}>
            モーターボートでポイントへ移動し、シュノーケリングをたっぷり満喫したい方のための1日コースと、時間を有効に使いたい方のための半日コースをご案内しています。
          </p>
        </div>

        <div className={styles.grid}>
          <img
            className={`${styles.image} ${styles.item1}`}
            src={item1}
            alt="シュノーケリングスポット1"
          />
          <img
            className={`${styles.image} ${styles.item2}`}
            src={item2}
            alt="シュノーケリングスポット2"
          />
          <img
            className={`${styles.image} ${styles.item3}`}
            src={item3}
            alt="シュノーケリングスポット3"
          />
          <img
            className={`${styles.image} ${styles.item4}`}
            src={item4}
            alt="シュノーケリングスポット4"
          />
        </div>

        {/* 価格情報テーブル */}
        <section className={styles.pricingTable}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th scope="col">&nbsp;</th>
                <th scope="col">半日コース</th>
                <th scope="col">1日コース</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">料金（お一人様）</th>
                <td>大人:7,000円 子ども:5,000円</td>
                <td>大人:14,000円 子ども:10,000円</td>
              </tr>
              <tr>
                <th scope="row">案内時間</th>
                <td>8:00～17:00の間</td>
                <td>8:00～17:00</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 詳細情報テーブル */}
        <section className={styles.detailsTable}>
          <table className={styles.table}>
            <tbody>
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
                  必要な方は日焼け止めなどもご用意ください。ご予約はお電話にて受け付けています。
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

export default SnorkellingPage;
