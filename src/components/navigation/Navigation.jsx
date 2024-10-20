import NavLinks from '../navLink/NavLink';

import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={css.appHeader}>
      <NavLinks />
    </header>
  );
};

export default Navigation;
