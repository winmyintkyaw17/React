import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMovieDetails } from '../services/api';
import { addToWatched, removeFromWatched } from '../redux/movieSlice';

function Overview() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();

  // Redux state to check if movie is watched
  const watchedMovies = useSelector((state) => state.movies.watchedMovies);
  const isWatched = watchedMovies.some((m) => m.id === parseInt(id));

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const data = await getMovieDetails(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };
    fetchOverview();
  }, [id]);

  const handleToggleWatch = () => {
    if (isWatched) {
      dispatch(removeFromWatched(movie.id));
    } else {
      dispatch(addToWatched(movie));
    }
  };

  if (!movie) return <p className='text-white text-center'>Loading...</p>;

  return (
    <div className="p-5 max-w-3xl mx-auto text-white bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">{movie.title}</h2>
      
      {/* Centered Movie Poster */}
      <div className="flex justify-center mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
        />
      </div>

      <p className="text-gray-300 mb-4 p-5">{movie.overview}</p>

      {/* Centered Watch/Unwatch Button */}
      <div className="flex justify-center">
        <button
          onClick={handleToggleWatch}
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            isWatched ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isWatched ? 'Unwatch' : 'Watch'}
        </button>
      </div>
    </div>
  );
}

export default Overview;
