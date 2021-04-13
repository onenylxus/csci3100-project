// Import
import count from './count';

// Run jest tests
describe('Components', () => {
  // JS files
  describe('contains JS files', count('components', '.js'))
});