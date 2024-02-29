import 'react-native';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import { render } from '@testing-library/react-native';
import { AuthContext } from '../context/AuthContext';

describe('<AccountScreen />', () => {
  describe('when the user is unauthenticated', () => {
    // TODO: mock getUser() from auth context
    const auth = {
      token: null,
      authenticated: false,
      username: null
    }
    beforeEach(() => {
      render(
        <AuthContext.Provider value={{authState: {...auth}}}>
          <AccountScreen navigation={{
            navigate: function (arg0: string, arg1: { screen: any; }): void {
              throw new Error('Function not implemented.');
            }
          }} route={{
            name: undefined
          }} />
        </AuthContext.Provider>
      );
    })

    it('display the login button', () => {
      // TODO: make it works
    })
  })
});
