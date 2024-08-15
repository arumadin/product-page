import React from 'react'
import { useState } from 'react';
import styles from '../../styles/Accordion.module.scss'
import spacing from '../../styles/Spacing.module.scss'

export default function AccordionPanel({ title, children }: { title: string, children: React.ReactNode; }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <section className={styles.accordion}>
            <h4 className={spacing['mt-0']}>{title}</h4>
            <button className={styles.accordionBtn} onClick={() => setIsActive(!isActive)}>
                {isActive ? 'Close' : 'Show'}
            </button>
            {isActive && (
                <>
                    {children}
                </>
            )}
        </section>
    );
}


