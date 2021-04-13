// Import
import count from './count';

// Run jest tests
describe('Assets', () => {
  // Fonts
  describe('contains fonts', count('assets/fonts'));

  // Headers
  describe('contains headers', count('assets/headers'));

  // Icons
  describe('contains icons', count('assets/icons'));

  // Images
  describe('contains images', count('assets/images'));

  // JSON files
  describe('contains JSON files', count('assets/json'));

  // JS files
  describe('contains JS files', count('assets', '.js'));
})
