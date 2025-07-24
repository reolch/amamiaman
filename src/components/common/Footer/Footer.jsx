"use client";
import styles from './Footer.module.css';

const Footer = () => {
    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer} role="contentinfo">
            <div className={styles.footer__nav}>
                <div className={styles.footer__container}>
                    <nav aria-label="フッターナビゲーション">
                        <ul className={styles.footer__links}>
                            <li className={styles.footer__linkItem}>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__container}>
                    <p className={styles.footer__text}>
                        Copyright © ヤマハタマリンサービスあまん All Rights Reserved.
                    </p>
                </div>
            </div>
            <div className={styles.footer__backToTop}>
                <a
                    href="#top"
                    onClick={scrollToTop}
                    className={styles.footer__backToTopLink}
                    aria-label="ページのトップへ戻る"
                    role="button"
                >
                    ↑ Top
                </a>
            </div>
        </footer>
    );
};

export default Footer;