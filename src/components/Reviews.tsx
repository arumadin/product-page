import React from 'react'

import reviewStyle from '../../styles/Reviews.module.scss'


type ProductProps = {
    reviews: [
        {
            review: string
            rating: number
        }
    ]
}

export default function Reviews({product} : {product: ProductProps}) {
    return (
        <>
            <div className={reviewStyle.productReview}>
                <h4>Reviews</h4>
                <ul className={reviewStyle.reviewList}>
                    {product.reviews && (
                        product.reviews.map((review, idx) => (
                            <li key={idx}>
                                <p>{review.review}</p>
                                <ul className={reviewStyle.starRating}>
                                    {review.rating && (
                                        [...Array(review.rating)].map((item, i) => <span key={i}></span>)
                                    )}
                                </ul>
                            </li>))
                    )}
                </ul>
            </div>
        </>
    )
}