import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Products from '../components/Products'
import { getProduct as listProduct } from '../redux/actions/productActions'


const HomePage = () => {
    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProduct);

    const { product, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProduct());
    }, [dispatch])
    return (
        <div>
            <div className="container">
                <div className="main-content">
                    <div className="products">
                        {
                            loading ? (
                                <h2>Loading...</h2>
                            ) : error ? (
                                <h2>{error}</h2>
                            ) : (
                                product.map((prod) => (
                                    <Products 
                                        key={prod._id}
                                        name={prod.name}
                                        imageUrl={prod.imageUrl}
                                        description={prod.description}
                                        price={prod.price}
                                        productId={prod._id}
                                    />
                                ))
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
