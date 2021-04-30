// Import
import React from 'react';
import { render } from '@testing-library/react-native';

// Import target component
import App from '../App';

// Mock FontAwesome icons
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// Run jest tests
describe('App', () => {
  let element;

  beforeEach(() => {
    element = render(<App />);
  });

  afterEach(() => {
    element.unmount();
  });

  it('matches snapshot on guest mode', () => {
    element = render(<App testState={false} />);

    let structure = element.toJSON();
    expect(structure).not.toBe(null);
    expect(structure).toMatchSnapshot();
  });

  it('matches snapshot on login mode', () => {
    element = render(<App testState={true} />);

    let structure = element.toJSON();
    expect(structure).not.toBe(null);
    expect(structure).toMatchSnapshot();
  });
});
