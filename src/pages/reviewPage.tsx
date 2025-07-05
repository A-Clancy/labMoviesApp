import React from "react";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { MovieT } from "../types/interfaces";
import { useQuery } from "react-query";
import { getMovie } from "../api/tmdb-api";
import Spinner from "../components/spinner";

const ReviewPage: React.FC = () => {
  const { id } = useParams();
  const { data: movie, error, isLoading, isError } = useQuery<MovieT, Error>(
    ["movie", { id }],
    () => getMovie(id)
  );

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error?.message}</h1>;
  if (!movie) return <div>Movie not found</div>;

  const review = movie.reviews.results.find((r) => r.id === id);
  if (!review) return <Typography>No review found.</Typography>;

  return (
    <>
      <Typography variant="h4">{review.author}</Typography>
      <Typography variant="body1" paragraph>
        {review.content}
      </Typography>
    </>
  );
};

export default ReviewPage;
