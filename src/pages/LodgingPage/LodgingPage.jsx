import styles from './LodgingPage.module.css'; // CSS Modulesをインポート
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote'; // FooterNoteをインポート

const LodgingPage = () => {
  return (
    <main className={styles.section} aria-labelledby="lodging-page-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="lodging-page-heading" className={styles.title}>
          民宿
        </h1>
        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            低価格でご利用いただくために、素泊まり民宿をご提供しています。
            <br />
            奄美大島の美しい海に近い立地で、和室と洋室をご用意しています。
            <br />
            マリンスポーツ愛好家のための設備も充実。洗濯機、冷蔵庫、タオルなどはご自由にお使いください。
            WiFi設備も完備しており、奄美大島旅行の拠点として最適です。
          </p>
        </div>

        <div className={styles.grid}>
          <img
            className={`${styles.image} ${styles.item2}`}
            src="/assets/images/LodgingGridItem2.webp"
            alt="奄美大島あまみあまんの宿泊施設の快適な和室客室の様子"
          />
        </div>

        {/* Details Section */}
        <section className={styles.details}>
          <h2 className={styles.detailsTitle}>あまみあまん 奄美大島民宿について</h2>

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
                  <td>4,500円</td>
                  <td>4,000円（1名様）</td>
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
                <td className={styles.value}>男性○名、女性○名</td>
              </tr>
              <tr>
                <td className={styles.value}>宿泊者全員のフルネーム</td>
              </tr>
              <tr>
                <td className={styles.value}>宿泊者全員の年齢</td>
              </tr>
              <tr>
                <th className={styles.label}>備考</th>
                <td className={styles.value}>
                  ご予約はメールまたはお電話にて受け付けています。
                  宿泊客以外の入室はご遠慮ください。
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
            allow="accelerometer 'none'; gyroscope 'none'"
            loading="lazy"
          ></iframe>
        </div>

        {/* ソーシャルシェア */}
        <SocialShare />
      </div>
    </main>
  );
};

export default LodgingPage;
