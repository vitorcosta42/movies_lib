import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { MdMovie } from "react-icons/md";
import MovieCard from "../components/MovieCard";
import "./Movie.css";

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline"> {movie.tagline}</p>
          <div className="info">
            <h3>
              <MdLocalMovies /> Data de Lançamento:
            </h3>
            <p>{formatCurrency(movie.release_date)}</p>
          </div>
          <div className="info">
            <h3>
              <MdMovie /> Gênero:
            </h3>
            <p>
              {movie.genres[0].name}, {movie.genres[1].name}
            </p>
          </div>
          <div className="info">
            <h3>
              <BsWallet2 /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>
              {Math.floor(movie.runtime / 60)}h {Math.floor(movie.runtime % 60)}
              m
            </p>
          </div>
          <div className="description">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p align="justify">{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;
