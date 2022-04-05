import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Review.css'
const Review = ({ review }) => {
    const { name, rating, customerReview, img, id } = review;
    return (
        <Col md={4} className="mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} className="img-fluid rounded" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text><strong> || Ratings: ({rating}) ||</strong></Card.Text>
                    <Card.Text>
                        {customerReview}
                    </Card.Text>
                    <Link className='show-details-btn' to={'/reviews/' + id}>Show More Details</Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;