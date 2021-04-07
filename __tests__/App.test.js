// Import
import React from 'react';
import renderer from 'react-test-renderer';

// Import target component
import App from '../App';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('App', () => {
  it('compiles successfully', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
