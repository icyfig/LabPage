import Layout from '@/components/layout'
// import '@/styles/sections.css'
import Image from 'next/image'


export default function Research () {
    return (
        <>
            <Layout>
                <div id="research">
                    

                    <div id="research_body">
                    <div>
                            <div id="researchImageCentering">
                                <div id="researchImageDiv">
                                <Image
                                    src="image1.png"
                                    alt="Personal Image"
                                    id="researchImage"
                                    // width="100"
                                    // height="100"
                                    // style={imageStyle}
                                    // className={styles.personalImage}
                                    fill
                                />
                                </div>
                            </div>

                    </div>

                    <h2 id="research_heading">
                    Our research focuses on- 
                    </h2>
                    <ol id="research_list">
                        <li>Elucidating pathophysiological mechanisms of neurological disorders focusing on ion channels.</li>
                        <li>Creating novel brain models using human induced pluripotent stem cells (hiPSCs) from patients to study neurological disorders.</li>
                        <li>Translating novel mechanisms to develop therapy against neurological diseases. </li>
                    </ol>

                    </div>
                    
                </div>
            </Layout>
        </>
    )
}