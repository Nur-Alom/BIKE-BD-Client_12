import React from 'react';
import './Dashboard.css';
import img from '../../images/dashboard.jpg';

const DashBoardHome = () => {
    return (
        <div>
            <img className="dashboardHome-img" src={img} alt="" />
        </div>
    );
};

export default DashBoardHome;