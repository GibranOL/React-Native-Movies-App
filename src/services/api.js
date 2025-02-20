import { API_KEY, BASE_URL } from '../config/apiConfig';

export const getMovies = async (type = 'popular') => {
    try {
      const url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results; // un array de películas
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  export const searchMovies = async (query) => {
    try {
      const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  export const getMovieDetails = async (movieId) => {
    try {
      const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
      return await res.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

