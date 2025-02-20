import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getMovies } from '../../services/api';
import MovieCard from './listItems/MovieCard'; 

const MoviesContainer = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [movieType, setMovieType] = useState('popular');
  const [isFocus, setIsFocus] = useState(false);

  const data = [
    { label: 'Now Playing', value: 'now_playing' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
    { label: 'Upcoming', value: 'upcoming' },
  ];

  useEffect(() => {
    fetchMovies(movieType);
  }, [movieType]);

  const fetchMovies = async (type) => {
    const results = await getMovies(type);
    setMovies(results);
  };

  return (
    <View style={styles.container}>
      {/* Dropdown */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select movie type' : '...'}
        value={movieType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setMovieType(item.value);
          setIsFocus(false);
        }}
      />

      {/* FlatList con MovieCard */}
      <FlatList
        style={{ marginTop: 20 }}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item}
            navigation={navigation}
          />
        )}
      />
    </View>
  );
};

export default MoviesContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    color: 'gray',
  },
  selectedTextStyle: {
    color: 'black',
  },
});