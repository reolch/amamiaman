// src/pages/SnorkellingPage/SnorkellingPage.jsx
import styles from './SnorkellingPage.module.css';
import Image from 'next/image';
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
  '経験歴',
];

const SnorkellingPage = () => {
  return (
    <main className={styles.section} aria-labelledby="snorkelling-heading">
      <div className={styles.container}>
        <h1 id="snorkelling-heading" className={styles.title}>
          シュノーケリングツアー
        </h1>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            <strong>ヤマハタマリンサービスあまん</strong>の奄美大島シュノーケリングツアーで、美しい奄美の海でたくさんの魚にふれあえます！
          </p>
          <p className={styles.description}>
            奄美大島の透明度抜群の海で、色とりどりのサンゴ礁や熱帯魚をたくさん見ることができる本格的なマリンスポーツ体験です。
          </p>
          <p className={styles.description}>
            モーターボートで奄美大島の絶景ポイントへ移動し、シュノーケリングをたっぷり満喫したい方のための1日コースと、時間を有効に使いたい方のための半日コースを２名様からご案内。ヤマハタマリンサービスあまんの経験豊富なガイドが安全にサポートします。
          </p>
          <p className={styles.description}>
            ご希望により奄美大島で人気のSUP体験も追加可能です。マリンサービスあまんで最高のマリンスポーツ体験をお楽しみください。
          </p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.image} ${styles.item1}`}>
            <Image
              src="/assets/images/IMG_0801.webp"
              alt="奄美大島の透明度抜群の海でシュノーケリング体験をする様子"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={`${styles.image} ${styles.item2}`}>
            <Image
              src="/assets/images/IMG_0808.webp"
              alt="奄美大島のサンゴ礁と色とりどりの熱帯魚が見られるシュノーケリングポイント"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={`${styles.image} ${styles.item3}`}>
            <Image
              src="/assets/images/IMG_0806.webp"
              alt="奄美大島の美しい海中世界を楽しむシュノーケリング体験の風景"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={`${styles.image} ${styles.item4}`}>
            <Image
              src="/assets/images/IMG_0804.webp"
              alt="奄美大島のクリアブルーの海で楽しむシュノーケリングツアーの様子"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
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
                <td>
                  大人:7,000円 <br />
                  子ども:5,000円
                </td>
                <td>
                  大人:14,000円 <br />
                  子ども:10,000円
                </td>
              </tr>
              <tr>
                <th scope="row">案内時間</th>
                <td>
                  午前の部 <br />
                  9:00～12:00
                </td>
                <td>
                  9:00～16:00
                </td>
              </tr>
              <tr>
                <th scope="row">&nbsp;</th>
                <td>
                  午後の部 <br />
                  13:00～16:00
                </td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 予約情報テーブル（共通コンポーネント） */}
        <ReservationInfoTable
          items={RESERVATION_ITEMS}
          notes={'水分補給など熱中症対策は十分に行ってください。\nご予約はメールまたはお電話にて受け付けています。'}
        />

        {/* フッターノート */}
        <FooterNote text="表記価格は税込です。" />
      </div>
      <SocialShare />
    </main>
  );
};

export default SnorkellingPage;
