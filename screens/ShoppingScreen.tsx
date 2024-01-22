import React from 'react';
import {View, Text, Platform, Button, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuth} from '../context/AuthContext';
import RedirectLoginContainer from '../components/common/containers/RedirectLoginContainer';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from '../context/features/checkoutSlice'

const ShoppingScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
  route: {name: any};
}): React.JSX.Element => {
  const {authState}: any = useAuth();
  const dispatch = useDispatch();
  const action = (): void => {
    props.navigation.navigate('Login', {screen: props.route.name});
  };
  const cart = useSelector((state: any) => {
    return state.cart
  })

  if (!authState.authenticated) {
    return (
      <RedirectLoginContainer action={action} isIos={Platform.OS === 'ios'} />
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Shopping Card: {cart.length}</Text>
        <Button title="Clear Checkout Cart" onPress={() => dispatch(clearCart({}))}/>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingScreen;
