// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import AuthContext from '../../components/AuthContext';
import PostContainer from '../../components/PostContainer';

// Mock authentication method
const AuthMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  getUser: jest.fn(),
};

// Mock navigation route
jest.mock('@react-navigation/core');

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('PostContainer', () => {
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
    element = render(
      <NavigationContainer>
        <AuthContext.Provider value={AuthMethodMock}>
          <PostContainer post={postMock} showButton={true} />
        </AuthContext.Provider>
      </NavigationContainer>
    );
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
