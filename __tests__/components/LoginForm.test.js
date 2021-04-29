// Import
import React from 'react';
import { Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';

// Import target component
import AppContext from '../../components/AppContext';
import LoginForm from '../../components/LoginForm';

// Enable fetch mocks
fetchMock.enableMocks();

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Mock authentication method
const AppMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  askPerm: jest.fn(),
  getUser: jest.fn(),
  getPlatform: jest.fn(),
  getCameraPerm: jest.fn(),
  getImagePerm: jest.fn(),
};

// Spy on alert
jest.spyOn(Alert, 'alert');
jest.spyOn(AppMethodMock, 'login');

// Run jest tests
describe('LoginForm', () => {
  let element;

  beforeEach(() => {
    // Mock fetch function
    fetch.resetMocks();

    // Render
    element = render(
      <NavigationContainer>
        <AppContext.Provider value={AppMethodMock}>
          <LoginForm />
        </AppContext.Provider>
      </NavigationContainer>
    );
  });

  afterEach(() => {
    // Unmount
    element.unmount();
  })

  it('changes username when type', () => {
    /**
     * Condition:
     * User types 'testac' into the username text input box
     *
     * Expect:
     * The application should show 'testac' at username text input box
     */

    const username = element.getByTestId('username');

    fireEvent.changeText(username, 'testac');
    expect(username.props.value).toBe('testac');
  });

  it('changes password when type', () => {
    /**
     * Condition:
     * User types 'testpw' into the password text input box
     *
     * Expect:
     * The application should show 'testpw' at password text input box
     */

    const password = element.getByTestId('password');

    fireEvent.changeText(password, 'testpw');
    expect(password.props.value).toBe('testpw');
  });

  it('toggles password visibility when eye button is pressed', () => {
    /**
     * Condition:
     * User presses the eye button twice
     *
     * Expect:
     * The application should show asterisks at password text input box before the user presses the button
     * The application should show text at password text input box after the first press
     * The application should show asterisks at password text input box after the second press
     */

    const eye = element.getByTestId('eye');
    const password = element.getByTestId('password');

    expect(password.props.secureTextEntry).toBe(true);
    fireEvent.press(eye);
    expect(password.props.secureTextEntry).toBe(false);
    fireEvent.press(eye);
    expect(password.props.secureTextEntry).toBe(true);
  });

  it('rejects login with empty username', async () => {
    /**
     * Condition:
     * User types 'testpw' for password and leaves empty for username
     * User presses the login button
     *
     * Expect:
     * The application gives the user an alert
     */

    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('rejects login with empty password', async () => {
    /**
     * Condition:
     * User types 'testac' for username and leaves empty for password
     * User presses the login button
     *
     * Expect:
     * The application gives the user an alert
     */

    const username = element.getByTestId('username');
    const button = element.getByTestId('login');

    fireEvent.changeText(username, 'testac');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('rejects login with unregistered account', async () => {
    /**
     * Condition:
     * Assume the database does not have account with username 'a'
     * User types 'a' for username and 'testpw' for password
     * User presses the login button.
     *
     * Expect:
     * The application gives the user an alert
     */

    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fetch.mockResponses([
      JSON.stringify({ error: 'accountError' }),
      { status: 422 },
    ]);

    fireEvent.changeText(username, 'a');
    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('rejects login with wrong password', async () => {
    /**
     * Condition:
     * Assume the database has account with username 'testac' and password 'testpw'
     * User types 'testac' for username and 'a' for password
     * User presses the login button
     *
     * Expect:
     * The application gives the user an alert
     */

    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fetch.mockResponses([
      JSON.stringify({ error: 'passwordError' }),
      { status: 422 },
    ]);

    fireEvent.changeText(username, 'testac');
    fireEvent.changeText(password, 'a');
    fireEvent.press(button);
    await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('logs in with correct data', async () => {
    /**
     * Condition:
     * Assume the database has account with username 'testac' and password 'testpw'
     * User types 'testac' for username and 'testpw' for password
     * User presses the login button.
     *
     * Expect:
     * The application allows user to login via global login method
     */

    const username = element.getByTestId('username');
    const password = element.getByTestId('password');
    const button = element.getByTestId('login');

    fetch.mockResponses([
      JSON.stringify({ msg: 'User is verified' }),
      { status: 200 },
    ]);

    fireEvent.changeText(username, 'testac');
    fireEvent.changeText(password, 'testpw');
    fireEvent.press(button);
    await waitFor(() => expect(AppMethodMock.login).toHaveBeenCalled());
  });

  it('matches snapshot', () => {
    /**
     * Snapshot test
     */

    let structure = element.toJSON();
    expect(structure).not.toBe(null);
    expect(structure).toMatchSnapshot();
  });
});
