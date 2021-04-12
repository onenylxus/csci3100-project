// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import LeaderboardBox from '../../components/LeaderboardBox';

// Run jest tests
describe('CommentBox', () => {
  let element;

  beforeEach(() => {
    // Mock username
    const usernameMock = 'testac';
    const popularityMock = 0;

    // Render
    element = render(<LeaderboardBox username={usernameMock} popularity={popularityMock}/>);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
