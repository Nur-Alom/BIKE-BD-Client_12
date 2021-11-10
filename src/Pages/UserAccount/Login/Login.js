import React from 'react';
import './login.css';
import imgGoogle from '../../../images/imageedit_google.png';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { handleLoginEmailPassword, googleLogin, handlePassword, handleEmail } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/';

    const userLogin = () => {
        handleLoginEmailPassword()
            .then((result) => {
                history.push(redirect)
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    const handleLogin = () => {
        googleLogin()
            .then((result) => {
                history.push(redirect)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }


    return (
        <div className="container main">
            <div className="form">
                <div className="data-field">
                    <h2 style={{ color: "gray", marginBottom: "25px" }}>Login Your Account.</h2>
                    <input onBlur={handleEmail} className="input-login rounded-pill" type="email" name="email" id="1" placeholder="Your Email" required />
                    <br />
                    <input onBlur={handlePassword} className="input-login rounded-pill" type="password" name="password" id="2" placeholder="Your Password" required />
                    <br />
                    <button onClick={userLogin} className="login-btn rounded-pill fw-bold" type="submit">Login</button>
                    <br />
                    <p style={{ fontWeight: "bold", color: "gray", alignSelf: "center" }}>or Login With</p>
                    <div>
                        <button onClick={handleLogin} className="google-btn"><img className="google-img" src={imgGoogle} alt="" />Continue with Google</button>
                    </div>
                    <br />
                    <p className="ms-4">Don't have any account? <NavLink to="/register" style={{ color: "#03D6B9", border: "none", backgroundColor: "white", textDecoration: "none" }}>Register here.</NavLink></p>
                </div>
            </div>
        </div>
    );
};

export default Login;