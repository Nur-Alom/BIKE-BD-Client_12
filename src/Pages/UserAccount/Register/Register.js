import React from 'react';
import './Register.css';
import imgGoogle from '../../../images/imageedit_google.png'
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Register = () => {
    const { googleLogin, handleName, handleEmail, setUserName, handlePassword, handleRegister } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect = location.state?.from || '/login';
    console.log(location.state?.from);

    const userRegister = () => {
        handleRegister().then((result) => {
            setUserName()
            alert('Your Account Create Successfully, Please Go to Login Page and login Your Account')
            history.push(redirect)
        })
            .catch((error) => {
                console.log(error.message)
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
                    <h2 className="my-4">Create an account.</h2>
                    <input onBlur={handleName} className="input-register rounded-pill" type="name" name="name" placeholder="Your Name" required />
                    <input onBlur={handleEmail} className="input-register rounded-pill" type="email" name="email" placeholder="Your Email" required />
                    <input onBlur={handlePassword} className="input-register rounded-pill" type="password" name="password" placeholder="Your Password" required />
                    <button onClick={userRegister} className="register-btn rounded-pill fw-bold" type="submit">Register</button>
                    <br />
                    <p style={{ fontWeight: "bold", color: "gray", alignSelf: "center" }}>or Register With</p>
                    <div>
                        <button onClick={handleLogin} className="google-btn"><img className="google-img" src={imgGoogle} alt="" />Continue with Google</button>
                    </div>
                    <br />
                    <p className="ms-4">Already have an account? <NavLink to="/login" style={{ color: "#03D6B9", border: "none", backgroundColor: "white", textDecoration: "none" }}>Login here.</NavLink></p>
                </div>
            </div>
        </div >
    );
};

export default Register;