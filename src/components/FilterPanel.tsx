import React, { ChangeEventHandler } from 'react'
import AccordionPanel from './AccordionPanel'
import spacing from '../../styles/Spacing.module.scss'
import ToggleButton from '../../styles/ToggleButton.module.scss'
import styles from '../../styles/ProductListing.module.scss'

export default function FilterPanel({ category, handleChange }: { category: string[], handleChange: ChangeEventHandler<HTMLInputElement> }) {
    return (
        <div className={`${styles.listingControl} ${spacing['mb-2']}`}>
            {/* {category && (
                <>
                    <h4 className={spacing['mb-1']}>Categories</h4>
                    <AccordionPanel title="Delivery & Returns">
                        <ul className={ToggleButton.toggleButton}>
                            {category.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={item}
                                                name='category'
                                                onChange={handleChange}
                                            />
                                            <span>
                                                {item}
                                            </span>
                                        </label>
                                    </li>
                                )
                            })}
                        </ul>
                    </AccordionPanel>

                </>
            )} */}
            <div>
                {category && (
                    <>
                        <h4 className={spacing['mb-1']}>Categories</h4>
                        <ul className={ToggleButton.toggleButton}>
                            {category.map((item, idx) => {
                                return (
                                    <li key={idx}>
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={item}
                                                name='category'
                                                onChange={handleChange}
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
            </div>
            {/* <div>View Mode</div> */}
        </div>
    )
}