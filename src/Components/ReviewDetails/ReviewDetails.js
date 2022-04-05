import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewDetails = () => {
    const { reviewId } = useParams();
    const [review, setReview] = useState({});
    useEffect(() => {
        const url = 'CustomerReviews.json/${reviewId}'
        fetch('CustomerReviews.json')
            .then(res => res.jason())
            .then(data => setReview(data));
    }, [])
    return (
        <div>
            <h2>details: {reviewId}</h2>
        </div>
    );
};

export default ReviewDetails;