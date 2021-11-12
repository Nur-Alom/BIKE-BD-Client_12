import React, { useEffect, useState } from 'react';
import './Home.css';
import img from '../../images/banner3.jpg';
import Footer from '../Shared/Footer/Footer';
import OthreModel from './OtherModel/OthreModel';
import Product from './Product/Product';
import Header from '../Shared/Header/Header';
import UserReview from './UserReview/UserReview';

const Home = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-tundra-43187.herokuapp.com/homeProducts')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);

    return (
        <div>
            <Header></Header>
            <img style={{ width: "100%", marginTop: "55px" }} src={img} alt="" />
            <div className="container row homeProduct-body">
                {
                    bikes.map(bike => <Product
                        key={bike._id}
                        bike={bike}
                    ></Product>)
                }
            </div>
            <div className="container">
                <OthreModel></OthreModel>
            </div>
            <div className="container mb-5">
                <UserReview></UserReview>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;