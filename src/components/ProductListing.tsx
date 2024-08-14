'use client'
import React, { useEffect, useState } from 'react'
import { ReactNode } from 'react'
import styles from '../../styles/ProductListing.module.scss'
import ProductCard from './ProductCard'
import spacing from '../../styles/Spacing.module.scss'

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

export default function ProductListing() {
    const [product, setProduct] = useState<(ProductProps | undefined)[]>([])
    useEffect(() => {
        fetch('http://localhost:3000/api')
            .then((res) => res.json())
            .then((data) => {
                let productData = [...data]
                setProduct(productData)
            })
    }, [])
    
  return (
    <div>
        <h2>ProductListing</h2>
        <div className={`${styles.listingControl} ${spacing['mb-2']}`}>
            <div>Filter</div>
            <div>View Mode</div>
            <div>Sort</div>
        </div>
        <div className={styles.productListing}>
            {product && product.map((item) => {
                return item && <ProductCard key={item.id} {...item}></ProductCard>
                })}
        </div>
        <button className='loadMore'>
            Load More
        </button>
    </div>
  )
}
