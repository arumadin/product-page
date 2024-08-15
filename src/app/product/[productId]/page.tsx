'use client'
import React, { useState, useEffect, ReactEventHandler, EventHandler } from 'react'
import styles from './ProductPage.module.scss'
import ProductGallery from '@/components/ProductGallery'
import containerStyles from '../../../../styles/Container.module.scss'
import AccordionPanel from '@/components/AccordionPanel'
import ToggleButton from '../../../../styles/ToggleButton.module.scss'
import Spacing from '../../../../styles/Spacing.module.scss'

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
        let updatedProduct:any= { ...product, price: variantPrice }
        setProduct({ ...updatedProduct })
    }

    const handleAddToCart = () => {
        let item:any = {...product}
        setCart(prevCart => [...prevCart, {...item}])
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
                            {/* <div>Add to wishlist</div>
                    <div>rating</div> */}
                            <p className={styles.price}>
                                {product.discount !== 0 && <span className={styles.priceBeforeDiscount}>${product.price}</span>}
                                ${product.discount !== 0 ? ((100 - product.discount) / 100 * product.price) + ' ' : product.price}
                            </p>
                            <p>{product.product_description}</p>
                            <div>
                                {product.variant.flavor && (
                                    <>
                                        <h4 className={Spacing['mb-1']}>Flavor</h4>
                                        <ul className={ToggleButton.toggleButton}>
                                            {product.variant.flavor.map((item, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value={item}
                                                                name='variantFlavor'
                                                            />
                                                            <span>
                                                                {item}
                                                            </span>
                                                        </label>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                )}
                                {product.variant.size && (
                                    <>
                                        <h4 className={Spacing['mb-1']}>Size</h4>
                                        <ul className={ToggleButton.toggleButton}>
                                            {product.variant.size.map((item, idx) => {
                                                return (
                                                    <li key={idx}>
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value={item.price}
                                                                name='variantSize'
                                                                onChange={handleChange}
                                                            />
                                                            <span>
                                                                {item.option}
                                                            </span>
                                                        </label>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </>
                                )}
                            </div>
                            <button
                                onClick={handleAddToCart}
                            >
                                <span>Add to Cart</span>
                            </button>
                            {/* <ProductDetails product={product} title={"Product Details"}></ProductDetails> */}
                            <AccordionPanel title="Product Details">
                                {product.product_description}
                            </AccordionPanel>
                            <AccordionPanel title="Delivery & Returns">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores alias qui ut ipsa eligendi, ea maxime optio enim quae facilis?
                            </AccordionPanel>
                        </div>

                        <div className={styles.productReview}>
                            <h4>Review</h4>
                        </div>

                    </div>
                    {/* <div className="recommendations">
                        You may also like...
                    </div> */}
                </>
            )}
        </main>

    )
}

export default Page