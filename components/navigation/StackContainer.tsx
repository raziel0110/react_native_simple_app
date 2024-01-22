import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductScreen from '../../screens/ProductScreen';
import LoginScreen from '../../screens/Login/Login';
import HomeScreen from '../../screens/HomeScreen';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        component={ProductScreen}
        name="Item"
        options={{title: 'Product'}}
      />
      <Stack.Screen
        component={HomeScreen}
        name="Products"
        options={{title: 'All Products'}}
      />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default StackContainer;
