import React from 'react'
import Rating from 'react-rating'
import { Link } from 'react-router-dom'

export default function Product({ product }) {

    return (
        <div style={{ textAlign: 'left' }}>
            <Link to={`/product/${product._id}`}>
                <div>
                    <img src={product.image} className="img-fluid" />
                    <h1 >{product.name}</h1>
                    <Rating className="star"
                        initialRating={product.rating} readonly={true}
                        emptySymbol="fa fa-star-o fa-1x"
                        fullSymbol="fa fa-star fa-1x"
                    />

                    <h1>Price: {product.price}</h1>

                </div>
            </Link>
        </div>
    )
}
