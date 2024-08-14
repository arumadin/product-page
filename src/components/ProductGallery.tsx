'use client'
import React, {useState, useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/ProductGallery.module.scss'

import { Pagination, Navigation } from 'swiper/modules';


// import swiper
import 'swiper/css';
// import { register } from 'swiper/element/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



type ProductGalleryProps = {
    imageURL: string
}

function ProductGallery() {
    const [photos, setPhotos] = useState<(ProductGalleryProps | undefined)[]>([])
    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                // let productDataByID = data.filter((item: ProductProps) => item.id === parseInt(params.productId) )[0]
                // let productData = [...data]
                // setPhotos(productData)
            })
    }, [])

  return (
    <div>
        <div>ProductGallery</div>
        <div className=' carousel-wrap'>
            <Swiper
                className="carousel-swiper"
                pagination={{
                    clickable: true,
                    type: 'fraction',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                slidesPerView='auto'
                breakpoints={{
                    320: {
                        // slidesPerView: 1,
                        // spaceBetween: 10,
                    },
                    769: {
                        // slidesPerView: 1,
                        // spaceBetween: 15,
                    },
                    1920: {
                        // slidesPerView: 1,
                        // spaceBetween: 30,
                    }
                    }}
                loop={true}
            >
                <SwiperSlide>1</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
                <SwiperSlide>5</SwiperSlide>
                {/* {carouselData.map((slide:CarouselItem, i:number) => (
                    <SwiperSlide key={`${i}`} virtualIndex={i}>
                        <div>
                            <p className='slide-title'>
                                {slide.itemTitle}
                                </p> 
                                <p>{slide.itemText}</p>
                        </div>
                    </SwiperSlide>
                ))} */}
                
            </Swiper>

        <div className="swiper-btn-prev"></div>
        <div className="swiper-btn-next"></div>
    </div>
    </div>
  )
}

export default ProductGallery