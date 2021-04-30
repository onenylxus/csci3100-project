// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import EditPostForm from '../../components/EditPostForm';

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('EditPostForm', () => {
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
    }
    
    // Render
    element = render(
      <NavigationContainer>
        <EditPostForm post={postMock}/>
      </NavigationContainer>
    );
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
