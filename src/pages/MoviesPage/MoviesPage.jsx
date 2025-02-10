import { useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import { fetchSearchFilms } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [film, setFilm] = useState([]);
  const query = searchParams.get("query") ?? "";
  useEffect(() => {
    if (!query) return;
    const getDate = async () => {
      try {
        const data = await fetchSearchFilms(query);
        setFilm(data);
      } catch (error) {
        console.log(error);
      }
    };
    getDate();
  }, [query]);

  const filterDate = film.filter((film) =>
    film.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleDate = (values) => {
    searchParams.set("query", values);
    setSearchParams(searchParams);
  };
  return (
    <div>
      <SearchBar handleDate={handleDate} query={query} />
      {film.length > 0 ? (
        <MovieList items={filterDate} />
      ) : (
        <p>No movies found ... ((</p>
      )}
    </div>
  );
};

export default MoviesPage;
