import React, { useEffect, useState } from 'react';
import DisplayReviews from './DisplayReviews';

const UserReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://afternoon-tundra-43187.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])

    return (
        <div>
            <h1 className="my-5">Customer Review</h1>
            <hr />
            <div className="row m-3 g-4">
                {
                    reviews.map(review => <DisplayReviews
                        key={review._id}
                        review={review}
                    ></DisplayReviews>)
                }
            </div>
        </div>
    );
};

export default UserReview;