import React from "react";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Grid from "@mui/material/Grid";
import { BaseMovieProps } from "../../types/interfaces";

interface HeaderMovieProps {
  movie: BaseMovieProps;
}

const HeaderMovie: React.FC<HeaderMovieProps> = ({ movie }) => {
  if (!movie) return null;

  const favouritesRaw = localStorage.getItem("favourites");
  const favourites: BaseMovieProps[] = favouritesRaw ? JSON.parse(favouritesRaw) : [];

  const isFavourite = favourites.some((m) => m.id === movie.id);

  return (
    <Grid container>
      <Grid item xs={10}>
        <CardHeader
          title={
            <Typography variant="h4" component="h3">
              {movie.title}{" "}
              {isFavourite && <FavoriteIcon color="secondary" fontSize="large" />}
            </Typography>
          }
        />
      </Grid>
    </Grid>
  );
};

export default HeaderMovie;
