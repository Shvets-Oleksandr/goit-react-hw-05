import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from '../navigation/Navigation';
import NotFoundPage from '../../pages/notFoundPage/NotFoundPage';

const HomePage = lazy(() => import('../../pages/HomePage'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage'));
const MovieDetailPage = lazy(() =>
  import('../../pages/movieDetailsPage/MovieDetailsPage')
);
const MovieReviews = lazy(() => import('../MovieReviews'));
const MovieCast = lazy(() => import('../MovieCast'));

import { useState } from 'react';

import css from './App.module.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <main className={css.pagesContainer}>
        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailPage />}>
              <Route path="reviews" element={<MovieReviews />} />
              <Route path="cast" element={<MovieCast />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
