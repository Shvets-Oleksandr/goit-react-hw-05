import { NavLink } from 'react-router-dom';

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
