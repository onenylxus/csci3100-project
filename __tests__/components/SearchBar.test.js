// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import SearchBar from '../../components/SearchBar';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('SearchBar', () => {
  let element;

  beforeEach(() => {
    element = render(<SearchBar />);
  });

  it('compiles successfully', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
