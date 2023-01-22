import styles from '@/styles/HomePage.module.css'
import Image from 'next/image'
import Link from 'next/link'


export default function Navbar(){
    return (
        <div className={styles.navBar}>
            <div className={styles.navBarLeft}>
                <Link href="/" className={styles.listItem}>Lab</Link>
            </div>
            <div className={styles.navBarRight}>
                <Link href="/" className={styles.listItem}>Home</Link>
                <Link href="/" className={styles.listItem}>Research</Link>
                <Link href="/" className={styles.listItem}>Members</Link>
                <Link href="/" className={styles.listItem}>Publications</Link>
                <Link href="/contact" className={styles.listItem}>Contact</Link>
            </div>
        </div>
    )
}

