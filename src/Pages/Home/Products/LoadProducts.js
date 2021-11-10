import React, { useEffect, useState } from 'react';
import './LoadProducts.css';
import AllProducts from './AllProducts';
import Header from '../../Shared/Header/Header';

const LoadProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-tundra-43187.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <div className="container row loadProducts-body">
                {
                    products.map(product => <AllProducts
                        key={product._id}
                        product={product}
                    ></AllProducts>)
                }
            </div>
        </div>
    );
};

export default LoadProducts;