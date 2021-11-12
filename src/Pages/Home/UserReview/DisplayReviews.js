import React from 'react';
import './DisplayReviews.css';
import Rating from 'react-rating';
import { Card } from 'react-bootstrap';
import userImg from '../../../images/user.png';

const DisplayReviews = ({ review }) => {
    const { name, message, rating, } = review;

    return (
        <div className="col-md-4">
            <Card style={{ width: '18rem', height: "auto" }}>
                <Card.Img variant="top" src={userImg} style={{ width: "150px", alignSelf: "center", padding: "10px" }} />
                <hr className="hr" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Rating
                        initialRating={rating}
                        emptySymbol="far fa-star rating-color"
                        fullSymbol="fas fa-star rating-color"
                        readonly
                    />
                    <Card.Text>
                        {message}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default DisplayReviews;