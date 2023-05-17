import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import "./../pages/Movie.css";
const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p className="average">
        <FaStar />
        <p>{movie.vote_average.toFixed(1)}</p>
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
    </div>
  );
};

export default MovieCard;
