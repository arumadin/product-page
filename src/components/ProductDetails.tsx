import React from 'react'
import AccordionPanel from './AccordionPanel'


type ProductProps = {
    product_description: string
}

function ProductDetails({product, title} : {product: ProductProps, title: string }) {
    return (
        <AccordionPanel title={title}>
            {product.product_description}
        </AccordionPanel>
    )
}

export default ProductDetails