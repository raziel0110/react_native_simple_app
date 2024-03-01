import 'react-native';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import { render, screen, waitFor } from '@testing-library/react-native';
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';
import TestScreen from '../screens/AccountScreen';

describe('<AccountScreen />', () => {
  describe('when the user is unauthenticated', () => {
    const auth = {
      token: null,
      authenticated: false,
      username: null
    }

    beforeEach(() => {
      const getUser = jest.fn().mockImplementation(() => Promise.resolve(null));

      render(
        <AuthContext.Provider value={{authState: {...auth}, getUser: getUser}}>
          <TestScreen navigation={{
            navigate: function (arg0: string, arg1: { screen: any; }): void {
              throw new Error('Function not implemented.');
            }
          }} route={{
            name: undefined
          }} />
        </AuthContext.Provider>
      );
    });
    afterEach(() => {
      jest.clearAllMocks();
    });

    it('display the login button', () => {
      const message = 'To access your profile please login to your account';

      expect(screen.getByText('Login'));
      expect(screen.getByText(message));
    })
  });

  describe('when the user is authenticated', () => {
    const auth = {
      token: '123456',
      authenticated: true,
      username: 'User'
    }
    const mockUser = {
      image: 'http://test.com/test.jpg',
      company: {
        title: 'Test Company',
        department: 'IT'
      },
      lastName: 'Doe',
      firstName: 'John',
      email: 'test@test.com',
      phone: '0123456789',
      username: 'test_username'
    }
    const mockError = {response: {status: 401, data:{message: 'Token Expired!'}}}

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('displays the correct user information', async () => {
      jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({data: {...mockUser}}));
      const container = render(
        <AuthContext.Provider value={{ authState: {...auth}}}>
          <TestScreen navigation={{
            navigate: function (arg0: string, arg1: { screen: any; }): void {
              throw new Error('Function not implemented.');
            }
          }} route={{
            name: undefined
          }} />
        </AuthContext.Provider>
      );
  
      const company = await container.findByText(`${mockUser.company.title}`)
      const department = await container.findByText(mockUser.company.department);
      
      expect(company).toBeDefined();
      expect(department).toBeDefined();
    });

    it('displays the ActionSheetIOS in case of errors', async () => {
      jest.spyOn(axios, 'get').mockImplementation(() => Promise.reject(mockError));

      const container = render(
        <AuthContext.Provider value={{ authState: {...auth}}}>
          <TestScreen navigation={{
            navigate: function (arg0: string, arg1: { screen: any; }): void {
              throw new Error('Function not implemented.');
            }
          }} route={{
            name: undefined
          }} />
        </AuthContext.Provider>
      );
      await container.debug();
    });
  })
});
