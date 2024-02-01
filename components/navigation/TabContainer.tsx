import React from 'react';
import {StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import AccountScreen from '../../screens/AccountScreen';
import ShoppingScreen from '../../screens/ShoppingScreen';
import StackContainer from './StackContainer';
import LogoutButton from '../common/LogoutButton';
import Badge from '../common/Badge';

import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

const TabContainer = () => {
  const cart = useSelector((state: any) => {
    return state.cart.cart
  });

  const tabNavigatorIcon = (routeName: any) => {
    return routeName === 'Home' ? 
      'home' : routeName === 'Shop' ? 
      'shopping-cart' : 'user-circle';
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({_, color, size}: any) => {
            const routeName = route.name
            const iconName = tabNavigatorIcon(routeName);

            return (
              <View style={styles.tabIconContainer}>
                <FontAwesomeIcon name={iconName} size={size} color={color} />
                {routeName === 'Shop' && cart.length ? (
                  <Badge items={cart.length} />
                ) : null}
              </View>
            );
          },
          tabBarShowLabel: false,
          headerShown: true,
        })}>
        <Tab.Screen 
          name="Home" 
          component={StackContainer} 
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Shop"
          component={ShoppingScreen}
          options={() => ({
            headerRight: () => {
              return <LogoutButton />;
            },
          })}
        />
        <Tab.Screen name="Profile"
          component={AccountScreen} 
          options={() => ({
          headerRight: () => {
            return <LogoutButton />
          }
        })}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIconContainer: {
    position:'absolute',
    display:'flex',
    flexDirection: 'row'
  }
})

export default TabContainer;
