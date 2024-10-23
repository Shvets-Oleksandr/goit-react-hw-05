import { Link, Outlet, useLocation } from 'react-router-dom';

import GoBack from '../../components/goBack/GoBack';

import css from './MovieDetailsPage.module.css';

const MovieDetailPage = () => {
  const location = useLocation();

  return (
    <section className={css.movieContainer}>
      <GoBack className={css.btnGoBack} />
      <div className={css.movieCard}>
        <img src="/dfge" alt="Moivies baner" width={240} height={420} />
        <div>
          <h3>Movie Title</h3>
          <p>User score {'00%'}</p>
          <h4>Overview</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos asperiores voluptate repudiandae mollitia rerum quia
            dolorem temporibus velit. Eaque laudantium ab hic nobis sit harum
            soluta debitis rerum veritatis quod?
          </p>
          <h5>Genres</h5>
          <p>
            {'Drama'} {'History'} {'War'}
          </p>
        </div>
      </div>
      <div className={css.addInfo}>
        <p>Aditional information</p>
        <ul className={css.addInfoList}>
          <li>
            <Link state={location} to={'cast'}>
              Cast
            </Link>
          </li>
          <li>
            <Link state={location} to={'reviews'}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetailPage;
