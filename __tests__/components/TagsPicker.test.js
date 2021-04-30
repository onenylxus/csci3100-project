// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import TagsPicker from '../../components/TagsPicker';

// Run jest tests
describe('TagsPicker', () => {
  let element;

  beforeEach(() => {
    // Render
    element = render(<TagsPicker />);
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot', () => {
    expect(element.toJSON()).toMatchSnapshot();
  });
});