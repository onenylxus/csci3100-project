// Import
import fs from 'fs';
import paths from './paths.json';

// Export counting function
export default function count(path, type = '') {
  return () => {
    const dir = fs.readdirSync(path).filter((file) => file.endsWith(type));

    // Check file existence
    paths[path].forEach((file) => {
      it(file, () => {
        expect(dir).toEqual(expect.arrayContaining([file]));
      });
    });

    // Count directory length
    it('no other files', () => {
      expect(dir.length).toEqual(paths[path].length);
    });
  };
}
