import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/homePage/HomePage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import MovieDetailPage from '../../pages/movieDetailsPage/MovieDetailsPage';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';
import MovieReviews from '../movieReviews/MovieReviews';
import MovieCast from '../movieCast/MovieCast';

import Navigation from '../navigation/Navigation';

import { useState } from 'react';
import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <main className={css.pagesContainer}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/details" element={<MovieDetailPage />}>
            <Route path="reviews" element={<MovieReviews />} />
            <Route path="cast" element={<MovieCast />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
