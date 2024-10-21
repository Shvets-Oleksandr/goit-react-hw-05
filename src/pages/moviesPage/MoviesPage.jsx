import { Outlet } from 'react-router-dom';

const MoviesPage = () => {
  return (
    <section>
      <form>
        <input name="searchInput" type="text" autoComplete="off" autoFocus />
        <button type="submit">Search</button>
      </form>
      <Outlet />
    </section>
  );
};

export default MoviesPage;
