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

    const favourites = updatedMovies.filter((m) => m.favourite);
    localStorage.setItem("favourites", JSON.stringify(favourites));
  };

  useEffect(() => {
    const storedFavouritesRaw = localStorage.getItem("favourites");
    const storedFavourites: BaseMovieProps[] = storedFavouritesRaw
      ? JSON.parse(storedFavouritesRaw)
      : [];

    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then((res) => res.json())
      .then((json) => {
        const moviesWithFavourites = json.results.map((movie: BaseMovieProps) => {
          const isFavourite = storedFavourites.some((fav) => fav.id === movie.id);
          return isFavourite ? { ...movie, favourite: true } : movie;
        });

        setMovies(moviesWithFavourites);
      });
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
