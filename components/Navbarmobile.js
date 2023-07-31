import React, { useState } from 'react';
import styles from '@/styles/Navbarmobile.module.css'; // Import the module CSS file with necessary styles

const AnimatedNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={`${styles.navbar} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.hamburgerMenu} onClick={toggleNavbar}>
        <div className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}></div>
      </div>
    </div>
  );
};

export default AnimatedNavbar;