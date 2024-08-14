'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/ProductCard.module.scss'

// const CTAButton = React.forwardRef(({onClick}, ref) => {
//     return (
//         <button onClick={onClick} ref={ref}>
//             Add to Cart
//         </button>
//     )
// })

type ProductProps = {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
        rate: number
        count: number
        }
}


function ProductCard(props : ProductProps) {
  return (
    <Link
        href={{
            pathname: `/product/${props.id}`,
        }}
        className={styles.productCard}
    >
            <div className={styles.productCardImage}>
                <Image
                    src={props.image}
                    width={200}
                    height={200}
                    alt='Picture of '
                    priority={false}
                />
            </div>
            <div className={styles.productDesc}>
                <div className={styles.productTitle}>
                    {props.title}
                </div>
                <div className={styles.productPrice}>
                    ${props.price}
                </div>
                <div className={styles.productCTA} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}>
                    <button>
                        Add to Cart
                    </button>
                    
                </div>
            </div>
            

    </Link>
  )
}

export default ProductCard