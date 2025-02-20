import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { getTVShows } from '../../services/api';
import TVCard from './listItems/TVCard'; 

const TVShowsContainer = ({ navigation }) => {
  const [shows, setShows] = useState([]);
  const [tvType, setTVType] = useState('popular');
  const [isFocus, setIsFocus] = useState(false);

  // dropdown opions   
  const data = [
    { label: 'Airing Today', value: 'airing_today' },
    { label: 'On the Air', value: 'on_the_air' },
    { label: 'Popular', value: 'popular' },
    { label: 'Top Rated', value: 'top_rated' },
  ];

  useEffect(() => {
    fetchTV(tvType);
  }, [tvType]);

  const fetchTV = async (type) => {
    const results = await getTVShows(type);
    setShows(results);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select TV type' : '...'}
        value={tvType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setTVType(item.value);
          setIsFocus(false);
        }}
      />

      <FlatList
        style={{ marginTop: 20 }}
        data={shows}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TVCard show={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default TVShowsContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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