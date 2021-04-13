// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import AuthContext from '../../components/AuthContext';
import Comment from '../../components/Comment';

// Mock authentication method
const AuthMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
};

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('Comment', () => {
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

    // Mock Comment
    const commentMock = {
      postId: postMock._id,
      timestamp: new Date(2021, 4, 1),
      content: '',
      username: 'testac',
    }

    // Render
    element = render(
      <AuthContext.Provider value={AuthMethodMock}>
        <Comment comment={commentMock} />
      </AuthContext.Provider>
    );
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
