// src/components/SocialShare/SocialShare.jsx
import React from 'react';
import styles from './SocialShare.module.css'; // CSS Modulesをインポート
import { FaFacebookF, FaTwitter, FaLine } from 'react-icons/fa';

const SocialShare = () => {
    return (
        <section className={styles['social-share__section']}>
            <div className={styles['social-share__container']}>
                <div className={styles['social-share__buttons']}>
                    <a 
                        href="https://www.facebook.com/sharer/sharer.php?u=https://www.amamiaman.com/shop" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles['social-share__button']} ${styles['social-share__button--facebook']}`}
                        aria-label="Facebookでこのページをシェア"
                    >
                        <FaFacebookF className={styles['social-share__icon']} />
                        Facebook
                    </a>
                    <a 
                        href="https://twitter.com/intent/tweet?url=https://www.amamiaman.com/shop&text=店舗案内" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles['social-share__button']} ${styles['social-share__button--twitter']}`}
                        aria-label="Twitterでこのページをシェア"
                    >
                        <FaTwitter className={styles['social-share__icon']} />
                        Twitter
                    </a>
                    <a 
                        href="https://line.me/R/share?url=https://www.amamiaman.com/shop" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles['social-share__button']} ${styles['social-share__button--line']}`}
                        aria-label="LINEでこのページをシェア"
                    >
                        <FaLine className={styles['social-share__icon']} />
                        LINE
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialShare;
