import React, { useState } from 'react';
import './login.css';
import imgGoogle from '../../../images/imageedit_google.png';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { Alert, Spinner } from 'react-bootstrap';

const Login = () => {
    const { user, loginUser, loading, authError, handleGoogleLogin } = useAuth();
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = (e) => {
        loginUser(loginData?.email, loginData?.password, location, history);
        e.preventDefault()
    };

    const handleGoogle = () => {
        handleGoogleLogin(location, history);
    }


    return (
        <div className="container main">
            <div className="form">
                <div className="data-field">
                    <h2 style={{ color: "gray", marginBottom: "25px" }}>Login Your Account.</h2>
                    <input
                        onBlur={handleOnChange}
                        className="input-login rounded-pill" type="email"
                        name="email"
                        id="1"
                        placeholder="Your Email"
                        required />
                    <br />
                    <input
                        onBlur={handleOnChange}
                        className="input-login rounded-pill" type="password"
                        name="password"
                        id="2"
                        placeholder="Your Password"
                        required />
                    <br />
                    <button
                        onClick={handleLoginSubmit}
                        className="login-btn rounded-pill fw-bold" type="submit">Login</button>
                    <br />
                    <p style={{ fontWeight: "bold", color: "gray", alignSelf: "center" }}>or Login With</p>
                    <div>
                        <button
                            onClick={handleGoogle} className="google-btn">
                            <img
                                className="google-img"
                                src={imgGoogle} alt="" />
                            Continue with Google
                        </button>
                    </div>
                    <br />
                    <p
                        className="m-4">
                        Don't have any account?
                        <NavLink
                            to="/register"
                            style={{
                                color: "#03D6B9",
                                border: "none",
                                backgroundColor: "white", textDecoration: "none"
                            }}>
                            Register
                        </NavLink>
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
        </div>
    );
};

export default Login;