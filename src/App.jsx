import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
// import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);
// import MovieCast from "./components/MovieCast/MovieCast";
const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
// import MovieReviews from "./components/MovieReviews/MovieReviews";
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<h2>LOading ....</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
