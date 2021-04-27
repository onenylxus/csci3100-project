// Import
import count from '../count';

// Run jest tests
describe('Server', () => {
  // Controllers
  describe('contains controllers', count('server/controllers'));

  // Schemas
  describe('contains schemas', count('server/schemas'));

  // JS files
  describe('contains JS files', count('server', '.js'));
});
