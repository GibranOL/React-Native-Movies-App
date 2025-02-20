import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Form from '../forms/Forms';
import { searchMovies } from '../../services/api';
import MovieCard from '../containers/listItems/MovieCard';

const SearchContainer = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleSearch = async () => {
    if (!query) return; // Evitar búsqueda vacía
    const movies = await searchMovies(query);
    setResults(movies);
  };

  return (
    <View>
      <Text>Search Movies / TV / Multi</Text>
      <Form
        onInputChange={handleInputChange}
        onSearch={handleSearch}
      />

      {/* If no search */}
      {!query && <Text style={styles.prompt}>Enter a movie name...</Text>}

      {/* Lista */}
      <FlatList
        data={results}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item} navigation={navigation} />
        )}
      />
          </View>
  )
}

export default SearchContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  prompt: {
    fontStyle: 'italic',
    marginBottom: 8,
  },
});