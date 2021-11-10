import React from 'react';
import img from '../../../images/favicon.png';

const Footer = () => {
    return (
        <div className="bg-dark text-white py-4">
            <h1>Bike-BD <img style={{ width: "50px", paddingBottom: "5px" }} src={img} alt="" /></h1>
            <p>All Rights Reserved. Bike-BD Ltd ©2021.</p>
        </div>
    );
};

export default Footer;