import axios from "axios";

const API_KEY = "11c7196e437932d60d8dc10f29ef77f5";
const BASE_URL = "https://api.themoviedb.org/3";
const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMWM3MTk2ZTQzNzkzMmQ2MGQ4ZGMxMGYyOWVmNzdmNSIsIm5iZiI6MTczOTEyMDYxMS4yNTksInN1YiI6IjY3YThkZmUzZGUyODNjOTAwZWM4ZDVkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TzS8qRgQGR-zLCzzHu_0ATupIHwDWffmpSVzD_xjnQc`,
  },
};

export const fetchPopularFilms = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
};

export const fetchSearchFilms = async (query) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1'?api_key=${API_KEY}`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching films:", error);
    return [];
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`,
      options
    );
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`,
      options
    );
    return data.cast;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    return [];
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`,
      options
    );
    return data.results;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    return [];
  }
};
