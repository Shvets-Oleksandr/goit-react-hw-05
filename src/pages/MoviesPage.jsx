import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { searchMovies } from '../api/movie';

import SearchBar from '../components/SearchBar';
import MovieList from '../components/MovieList';
import ErrorMessage from '../components/ErrorMessage';
import Loader from '../components/Loader';

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    const fetchSearchMovies = async () => {
      try {
        setError(false);
        setIsLoading(true);
        const data = await searchMovies(query);
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSearchMovies();
  }, [query]);

  const onSubmit = inputValue => {
    setSearchParams({ query: inputValue });
  };

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <section>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} />}
    </section>
  );
};

export default MoviesPage;
