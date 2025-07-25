import styles from './Footer.module.css';

const Footer = () => {

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
        </footer>
    );
};

export default Footer;