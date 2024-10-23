import { useLocation, Link } from 'react-router-dom';

const GoBack = ({ className }) => {
  const location = useLocation();
  const backLinkHref = location.state.from;
  console.log(location.state);
  console.log(backLinkHref);

  return (
    <Link className={className} to={backLinkHref}>
      ← Go back
    </Link>
  );
};

export default GoBack;
