// src/components/StoreInformationPage/StoreInformationPage.jsx
import React from 'react';
import styles from './StoreInformationPage.module.css';

import SocialShare from '../../components/common/SocialShare/SocialShare';
import FooterNote from '../../components/common/FooterNote/FooterNote';

const StoreInformationPage = () => {
  return (
    <main className={styles.section} aria-labelledby="store-information-heading">
      <div className={styles.container}>

        <section className={styles.mapSection}>
          <h2 className={styles.mapTitle}>MAP</h2>
          <div className={styles.mapContainer}>
            <iframe
              title="store-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10852.061493130732!2d129.3275318949125!3d28.135964036936542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c78c11e6445ae59!2z44Ok44Oe44OP44K_44Oe44Oq44Oz44K144O844OT44K544GC44G-44KT!5e0!3m2!1sja!2s!4v1513580168304"
              allowFullScreen
              aria-hidden="false"
              tabIndex="0"
              loading="lazy"
              className={styles.iframe}
            ></iframe>
            <p className={styles.mapDescription}>空港から約1時間30分</p>
          </div>
        </section>

        <section className={styles.details}>
          <h2 className={styles.detailsTitle}>店舗概要</h2>
          <div className={styles.detailsContent}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th scope="col">項目</th>
                  <th scope="col">詳細</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">店舗名</th>
                  <td>マリンサービスあまん</td>
                </tr>
                <tr>
                  <th scope="row">代表</th>
                  <td>山畑 茂穂</td>
                </tr>
                <tr>
                  <th scope="row">所在地</th>
                  <td>〒894-1521 鹿児島県大島郡瀬戸内町清水古仁屋平原375-1</td>
                </tr>
                <tr>
                  <th scope="row">電話番号</th>
                  <td>
                    <a href="tel:0997724584" className={styles.link}>
                      0997-72-4584
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">FAX番号</th>
                  <td>0997-72-4588</td>
                </tr>
                <tr>
                  <th scope="row">メールアドレス</th>
                  <td>
                    <a href="mailto:info@amamiaman.com" className={styles.link}>
                      info@amamiaman.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">営業時間</th>
                  <td>8:00～17:00</td>
                </tr>
                <tr>
                  <th scope="row">定休日</th>
                  <td>不定休</td>
                </tr>
                <tr>
                  <th scope="row">支払い</th>
                  <td>現金のみ</td>
                </tr>
                <tr>
                  <th scope="row">駐車場</th>
                  <td>有り（10台）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <FooterNote text="表記価格は税込です。" />
        <SocialShare />
      </div>
    </main>
  );
};

export default StoreInformationPage;
