import React from 'react';
import { Carousel } from 'antd';
import styles from '@/styles/Homepage.module.css'
import Image from 'next/image'


export default function CarouselComponent() {
  const carouselImages = ["/researcher-in-lab.jpg","/researcher-in-lab2.jpg","/researcher-in-lab3.jpg","/researcher-in-lab4.jpg","/researcher-in-lab5.jpg"];
  return (
    <Carousel autoplay autoplaySpeed={3000}>
      <div className={styles.carouselContentStyle}>
        <Image
              src={carouselImages[0]}
              alt="Carousel Image"
              className={styles.carouselImage}
              fill
            />
      </div>
      <div className={styles.carouselContentStyle}>
        <Image
              src={carouselImages[1]}
              alt="Carousel Image"
              className={styles.carouselImage}
              fill
            />
      </div>
      <div className={styles.carouselContentStyle}>
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
      </div>
    </Carousel>
  )
};