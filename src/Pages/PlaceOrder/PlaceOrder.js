import axios from 'axios';
import './PlaceOrder.css';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation, useParams } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {
    const { user } = useAuth();
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    const location = useLocation();
    const history = useHistory();

    const redirect = location.state || '/home';

    // Load Single Data.
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [productId]);

    // React Hook Form for sent data ui to database.
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/ordersItem', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Congratulation!! Your Order Place Successfully')
                    history.push(redirect);
                }
            })
    };

    const { img, title, price, description } = products;

    return (
        <div>
            <Header></Header>
            <div className="orders-body">
                <div className="item-detail">
                    <img style={{ width: "300px" }} src={img} alt="" />
                    <div className="pack-details px-3">
                        <h2 className="mt-3">{title}</h2>
                        <hr />
                        <br />
                        <p className="text-start"><strong className="text-success">Price: </strong>{price}</p>
                        <p className="text-start"><strong className="text-success">Product Info: </strong>{description}</p>
                    </div>
                </div>
                <div className="customer-info">
                    <form onSubmit={handleSubmit(onSubmit)} className="input-form">
                        <h4 className="my-4">Fill This Form Please</h4>
                        <hr />
                        <input value={productId} className="register-input d-none" type="text" {...register("packKey")} required />
                        <input value={'pending'} className="register-input d-none" type="text" {...register("status")} required />
                        <br />
                        <input value={user.displayName} className="register-input" {...register("name")} required />
                        <br />
                        <input value={user.email} className="register-input" {...register("email")} required />
                        <br />
                        <input className="register-input" type="number" {...register("number")} placeholder="Number" maxLength="11" required />
                        <br />
                        <input className="register-input" type="text" {...register("address")} placeholder="Delivery Location" maxLength="40" required />
                        <br />
                        <input className="register-submit" type="submit" value="Order Place" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;