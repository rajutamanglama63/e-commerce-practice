import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

import { getProductReducer, getProductDetailReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'

const reducers = combineReducers({
    cart : cartReducer,
    getProduct : getProductReducer,
    getProductDetails : getProductDetailReducer
});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store = createStore(reducers, INITIAL_STATE, composeWithDevTools(applyMiddleware(...middleware)));

export default store;