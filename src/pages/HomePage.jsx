import { useEffect, useState } from 'react';

import { moviesTrending } from '../api/movie';

import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';
import MovieList from '../components/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await moviesTrending();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section>
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      <h2>Trending movies</h2>
      {movies && <MovieList movies={movies} />}
    </section>
  );
};

export default HomePage;
