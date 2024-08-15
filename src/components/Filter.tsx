"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import React, { ChangeEventHandler, Suspense } from 'react'
import FilterPanel from './FilterPanel'
import styles from '../../styles/Filter.module.scss'

export default function Filter({ category, handleChange }: { category: string[], handleChange: ChangeEventHandler<HTMLInputElement> }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(searchParams);
        params.set(name, value);
        replace(`${pathname}?${params.toString()}`);
    };

    return (
        <Suspense>
            <div className={styles.controlWrap}>
                <FilterPanel category={category} handleChange={handleChange}></FilterPanel>
                <div className={styles.sortWrap}>
                    <h4>Sort</h4>
                    <select
                        name="sort"
                        id=""
                        onChange={handleFilterChange}
                    >
                        <option>Sort By</option>
                        <option value="asc">Price (low to high)</option>
                        <option value="desc">Price (high to low)</option>
                        <option value="bestseller">Best Seller</option>
                    </select>
                </div>
            </div>
        </Suspense>
    )
}
