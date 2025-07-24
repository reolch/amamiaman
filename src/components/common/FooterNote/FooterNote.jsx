import styles from './FooterNote.module.css';

const FooterNote = () => {
    return (
        <p className={styles['footer-note__text']} role="note" aria-label="価格に関する注意事項">
            表記価格は税込です。
        </p>
    );
};

export default FooterNote;