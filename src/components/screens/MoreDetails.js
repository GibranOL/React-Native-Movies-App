import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { getMovieDetails } from '../../services/api';

const MoreDetails = ({ route, navigator }) => {
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
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <Text style={styles.overview}>{movie.overview}</Text>
      <Text>
        Popularity: {movie.popularity} | Release: {movie.release_date}
      </Text>
    </View>
  );
};

export default MoreDetails;

const styles = StyleSheet.create({
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
      marginTop: 25, 
    },
  });