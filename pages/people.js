import Layout from '@/components/layout'
// import '@/styles/sections.css'
import Image from 'next/image'
import Hamburger from '@/components/Hamburger'



export default function People () {
    return (
        <>
            <Layout>
                <div id="people">
                    {/* <h2>Research</h2>
                    <p>
                    Our research focuses on- 
                    </p>
                    <ol>
                        <li>Elucidating pathophysiological mechanisms of neurological disorders focusing on ion channels.</li>
                        <li>Creating novel brain models using human induced pluripotent stem cells (hiPSCs) from patients to study neurological disorders.</li>
                        <li>Translating novel mechanisms to develop therapy against neurological diseases. </li>
                    </ol> */}

                    <div id="people_body">
                        <h2>
                            Our Group
                        </h2>
                        <div id="peopleImageCentering">
                                <div id="peopleImageDiv">
                                <Image
                                    src="image2.jpg"
                                    alt="Our Group"
                                    id="peopleImage"
                                    // width="100"
                                    // height="100"
                                    // style={imageStyle}
                                    // className={styles.personalImage}
                                    fill
                                />
                                </div>
                            </div>



                        {/* <Hamburger></Hamburger> */}

                    </div>
                    
                </div>
            </Layout>
        </>
    )
}