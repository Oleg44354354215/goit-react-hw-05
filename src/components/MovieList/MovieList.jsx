import { Link } from "react-router-dom";

const MovieList = ({ item, location }) => {
  return (
    <div>
      <ul>
        {item.map((film) => (
          <li key={item.id}>
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
