import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Form from '../forms/Forms';
import { searchMedia } from '../../services/api';
import MovieCard from '../containers/listItems/MovieCard';

const SearchContainer = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('movie');
  const [isFocus, setIsFocus] = useState(false);

  // dropdown optiongs
  const data = [
    { label: 'Movie', value: 'movie' },
    { label: 'TV', value: 'tv' },
    { label: 'Multi', value: 'multi' },
  ];

  const handleInputChange = (value) => {
    setQuery(value);
  };

  const handleSearch = async () => {
    if (!query) return; 
    const items = await searchMedia(query, searchType);
    setResults(items);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search Movies / TV / Multi</Text>

      {/* Dropdown for media */}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Choose search type' : '...'}
        value={searchType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setSearchType(item.value);
          setIsFocus(false);
        }}
      />

      {/* the search button for both */}
      <Form onInputChange={handleInputChange} onSearch={handleSearch} />

      {!query && <Text style={styles.prompt}>Enter a movie or TV show name...</Text>}

      <FlatList
        data={results}
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
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  placeholderStyle: {
    color: 'gray',
  },
  selectedTextStyle: {
    color: '#000',
  },
});