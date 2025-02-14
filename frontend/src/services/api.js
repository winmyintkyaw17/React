// const API_KEY = "96abd20b83af2953f3ddadc1685084d9";
// const BASE_URL = "https://api.themoviedb.org/3";

// export const getPopularMovies = async () => {
//     const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
//     const data = await response.json()
//     return data.results
// }

// export const searchMovies = async (query) => {
//     const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
//         query
//     )}`);
//     const data = await response.json();
//     return data.results;
// }

const API_KEY = "96abd20b83af2953f3ddadc1685084d9";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};

// ✅ **Add this function to fetch movie details**
export const getMovieDetails = async (movieId) => {
    const response = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
    if (!response.ok) {
        throw new Error("Failed to fetch movie details");
    }
    return response.json();
};
