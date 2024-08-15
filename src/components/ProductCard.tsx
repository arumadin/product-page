'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/ProductCard.module.scss'

type ProductProps = {
    id: number
    product_name: string
    price: number
    photo_main: {
        imgUrl: string
        imgAlt: string
    }
}


function ProductCard(props: ProductProps) {
    return (
        <Link
            href={{
                pathname: `/product/${props.id}`,
            }}
            className={styles.productCard}
        >
            <div className={styles.productCardImage}>
                <Image
                    src={props.photo_main.imgUrl}
                    width={200}
                    height={200}
                    alt='Picture of '
                    priority={false}
                />
            </div>
            <div className={styles.productDesc}>
                <div className={styles.productTitle}>
                    {props.product_name}
                </div>
                <div className={styles.productPrice}>
                    ${props.price}
                </div>
                <div className={styles.productCTA} onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                }}>
                    <button>
                        <span>Add to Cart</span>
                    </button>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard