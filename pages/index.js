import styles from '@/styles/Homepage.module.css'
import Image from 'next/image'
import Layout from '@/components/layout'
import CarouselComponent from '@/components/carouselComponent'
import { Button, Space } from 'antd';


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

                {/* <div id="research">
                <h2>
                    Our research focuses on- 
                    </h2>
                    <ol id="research_list">
                        <li>Elucidating pathophysiological mechanisms of neurological disorders focusing on ion channels.</li>
                        <li>Creating novel brain models using human induced pluripotent stem cells (hiPSCs) from patients to study neurological disorders.</li>
                        <li>Translating novel mechanisms to develop therapy against neurological diseases. </li>
                    </ol>

                </div> */}

            </Layout>
        </>
    )
}