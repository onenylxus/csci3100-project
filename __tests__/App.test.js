// Import
import React from 'react';
import { act, render } from '@testing-library/react-native';

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

  it('matches snapshot on guest mode', () => {
    element = render(<App testState={false} />);
    expect(element.toJSON()).toMatchSnapshot();
  });

  it('matches snapshot on login mode', () => {
    element = render(<App testState={true} />);
    expect(element.toJSON()).toMatchSnapshot();
  });
});
