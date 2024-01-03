import GameService from './game.service.js';

/**
 * Game Flow
 * Tests that cover the initialization and flow of a game.
 */
describe('Game Flow', () => {
  beforeAll(() => { });

  afterAll(() => { });

  beforeEach(() => { });

  afterEach(() => { });

  test('cannot start a game if the hand size exceeds the limit', () => {
    expect(() => { new GameService(100000).startGame() }).toThrow();
  });

  test('can start a game properly', () => {
    const game = new GameService(16);
    game.startGame();

    expect(game.hand.length).toBe(16);
    expect(game.score).toBe(0);
    expect(game.gameEnded).toBe(false);

    const handSet = new Set(game.hand);
    expect(handSet.size).toBe(16);
  });


  test('can handle card clicks, store the clicked card and shuffle the hand', () => {
    const game = new GameService(16);
    game.startGame();

    const originalHandOrder = game.hand.slice();

    game.handleCardClick(originalHandOrder[0]);

    // ensure nothing broke
    expect(game.hand.length).toBe(16);
    expect(game.score).toBe(1);
    expect(game.gameEnded).toBe(false);

    // ensure the hand has been shuffled
    expect(originalHandOrder).not.toEqual(game.hand);
  });


  test('can lose a game', () => {
    const game = new GameService(16);
    game.startGame();

    const originalHandOrder = game.hand.slice();

    game.handleCardClick(originalHandOrder[0]);
    game.handleCardClick(originalHandOrder[0]);

    expect(game.score).toBe(1);
    expect(game.gameEnded).toBe(true);
  });



  test('can win a game', () => {
    const game = new GameService(16);
    game.startGame();

    const originalHandOrder = game.hand.slice();

    for (let i = 0; i < originalHandOrder.length; i++) {
      game.handleCardClick(originalHandOrder[i]);
    }

    expect(game.score).toBe(16);
    expect(game.gameEnded).toBe(true);
  });



  test('throws an error if a card is clicked when the game ended', () => {
    const game = new GameService(16);
    game.startGame();

    const originalHandOrder = game.hand.slice();

    for (let i = 0; i < originalHandOrder.length; i++) {
      game.handleCardClick(originalHandOrder[i]);
    }

    expect(() => { game.handleCardClick(originalHandOrder[0]) }).toThrow();
  });
});
