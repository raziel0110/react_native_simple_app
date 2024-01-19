import React from 'react';
import {Text, View, SafeAreaView, Platform} from 'react-native';
import {useAuth} from '../context/AuthContext';
import RedirectLoginContainer from '../components/common/containers/RedirectLoginContainer';

const TestScreen = (
  props: {
    navigation: {navigate: (arg0: string, arg1: {screen: any}) => void};
    route: {name: any};
  }
): React.JSX.Element => {
  const {authState}: any = useAuth();
  const action = () => {
    props.navigation.navigate('Login', {screen: props.route.name});
  };
  const message = "To access your profile please login to your account"

  if (!authState.authenticated) {
    return <RedirectLoginContainer action={action} isIos={Platform.OS === 'ios'} message={message}/>
  }

  return (
    <SafeAreaView>
      <View>
        <Text>Account Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default TestScreen;
