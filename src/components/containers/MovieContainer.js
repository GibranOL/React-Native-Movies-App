import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { getMovieDetails } from '../../../services/api'; 

const MoreDetails = ({ route, navigation }) => {
  const { movieId } = route.params;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchDetails(movieId);
  }, [movieId]);

  const fetchDetails = async (id) => {
    const data = await getMovieDetails(id);
    setMovie(data);
  };

  if (!movie) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Loading details...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title || movie.name}</Text>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text style={styles.info}>
        Popularity: {movie.popularity?.toFixed(2)} | 
        Release: {movie.release_date || 'N/A'}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  poster: {
    width: 250,
    height: 350,
    alignSelf: 'center',
    marginBottom: 16,
  },
  overview: {
    fontSize: 16,
    marginBottom: 8,
    textAlign: 'justify',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
});