// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import FollowerContainer from '../../components/FollowerContainer';

// Run jest tests
describe('FollowerContainer', () => {
  let element;

  beforeEach(() => {
    // Mock post
    const postMock = {
      username: 'testac',
      timestamp: new Date(2021, 4, 1),
      title: '',
      content: '',
      peopleLike: [],
      peopleDislike: [],
    };

    // Render
    element = render(<FollowerContainer post={postMock} />);
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
