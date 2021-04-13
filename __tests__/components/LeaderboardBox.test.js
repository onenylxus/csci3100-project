// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import LeaderboardBox from '../../components/LeaderboardBox';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('CommentBox', () => {
  let element;

  beforeEach(() => {
    // Mock username
    const usernameMock = 'testac';
    const popularityMock = 0;

    // Render
    element = render(<LeaderboardBox username={usernameMock} popularity={popularityMock} />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
