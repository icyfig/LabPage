import React from 'react';
import { Carousel } from 'antd';
import styles from '@/styles/Homepage.module.css'
import Image from 'next/image'
import { Icon } from 'antd'
import { RightOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import { useRef } from "react";




export default function CarouselComponent() {

  const slider = useRef(null);
//   const carouselElement = useRef();
  const carouselImages = ["image1.png", "image2.jpg"];
  
  const next = () => {
    slider.current.next()
  }

  const prev = () => {
    slider.current.prev()
  }

  return (
    <>
        <Button type="link" className={styles.carouselButtonLeft} onClick={prev} ><Image src="left-arrow.svg" width="50" height="50"/></Button>
        <Carousel ref={slider} autoplay autoplaySpeed={3000}>
        <div className={styles.carouselContentStyle}>
            <Image
                src={carouselImages[0]}
                alt="Carousel Image"
                className={styles.carouselImage}
                fill
                />
            <div className={styles.imagecaption}>
              <div className={styles.imagecaptionbg}>
              <h3 className={styles.captionText}>Cerebral organoid generated from hiPSCs of an Alzheimer’s Disease patient</h3>
              </div>
            </div>
        </div>
        <div className={styles.carouselContentStyle}>
            <Image
                src={carouselImages[1]}
                alt="Carousel Image"
                className={styles.carouselImage}
                fill
                />
            <div className={styles.imagecaption}>
              <div className={styles.imagecaptionbg}>
              <h3 className={styles.captionText}>Our Group</h3>
              </div>
            </div>

        </div>
        {/* <div className={styles.carouselContentStyle}>
            <Image
                src={carouselImages[2]}
                alt="Carousel Image"
                className={styles.carouselImage}
                fill
                />
        </div>
        <div className={styles.carouselContentStyle}>
            <Image
                src={carouselImages[3]}
                alt="Carousel Image"
                className={styles.carouselImage}
                fill
                />
        </div> */}
        </Carousel>
        <Button type="link" className={styles.carouselButtonRight} onClick={next}  ><Image src="right-arrow.svg" width="50" height="50"/></Button>
    </>
  )
};