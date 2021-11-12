import React from 'react';
import './ManageProduct.css';

const ManageProduct = ({ product }) => {
    const { _id, img, title, price } = product;

    // Delete Products Function.
    const handleProductDelete = (id) => {
        const process = window.confirm('Are you sure, you wants to Delete this item');
        if (process) {
            const url = `https://afternoon-tundra-43187.herokuapp.com/products/${id}`
            fetch(url, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Delete Products From Database Successfully!!');
                    }
                })
        }
    };

    return (
        <div>
            <div className="manageProduct-body mb-5">
                <img style={{ width: "150px" }} src={img} alt="" />
                <h4>{title}</h4>
                <p><strong>Price: </strong>{price}</p>
                <button onClick={() => handleProductDelete(_id)} className="delete-btn">Delete <i className="fas fa-trash-alt"></i></button>
            </div>
        </div>
    );
};

export default ManageProduct;