// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import CommentBox from '../../components/CommentBox';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('CommentBox', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<CommentBox />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
