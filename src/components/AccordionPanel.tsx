import React from 'react'
import { useState } from 'react';
import styles from '../../styles/Accordion.module.scss'
import spacing from '../../styles/Spacing.module.scss'

export default function AccordionPanel({ title, children }: { title: string, children: React.ReactNode; }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className={styles.accordion}>
            <div className={styles.accordionHead}>
                <h4 className={spacing['mt-0']}>{title}</h4>
                <div className={styles.accordionBtn} onClick={() => setIsActive(!isActive)}>
                    {isActive ? (
                        <span className={styles.arrowClose}></span>
                    ) : (
                        <span className={styles.arrow}></span>
                    )}
                </div>
            </div>

            <div className={styles.accordionContent}>
                {isActive && (
                    <>
                        {children}
                    </>
                )}
            </div>
        </section>
    );
}


