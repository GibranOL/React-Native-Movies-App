import { API_KEY, BASE_URL } from '../config/apiConfig';

export const getMovies = async (type = 'popular') => {
    try {
      const url = `${BASE_URL}/movie/${type}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results; // movie array
    } catch (error) {
      console.error(error);
      return [];
    }
  };


  export const searchMedia = async (query, type = 'movie') => {
    try {
      const url = `${BASE_URL}/search/${type}?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results || [];
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

  export const getTVShows = async (type = 'popular') => {
    try {
      const url = `${BASE_URL}/tv/${type}?api_key=${API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  export const getTVDetails = async (tvId) => {
    try {
      const url = `${BASE_URL}/tv/${tvId}?api_key=${API_KEY}`;
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };