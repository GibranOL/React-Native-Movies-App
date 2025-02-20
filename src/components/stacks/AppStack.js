import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from '../screens/indexScreen';
import MoreDetails from '../screens/MoreDetails';
import NavBar from '../navigation/NavBar';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>

<Stack.Screen
        name="MainTabs"
        component={NavBar}
        options={{
          title: 'Movie App',
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />

      <Stack.Screen
        name="Index"
        component={IndexScreen}
        options={{
          title: 'Movie App',
          headerStyle: {
            backgroundColor: '#2c3e50',
          },
          headerTitleStyle: {
            color: '#fff',
          },
        }}
      />



      <Stack.Screen
        name="MoreDetails"
        component={MoreDetails}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;