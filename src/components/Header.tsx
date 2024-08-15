'use client'
import React, {useState} from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'

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
  variant: {}
}

export default function Header() {
  const [cart, setCart] = useState<ProductProps[]>([])

  return (
    <div className={styles.headerWrap}>
        <div className={styles.headerTop}>
            <div>Wishlist</div>
            <Link href={'/'} >ShopName</Link>
            
            <div>Shopping Cart {cart && cart.length}</div>
        </div>
    </div>
  )
}