// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import MajorPicker from '../../components/MajorPicker';

// Run jest tests
describe('MajorPicker', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<MajorPicker />);
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
