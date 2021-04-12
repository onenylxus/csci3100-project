// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import LeaderboardBox from '../../components/LeaderboardBox';

// Run jest tests
describe('CommentBox', () => {
  let element;

  beforeEach(() => {

    // Render
    element = render(<LeaderboardBox />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
