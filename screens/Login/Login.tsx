import React, {useState} from 'react';
import {
  LoginButton,
  ViewContainer,
  InnerView,
  InputStyle,
  LabelStyle,
} from './LoginStyles';
import {useAuth} from '../../context/AuthContext';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const {authState, onLogin}: any = useAuth();

  console.log(authState);
  const handleLogin = () => {
    if (username && pwd) {
      onLogin(username, pwd);
      if (!authState.authenticated) {
        return;
      }
      props.navigation.navigate('Main');
    }
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
