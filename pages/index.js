import styles from '@/styles/HomePage.module.css'
import Image from 'next/image'
import Layout from '@/components/layout'
import CarouselComponent from '@/components/carouselComponent'

export default function homePage() {
    return(
        <>
            <Layout>
                <div className={styles.CarouTemp}>
                    {/* <Image 
                        src="/bioTemplate.jpg"
                        // width={1600}
                        // height={400}
                        className={styles.CarouselImage}
                        fill
                    /> */}

                    <CarouselComponent />

                </div>

                <div id="research">
                    <h2>Research</h2>
                </div>

                <div id="members">
                    <h2>Members</h2>
                </div>

                <div id="publications">
                    <h2>Publications</h2>
                </div>
            </Layout>
        </>
    )
}