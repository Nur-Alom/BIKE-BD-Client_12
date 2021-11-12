import React from 'react';

const MyOrder = (props) => {

    const handleDelete = (id) => {
        const process = window.confirm('Are you sure, you wants to delete this item')
        if (process) {
            const url = `https://afternoon-tundra-43187.herokuapp.com/ordersItem/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Order Delete Successfully!!');
                    }
                });
        }
    };

    const { _id, name, address, productKey, status } = props.order;
    return (
        <div>
            <div className="container section-body">
                <ul className="order-item">
                    <li className="text-success">{name}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-success">{address}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-success">{productKey}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-info">{status}</li>
                </ul>
                <ul className="order-item">
                    <li><button onClick={() => handleDelete(_id)} className="delete-btn">Delete <i className="fas fa-trash-alt"></i></button></li>
                </ul>
            </div>
        </div>
    );
};

export default MyOrder;