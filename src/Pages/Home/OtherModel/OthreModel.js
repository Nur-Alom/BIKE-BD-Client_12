import React from 'react';
import './OtherModel.css';
import img from '../../../images/honda_bikes_logo.jpg';
import img2 from '../../../images/yamaha_bikes_logo.jpg';
import img3 from '../../../images/suzuki_bikes_logo.jpg';
import img4 from '../../../images/bajaj_bikes_logo.jpg';
import img5 from '../../../images/hero_bikes_logo.jpg';
import img6 from '../../../images/tvs_bikes_logo.jpg';
import img7 from '../../../images/ktm_bikes_logo.jpg';
import img8 from '../../../images/kawasaki_bikes_logo.jpg';

const OthreModel = () => {
    return (
        <div>
            <h1 className="my-3 text-warning">Choose Your Favorite Brand</h1>
            <hr />
            <div className="model-body">
                <div className="bike-model">
                    <img src={img} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img2} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img3} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img4} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img5} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img6} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img7} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
                <div className="bike-model">
                    <img src={img8} alt="" />
                    <hr />
                    <button className="blank-btn" >More</button>
                </div>
            </div>
        </div>
    );
};

export default OthreModel;