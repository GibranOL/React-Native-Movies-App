import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoviesContainer from '../containers/MoviesContainer';
import SearchContainer from '../containers/SearchContainer';
import TVShowsContainer from '../containers/TVShowsContainer';

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Movies" 
        component={MoviesContainer} 
        options={{ title: 'Movies' }} 
      />
      <Tab.Screen 
        name="SearchResults" 
        component={SearchContainer} 
        options={{ title: 'Search' }} 
      />
      <Tab.Screen 
        name="TVShows" 
        component={TVShowsContainer} 
        options={{ title: 'TV Shows' }} 
      />
    </Tab.Navigator>
  );
};

export default NavBar;