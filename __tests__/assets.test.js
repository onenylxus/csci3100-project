// Import
import fs from 'fs';

// Run jest tests
describe('Assets', () => {
  // Icons
  describe('contains icons', () => {
    const dir = fs.readdirSync('assets/icons');

    it('adaptive-icon.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['adaptive-icon.png']));
    });
    it('favicon.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['favicon.png']));
    });
    it('icon.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['icon.png']));
    });
    it('splash.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['splash.png']));
    });
  });

  // Images
  describe('contains images', () => {
    const dir = fs.readdirSync('assets/images');

    it('profile.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['profile.png']));
    });
  });

  // JSON files
  describe('contains JSON files', () => {
    const dir = fs.readdirSync('assets/json');

    it('collegeList.json', () => {
      expect(dir).toEqual(expect.arrayContaining(['collegeList.json']));
    });
    it('majorList.json', () => {
      expect(dir).toEqual(expect.arrayContaining(['majorList.json']));
    });
  });

  // JS files
  describe('contains JS files', () => {
    const dir = fs.readdirSync('assets');

    it('source.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['source.js']));
    });
    it('style.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['style.js']));
    });
  });
});
