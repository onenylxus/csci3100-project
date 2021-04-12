// Import
import fs from 'fs';

// Run jest tests
describe('Assets', () => {
  // Fonts
  describe('contains fonts', () => {
    const dir = fs.readdirSync('assets/fonts');

    it('Baloo2-Medium.ttf', () => {
      expect(dir).toEqual(expect.arrayContaining(['Baloo2-Medium.ttf']));
    });
    it('ConcertOne-Regular.ttf', () => {
      expect(dir).toEqual(expect.arrayContaining(['ConcertOne-Regular.ttf']));
    });
    it('Sarina-Regular.ttf', () => {
      expect(dir).toEqual(expect.arrayContaining(['Sarina-Regular.ttf']));
    });
    it('RobotoSlab-Regular.ttf', () => {
      expect(dir).toEqual(expect.arrayContaining(['RobotoSlab-Regular.ttf']));
    });
    it('MuthiaraDemoVersion.otf', () => {
      expect(dir).toEqual(expect.arrayContaining(['MuthiaraDemoVersion.otf']));
    });
    it('Montserrat-Regular.ttf', () => {
      expect(dir).toEqual(expect.arrayContaining(['Montserrat-Regular.ttf']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(7);
    });
  });

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
    it('no other files', () => {
      expect(dir.length).toEqual(5);
    });
  });

  // Images
  describe('contains images', () => {
    const dir = fs.readdirSync('assets/images');

    it('background.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['background.png']));
    });
    it('profile.png', () => {
      expect(dir).toEqual(expect.arrayContaining(['profile.png']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(3);
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
    it('tagsList.json', () => {
      expect(dir).toEqual(expect.arrayContaining(['tagsList.json']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(3);
    });
  });

  // JS files
  describe('contains JS files', () => {
    const dir = fs.readdirSync('assets').filter((file) => file.endsWith('.js'));

    it('style.js', () => {
      expect(dir).toEqual(expect.arrayContaining(['style.js']));
    });
    it('no other files', () => {
      expect(dir.length).toEqual(1);
    });
  });
});
