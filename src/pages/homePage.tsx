import React, { useState, useEffect } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { BaseMovieProps } from "../types/interfaces";

const MovieListPage: React.FC = () => {
  const [movies, setMovies] = useState<BaseMovieProps[]>([]);

  const addToFavourites = (movieId: number) => {
    const updatedMovies = movies.map((m: BaseMovieProps) =>
      m.id === movieId ? { ...m, favourite: true } : m
    );
    setMovies(updatedMovies);
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => setMovies(json.results));
  }, []);

  return (
    <MovieListPageTemplate
      movies={movies}
      title="Home Page"
      selectFavourite={addToFavourites}
    />
  );
};

export default MovieListPage;
