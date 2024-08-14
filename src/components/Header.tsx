import React from 'react'
import styles from '../../styles/Header.module.scss'
import Link from 'next/link'

export default function Header() {
  return (
    <div className={styles.headerWrap}>
        <div className={styles.headerTop}>
            <div>Wishlist</div>
            <Link href={'/'} >ShopName</Link>
            
            <div>Shopping Cart</div>
        </div>
        {/* <div className={styles.searchBar}>
            search box
        </div> */}
    </div>
  )
}