import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import TestScreen from '../screens/TestScreen';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Test" component={TestScreen} />
    </Tab.Navigator>
  );
};

export default TabContainer;
