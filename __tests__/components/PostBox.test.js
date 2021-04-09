// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import PostBox from '../../components/PostBox';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('PostBox', () => {
  let element;

  beforeEach(() => {
    // Mock post
    const postMock = {
      username: 'testac',
      timestamp: new Date(2021, 4, 1),
      numOfLike: 0,
      numOfDislike: 0,
    };

    // Render
    element = render(<PostBox post={postMock} />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
