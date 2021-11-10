import React from 'react';
import { Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const AllProducts = ({ product }) => {
    const { _id, img, description, title, price } = product;

    return (
        <div className="col-md-4 my-3 me-0">
            <Card className="" style={{ width: '20rem', height: "auto" }}>
                <Card.Img variant="top" style={{ height: '250px' }} src={img} />
                <Card.Body>
                    <Card.Title><span className="fw-bold"></span> {title}</Card.Title>
                    <Card.Text><span className="fw-bold">Price:</span> {price}</Card.Text>
                    <hr />
                    <Card.Text>{description}</Card.Text>
                    <hr />
                    <div className="my-2">
                        <NavLink to={`/pack/${_id}`} className="detail-btn rounded-pill">Buy Now</NavLink>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllProducts;