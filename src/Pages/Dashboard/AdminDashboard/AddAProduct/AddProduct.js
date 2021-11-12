import React from 'react';
import './AddProduct.css';
import img from '../../../../images/favicon.png';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://https://afternoon-tundra-43187.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Congratulation!! Your Product Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div className="newService-body container">
            <div className="site-branding">
                <h1>Bike-BD</h1>
                <img style={{ width: "40px" }} src={img} alt="" />
            </div>
            <hr className="hr" style={{ width: "30%", marginLeft: "35%" }} />
            <strong className="fs-4">To Add a New Product Please Fill The Form Below.. </strong>
            <hr />
            <div>
                <form className="newService-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="newService-field">
                        <div className="newService-input-section">
                            <input type="url" className="newService-input" {...register("img")} placeholder="Image Link" required />
                            <br />
                            <input className="newService-input" {...register("title")} placeholder="Title" required />
                            <br />
                        </div>
                        <div className="newService-input-section">
                            <input type="number" className="newService-input" {...register("price")} placeholder="Price" required />
                            <br />
                            <input className="newService-input" {...register("description")} placeholder="Description" maxLength="105" required />
                            <br />
                        </div>
                        <input className="newService-submit" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;