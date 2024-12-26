// src/components/GlassBoatPage/FooterNote.jsx
import React from 'react';
import styles from './FooterNote.module.css'; // CSS Modulesをインポート

const FooterNote = () => {
    return (
        <p className={styles['footer-note__text']}>表記価格は税込です。</p>
    );
};

export default FooterNote;
