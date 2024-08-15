import React, { ChangeEventHandler } from 'react'

import ToggleButton from '../../styles/ToggleButton.module.scss'
import Spacing from '../../styles/Spacing.module.scss'


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
    variant: VariantProps
}


function ProductVariant({product, handleChange} : {product: ProductProps, handleChange: ChangeEventHandler<HTMLInputElement> }) {
    return (
        <div style={{'borderTop': 'solid 1px #252525', 'borderBottom': 'solid 1px #252525'}}>
            {product.variant.flavor && (
                <>
                    <h4 className={`${Spacing['mb-1']} ${Spacing['mt-1']}`}>Flavor</h4>
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
    )
}

export default ProductVariant