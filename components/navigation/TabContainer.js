import React from 'react';
import { View,Text } from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../../screens/AccountScreen';
import ShoppingScreen from '../../screens/ShoppingScreen';
import StackContainer from './StackContainer';
import LogoutButton from '../common/LogoutButton';
import Badge from '../common/Badge';

import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  const cart = useSelector((state) => {
    return state.cart
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({_, color, size}) => {
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
              <View style={{position:'absolute', display:'flex', flexDirection: 'row'}}>
                <FontAwesomeIcon name={iconName} size={size} color={color} />
                {rn === 'Shop' && cart.length ? (
                  <Badge items={cart.length} />
                ) : null}
              </View>
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
            headerRight: () => {
              return <LogoutButton />;
            },
          })}
        />
        <Tab.Screen name="Profile" component={AccountScreen} options={() => ({
          headerRight: () => {
            return <LogoutButton />
          }
        })}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabContainer;
