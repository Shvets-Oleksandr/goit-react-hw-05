import { Link } from 'react-router-dom';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <>
      <p>Any information not found</p>
      <Link className={css.goHomeBtn} to={'/'}>
        Go back to home page
      </Link>
    </>
  );
};

export default NotFoundPage;
