import { shuffleArray } from './index';
describe('utils', () => {
  describe('shuffleArray', () => {
    const array = [1, 2, 3];
    const shuffledArray = shuffleArray(array);

    it('keeps the same elements in the array', () => {
      expect(shuffledArray.every(e => array.includes(e))).toBe(true);
    });
  });
});
