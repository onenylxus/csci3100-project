// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import AppContext from '../../components/AppContext';
import CreateCommentForm from '../../components/CreateCommentForm';

// Mock authentication method
const AppMethodMock = {
  login: jest.fn(),
  logout: jest.fn(),
  askPerm: jest.fn(),
  getUser: jest.fn(),
  getPlatform: jest.fn(),
  getCameraPerm: jest.fn(),
  getImagePerm: jest.fn(),
};

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('CreateCommentForm', () => {
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
      <AppContext.Provider value={AppMethodMock}>
        <CreateCommentForm post={postMock} />
      </AppContext.Provider>
    );
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});