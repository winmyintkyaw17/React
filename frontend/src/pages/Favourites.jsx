import React from 'react'
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

function Favourites() {
  const favouriteMovies = useSelector((state) => state.favourites?.favouriteMovies || []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-5">
      {favouriteMovies.length === 0 ? (
        <>
          <h2 className="text-3xl font-bold text-yellow-400 mb-3">No Favourite Movies yet!</h2>
          <p className="text-lg text-gray-300">Start adding your favourite movies here</p>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favouriteMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favourites;
