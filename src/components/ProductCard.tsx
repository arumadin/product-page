'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/ProductCard.module.scss'
import stylesPrice from '../app/product/[productId]/ProductPage.module.scss'

type ProductProps = {
    id: number
    product_name: string
    price: number
    discount: number
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
                <div className={stylesPrice.productPrice}>
                    {/* ${props.price} */}
                    {props.discount !== 0 && <span className={stylesPrice.priceBeforeDiscount}>${props.price}</span>}
                    ${props.discount !== 0 ? ((100 - props.discount) / 100 * props.price) + ' ' : props.price}
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