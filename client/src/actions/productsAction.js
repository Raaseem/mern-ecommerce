import axios from "axios"

export const getAllProducts = () => dispatch => {
    dispatch({ type: 'GET_PRODUCTS_REQUEST' })
    axios.get('/api/products/all')
        .then(res => {
            dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data })

        }).catch(err => {
            console.log(err)
            dispatch({ type: 'GET_PRODUCTS_FAIL', payload: err })
        })
}

export const getProductById = (productid) => dispatch => {

    dispatch({ type: 'GET_PRODUCTBYID_REQUEST' })

    axios.post('/api/products/getproductbyid', { productid })
        .then(res => {
            dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: res.data })

        }).catch(err => {
            console.log(err)
            dispatch({ type: 'GET_PRODUCTBYID_FAIL', payload: err })
        })
}