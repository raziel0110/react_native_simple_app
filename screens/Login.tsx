import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const handleLogin = () => {
    console.log('Login');
  };

  return (
    <View>
      <View>
        <Text>Username</Text>
        <TextInput
          placeholder="Enter your name"
          value={username}
          onChangeText={setUsername}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          value={pwd}
          onChangeText={setPwd}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
};

export default LoginScreen;
