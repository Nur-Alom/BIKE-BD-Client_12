import React, { useEffect, useState } from 'react';
import './ManageAllOrders.css';
import ManageAllOrder from './ManageAllOrder';

const ManageAllOrders = () => {
    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        fetch('http://https://afternoon-tundra-43187.herokuapp.com/ordersItem')
            .then(res => res.json())
            .then(data => setOrderItem(data))
    }, [orderItem]);

    return (
        <div className="myOrders-body">
            <div className="item-count">
                <ul className="d-flex container order-item">
                    <li>Name  <i className="fas fa-arrow-down"></i></li>
                    <li>Email  <i className="fas fa-arrow-down"></i></li>
                    <li>Product Id  <i className="fas fa-arrow-down"></i></li>
                    <li>Status  <i className="fas fa-arrow-down"></i></li>
                    <li>Action  <i className="fas fa-arrow-down"></i></li>
                </ul>
            </div>
            <div className="orders-item">
                {
                    orderItem.map(order => <ManageAllOrder
                        key={order._id}
                        order={order}
                    ></ManageAllOrder>)
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;