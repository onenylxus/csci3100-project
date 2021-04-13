// Import
import count from './count';

// Run jest tests
describe('Screens', () => {
  // Navigators
  describe('contains navigators', count('screens/navigators'));

  // JS files
  describe('contains JS files', count('screens', '.js'));
});