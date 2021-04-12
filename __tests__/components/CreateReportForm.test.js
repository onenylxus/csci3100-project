// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import AuthContext from '../../components/AuthContext';
import CreateReportForm from '../../components/CreateReportForm';

// Mock authentication method
const AuthMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
};

// Run jest tests
describe('CreateReportForm', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(
        <AuthContext.Provider value={AuthMethodMock}>
          <CreateReportForm />
        </AuthContext.Provider>
    );
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
