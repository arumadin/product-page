'use client'
import React, { useState, useEffect, ReactEventHandler, EventHandler } from 'react'
import styles from './ProductPage.module.scss'
import ProductGallery from '@/components/ProductGallery'
import containerStyles from '../../../../styles/Container.module.scss'
import AccordionPanel from '@/components/AccordionPanel'
import Spacing from '../../../../styles/Spacing.module.scss'
import Reviews from '@/components/Reviews'
import ProductVariant from '@/components/ProductVariant'

type SizeVariant = {
    option: string
    price: number
}
interface VariantProps {
    size?: SizeVariant[]
    flavor?: string[]
}

type ProductProps = {
    id: number
    product_name: string
    price: number
    discount: number
    product_description: string
    category: string
    photo_main: {
        imgUrl: string
        imgAlt: string
    }
    variant: VariantProps
    reviews: [
        {
            review: string
            rating: number
        }
    ]
}

function Page({ params }: { params: { productId: string } }) {
    // call api with id
    const [product, setProduct] = useState<(ProductProps)>()
    const [variant, setVariant] = useState<(SizeVariant)>()
    const [cart, setCart] = useState<ProductProps[]>([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/arumadin/product-db/data')
            .then((res) => res.json())
            .then((data) => {
                let productDataByID = data.filter((item: ProductProps) => item.id === parseInt(params.productId))[0]
                let selectedVar;
                if (productDataByID.variant.size) {
                    selectedVar = productDataByID.variant.size.find((item: any) => item[0])
                }
                setVariant({ ...selectedVar })
                setProduct({ ...productDataByID })
            })
    }, [])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const variantPrice = parseInt(e.currentTarget.value);
        let updatedProduct: any = { ...product, price: variantPrice }
        setProduct({ ...updatedProduct })
    }

    const handleAddToCart = () => {
        let item: any = { ...product }
        setCart(prevCart => [...prevCart, { ...item }])
    }

    return (
        <main className={containerStyles.container}>
            {product && (
                <>
                    <div className={styles.productWrap}>
                        <div className={styles.productPhoto}>
                            <ProductGallery params={params}></ProductGallery>
                        </div>
                        <div className={styles.productInfo}>
                            <h2>{product.product_name}</h2>
                            <p className={styles.price}>
                                {product.discount !== 0 && <span className={styles.priceBeforeDiscount}>${product.price}</span>}
                                ${product.discount !== 0 ? ((100 - product.discount) / 100 * product.price) + ' ' : product.price}
                            </p>
                            <p>{product.product_description}</p>
                            <ProductVariant product={product} handleChange={handleChange}></ProductVariant>
                            <button
                                onClick={handleAddToCart}
                                className={`${Spacing['mb-4']} ${Spacing['mt-2']}`}
                            >
                                <span>Add to Cart</span>
                            </button>
                            <AccordionPanel title="Product Details">
                                {product.product_description}
                            </AccordionPanel>
                            <AccordionPanel title="Delivery & Returns">
                                <ul>
                                    <li>Orders are typically delivered within 3 hours from order placement, subject to availability and delivery area.</li>
                                    <li>A delivery fee may apply, depending on the order value and delivery distance.</li>
                                    <li>Customers have 3 days to return damaged or incorrect items for a full refund or replacement.</li>
                                    <li>Perishable items cannot be returned due to hygiene reasons.</li>
                                    <li>For returns, customers must contact customer service within 3 hours of delivery to initiate the return process.</li>
                                </ul>
                            </AccordionPanel>
                        </div>

                        <Reviews product={product}></Reviews>

                    </div>
                </>
            )}
        </main>

    )
}

export default Page