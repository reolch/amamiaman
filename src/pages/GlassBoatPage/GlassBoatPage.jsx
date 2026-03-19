// src/pages/GlassBoatPage/GlassBoatPage.jsx
import styles from './GlassBoatPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';
import ReservationInfoTable from '../../components/common/ReservationInfoTable/ReservationInfoTable';

const RESERVATION_ITEMS = [
  '代表者名',
  '連絡先',
  '参加人数',
  '男性○名、女性○名',
  '参加者全員のフルネーム',
  '参加者全員の年齢',
];

const GlassBoatPage = () => {
  return (
    <main className={styles.section} aria-label="グラスボート観光ページ">
      <div className={styles.container}>

        {/* コンテンツブロック */}
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

        {/* 価格情報テーブル */}
        <section className={styles.pricingTable}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.headerRow}>
                <th scope="col">&nbsp;</th>
                <th scope="col">料金</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>料金（お一人様）</td>
                <td>大人:2,000円 子ども:1,000円</td>
              </tr>
              <tr>
                <td>案内時間</td>
                <td>9:00～17:00の間</td>
              </tr>
            </tbody>
          </table>
          <p className={styles.tableNote}>
            ※ 所要時間は1時間程度です。<br />
            ※ その日の潮位によって案内時間が変わります。
          </p>
        </section>

        {/* 参加可能年齢テーブル */}
        <section className={styles.detailsTable}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.label}>参加可能年齢</th>
                <td className={styles.value}>制限無し</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 予約情報テーブル（共通コンポーネント） */}
        <ReservationInfoTable
          items={RESERVATION_ITEMS}
          notes={'ご予約は電話にて受け付けています。\n5名様以上からご案内いたします。'}
        />

        {/* フッターノート */}
        <FooterNote text="表記価格は税込です。" />
      </div>
      <SocialShare />
    </main>
  );
};

export default GlassBoatPage;
