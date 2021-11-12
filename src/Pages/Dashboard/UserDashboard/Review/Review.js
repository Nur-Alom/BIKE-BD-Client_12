import React from 'react';
import './Review.css';
import img from '../../../../images/favicon.png';
import { useForm } from "react-hook-form";
import axios from 'axios';
import useAuth from '../../../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://afternoon-tundra-43187.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Review Added Successfully')
                    reset();
                }
            })
    };

    return (
        <div>
            <div>
                <div className="container contact-form">
                    <div>
                        <h1 className="ct-title">Bike-BD <img style={{ width: "40px" }} src={img} alt="" /></h1>
                        <p className="ct-text">Explain Your Experience With us and our Product quality,Service System,etc. Write a Review!!</p>
                    </div>
                    <hr />
                    <form onSubmit={handleSubmit(onSubmit)} className="info">
                        <input {...register("name", { required: true })} className="input-name" type="text" value={user.displayName} placeholder="Your Name" />
                        <input {...register("email", { required: true })} className="input-email" type="text" value={user.email} placeholder="Your Email" />
                        <input {...register("rating", { required: true })} className="input-subject" type="number" placeholder="Rating" />
                        <br />
                        <textarea {...register("message", { required: true, maxLength: 80 })} cols="102" rows="6" placeholder="Your Message" />
                        <br />
                        <input style={{
                            backgroundColor: "green",
                            padding: "7px 25px",
                            border: "none",
                            borderRadius: "17px",
                            color: "white",
                            fontWeight: "bold"
                        }}
                            type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;