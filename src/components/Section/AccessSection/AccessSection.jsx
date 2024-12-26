// src/components/Section/AccessSection/AccessSection.jsx
import React from 'react';
import styles from './AccessSection.module.css';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaFax,
  FaClock,
  FaParking,
  FaDirections,
} from 'react-icons/fa';

const AccessSection = () => {
  return (
    <section id="access" className={styles.accessSection}>
      <div className={styles.accessSectionContainer}>
        <h2 className={styles.accessSectionTitle}>アクセス</h2>
        <div className={styles.accessSectionCardsWrapper}>
          {/* アクセス情報カード */}
          <div className={styles.accessSectionInfoCard}>
            <div className={styles.accessSectionInfoList}>
              {/* 各情報項目 */}
              <div className={styles.accessSectionInfoItem}>
                <FaMapMarkerAlt className={styles.accessSectionIcon} />
                <div className={styles.accessSectionInfoText}>
                  <h3 className={styles.accessSectionInfoTitle}>住所</h3>
                  <p className={styles.accessSectionInfoDescription}>
                    〒894-1521
                    <br />
                    鹿児島県大島郡瀬戸内町清水古仁屋平原375-1
                  </p>
                </div>
              </div>

              <div className={styles.accessSectionInfoItem}>
                <FaPhone className={styles.accessSectionIcon} />
                <div className={styles.accessSectionInfoText}>
                  <h3 className={styles.accessSectionInfoTitle}>電話番号</h3>
                  <p className={styles.accessSectionInfoDescription}>
                    <a href="tel:0997-72-4584">0997-72-4584</a>
                  </p>
                </div>
              </div>

              <div className={styles.accessSectionInfoItem}>
                <FaFax className={styles.accessSectionIcon} />
                <div className={styles.accessSectionInfoText}>
                  <h3 className={styles.accessSectionInfoTitle}>FAX番号</h3>
                  <p className={styles.accessSectionInfoDescription}>
                    0997-72-4588
                  </p>
                </div>
              </div>

              <div className={styles.accessSectionInfoItem}>
                <FaClock className={styles.accessSectionIcon} />
                <div className={styles.accessSectionInfoText}>
                  <h3 className={styles.accessSectionInfoTitle}>営業時間</h3>
                  <p className={styles.accessSectionInfoDescription}>
                    8:00～17:00　不定休
                  </p>
                </div>
              </div>

              <div className={styles.accessSectionInfoItem}>
                <FaParking className={styles.accessSectionIcon} />
                <div className={styles.accessSectionInfoText}>
                  <h3 className={styles.accessSectionInfoTitle}>駐車場</h3>
                  <p className={styles.accessSectionInfoDescription}>
                    有り（10台）
                  </p>
                </div>
              </div>

              <div className={styles.accessSectionInfoItem}>
                <FaDirections className={styles.accessSectionIcon} />
                <div className={styles.accessSectionInfoText}>
                  <h3 className={styles.accessSectionInfoTitle}>アクセス</h3>
                  <p className={styles.accessSectionInfoDescription}>
                    空港から約1時間30分
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* 地図カード */}
          <div className={styles.accessSectionMapCard}>
            <div className={styles.accessSectionMapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10852.061493130732!2d129.3275318949125!3d28.135964036936542!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4c78c11e6445ae59!2z44Ok44Oe44OP44K_44Oe44Oq44Oz44K144O844OT44K544GC44G-44KT!5e0!3m2!1sja!2s!4v1513580168304"
                className={styles.accessSectionMapIframe}
                allowFullScreen
                loading="lazy"
                title="店舗の地図"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessSection;
