import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({name, imageUrl, description, price, productId}) => {
    return (
        <div>
            
                <div className="card">
                    <img src={imageUrl} alt={name} />
                    <div className="info">
                        <h4>{name}</h4>
                        <p>{description}</p>
                        <p><span>Price : Rs {price}</span></p>
                        <Link to={`/product/${productId}`} className="btn-view">
                            view
                        </Link>
                    </div>
                </div>
            
        </div>
    )
}

export default Products
