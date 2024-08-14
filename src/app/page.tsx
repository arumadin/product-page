import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ProductListing from "@/components/ProductListing";
import { Children } from "react";
import styles from '../../styles/Container.module.scss'

export default function Home() {
  return (
    <main className={styles.container}> 
      
      <ProductListing>
      </ProductListing>
    </main>
  );
}
