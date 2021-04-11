// Import
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';

// Import target component
import ChatroomMenu from '../../components/ChatroomMenu';

// Mock navigation route
jest.mock('@react-navigation/core');

// Run jest tests
describe('ChatroomMenu', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(
      <NavigationContainer>
        <ChatroomMenu />
      </NavigationContainer>
    );
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
