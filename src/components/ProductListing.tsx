'use client'
import React, { useEffect, useState, Suspense } from 'react'
import styles from '../../styles/ProductListing.module.scss'
import ProductCard from './ProductCard'
import { useSearchParams } from 'next/navigation'
import Filter from './Filter'


type ProductProps = {
    id: number
    product_name: string
    price: number
    discount: number
    photo_main: {
        imgUrl: string
        imgAlt: string
    }
    category: string
    variant: {}
}

export default function ProductListing() {
    const [products, setProducts] = useState<(ProductProps | undefined)[]>([])
    const [category, setCategory] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string[]>([])
    const [filteredProducts, setFilteredProducts] = useState<(ProductProps | undefined)[]>([])

    const searchParams = useSearchParams();
    const params = new URLSearchParams(searchParams);


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/arumadin/product-db/data')
            .then((res) => res.json())
            .then((data) => {
                let productData = [...data]
                let categories = productData.map(item => item.category);
                let uniqueCategory = categories.filter((item, idx) => {
                    return categories.indexOf(item) == idx;
                })
                setCategory([...uniqueCategory])
                setProducts([...productData])
            })
    }, [])

    useEffect(() => {
        if (selectedCategory.length === 0) {
            setFilteredProducts([...products])
        } else {
            let filterRes = products.filter((item: any) => selectedCategory.includes(item.category))
            setFilteredProducts([...filterRes])
        }
    }, [selectedCategory, products])

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const selectedValue = e.currentTarget.value;
        if (e.currentTarget.checked) {
            setSelectedCategory(prevSelected => [...prevSelected, selectedValue])
        } else {
            let newSelectedCategory = selectedCategory.filter((item: any) => item !== selectedValue)
            setSelectedCategory(prevSelected => [...newSelectedCategory])
        }
    }

    const handleSort = () => {
        if (searchParams.size !== 0) {
            const sortType = params.get("sort")

            if (sortType === "asc") {
                let sortedProd = filteredProducts.sort((a: any, b: any) => a.price - b.price);
            }

            if (sortType === "desc") {
                let sortedProd = filteredProducts.sort((a: any, b: any) => b.price - a.price);
            }

            if (sortType === "bestseller") {
                let sortedProd = filteredProducts.sort((a: any, b: any) => b.number_of_sales - a.number_of_sales);
            }
        }
    }

    handleSort()

    return (
        <Suspense>
            <div>
                <div className={styles.listingIntro}>
                    <div className={styles.banner}></div>
                    <h2 className={styles.listingPageTitle}>Welcome to Village Grocer</h2>
                    <p>Discover a world of fresh and delicious groceries right at your fingertips. From pantry staples to exotic finds, we have got everything you need for a well-stocked kitchen.</p>
                </div>
                <Filter category={category} handleChange={handleChange}></Filter>
                <div className={styles.productListing}>
                    {filteredProducts && filteredProducts.map((item) => {
                        return item && <ProductCard key={item.id} {...item}></ProductCard>
                    })}
                </div>
            </div>
        </Suspense>
    )
}
