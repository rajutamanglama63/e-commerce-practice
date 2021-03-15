import React from 'react'

const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return (
        <div>
            {/* <div className="container">
                <div className="main-content"> */}
                    <div className="ordered-list">
                        <div className="ordered-item">
                            <img src={item.imageUrl} alt={item.name} />
                            <div className="detail">
                                <h3>Name : {item.name}</h3> 
                                <p><span className="bold">Description</span> : <span className="light">{item.description}</span></p>
                                <p><span className="bold">Price</span> : Rs {item.price}</p>
                                <select className="cart-item-select" value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                                    {[...Array(item.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                                <br />
                                <button className="btn-del" onClick={() => removeHandler(item.product)}>Remove from cart</button>
                            </div>
                        </div>
                    </div>
                {/* </div>
            </div> */}
        </div>
    )
}

export default CartItem
