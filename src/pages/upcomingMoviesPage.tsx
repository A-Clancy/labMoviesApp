import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from "react-query";
import { getUpcomingMovies } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import { BaseMovieProps } from "../types/interfaces";

const UpcomingMoviesPage: React.FC = () => {
  const { data: movies, error, isLoading, isError } = useQuery<BaseMovieProps[]>(
    ["upcoming"],
    getUpcomingMovies
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{(error as Error).message}</h1>;
  }
// Passing a dummy selectFavourite function to satisfy PageTemplate props.
  return <PageTemplate title="Upcoming Movies" movies={movies} action={() => null} />;
};

export default UpcomingMoviesPage;
