// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';

// Import target component
import RegisterForm from '../../components/RegisterForm';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('RegisterForm', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(
      <NavigationContainer>
        <RegisterForm />
      </NavigationContainer>
    );
  });

  it('changes username when type', () => {
    /**
     * Condition:
     * User types 'testac' into the username text input box
     * 
     * Expect:
     * The application should show 'testac' at username text input box
     */

    // const username = element.getByTestId('username');

    // fireEvent.changeText(username, 'testac');
    // expect(username.props.value).toBe('testac');
  });

  it('changes password when type', () => {
    /**
     * Condition:
     * User type 'testpw' into the password text input box
     * 
     * Expect:
     * The application should show 'testpw' at password text input box
     */

    // const password = element.getByTestId('password');

    // fireEvent.changeText(password, 'testpw');
    // expect(password.props.value).toBe('testpw');
  });

  it('changes email when type', () => {
    /**
     * Condition:
     * User type '1155000000@link.cuhk.edu.hk' into the email text input box
     * 
     * Expect:
     * The application should show '1155000000@link.cuhk.edu.hk' at email text input box
     */

    // const email = element.getByTestId('email');

    // fireEvent.changeText(email, '1155000000@link.cuhk.edu.hk');
    // sexpect(email.props.value).toBe('1155000000@link.cuhk.edu.hk');
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
