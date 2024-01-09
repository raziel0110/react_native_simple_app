import React, {useState, useContext, createContext, useEffect} from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});
const AUTH_URL = 'https://dummyjson.com/auth/login';

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}: any) => {
  const [user, setUser] = useState(null);
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
    username: string | null;
  }>({
    token: null,
    authenticated: null,
    username: null,
  });

  useEffect(() => {
    const loadToken = async () => {
      const token = await AsyncStorage.getItem('token');
      console.log('useeffect', token);

      if (token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;

        setAuthState({
          token: token,
          authenticated: true,
          username: user ? user : null,
        });
      }
    };
    loadToken();
  }, [user]);

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(AUTH_URL, {username, password});
      setUser(response.data.username);

      setAuthState({
        token: response.data.token,
        authenticated: true,
        username: response.data.username,
      });

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
      await AsyncStorage.setItem('token', response.data.token);
    } catch (e) {
      return {error: true, msg: 'error'};
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem('token');
    axios.defaults.headers.common.Authorization = '';
    setAuthState({
      token: null,
      authenticated: false,
      username: null,
    });
  };

  const value = {onLogin: login, onLogout: logout, authState};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthProvider};
