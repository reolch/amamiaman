import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.footer__inner}>
        <div className={styles.footer__grid}>
          {/* サービス案内 */}
          <nav
            aria-label="マリンアクティビティナビゲーション"
            className={styles.footer__section}
          >
            <h3 className={styles.footer__sectionTitle}>
              マリンアクティビティ
            </h3>
            <ul className={styles.footer__links}>
              <li>
                <Link href="/snorkelling" className={styles.footer__link}>
                  シュノーケリング
                </Link>
              </li>
              <li>
                <Link href="/seaKayak" className={styles.footer__link}>
                  シーカヤック
                </Link>
              </li>
              <li>
                <Link href="/glassboat" className={styles.footer__link}>
                  グラスボート
                </Link>
              </li>
              <li>
                <Link href="/lodging" className={styles.footer__link}>
                  宿泊施設
                </Link>
              </li>
              <li>
                <Link href="/other" className={styles.footer__link}>
                  その他の施設
                </Link>
              </li>
            </ul>
          </nav>

          {/* 店舗情報 */}
          <div className={styles.footer__section}>
            <h3 className={styles.footer__sectionTitle}>店舗情報</h3>
            <ul className={styles.footer__info}>
              <li className={styles.footer__infoItem}>
                <span className={styles.footer__infoLabel}>電話番号</span>
                <a href="tel:0997724584" className={styles.footer__infoValue}>
                  0997-72-4584
                </a>
              </li>
              <li className={styles.footer__infoItem}>
                <span className={styles.footer__infoLabel}>住所</span>
                <span className={styles.footer__infoValue}>
                  〒894-1521
                  <br />
                  鹿児島県大島郡瀬戸内町
                  <br />
                  清水３７５−１
                </span>
              </li>
              <li className={styles.footer__infoItem}>
                <span className={styles.footer__infoLabel}>営業時間</span>
                <span className={styles.footer__infoValue}>8:00〜17:00</span>
              </li>
            </ul>
          </div>

          {/* その他 */}
          <nav
            aria-label="サイトナビゲーション"
            className={styles.footer__section}
          >
            <h3 className={styles.footer__sectionTitle}>サイト案内</h3>
            <ul className={styles.footer__links}>
              <li>
                <Link href="/" className={styles.footer__link}>
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/passion" className={styles.footer__link}>
                  あまんのこだわり
                </Link>
              </li>
              <li>
                <Link href="/access" className={styles.footer__link}>
                  アクセス
                </Link>
              </li>
              <li>
                <Link href="/contact" className={styles.footer__link}>
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={styles.footer__bottomInner}>
          <p className={styles.footer__text}>
            Copyright © ヤマハタマリンサービスあまん All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
