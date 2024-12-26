// src/components/GlassBoatPage/GlassBoatPage.jsx
import React from 'react';
import styles from './GlassBoatPage.module.css'; // CSS Modulesをインポート
import glassBoatImage from '../../assets/images/s.jpg'; // 画像をインポート
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const GlassBoatPage = () => {
  return (
    <main className={styles.section} aria-labelledby="glass-boat-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="glass-boat-heading" className={styles.title}>
          奄美のグラスボートツアー
        </h1>

        {/* コンテンツブロック */}
        <section className={styles.content}>
          <figure className={styles.imageContainer}>
            <img
              src={glassBoatImage}
              alt="グラスボートで奄美の海を楽しむ様子"
              loading="lazy"
              className={styles.image}
            />
            <figcaption className={styles.imageCaption}>奄美の美しい海景色</figcaption>
          </figure>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              <strong>グラスボート遊覧船に乗って珊瑚見学しませんか？</strong>
              <br />
              グラスボートに乗って、家族でのんびりとクルージングしていただけます。
              <br />
              ボートの中を覗くと、底一面がガラス張りになっていて、
              <br className={styles.desktopOnly} />
              すぐ手の届きそうな距離でキレイな魚を見ることができます。
            </p>
          </div>
        </section>

        {/* 価格情報テーブル */}
        <section className={styles.pricingTable}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th scope="col">&nbsp;</th>
                <th scope="col">1時間程度</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>料金（お一人様）</td>
                <td>大人:2,000円 子ども:1,000円</td>
              </tr>
              <tr>
                <td>案内時間</td>
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
                <th className={styles.label}>参加可能年齢</th>
                <td className={styles.value}>制限無し</td>
              </tr>
              <tr>
                <th className={styles.label} rowSpan="7">
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
                  ご予約は電話にて受け付けています。
                  <br />
                  5名様以上からご案内いたします。
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

export default GlassBoatPage;
