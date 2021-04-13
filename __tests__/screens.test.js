// Import
import count from './count';

// Run jest tests
describe('Screens', () => {
  // stacks
  describe('contains stacks', count('screens/stacks'));

  // JS files
  describe('contains JS files', count('screens', '.js'));
});