import { Link, useLocation } from "react-router-dom";

const MovieList = ({ items }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        {items.map((film) => (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`} state={{ from: location }}>
              {film.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
