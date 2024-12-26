// Footer.jsx
import React from 'react';
import styles from './Footer.module.css'; // Import CSS Module

import { Link } from 'react-router-dom';

const Footer = () => {

    const scrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__nav}>
                <div className={styles.footer__container}>
                    <nav aria-label="フッターナビゲーション">
                        <ul className={styles.footer__links}>
                            <li className={styles.footer__linkItem}>
                                <Link to="/" className={styles.footer__link}>
                                    HOME
                                </Link>
                            </li>
                            <li className={styles.footer__linkItem}>
                                <Link to="/shop" className={styles.footer__link}>
                                    店舗案内
                                </Link>
                            </li>
                            <li className={styles.footer__linkItem}>
                                <Link to="/sitemap" className={styles.footer__link}>
                                    サイトマップ
                                </Link>
                            </li>
                            <li className={styles.footer__linkItem}>
                                <Link to="/policy" className={styles.footer__link}>
                                    プライバシーポリシー
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__container}>
                    <p className={styles.footer__text}>Copyright © マリンサービスあまん All Rights Reserved.</p>
                </div>
            </div>
            <div className={styles.footer__backToTop}>
                <a href="#top" onClick={scrollToTop} className={styles.footer__backToTopLink} aria-label="ページのトップへ戻る">↑ Top</a>
            </div>
        </footer>
    );
};

export default Footer;
