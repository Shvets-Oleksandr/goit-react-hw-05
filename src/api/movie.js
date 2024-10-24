import axios from 'axios';

const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    language: 'en-US',
    include_adult: false,
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTRiNWIzOTVlNjM1MTNhZmE0ZTA1NGFiMjhlYjFmYSIsIm5iZiI6MTcyOTY2OTM5My4xNjIyMjcsInN1YiI6IjY3MThhMzBhMzRjMGZhYmQ2ODFjMWZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aUepqwIH6DzfOXH8qpHsJeSWJXMXA5PW9lz91ejETzI',
  },
});

export const moviesTrending = async () => {
  const { data } = await movieInstance.get('/trending/movie/day');
  return data;
};

export const movieById = async movieId => {
  const { data } = await movieInstance.get(`/movie/${movieId}`);
  return data;
};

export const searchMovies = async searchValue => {
  const { data } = await movieInstance.get('/search/movie', {
    params: {
      query: searchValue,
    },
  });
  return data;
};

export const castById = async movieId => {
  const { data } = await movieInstance.get(`/movie/${movieId}/credits`);
  return data;
};
