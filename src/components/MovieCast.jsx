import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { castById } from '../api/movie';

import ErrorMessage from './ErrorMessage';

const MovieCast = () => {
  const { movieId } = useParams();

  const [dataCast, setDataCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setError(false);
        const data = await castById(movieId);
        setDataCast(data);
      } catch (error) {
        setError(true);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <ul>
      <li>
        <img src="" alt="Actor's Avatar" width={80} height={120} />
        <p>Actor's Name</p>
        <p>Character: {'kenjg'}</p>
      </li>
      <li>
        <img src="" alt="Actor's Avatar" width={80} height={120} />
        <p>Actor's Name</p>
        <p>Character: {'kenjg'}</p>
      </li>
      <li>
        <img src="" alt="Actor's Avatar" width={80} height={120} />
        <p>Actor's Name</p>
        <p>Character: {'kenjg'}</p>
      </li>
    </ul>
  );
};

export default MovieCast;
