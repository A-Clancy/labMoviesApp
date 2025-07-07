import React, { useContext } from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import { IconButton, Tooltip } from "@mui/material";
import { BaseMovieProps } from "../../types/interfaces";


// This icon is for the Upcoming Movies page.
// It doesn't do anything yet.

// Tooltip follows the AddToFavorites apprach
// Will need to build the must watch page later. This is a ToDo

const AddToMustWatchIcon: React.FC<{ movie: BaseMovieProps }> = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToMustWatch = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`Add movie id ${movie.id} to Must Watch list`);
  };

  return (
    <Tooltip title="Add to Must Watch">
      <IconButton onClick={handleAddToMustWatch} color="primary">
        <PlaylistAddIcon />
      </IconButton>
    </Tooltip>
  );
};

export default AddToMustWatchIcon;
