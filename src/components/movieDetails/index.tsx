import React from "react";
import { useParams } from "react-router-dom";
import { getMovie } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import TemplateMoviePage from "../components/templateMoviePage";
import MovieDetails from "../components/movieDetails";
import { MovieT } from "../types/interfaces";

const MoviePage: React.FC = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery<MovieT, Error>(
    ["movie", { id }],
    () => getMovie(id)
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error?.message}</h1>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <TemplateMoviePage movie={movie}>
      <MovieDetails movie={movie} />
    </TemplateMoviePage>
  );
};

export default MoviePage;
