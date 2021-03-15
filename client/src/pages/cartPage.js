import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import CartItem from '../components/CartItem'
import {addToCart, removeFromCart} from '../redux/actions/cartActions'

const CartPage = () => {
    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    }

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    }

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }

    const getCartSubTotal = () => {
        return cartItems
          .reduce((price, item) => price + item.price * item.qty, 0)
          .toFixed(2);
      };
    return (
        <>
            <div className="container">
                <div className="main-content">
                    {
                        cartItems.length === 0 ? (
                            <div>
                                Your cart is empty.<Link to="/">Go back</Link>
                            </div>
                        ) : cartItems.map((item) => (
                            <CartItem 
                                key={item.product}
                                item={item}
                                qtyChangeHandler={qtyChangeHandler}
                                removeHandler={removeHandler}
                            />
                        ))
                    }
                    <div className="sub-total">
                        <div className="subtotal-box-content">
                            <p className="subtotal-indicator">Subtotal({getCartCount()})items</p>
                            <p className="total-price">Price : Rs {getCartSubTotal()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartPage
