import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { getMovieDetails, getTVDetails } from '../../services/api';

const MoreDetails = ({ route }) => {
  const { movieId, tvId } = route.params || {};
  const [item, setItem] = useState(null);

  useEffect(() => {
    if (tvId) {
      fetchTVDetails(tvId);
    } else if (movieId) {
      fetchMovieDetails(movieId);
    }
  }, [tvId, movieId]);

  const fetchMovieDetails = async (id) => {
    const data = await getMovieDetails(id);
    setItem(data);
  };

  const fetchTVDetails = async (id) => {
    const data = await getTVDetails(id);
    setItem(data);
  };

  if (!item) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading details...</Text>
      </View>
    );
  }

  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
      />
      <Text style={styles.overview}>{item.overview}</Text>
      <Text style={styles.info}>
        Popularity: {item.popularity?.toFixed(2)} | Release: {releaseDate || 'N/A'}
      </Text>
    </View>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  poster: {
    width: 200,
    height: 300,
    alignSelf: 'center',
    marginBottom: 10,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
    marginVertical: 16,
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
});