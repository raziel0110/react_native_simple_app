import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuth} from '../context/AuthContext';

const ShoppingScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
  route: {name: any};
}) => {
  const {authenticated} = useAuth();

  if (!authenticated) {
    return (
      <SafeAreaView>
        <View>
          <Button
            onPress={() =>
              props.navigation.navigate('Login', {screen: props.route.name})
            }
            title="Login"
          />
        </View>
      </SafeAreaView>
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
