import React, { useEffect, useState } from 'react';
import img from '../../images/banner3.jpg';
import Footer from '../Shared/Footer/Footer';
import OthreModel from './OtherModel/OthreModel';
import Product from './Product/Product';

const Home = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/homeProducts')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, []);
    console.log(bikes);

    return (
        <div>
            <img style={{ width: "100%" }} src={img} alt="" />
            <div style={{ margin: "120px" }} className="container row">
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
            <Footer></Footer>
        </div>
    );
};

export default Home;