import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";
import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  if (!cast || cast.length === 0) {
    return <p>No cast available for this movie :((.</p>;
  }
  return (
    <div>
      <ul className={s.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.li}>
            <img
              className={s.img}
              src={
                actor.profile_path ? (
                  `https://image.tmdb.org/t/p/w200${actor.profile_path}`
                ) : (
                  <p>):</p>
                )
              }
              alt={actor.name}
            />
            <p>
              {actor.name} <br /> as {actor.character}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
