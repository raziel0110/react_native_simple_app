import React from 'react';
import {View, Text, Platform, Button, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuth} from '../context/AuthContext';
import RedirectLoginContainer from '../components/common/containers/RedirectLoginContainer';
import { useDispatch, useSelector } from 'react-redux';
import {clearCart} from '../context/features/checkoutSlice'
import ProductItem from '../components/products/ProductItem';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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

  const renderItem = ({item}: any) => {
    return <ProductItem item={item} />
  }
  const keyExtractor = (_:any, index: number) => index.toString();

  if (cart.length === 0) {
    return (
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height:200, width:300, marginTop: 'auto', marginBottom: 'auto', marginLeft: 'auto', marginRight: 'auto'}}>
        <FontAwesomeIcon name="exclamation-circle" size={30} style={{color: 'red'}}/>
        <Text style={{marginLeft: 10, fontSize: 16, fontWeight: 'bold'}}>No Items Found!!!</Text>
      </View>
    );
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList data={cart} renderItem={renderItem} keyExtractor={keyExtractor}/>
        <Button title="Clear Checkout Cart" onPress={() => dispatch(clearCart({}))}/>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingScreen;
