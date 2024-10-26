import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

import { movieById } from '../../api/movie';

import ErrorMessage from '../../components/ErrorMessage';
import Loader from '../../components/Loader';
import GoBack from '../../components/GoBack';

import css from './MovieDetailsPage.module.css';

const MovieDetailPage = () => {
  const { movieId } = useParams();

  const location = useLocation();

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await movieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!movie) {
    return;
  }

  const defaultImg =
    'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : defaultImg;
  const userScore = parseFloat(((movie.vote_average / 10) * 100).toFixed(2));
  const movieTitle = movie.original_title;
  const releasYer = movie.release_date.slice(0, 4);
  const overview = movie.overview;
  const genres = movie.genres.map((genre, id) => (
    <span key={id}>
      {genre.name}
      {id < movie.genres.length - 1 && ', '}
    </span>
  ));

  return (
    <section className={css.movieContainer}>
      <GoBack className={css.goBackBtn} />
      <div className={css.movieCard}>
        <img src={img} alt="poster" width={250} />
        <div>
          <h3>
            {movieTitle} ({releasYer})
          </h3>
          <p>User score {userScore}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h5>Genres</h5>
          <p>{genres}</p>
        </div>
      </div>
      <div className={css.addInfo}>
        <p>Aditional information</p>
        <ul className={css.addInfoList}>
          <li>
            <Link state={{ from: location }} to={'cast'}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={{ from: location }} to={'reviews'}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </section>
  );
};

export default MovieDetailPage;
