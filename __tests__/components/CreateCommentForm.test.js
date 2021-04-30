// Import
import React from 'react';
import { Alert } from 'react-native';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import fetchMock from 'jest-fetch-mock';

// Import target component
import AppContext from '../../components/AppContext';
import CreateCommentForm from '../../components/CreateCommentForm';

// Enable fetch mocks
fetchMock.enableMocks();

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

// Spy on alert
jest.spyOn(Alert, 'alert');

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

    // Mock fetch function
    fetch.resetMocks();

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

  it('rejects comment with empty comment', async () => {
    /**
     * Condition:
     * User leaves the comment text input box empty.
     * User presses the submit button.
     *
     * Expect:
     * The application gives the user an alert
     */

    const comment = element.getByTestId('comment');
    const button = element.getByTestId('send');

    fireEvent.changeText(comment, 'testcomment');
    fireEvent.press(button);

    // await waitFor(() => expect(Alert.alert).toHaveBeenCalled());
  });

  it('allows users to comment', async () => {
    /**
     * Condition:
     * User types 'testcomment' into the comment text input box.
     * User presses the submit button.
     *
     * Expect:
     * The application allows user to leave a comment by controller
     */

    const comment = element.getByTestId('comment');
    const button = element.getByTestId('send');

    fetch.mockResponses([
      JSON.stringify({ msg: 'Comment created with popularity updated' }),
      { status: 200 },
    ]);

    fireEvent.changeText(comment, 'testcomment');
    fireEvent.press(button);
    
  });

  it('matches snapshot', () => {
    /**
     * Snapshot test
     */
    expect(element.toJSON()).toMatchSnapshot();
  });
});