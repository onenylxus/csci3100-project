// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import AppContext from '../../components/AppContext';
import CreateReportForm from '../../components/CreateReportForm';

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

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('CreateReportForm', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(
      <NavigationContainer>
        <AppContext.Provider value={AppMethodMock}>
          <CreateReportForm />
        </AppContext.Provider>
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
