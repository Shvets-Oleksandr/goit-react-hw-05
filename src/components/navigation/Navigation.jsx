import clsx from 'clsx';

import NavLinkHome from '../NavLinkHome';
import NavLinkMovies from '../NavLinkMovies';

import css from './Navigation.module.css';

const linkCssClass = ({ isActive }) => clsx(css.link, isActive && css.active);

const Navigation = () => {
  return (
    <header className={css.appHeader}>
      <nav>
        <NavLinkHome className={linkCssClass} />
        <NavLinkMovies className={linkCssClass} />
      </nav>
    </header>
  );
};

export default Navigation;
