import React from 'react';
import {View, Text, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuth} from '../context/AuthContext';
import RedirectLoginContainer from '../components/common/containers/RedirectLoginContainer';

const ShoppingScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
  route: {name: any};
}): React.JSX.Element => {
  const {authState}: any = useAuth();
  const action = (): void => {
    props.navigation.navigate('Login', {screen: props.route.name});
  };

  if (!authState.authenticated) {
    return (
      <RedirectLoginContainer action={action} isIos={Platform.OS === 'ios'} />
    );
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Shopping Card</Text>
      </View>
    </SafeAreaView>
  );
};

export default ShoppingScreen;
