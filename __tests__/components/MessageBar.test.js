// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import MessageBar from '../../components/MessageBar';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('MessageBar', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<MessageBar />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
