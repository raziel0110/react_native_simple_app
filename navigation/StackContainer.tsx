import React from 'react';
// import {Button} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductScreen from '../screens/ProductScreen';
import LoginScreen from '../screens/Login/Login';
import HomeScreen from '../screens/HomeScreen';

// import {useAuth} from '../context/AuthContext';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  // const {authState, onLogout}: any = useAuth();
  return (
    <Stack.Navigator initialRouteName="Products">
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
      {/* {authState.authenticated ? (
        <Stack.Screen
          name="Main"
          component={TabContainer}
          options={{
            headerRight: () => <Button onPress={onLogout} title="Sign Out" />,
          }}
        />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )} */}
    </Stack.Navigator>
  );
};

export default StackContainer;
