import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import FavouriteMoviesPage from "./pages/favoriteMoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <SiteHeader /> {/* This ensures the header shows on all pages */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies/favourites" element={<FavouriteMoviesPage />} />
          <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
          <Route path="/movies/:id" element={<MoviePage />} />
          <Route path="/reviews/:id" element={<MovieReviewPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
