import { useParams } from "react-router-dom";
// import s from "./MovieReviews.module.css";
import { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [movieId]);
  if (!reviews || reviews.length === 0) {
    return <p>No reviews available for this movie.</p>;
  }
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p> - {review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
