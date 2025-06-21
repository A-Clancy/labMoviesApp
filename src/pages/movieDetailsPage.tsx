import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsProps, MovieImage } from "../types/interfaces";

const MoviePage: React.FC = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetailsProps>();
  const [images, setImages] = useState<MovieImage[]>([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then((res) => res.json())
      .then((movie) => {
        // console.log(movie);
        setMovie(movie);
      });
  }, [id]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`)
      .then((res) => res.json())
      .then((json) => setImages(json.posters));
  }, []);

    return (
      <div style={{ padding: "2rem" }}>
        {movie && (
          <>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              style={{ maxWidth: "300px" }}
            />
          </>
        )}
      </div>
    );

};

export default MoviePage;
