import { Container, Row } from 'react-bootstrap';
import useReviewFunction from '../../hooks/useReviewFunction';
import Review from '../Review/Review';
const Reviews = () => {
    const [reviews, setReviews] = useReviewFunction();
    return (
        <Container>
            <Row className="d-flex justify-content-center mt-4">
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </Row>
        </Container>
    );
};

export default Reviews;