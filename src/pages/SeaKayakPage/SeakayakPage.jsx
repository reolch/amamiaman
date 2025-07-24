// src/components/SeaKayakPage/SeaKayakPage.jsx
import styles from './SeaKayakPage.module.css';
import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const SeaKayakPage = () => {
  return (
    <main className={styles.section} aria-labelledby="sea-kayak-heading">
      <div className={styles.container}>
        {/* ページタイトル */}
        <h1 id="sea-kayak-heading" className={styles.title}>
          シーカヤックツアー
        </h1>

        {/* コンテンツブロック */}
        <section className={styles.content}>
          <figure className={styles.imageContainer}>
            <img
              src="/assets/images/pages/シーカヤック/top.JPG"
              alt="奄美大島の透明度抜群の海でシーカヤック体験を楽しむ観光客の様子"
              loading="lazy"
              className={styles.image}
            />
            <figcaption className={styles.imageCaption}>シーカヤックで奄美の海を楽しむ様子</figcaption>
          </figure>
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              <strong>シーカヤックで奄美の海を散策しませんか？</strong>
              <br />
              サンゴ礁の海を滑るように進むシーカヤックは最高です！
              <br />
              シーカヤックを漕いで行き、美しいビーチで一休み。
              <br />
              運が良ければウミガメを見ることができます。
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
                <td>
                  大人:6,000円 <br />
                  子ども:4,000円
                </td>
              </tr>
              <tr>
                <th scope="row">案内時間</th>
                <td>
                  午前の部 <br />
                  9:00～12:00
                </td>
              </tr>
              <tr>
                <th scope="row">&nbsp;</th>
                <td>
                  午後の部 <br />
                  13:00～16:00
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        {/* 詳細情報テーブル */}
        <section className={styles.detailsTable}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <th className={styles.label} scope="row">用意する物</th>
                <td className={styles.value}>濡れてもいい服装・タオルなど</td>
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
                  水分補給など熱中症対策は十分に行ってください。<br />
                  乗降時には膝下まで水につかります。<br />
                  ご予約はメールまたは電話にて受付けています。<br />
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
