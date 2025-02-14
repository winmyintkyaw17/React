import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import { useSelector } from "react-redux";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const watchedMovies = useSelector((state) => state.movies.watchedMovies);
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      } catch (err) {
        console.log(error);
        setError("Failed to load movies...");
      } finally {
        setLoading(false);
      }
    };
    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(error);
      setError("Failed to search movies...");
    } finally {
      setLoading(false);
    }
  };
  const showSuggestedMovies = () => {
    if (movies.length > 0) {
      const randomMovies = [...movies]
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);
      setSuggestedMovies(randomMovies);
      console.log(randomMovies);
      console.log(movies);
    } else {
      setError("No movies available for suggestions");
    }
  };

  return (
    <div className="p-5">
      {/* Search Form */}
      <form
        onSubmit={handleSearch}
        className="flex items-center space-x-3 mb-5 justify-end"
      >
        <button
          type="button"
          onClick={showSuggestedMovies}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Show Suggested Movies
        </button>
        <input
          type="text"
          placeholder="Search Movies"
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
        >
          Search
        </button>
      </form>
      {error && <span>"Error-message:{error}</span>}

      {loading ? (
        <span>Loading....</span>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {/* {movies.map((movie) => 
                    movie.title.toLowerCase().startsWith(searchQuery) && 
                    (<MovieCard movie={movie} key={movie.id} />)
                )} */}

          {movies
            .filter((movie) =>
              searchQuery
                ? movie.title.toLowerCase().includes(searchQuery.toLowerCase())
                : true
            )
            .map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
      )}

      {suggestedMovies.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">Suggested Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {suggestedMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}

      {watchedMovies.length > 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-bold mb-3">Watched Movies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {watchedMovies.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
