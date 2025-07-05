import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import TemplateMoviePage from "../components/templateMoviePage";
import MovieDetails from "../components/movieDetails";
import { MovieT } from "../types/interfaces";

import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Drawer from "@mui/material/Drawer";
import MovieReviews from "../components/movieReviews";

const MoviePage: React.FC = () => {
  const { id } = useParams();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { data: movie, error, isLoading, isError } = useQuery<MovieT, Error>(
    ["movie", { id }],
    () => getMovie(id)
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error?.message}</h1>;
  if (!movie) return <div>Movie not found</div>;

  return (
    <>
      <TemplateMoviePage movie={movie}>
        <MovieDetails movie={movie} />
      </TemplateMoviePage>

      <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        style={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Reviews
      </Fab>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <MovieReviews movie={movie} />
      </Drawer>
    </>
  );
};

export default MoviePage;
