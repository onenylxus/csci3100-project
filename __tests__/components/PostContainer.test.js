// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import PostContainer from '../../components/PostContainer';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('PostContainer', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<PostContainer />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
