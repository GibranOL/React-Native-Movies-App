import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
// import your UI kit components if desired

const MoviesContainer = () => {
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState('popular'); 
  // could be 'now_playing', 'popular', 'top_rated', 'upcoming'

  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  const fetchMovies = async (type) => {
    try {
      const url = `https://api.themoviedb.org/3/movie/${type}?api_key=YOUR_API_KEY`;
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View>
      {/* You could create a custom dropdown to change `movieType` */}
      <Text>Selected Category: {movieType}</Text>
      {/* Show list of movies */}
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Popularity: {item.popularity}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MoviesContainer;