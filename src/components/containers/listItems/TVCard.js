import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { IMAGE_BASE_URL } from '../../../config/apiConfig';

const TVCard = ({ show, navigation }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{ uri: `${IMAGE_BASE_URL}${show.poster_path}` }}
        style={styles.posterImage}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{show.name}</Text>
        <Text style={styles.subtitle}>
          First Air Date: {show.first_air_date || 'N/A'}
        </Text>
        <Text style={styles.subtitle}>
          Popularity: {show.popularity?.toFixed(1)}
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('MoreDetails', { tvId: show.id })
          }
        >
          <Text style={styles.buttonText}>More Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TVCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },
  posterImage: {
    width: 100,
    height: 150,
  },
  infoContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'blue',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});