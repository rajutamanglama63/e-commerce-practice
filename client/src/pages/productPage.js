import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { getProductDetail } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';


const ProductPage = ({match, history}) => {
    const [qty, setQty] = useState(1);

    const dispatch = useDispatch();

    const ProductDetails = useSelector(state => state.getProductDetails);

    const { loading, error, product } = ProductDetails;

    useEffect(() => {
        if(product && match.params.id !== product._id) {
            dispatch(getProductDetail(match.params.id))
        }
    },[dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cartitem`);
    }
    return (
        <div>
            <div className="container">
                <div className="main-content">
                    <div className="product">
                    {
                        loading ? (
                            <h2>Loading...</h2>
                        ) : error ? (
                            <h2>{error}</h2>
                        ) : (
                            <>
                                <img src={product.imageUrl} alt={product.name} />
                                <div className="about">
                                     <h3>Name : {product.name}</h3> 
                                    <p><span className="bold">Description</span> : <span className="light">{product.description}</span></p>
                                    <p><span className="bold">Price</span> : Rs {product.price}</p>
                                    <p><span className="bold">Status</span> : {product.countInStock > 0 ? "In Stock" : "Out of stock"}</p>
                                    <select className="select-option" value={qty} onChange={(e) => setQty(e.target.value)}>
                                        {[...Array(product.countInStock).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                            </option>
                                        ))}
                                    </select>
                                    <button className="btn-add" onClick={addToCartHandler}>Add to cart</button>
                                </div>
                                
                            </>
                        )
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage
