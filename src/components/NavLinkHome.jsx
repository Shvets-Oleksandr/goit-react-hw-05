import { NavLink } from 'react-router-dom';

const NavLinkHome = ({ className }) => {
  return (
    <>
      <NavLink className={className} to="/">
        Home
      </NavLink>
    </>
  );
};

export default NavLinkHome;
