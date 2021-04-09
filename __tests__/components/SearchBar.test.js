// Import
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';

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
    // Render
    element = render(<SearchBar />);
  });

  it('changes search word when type', () => {
    const input = element.getByTestId('input');

    fireEvent.changeText(input, 'CU There');
    expect(input.props.value).toBe('CU There');
  });

  it('resets search word when search button is pressed', () => {
    const input = element.getByTestId('input');
    const search = element.getByTestId('search');

    fireEvent.changeText(input, 'CU There');
    fireEvent.press(search);
    expect(input.props.value).toBe('');
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
