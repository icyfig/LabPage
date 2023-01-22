import styles from '@/styles/HomePage.module.css'
import Image from 'next/image'
import Layout from '@/components/layout'

export default function homePage() {
    return(
        <>
            <Layout>
                <div className={styles.CarouTemp}>
                    <Image 
                        src="/bioTemplate.jpg"
                        // width={1600}
                        // height={400}
                        className={styles.CarouselImage}
                        fill
                    />
                </div>
            </Layout>
        </>
    )
}