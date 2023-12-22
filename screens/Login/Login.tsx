import React, {useState} from 'react';
import {
  LoginButton,
  ViewContainer,
  InnerView,
  InputStyle,
  LabelStyle,
} from './LoginStyles';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = () => {
    props.navigation.navigate('Main');
  };

  return (
    <ViewContainer>
      <InnerView>
        <LabelStyle>Login</LabelStyle>
        <InputStyle
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />
        <InputStyle
          placeholder="Enter your password"
          value={pwd}
          onChangeText={setPwd}
          secureTextEntry={true}
        />
        <LoginButton title="Login" onPress={handleLogin} />
      </InnerView>
    </ViewContainer>
  );
};

export default LoginScreen;
