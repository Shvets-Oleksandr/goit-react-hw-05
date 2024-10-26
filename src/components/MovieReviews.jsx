import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { reviewsById } from '../api/movie';

import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await reviewsById(movieId);
        setReviews(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (reviews === null || reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
