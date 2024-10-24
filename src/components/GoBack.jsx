import { useLocation, Link } from 'react-router-dom';

const GoBack = ({ className }) => {
  const location = useLocation();
  const backLink = location.state?.from || '/movies';

  return (
    <Link className={className} to={backLink}>
      ← Go back
    </Link>
  );
};

export default GoBack;
