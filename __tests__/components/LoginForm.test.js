// Import
import React from 'react';
import { Alert } from 'react-native';
import { fireEvent, render } from '@testing-library/react-native';

// Import target component
import AuthContext from '../../components/AuthContext';
import LoginForm from '../../components/LoginForm';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Mock authentication method
const AuthMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
};

// Spy on alerts
jest.spyOn(Alert, 'alert');

// Run jest tests
describe('LoginForm', () => {
  let element;

  beforeEach(() => {
    element = render(
      <AuthContext.Provider value={AuthMethodMock}>
        <LoginForm />
      </AuthContext.Provider>
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

  it('rejects login with empty username', () => {
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    setTimeout(() => expect(Alert.alert).toHaveBeenCalled(), 5000);
  });

  it('rejects login with empty password', () => {
    const username = element.getByTestId('username');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.press(button);
    setTimeout(() => expect(Alert.alert).toHaveBeenCalled(), 5000);
  });

  it('rejects login with unregistered account', () => {
    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'a');
    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    setTimeout(() => expect(Alert.alert).toHaveBeenCalled(), 5000);
  });

  it('rejects login with wrong password', () => {
    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.changeText(password, 'a');
    fireEvent.press(button);
    setTimeout(() => expect(Alert.alert).toHaveBeenCalled(), 5000);
  });

  it('logs in with correct data', () => {
    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    setTimeout(() => expect(AuthMethodMock.login).toHaveBeenCalled(), 5000);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
