// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import ForgotPasswordForm from '../../components/ForgotPasswordForm';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('ForgotPasswordForm', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(
      <NavigationContainer>
        <ForgotPasswordForm />
      </NavigationContainer>
    );
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
