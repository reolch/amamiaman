// src/components/Header/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../../assets/logo.svg'; // ロゴ画像をインポート

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <img src={logo} alt="マリンサービスあまんのロゴ" className={styles.logoImage} />
        </div>
        <button
          className={styles.menuIcon}
          onClick={toggleMenu}
          aria-label="メニューを切り替え"
          aria-expanded={isMenuOpen}
          aria-controls="global-navigation"
        >
          {isMenuOpen ? (
            <FaTimes className={styles.menuToggleIcon} />
          ) : (
            <FaBars className={styles.menuToggleIcon} />
          )}
        </button>
        <div className={styles.contact}>
          <FaPhone className={styles.phoneIcon} />
          <a href="tel:0997724584" className={styles.phoneNumber}>
            0997-72-4584
          </a>
        </div>
      </div>
      <nav
        className={`${styles.globalNav} ${isMenuOpen ? styles.open : ''}`}
        aria-label="メインナビゲーション"
        id="global-navigation"
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              HOME
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/passion" className={styles.navLink}>
              あまんのこだわり
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/snorkelling" className={styles.navLink}>
              シュノーケリング
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/seaKayak" className={styles.navLink}>
              シーカヤック
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/glassboat" className={styles.navLink}>
              グラスボート
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/lodging" className={styles.navLink}>
              民宿
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/access" className={styles.navLink}>
              アクセス
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contact" className={styles.navLink}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
