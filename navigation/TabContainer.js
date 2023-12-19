import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from '../screens/HomeScreen';
import AccountScreen from '../screens/AccountScreen';
import ShoppingScreen from '../screens/ShoppingScreen';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Home') {
            iconName = 'home';
          } else if (rn === 'Shop') {
            iconName = 'shopping-cart';
          } else {
            iconName = 'user-circle';
          }
          return <FontAwesomeIcon name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Shop" component={ShoppingScreen} />
      <Tab.Screen name="Test" component={AccountScreen} />
    </Tab.Navigator>
  );
};

export default TabContainer;
