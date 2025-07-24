"use client";
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMarineDropdownOpen, setIsMarineDropdownOpen] = useState(false);
  const [isLodgingDropdownOpen, setIsLodgingDropdownOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${styles.globalNav}`) && !event.target.closest(`.${styles.menuIcon}`)) {
      setIsMenuOpen(false);
      if (window.innerWidth <= 768) {
        setIsMarineDropdownOpen(false);
        setIsLodgingDropdownOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.topBar}>
        
        <div className={styles.logo}>
          <h1>
            <a href="/" className={styles.rampart_one_regular}>
              ヤマハタマリンサービスあまん
            </a>
          </h1>
        </div>
        <div className={styles.contact}>
          <FaPhone className={styles.phoneIcon} />
          <a href="tel:0997724584" className={styles.phoneNumber}>
            0997-72-4584
          </a>
        </div>
        <div className={styles.menuButtonContainer}>
          <button
            className={styles.menuIcon}
            onClick={toggleMenu}
            aria-label="メニューを切り替え"
            aria-expanded={isMenuOpen}
            aria-controls="global-navigation"
            type="button"
          >
            {isMenuOpen ? (
              <FaTimes className={styles.menuToggleIcon} />
            ) : (
              <FaBars className={styles.menuToggleIcon} />
            )}
          </button>
        </div>
      </div>
      <nav
        className={`${styles.globalNav} ${isMenuOpen ? styles.open : ''}`}
        aria-label="メインナビゲーション"
        id="global-navigation"
      >
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/" className={styles.navLink}>
              HOME
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/passion" className={styles.navLink}>
              あまんのこだわり
            </Link>
          </li>
          <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
            <Link
              href="/snorkelling"
              className={styles.dropdownButton}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setIsMarineDropdownOpen(!isMarineDropdownOpen);
                }
              }}
              aria-expanded={isMarineDropdownOpen}
            >
              マリンアクティビティ ▼
            </Link>
            <ul className={`${styles.dropdownMenu} ${isMarineDropdownOpen ? styles.show : ''}`}>
              <li>
                <Link href="/snorkelling" className={styles.dropdownLink}>
                  シュノーケリング
                </Link>
              </li>
              <li>
                <Link href="/seaKayak" className={styles.dropdownLink}>
                  シーカヤック
                </Link>
              </li>
              <li>
                <Link href="/glassboat" className={styles.dropdownLink}>
                  グラスボート
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${styles.navItem} ${styles.dropdownContainer}`}>
            <Link
              href="/lodging"
              className={styles.dropdownButton}
              onClick={(e) => {
                if (window.innerWidth <= 768) {
                  e.preventDefault();
                  setIsLodgingDropdownOpen(!isLodgingDropdownOpen);
                }
              }}
              aria-expanded={isLodgingDropdownOpen}
            >
              施設紹介 ▼
            </Link>
            <ul className={`${styles.dropdownMenu} ${isLodgingDropdownOpen ? styles.show : ''}`}>
              <li>
                <Link href="/lodging" className={styles.dropdownLink}>
                  宿泊施設
                </Link>
              </li>
              <li>
                <Link href="/other" className={styles.dropdownLink}>
                  その他の施設
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.navItem}>
            <Link href="/access" className={styles.navLink}>
              アクセス
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" className={styles.navLink}>
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;