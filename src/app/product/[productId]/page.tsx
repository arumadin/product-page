'use client'
import React, {useState, useEffect} from 'react'
import styles from './ProductPage.module.scss'
import Image from 'next/image'
import ProductGallery from '@/components/ProductGallery'
import containerStyles from '../../../../styles/Container.module.scss'

type ProductProps = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    images: string[]
    rating: {
        rate: number
        count: number
        }
}

function Page({params} : {params: {productId:string}}) {
    // call api with id
    const [product, setProduct] = useState<(ProductProps | undefined)>(undefined)
    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                let productDataByID = data.filter((item: ProductProps) => item.id === parseInt(params.productId) )[0]
                setProduct({...productDataByID})
            })
    }, [])

  return (
    <main className={containerStyles.container}>
        {product && (
            <div>
            <h2>Product {params.productId}</h2>
            <div className={styles.productWrap}>
                <div className={styles.productPhoto}>
                    <div className="product-carousel">
                        <Image
                            src={product.image}
                            width={200}
                            height={200}
                            alt='Picture of '
                            priority={false}
                        />
                        {product.images && (
                            product.images.map((image: string, idx: number) => {
                                return (
                                    <Image
                                        key={idx}
                                        src={image}
                                        width={200}
                                        height={200}
                                        alt='Picture of '
                                        priority={false}
                                    />
                                )
                            })
                        )}
                    </div>
                    <div>
                        <ProductGallery></ProductGallery>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <h2>{product.title}</h2>
                    <div>Add to wishlist</div>
                    <p>Price: $ {product.price}</p>
                    <p>{product.description}</p>
                    <div>Amount</div>
                    <button>Add to Cart</button>
                    <div className="accordion">
                        <div className="product-details">
                            {product.description}
                        </div>
                        <div className="delivery">Delivery and returns</div>
                    </div>
                </div>
                <div className={styles.productReview}>
                    <h4>Review</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, repudiandae. Corporis dolorum ratione animi quisquam delectus molestias perferendis numquam sed.</p>

                </div>
                    
            </div>
            <div className="recommendations">
                You may also like...
            </div>
            </div>
        )}
    </main>
        
  )
}

export default Page