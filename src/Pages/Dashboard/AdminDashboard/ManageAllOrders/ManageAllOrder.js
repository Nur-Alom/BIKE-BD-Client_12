import React from 'react';

const ManageAllOrder = (props) => {

    // Update status Function.
    const handleStatus = (id) => {
        const Status = 'Approved';
        const updateStatus = { status: Status };
        if (Status) {
            const url = `http://localhost:5000/ordersItem/${id}`
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateStatus)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Your Status Updated Successfully..')
                    }
                });
        }
    };


    // Delete order Function.
    const handleDelete = (id) => {
        const process = window.confirm('Are you sure, you wants to Delete this item');
        if (process) {
            const url = `http://localhost:5000/ordersItem/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Order Successfully!!');
                    }
                })
        }
    };


    const { _id, name, email, productKey, status } = props.order;
    return (
        <div className="">
            <div className="container section-body">
                <ul className="order-item">
                    <li className="text-success">{name}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-success">{email}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-success">{productKey}</li>
                </ul>
                <ul className="order-item">
                    <li className="text-info">{status}<button onClick={() => handleStatus(_id)} className="status-btn"><i className="fas fa-edit"></i></button></li>
                </ul>
                <ul className="order-item">
                    <li><button onClick={() => handleDelete(_id)} className="delete-btn">Delete <i className="fas fa-trash-alt"></i></button></li>
                </ul>
            </div>
        </div>
    );
};

export default ManageAllOrder;