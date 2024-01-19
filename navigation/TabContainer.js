import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../screens/AccountScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import StackContainer from './StackContainer';
import LogoutButton from '../components/common/LogoutButton';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  return (
    <NavigationContainer>
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
            return (
              <FontAwesomeIcon name={iconName} size={size} color={color} />
            );
          },
          tabBarShowLabel: false,
          headerShown: true,
        })}>
        <Tab.Screen name="Home" component={StackContainer} />
        <Tab.Screen
          name="Shop"
          component={ShoppingScreen}
          options={() => ({
            // eslint-disable-next-line react/no-unstable-nested-components
            headerRight: () => {
              return <LogoutButton />;
            },
          })}
        />
        <Tab.Screen name="Profile" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabContainer;
