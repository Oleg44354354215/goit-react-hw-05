import { useParams, Outlet, NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { fetchMovieDetails } from "../../services/api";
import clsx from "clsx";
import s from "./MovieDetailsPage.module.css";
const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? "/movies");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <div className={s.back}>
        <NavLink to={backLink.current} className={s.goback}>
          ⬅️ Go back
        </NavLink>
      </div>
      <div className={s.parent}>
        <div>
          <img
            className={s.img}
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
        </div>
        <div>
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average.toFixed(1) * 10}%</p>
          <h2>Owerview</h2>
          <p>{movie.overview || "No description available"}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres.map((genre) => genre.name).join(" , ") ||
              "No genres available"}
          </p>
        </div>
      </div>
      <h3 className={s.addot}>Addtional information</h3>
      <nav className={s.nav}>
        <NavLink className={buildLinkClass} to="cast">
          Cast
        </NavLink>
        <NavLink className={buildLinkClass} to="reviews">
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
