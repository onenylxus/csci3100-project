// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import Chat from '../../components/chat';

// Run jest tests
describe('Chat', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<Chat />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
