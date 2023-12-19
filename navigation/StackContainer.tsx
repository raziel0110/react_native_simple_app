import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import TabContainer from './TabContainer';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={TabContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackContainer;
