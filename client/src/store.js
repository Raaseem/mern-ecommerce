import { getAllProductsReducer, getProductByIdReducer } from "./reducers/productsReducer";
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer,
    getProductByIdReducer: getProductByIdReducer
})

const composeEnhancers = composeWithDevTools({

});

const store = createStore(finalReducer,
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
    )
)

export default store