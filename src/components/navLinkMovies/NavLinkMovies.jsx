import { NavLink } from 'react-router-dom';

// import css from './NavLinkMovies.module.css';

const NavLinkMovies = ({ className }) => {
  return (
    <>
      <NavLink className={className} to="/movies">
        Movies
      </NavLink>
    </>
  );
};

export default NavLinkMovies;
