import Utilities from './utilities.js';





/**
 * Fisher-Yates Shuffle
 * Tests that cover the shuffling of arrays.
 */
describe('Array Shuffling', () => {
  beforeAll(() => { });

  afterAll(() => { });

  beforeEach(() => { });

  afterEach(() => { });

  test('can shuffle an array of strings', () => {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    expect(Utilities.shuffle(arr)).not.toEqual(arr);
  });

  test('can shuffle an array of numbers', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    expect(Utilities.shuffle(arr)).not.toEqual(arr);
  });

  test('can shuffle an array of objects', () => {
    const arr = [
      { foo: 1, bar: 'XS' },
      { foo: 2, bar: 'Panther' },
      { foo: 5, bar: 'Bull', active: true },
      { foo: 21, bar: 'Bear', active: true, value: 88 },
      { foo: 777, bar: 'Ole!', active: false, invalid: undefined },
      { foo: 55, bar: 'Pandas!', children: [0, 1, 2] },
      { foo: 89, bar: 'Nnn', children: ['0', '1', '2'] },
    ];
    expect(Utilities.shuffle(arr)).not.toEqual(arr);
  });

  test('can shuffle an array of mixed values', () => {
    const arr = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
      { foo: 1, bar: 'XS' },
      { foo: 2, bar: 'Panther' },
      { foo: 5, bar: 'Bull', active: true },
      { foo: 21, bar: 'Bear', active: true, value: 88 },
      { foo: 777, bar: 'Ole!', active: false, invalid: undefined },
      { foo: 55, bar: 'Pandas!', children: [0, 1, 2] },
      { foo: 89, bar: 'Nnn', children: ['0', '1', '2'] },
      1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,
    ];
    expect(Utilities.shuffle(arr)).not.toEqual(arr);
  });
});
