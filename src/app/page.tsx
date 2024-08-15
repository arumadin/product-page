import ProductListing from "@/components/ProductListing";
import styles from '../../styles/Container.module.scss'
import { Suspense } from "react";

export default function Home() {

  return (
    <main className={styles.container}>
      <Suspense>
        <ProductListing>
        </ProductListing>
      </Suspense>
    </main>
  );
}
