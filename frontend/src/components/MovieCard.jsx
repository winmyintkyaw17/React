import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWatched, removeFromWatched } from "../redux/movieSlice";
import { Link } from "react-router-dom";
import { toggleFavourite } from "../redux/favouritesSlice";

function MovieCard({ movie }) {
  const dispatch = useDispatch();
  const favouriteMovies = useSelector((state) => state.favourites?.favouriteMovies || []);
  const watchedMovies = useSelector((state) => state.movies?.watchedMovies || [])
  const isWatched = watchedMovies.some((m) => m.id === movie.id);
  const favMovie = favouriteMovies.find((m) => m.id ===movie.id);
  const isFavourite= favMovie ? favMovie.isFavourite : false;

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(movie));
  }

  const handleToggleWatch = () => {
    if (isWatched) {
      dispatch(removeFromWatched(movie.id));
    } else {
      dispatch(addToWatched(movie));
    }
  };

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-md overflow-hidden transition-transform duration-200 hover:scale-105">
      {/* Movie Poster */}
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full object-cover aspect-[2/3] sm:h-80 md:h-96 lg:h-[400px]"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300">
          <button
            className="bg-yellow-400 text-black px-3 py-1 rounded-lg font-semibold hover:bg-yellow-500"
            onClick={handleToggleFavourite}
          >
            {isFavourite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
          </button>
        </div>
      </div>

      {/* Movie Details */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold">{movie.title}</h3>
        <p className="text-gray-400">{movie.release_date?.split("-")[0]}</p>

        {/* Watch/Unwatch Button */}
        <p className="mt-2 text-sm text-gray-300">
          {isWatched ? "You have watched this movie" : "You haven't watched this movie"}
        </p>
        <button
          className={`mt-2 px-4 py-1 rounded-md text-sm font-medium ${
            isWatched ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
          }`}
          onClick={handleToggleWatch}
        >
          {isWatched ? "Unwatch" : "Watch"}
        </button>
        <Link to={`/movie/${movie.id}`}>
          <button className="mt-3 px-4 py-1 bg-blue-500 hover:bg-blue-600 rounded-md text-sm font-medium flex items-center justify-center mx-auto">
            Overview
          </button>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
