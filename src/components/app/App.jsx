import { Routes, Route } from 'react-router-dom';

import HomePage from '../../pages/homePage/HomePage';
import MoviesPage from '../../pages/moviesPage/MoviesPage';
import MoviesDetailPage from '../../pages/movieDetailsPage/MovieDetailsPage';

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
          <Route path="/movies/details" element={<MoviesDetailPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
