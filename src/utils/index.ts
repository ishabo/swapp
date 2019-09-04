export const shuffleArray = <T = any>(arr: T[]): T[] =>
  arr.sort(() => 0.5 - Math.random());
