import styles from '@/styles/Homepage.module.css'
import Link from 'next/link';
import Navbarmobile from '@/components/Navbarmobile'
import { useScroll, motion, useMotionValueEvent } from "framer-motion"
import NavbarItem from './NavbarItem';
import {useState} from "react";
import {useRouter} from 'next/router';

import styles2 from '@/styles/Navbarmobile.module.css'; // Import the module CSS file with necessary styles




export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrollPosition] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const router = useRouter()
  const pathname = router.pathname
  console.log(pathname)

  var colorwhite = "black"
  var navbg = "white"
  var isHome = false;
  if(pathname == '/' || pathname==""){
    colorwhite = "white"
    navbg = "rgba(255, 255, 255, 0)"
    isHome = true;
  }


  const [underlineColor, setUnderlineColor] = useState(colorwhite);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest>0){
      setScrollPosition(true)
      setUnderlineColor("black")
    }
    else{
      setScrollPosition(false)
      setUnderlineColor(colorwhite)
    }
  })
  const variants = {
    initial: {
      backgroundColor: navbg,
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

  // var curLocation = "/out"    //server
  var curLocation = "/~swagata"           //niser server
  // var curLocation = ""        // Local

  return (
  <>
        <div className={styles2.navbarContainer}>
      <div className={`${styles2.navbar} ${isOpen ? styles2.open : ''}`}>
        <ul>
          <li onClick={toggleNavbar}>X</li>
          {isHome?<></>:<li><Link legacyBehavior href={curLocation+"/"}><a className={styles2.navbarLink}>Home</a></Link></li>}
          <li><Link legacyBehavior href={curLocation+"/research"}><a className={styles2.navbarLink}>Research</a></Link></li>
          <li><Link legacyBehavior href={curLocation+"/people"}><a className={styles2.navbarLink}>People</a></Link></li>
          <li><Link legacyBehavior href={curLocation+"/publications"}><a className={styles2.navbarLink}>Publications</a></Link></li>
          <li><Link legacyBehavior href={curLocation+"/personal"}><a className={styles2.navbarLink}>Personal</a></Link></li>
          <li><Link legacyBehavior href={curLocation+"/contact"}><a className={styles2.navbarLink}>Contact</a></Link></li>
          
        </ul>
      </div>
      </div>

    <motion.div className={styles.navbar}
      initial="initial"
      animate={scrolled?"scroll":"initial"}
      variants={variants}
    >
          

        <div className={styles.navbarLeft}>
        <div onClick={toggleNavbar} className={styles.svgburger}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke={scrolled?"black":colorwhite}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <Link  href={curLocation+"/"} className={`${styles.navbarLeftHeading} ${scrolled||colorwhite=="black"?styles.listItemScroll:styles.listItemInitial}`}><h3>Neuroscience and Stem Cell Biology Lab</h3></Link>
        </div>
        <div className={styles.navbarRight}>
          {/* <NavbarItem path={curLocation+""} underlineColor={underlineColor}><a className={scrolled?styles.listItemScroll:styles.listItemInitial}>Home</a></NavbarItem> */}
          <NavbarItem path={curLocation+"/research"} underlineColor={underlineColor}><a className={scrolled||colorwhite=="black"?styles.listItemScroll:styles.listItemInitial}>Research</a></NavbarItem>
          <NavbarItem path={curLocation+"/people"} underlineColor={underlineColor}><a className={scrolled||colorwhite=="black"?styles.listItemScroll:styles.listItemInitial}>People</a></NavbarItem>
          <NavbarItem path={curLocation+"/publications"} underlineColor={underlineColor}><a className={scrolled||colorwhite=="black"?styles.listItemScroll:styles.listItemInitial}>Publications</a></NavbarItem>
          <NavbarItem path={curLocation+"/personal"} underlineColor={underlineColor}><a className={scrolled||colorwhite=="black"?styles.listItemScroll:styles.listItemInitial}>Personal</a></NavbarItem>
          <NavbarItem path={curLocation+"/contact"} underlineColor={underlineColor}><a className={scrolled||colorwhite=="black"?styles.listItemScroll:styles.listItemInitial}>Contact</a></NavbarItem>
        </div>

    </motion.div>
    </>
  )
}
