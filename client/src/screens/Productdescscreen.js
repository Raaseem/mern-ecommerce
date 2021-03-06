import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../actions/productsAction'


export default function Productdescscreen({ match }) {
    const productid = match.params.id

    const getproductbyidstate = useSelector(state => state.getProductByIdReducer)

    const { loading, product, error } = getproductbyidstate

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductById(productid))
    }, [])
    return (
        <div>
            {loading ? (<h1>loading</h1>) : error ? (<h1>error is ..</h1>) : (
                <div className="row mt-5">
                    <div className="col-md-6">
                        <div className="card p-5 m-3">
                            <h1>{product.name}</h1>
                            <img src={product.image} className="img-fluid m-3 bigimg" />
                            <p className="">{product.description}</p>
                        </div>
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left' }}>
                        <div className="m-3">
                            <h1>Price:{product.price} RS</h1>
                            <hr />
                            <h1>Select Quantity</h1>
                            <select> {[...Array(product.countInStock).keys()].map((x, i) => {
                                return <option value={i + 1}>{i + 1}</option>
                            })}
                            </select>
                        </div>
                        <button className="btn btn-success">Add To Card</button>

                    </div>

                </div>
            )}

        </div>
    )
}
