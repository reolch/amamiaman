"use client";
import { useState, useEffect } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { rampartOne } from '@/app/fonts';
import NAV_ITEMS from './navItems';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // 開いているドロップダウンのhref

  const handleClickOutside = (event) => {
    if (!event.target.closest(`.${styles.globalNav}`) && !event.target.closest(`.${styles.menuIcon}`)) {
      setIsMenuOpen(false);
      if (window.innerWidth <= 768) {
        setOpenDropdown(null);
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

  const handleDropdownClick = (e, href) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setOpenDropdown((prev) => (prev === href ? null : href));
    }
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.topBar}>
        <div className={styles.logo}>
          <p>
            <Link href="/" className={rampartOne.className}>
              ヤマハタマリンサービスあまん
            </Link>
          </p>
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
          {NAV_ITEMS.map((item) =>
            item.dropdown ? (
              // ドロップダウンあり
              <li key={item.href} className={`${styles.navItem} ${styles.dropdownContainer}`}>
                <Link
                  href={item.href}
                  className={styles.dropdownButton}
                  onClick={(e) => handleDropdownClick(e, item.href)}
                  aria-expanded={openDropdown === item.href}
                >
                  {item.label} ▼
                </Link>
                <ul className={`${styles.dropdownMenu} ${openDropdown === item.href ? styles.show : ''}`}>
                  {item.dropdown.map((sub) => (
                    <li key={sub.href}>
                      <Link href={sub.href} className={styles.dropdownLink}>
                        {sub.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              // 通常リンク
              <li key={item.href} className={styles.navItem}>
                <Link href={item.href} className={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;