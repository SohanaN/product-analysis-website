import { useEffect, useState } from "react"

const useReviewFunction = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('customerReviewsData.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return [reviews, setReviews];
}

export default useReviewFunction;