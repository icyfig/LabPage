import { useAnimation, motion, easeInOut } from "framer-motion"
import styles from '@/styles/Homepage.module.css'
import Link from 'next/link';

const NavbarItem = ({ children, path, underlineColor }) => {
  const controls = useAnimation();
  const variants = {
    initial: {
      scaleX: 0,
      width: "100%",
      height: "6px",
      borderRadius: "3px",
    },
    hover: {
      scaleX: 1,
      transition: {
        type: easeInOut,
        duration: 0.2,
      },
    },
  }

  const handleMouseEnter = () => {
    controls.start("hover")
  }

  const handleMouseLeave = () => {
    controls.start("initial")
  }

  return (
    <>
      <div className={styles.listItemDiv}>
        <div className={styles.emptyDiv}></div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><Link legacyBehavior href={path}>{children}</Link></div>
        <motion.div
          style={{backgroundColor:underlineColor}}
          initial="initial"
          variants={variants}
          animate={controls}
        >
        </motion.div>  
      </div>      
    </>
  )
}

export default NavbarItem;
