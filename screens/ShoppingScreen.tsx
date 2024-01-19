import React from 'react';
import {View, Text, Button, StyleSheet, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useAuth} from '../context/AuthContext';
import IosButton from '../components/common/IosButton';

const ShoppingScreen = (props: {
  navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
  route: {name: any};
}) => {
  const {authState}: any = useAuth();
  const isIos = Platform.OS === 'ios';
  const action = () => {
    props.navigation.navigate('Login', {screen: props.route.name});
  };

  if (!authState.authenticated) {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.unauthenticatedInfo}>
            <Text>
              To access your checkout page please login to your account
            </Text>
          </View>
          {isIos ? (
            <IosButton text="Login" action={action} />
          ) : (
            <Button onPress={action} title="Login" />
          )}
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

const styles = StyleSheet.create({
  unauthenticatedInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingScreen;
