import styles from '@/styles/Homepage.module.css'
import Link from 'next/link';
import { useScroll, motion, useMotionValueEvent } from "framer-motion"
import NavbarItem from './NavbarItem';
import {useState} from "react";


export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrollPosition] = useState(false);
  const [underlineColor, setUnderlineColor] = useState("white");
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>0){
      setScrollPosition(true)
      setUnderlineColor("black")
    }
    else{
      setScrollPosition(false)
      setUnderlineColor("white")
    }
  })
  const variants = {
    initial: {
      backgroundColor: "rgba(255, 255, 255, 0)",
      boxShadow: "none",
      borderBottom: "2px solid rgba(255, 255, 255, 0.2)",
    },
    scroll: {
      backgroundColor: "rgba(255, 255, 255, 1)",
      boxShadow: "0 1px 15px 0 rgba(0,0,0,.2)",
      color: "black",
      borderBottom: "none",
      height: "12vh",
    }
  }

  return (
    <motion.div className={styles.navbar}
      initial="initial"
      animate={scrolled?"scroll":"initial"}
      variants={variants}
    >
        <div className={styles.navbarLeft}>
          <Link href="/" className={scrolled?styles.listItemScroll:styles.listItemInitial}><h2>Lab</h2></Link>
        </div>
        <div className={styles.navbarRight}>
          <NavbarItem path="/" underlineColor={underlineColor}><a className={scrolled?styles.listItemScroll:styles.listItemInitial}>Home</a></NavbarItem>
          <NavbarItem path="/#research" underlineColor={underlineColor}><a className={scrolled?styles.listItemScroll:styles.listItemInitial}>Research</a></NavbarItem>
          <NavbarItem path="/#members" underlineColor={underlineColor}><a className={scrolled?styles.listItemScroll:styles.listItemInitial}>Members</a></NavbarItem>
          <NavbarItem path="/#publications" underlineColor={underlineColor}><a className={scrolled?styles.listItemScroll:styles.listItemInitial}>Publications</a></NavbarItem>
          <NavbarItem path="/#contact" underlineColor={underlineColor}><a className={scrolled?styles.listItemScroll:styles.listItemInitial}>Contact</a></NavbarItem>
        </div>
    </motion.div>
  )
}
