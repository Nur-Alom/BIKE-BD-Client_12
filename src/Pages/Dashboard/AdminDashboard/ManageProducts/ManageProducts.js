import React, { useEffect, useState } from 'react';
import ManageProduct from './ManageProduct';

const ManageProducts = () => {
    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-tundra-43187.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [products]);

    return (
        <div>
            <div>
                {
                    products.map(product => <ManageProduct
                        key={product._id}
                        product={product}
                    ></ManageProduct>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;