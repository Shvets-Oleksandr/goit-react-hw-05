import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import css from './NavLink.module.css';

const NavLinks = () => {
  return (
    <nav className={css.appNav}>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => clsx(css.link, isActive && css.active)}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
};

export default NavLinks;
