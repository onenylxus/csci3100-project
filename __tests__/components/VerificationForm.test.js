// Import
import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
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
describe('ResetPasswordForm', () => {
  let element;

  beforeEach(() => {
    // Mock route
    useRoute.mockReturnValue({ email: '0000000000@link.cuhk.edu.hk' });

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
