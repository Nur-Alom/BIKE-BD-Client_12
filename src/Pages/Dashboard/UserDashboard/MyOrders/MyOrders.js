import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import MyOrder from '../MyOrder/MyOrder';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/ordersItem`)
            .then(res => res.json())
            .then(data => {
                const result = data?.filter(dt => dt.email === user.email);
                setOrders(result);
            })
    }, [orders, user.email]);

    return (
        <div className="myOrders-body">
            <div className="item-count">
                <ul className="d-flex container order-item">
                    <li>Name <i className="fas fa-arrow-down"></i></li>
                    <li>Location <i className="fas fa-arrow-down"></i></li>
                    <li>Product ID <i className="fas fa-arrow-down"></i></li>
                    <li>Status <i className="fas fa-arrow-down"></i></li>
                    <li>Action <i className="fas fa-arrow-down"></i></li>
                </ul>
            </div>
            <div className="orders-item">
                {
                    orders.map(order => <MyOrder
                        key={order._id}
                        order={order}
                    ></MyOrder>)
                }
            </div>
        </div>
    );
};

export default MyOrders;