import styles from './SocialShare.module.css';
import { FaInstagram, FaLine } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialShare = () => {
    return (
        <section className={styles.socialShareSection}>
            <div className={styles.socialShareContainer}>
                <div className={styles.socialShareButtons}>
                    {/* <a 
                        href="https://www.instagram.com/amamiaman"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles.socialShareButton} ${styles.socialShareButtonInstagram}`}
                        aria-label="Instagramでフォローする"
                    >
                        <FaInstagram className={styles.socialShareIcon} />
                        Instagram
                    </a>
                    <a 
                        href="https://x.com/share?url=https://www.amamiaman.com/shop&text=店舗案内" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles.socialShareButton} ${styles.socialShareButtonX}`}
                        aria-label="Xでこのページをシェア"
                    >
                        <FaXTwitter className={styles.socialShareIcon} />
                        X
                    </a>
                    <a 
                        href="https://line.me/R/share?url=https://www.amamiaman.com/shop" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`${styles.socialShareButton} ${styles.socialShareButtonLine}`}
                        aria-label="LINEでこのページをシェア"
                    >
                        <FaLine className={styles.socialShareIcon} />
                        LINE
                    </a> */}
                </div>
            </div>
        </section>
    );
};

export default SocialShare;