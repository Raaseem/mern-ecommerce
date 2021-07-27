import React from 'react'
import Product from '../components/Product'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../actions/productsAction';
import { useDispatch, useSelector } from 'react-redux';


export default function Homescreen() {
    const getallproductstate = useSelector(state => state.getAllProductsReducer)

    const { loading, products, error } = getallproductstate
    //  const [products, setproducts] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(getAllProducts())
    }, [])
    return (
        <div>
            <div className="row justify-content-center">
                {loading ? (<h1>looading....</h1>) : error ? (<h1>Something went wrong</h1>) : (
                    products.map(product => {
                        return <div className="col-md-3 m-2 p-2">
                            <Product product={product} />
                        </div>
                    })
                )}
            </div>
        </div>
    )
}
