import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart = useSelector(state => state.cart);

    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
    }
    return (
        <div>
            <div className="navbar">
                <div className="container">
                    <div className="nav-content">
                        <Link to="/">
                            <h1>e-commerce</h1>
                        </Link>
                        <Link to="/cartitem" className="link">
                            <span>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </span>
                            <span className="badge">{getCartCount()}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
