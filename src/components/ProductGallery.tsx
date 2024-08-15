'use client'
import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/ProductGallery.module.scss'
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import SwiperTypes from 'swiper'

type ProductGalleryProps = {
    imgUrl: string,
    imgAlt: string
}

type ProductProps = {
    id: number
    gallery: [
        {
            imgUrl: string
            imgAlt: string
        }
    ]
}

function ProductGallery({ params }: { params: { productId: string } }) {
    const [photos, setPhotos] = useState<(ProductGalleryProps[] | null)>(null)
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/arumadin/product-db/data')
            .then((res) => res.json())
            .then((data) => {
                let productDataByID = data.filter((item: ProductProps) => item.id === parseInt(params.productId))[0]
                let productPhotos = productDataByID.gallery
                setPhotos([...productPhotos])
            })
    }, [params.productId])


    return (
        <div className={styles.carouselWrap}>
            <Swiper
                loop={false}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mainSwiper"
            >
                {
                    photos && (photos.map((photo, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <Image
                                    src={photo?.imgUrl}
                                    width={400}
                                    height={400}
                                    alt='Picture of '
                                    priority={false}
                                />
                            </SwiperSlide>
                        )
                    }))
                }
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={false}
                spaceBetween={10}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="navSwiper"
            >
                {
                    photos && (photos.map((photo, idx) => {
                        return (
                            <SwiperSlide key={idx}>
                                <Image
                                    src={photo.imgUrl}
                                    width={400}
                                    height={400}
                                    alt={photo.imgAlt}
                                    priority={false}
                                />
                            </SwiperSlide>
                        )
                    }))
                }
            </Swiper>
        </div>
    )
}

export default ProductGallery