// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import AppContext from '../../components/AppContext';
import EditProfileForm from '../../components/EditProfileForm';

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

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('EditProfileForm', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(
      <NavigationContainer>
        <AppContext.Provider value={AppMethodMock}>
          <EditProfileForm />
        </AppContext.Provider>
      </NavigationContainer>
    );
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
