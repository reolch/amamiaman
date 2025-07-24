// src/components/Snorkelling/SnorkellingPage.jsx
import styles from './SnorkellingPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const SnorkellingPage = () => {
  return (
    <main className={styles.section} aria-labelledby="snorkelling-heading">
      <div className={styles.container}>
        <h1 id="snorkelling-heading" className={styles.title}>
          シュノーケリングツアー
        </h1>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            奄美の海でたくさんの魚にふれあえます！
          </p>
          <p className={styles.description}>
            サンゴ礁や魚をたくさん見ることができます。
          </p>
          <p className={styles.description}>
            モーターボートでポイントへ移動し、シュノーケリングをたっぷり満喫したい方のための1日コースと、時間を有効に使いたい方のための半日コースを２名様からご案内しています。
          </p>
          <p className={styles.description}>
            （ご希望によりSUPも追加）
          </p>
        </div>

        <div className={styles.grid}>
          <img
            className={`${styles.image} ${styles.item1}`}
            src="/assets/images/IMG_0801.jpg"
            alt="奄美大島の透明度抜群の海でシュノーケリング体験をする様子"
          />
          <img
            className={`${styles.image} ${styles.item2}`}
            src="/assets/images/IMG_0808.jpg"
            alt="奄美大島のサンゴ礁と色とりどりの熱帯魚が見られるシュノーケリングポイント"
          />
          <img
            className={`${styles.image} ${styles.item3}`}
            src="/assets/images/IMG_0806.jpg"
            alt="奄美大島の美しい海中世界を楽しむシュノーケリング体験の風景"
          />
          <img
            className={`${styles.image} ${styles.item4}`}
            src="/assets/images/IMG_0804.jpg"
            alt="奄美大島のクリアブルーの海で楽しむシュノーケリングツアーの様子"
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
                  午前の部  <br />
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
                  水分補給など熱中症対策は十分に行ってください。
                  ご予約はメールまたはお電話にて受け付けています。
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
