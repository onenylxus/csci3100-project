// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import LeaderboardContainer from '../../components/LeaderboardContainer';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('Comment', () => {
  let element;

  beforeEach(() => {
    // Mock username
    const usernameMock = 'testac';
    const popularityMock = 0;

    // Render
    element = render(<LeaderboardContainer username={usernameMock} popularity={popularityMock} />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
