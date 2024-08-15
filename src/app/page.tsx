import ProductListing from "@/components/ProductListing";
import styles from '../../styles/Container.module.scss'

export default function Home() {

  return (
    <main className={styles.container}> 
      
      <ProductListing>
      </ProductListing>
    </main>
  );
}
