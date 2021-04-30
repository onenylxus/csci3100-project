// Import
import React from 'react';
import { NavigationContainer, useRoute } from '@react-navigation/native';
import { fireEvent, render } from '@testing-library/react-native';

// Import target component
import AddInfoForm from '../../components/AddInfoForm';
import AppContext from '../../components/AppContext';

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

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('AddInfoForm', () => {
  let element;

  beforeEach(() => {
    // Mock route
    useRoute.mockReturnValue({ email: '0000000000@link.cuhk.edu.hk' });

    // Render
    element = render(
      <NavigationContainer>
        <AppContext.Provider value={AppMethodMock}>
          <AddInfoForm />
        </AppContext.Provider>
      </NavigationContainer>
    );
  });

  afterEach(() => {
    element.unmount();
  })

  /*
  it('changes name when type', () => {
  */
    /**
     * Condition:
     * User types 'testname' into the name text input box
     *
     * Expect:
     * The application should show 'testname' at name text input box
     */
  /*
    const name = element.getByTestId('name');

    fireEvent.changeText(name, 'testname');
    expect(name.props.value).toBe('testname');
  });
  */

  /*
  it('selects button when click', () => {
  */
    /**
     * Condition:
     * User choose 'Male' in the radio button 
     *
     * Expect:
     * The application should show a tick after the text 'Male' for iOS and show a selected radio button
     */

  /*
    const gender = element.getByLabelText('gender');
    fireEvent.change(gender, { target: { value: "Male" } });
    expect(gender.props.value).toBe('Male')
  });
  */

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
