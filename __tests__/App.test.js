// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import App from '../App';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('App', () => {
  let element;

  beforeEach(() => {
    element = render(<App />);
  })

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
