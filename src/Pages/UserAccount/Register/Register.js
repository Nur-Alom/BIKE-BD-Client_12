import React, { useState } from 'react';
import './Register.css';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Register = () => {
    const { user, registerNewUser, loading, authError } = useAuth({});

    const history = useHistory();
    const [loginData, setLoginData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = () => {
        registerNewUser(loginData.email, loginData.password, loginData.name, history);
    }

    return (
        <div className="container main">
            <div className="form">
                <div className="data-field">
                    <h2 className="my-4">Create an account.</h2>
                    <input
                        onBlur={handleOnBlur}
                        className="input-register rounded-pill" type="name"
                        name="name"
                        placeholder="Your Name"
                        required />
                    <input
                        onBlur={handleOnBlur}
                        className="input-register rounded-pill" type="email"
                        name="email"
                        placeholder="Your Email"
                        required />
                    <input
                        onBlur={handleOnBlur}
                        className="input-register rounded-pill" type="password"
                        name="password"
                        placeholder="Your Password"
                        required />
                    <button
                        onClick={handleLoginSubmit} className="register-btn rounded-pill fw-bold" type="submit">Register</button>
                    <br />
                    <p className="m-4">
                        Already have an account?
                        <NavLink to="/login"
                            style={{
                                color: "#03D6B9",
                                border: "none",
                                backgroundColor: "white", textDecoration: "none"
                            }}> Login</NavLink>
                    </p>
                    {loading && <Spinner animation="border" variant="info" />}
                    {user?.email && <Alert variant={'success'}>
                        User Create Successfully.
                    </Alert>}
                    {authError && <Alert variant={'danger'}>
                        {`${authError}`}
                    </Alert>}
                </div>
            </div>
        </div >
    );
};

export default Register;