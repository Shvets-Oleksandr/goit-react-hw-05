import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { castById } from '../api/movie';

import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        setError(false);
        const data = await castById(movieId);
        setCast(data.cast);
      } catch (error) {
        setError(true);
      }
    };

    fetchCast();
  }, [movieId]);

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const img = avatar =>
    avatar ? `https://image.tmdb.org/t/p/w500/${avatar}` : defaultImg;

  if (!cast) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <ul>
      {cast.map(actor => (
        <div key={actor.id}>
          <img
            src={img(actor.profile_path)}
            alt="Actor's Avatar"
            width={80}
            height={120}
          />
          <li>
            <p>{actor.name}</p>
            <p>Character: {actor.character}</p>
          </li>
        </div>
      ))}
    </ul>
  );
};

export default MovieCast;
