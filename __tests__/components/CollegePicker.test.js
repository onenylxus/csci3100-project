// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import CollegePicker from '../../components/CollegePicker';

// Run jest tests
describe('CollegePicker', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<CollegePicker />);
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});
