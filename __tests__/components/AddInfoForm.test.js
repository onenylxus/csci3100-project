// Import
import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import AddInfoForm from '../../components/AddInfoForm';
import AuthContext from '../../components/AuthContext';

// Mock authentication method
const AuthMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
};

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('AddInfoForm', () => {
  let element;

  beforeEach(() => {
    // Mock route
    useRoute.mockReturnValue({ email: '0000000000@link.cuhk.edu.hk' });

    // Render
    element = render(
      <NavigationContainer>
        <AuthContext.Provider value={AuthMethodMock}>
          <AddInfoForm />
        </AuthContext.Provider>
      </NavigationContainer>
    );
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
