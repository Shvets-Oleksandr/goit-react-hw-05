import { Link } from 'react-router-dom';

const MovieList = () => {
  return (
    <ul>
      <li>
        <Link to="/movies/details">1</Link>
      </li>
      <li>
        <Link>2</Link>
      </li>
      <li>
        <Link>3</Link>
      </li>
      <li>
        <Link>4</Link>
      </li>
      <li>
        <Link>5</Link>
      </li>
    </ul>
  );
};

export default MovieList;
