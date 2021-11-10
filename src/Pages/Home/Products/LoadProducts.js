import React, { useEffect, useState } from 'react';
import AllProducts from './AllProducts';

const LoadProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <div style={{ margin: "120px" }} className="container row">
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