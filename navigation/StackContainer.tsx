import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {useAuth} from '../context/AuthContext';

import LoginScreen from '../screens/Login/Login';
import TabContainer from './TabContainer';
import {Button} from 'react-native';

const Stack = createNativeStackNavigator();

const StackContainer = () => {
  const {authState, onLogout}: any = useAuth();
  console.log(authState.authenticated);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {authState.authenticated ? (
          <Stack.Screen
            name="Main"
            component={TabContainer}
            options={{
              headerRight: () => <Button onPress={onLogout} title="Sign Out" />,
            }}
          />
        ) : (
          <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackContainer;
