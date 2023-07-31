import React from 'react';
import styles from '@/styles/Hamburger.module.css';

const HamburgerMenu = ({ isOpen, onClick }) => {
  return (
    <div className={styles.hamburgerMenu} onClick={onClick}>
      <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
      <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
    </div>
  );
};

export default HamburgerMenu;
