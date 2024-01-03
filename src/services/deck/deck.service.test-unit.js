import DeckService from './deck.service.js';

/**
 * Hand Building
 * Tests that cover the building of a hand for a brand new game.
 */
describe('Hand Building', () => {
  beforeAll(() => { });

  afterAll(() => { });

  beforeEach(() => { });

  afterEach(() => { });

  test('cannot build a hand if the hand size is too large', () => {
    expect(() => { DeckService.buildHand(100000) }).toThrow();
  });

  test('can build a hand properly', () => {
    const hand = DeckService.buildHand(16);
    expect(Array.isArray(hand)).toBe(true);
    expect(hand.every((cardID) => typeof cardID === 'string' && cardID.length > 0)).toBe(true);
    const handSet = new Set(hand);
    expect(handSet.size).toBe(hand.length);
  });

  test('can build a hand and shuffle it', () => {
    const hand = DeckService.buildHand(16);
    expect(DeckService.shuffleCards(hand)).not.toEqual(hand);
  });
});





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
    expect(DeckService.shuffleCards(arr)).not.toEqual(arr);
  });

  test('can shuffle an array of numbers', () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    expect(DeckService.shuffleCards(arr)).not.toEqual(arr);
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
    expect(DeckService.shuffleCards(arr)).not.toEqual(arr);
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
    expect(DeckService.shuffleCards(arr)).not.toEqual(arr);
  });
});
