import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const Review = (props) => {
    const { name, customerReview, img } = props.review;
    return (
        <Col xs={6} md={4} className="mb-4">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} className="img-fluid rounded" />
                <Card.Body>
                    <Card.Title>Customer Name: {name}</Card.Title>
                    <Card.Text>
                        {customerReview}
                    </Card.Text>
                    <Button variant="primary">See All Reviews</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Review;