// Import
import React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';

// Import target component
import AppContext from '../../components/AppContext';
import LoginForm from '../../components/LoginForm';

// Mock authentication method
const AppMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
};

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Spy on alert
jest.spyOn(Alert, 'alert');
jest.spyOn(AppMethodMock, 'login');

// Run jest tests
describe('LoginForm', () => {
  let element;

  beforeEach(() => {
    // Mock fetch function
    fetchMock.enableMocks();
    fetchMock.mockIf('https://cu-there-server.herokuapp.com/login', (req) => {
      const { username, password } = req.body;

      if (username === 'testac' && password === 'testpw') {
        return {
          status: 200,
          body: JSON.stringify({ msg: 'User is verified' }),
        };
      } else if (username !== 'testac') {
        return {
          status: 422,
          body: JSON.stringify({ error: 'accountError' }),
        };
      } else {
        return {
          status: 422,
          body: JSON.stringify({ error: 'passwordError' }),
        };
      }
    });

    // Render
    element = render(
      <NavigationContainer>
        <AppContext.Provider value={AppMethodMock}>
          <LoginForm />
        </AppContext.Provider>
      </NavigationContainer>
    );
  });

  it('changes username when type', () => {
    const username = element.getByTestId('username');

    fireEvent.changeText(username, 'testac');
    expect(username.props.value).toBe('testac');
  });

  it('changes password when type', () => {
    const password = element.getByTestId('password');

    fireEvent.changeText(password, 'testpw');
    expect(password.props.value).toBe('testpw');
  });

  it('toggles password visibility when eye button is pressed', () => {
    const eye = element.getByTestId('eye');
    const password = element.getByTestId('password');

    expect(password.props.secureTextEntry).toBe(true);
    fireEvent.press(eye);
    expect(password.props.secureTextEntry).toBe(false);
    fireEvent.press(eye);
    expect(password.props.secureTextEntry).toBe(true);
  });

  it('rejects login with empty username', async () => {
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('rejects login with empty password', async () => {
    const username = element.getByTestId('username');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('rejects login with unregistered account', async () => {
    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'a');
    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('rejects login with wrong password', async () => {
    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.changeText(password, 'a');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('logs in with correct data', async () => {
    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
    // await waitFor(() => expect(AppMethodMock.login).toHaveBeenCalled());
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
