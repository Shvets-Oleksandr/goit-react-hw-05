import { Link } from 'react-router-dom';

const MoviesDetailPage = () => {
  return (
    <section>
      <div>
        <img src="/dfge" alt="Moivies baner" width={346} height={180} />
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
      <ul>
        <li>
          <Link>Cast</Link>
        </li>
        <li>
          <Link>Reviews</Link>
        </li>
      </ul>
    </section>
  );
};

export default MoviesDetailPage;
