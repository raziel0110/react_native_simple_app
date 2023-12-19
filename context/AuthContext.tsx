import React, {useState, useContext, createContext} from 'react';
import axios from 'axios';

const AuthContext = createContext({});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<{
    token: string | null;
    authenticated: boolean | null;
  }>({
    token: null,
    authenticated: null,
  });

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(``, {username, password});

      setAuthState({
        token: response.data.token,
        authenticated: true,
      });

      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;

      return response;
    } catch (e) {
      return {error: true, msg: 'error'};
    }
  };

  const logout = async () => {
    axios.defaults.headers.common['Authorization'] = '';
  };

  const value = {onLogin: login, onLogout: logout, authState};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export {AuthContext, AuthProvider};
