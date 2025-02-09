import { useEffect, useState } from "react";
import s from "./HomePage.module.css";

import { fetchPopularFilms } from "../../services/api";
import { NavLink, useLocation } from "react-router-dom";

const HomePage = () => {
  const [films, setFilms] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPopularFilms();
        setFilms(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className={s.container}>
      <div>
        <p className={s.title}>Trending films today!!</p>

        <ul className={s.list}>
          {films.map((film) => (
            <li key={film.id} className={s.item}>
              <NavLink
                to={`/movies/${film.id}`}
                state={{ from: location }}
                className={s.link}
              >
                {film.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={s.avatar}>
        <img
          src="https://i.pinimg.com/736x/58/e9/65/58e96571acce841096995ad1e5d02cb6.jpg"
          alt="cinema"
        />
      </div>
    </div>
  );
};

export default HomePage;
