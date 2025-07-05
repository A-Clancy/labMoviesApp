import React from "react";
import Typography from "@mui/material/Typography";
import { MovieT } from "../../types/interfaces";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

interface MovieReviewsProps {
  movie: MovieT;
}

const MovieReviews: React.FC<MovieReviewsProps> = ({ movie }) => {
  return (
    <>
      <Typography variant="h4" component="h3">
        Reviews
      </Typography>
      <Divider />
      {movie.reviews.results.map((r) => (
        <Typography key={r.id} variant="body1" component="p" sx={{ my: 2 }}>
          {r.author}: {r.content.substring(0, 100)}...
          <Link to={`/reviews/${r.id}`} style={{ marginLeft: "0.5rem" }}>
            Full Review
          </Link>
        </Typography>
      ))}
    </>
  );
};

export default MovieReviews;
