import React from 'react';
import {Button} from 'react-native';
import {useAuth} from '../../context/AuthContext';

const LogoutButton = () => {
  const {authState, onLogout}: any = useAuth();
  if (authState.authenticated) {
    return <Button title="Logout" onPress={onLogout} />;
  }

  return null;
};

export default LogoutButton;
