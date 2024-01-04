import DeckService from '../deck/deck.service.js';

/**
 * Game Service
 * This service is in charge of managing the flow of the game
 */
class GameService {
  // the number of cards that will comprise a hand. Note that this val also represents the max number
  // of points that can be collected
  #handSize;

  // the list of cards that comprice the hand as well as the clicked ones
  #hand = [];
  #clicked = [];

  // the state of the game, if true means the player won or lost
  #gameEnded = false;

  // the highest score recorded in the session
  #highestScore = 0;

  constructor (handSize) {
    this.#handSize = handSize;
  }




  /* *********
   * GETTERS *
   ********* */

  get hand() {
    return this.#hand;
  }

  get score() {
    return this.#clicked.length;
  }

  get gameEnded() {
    return this.#gameEnded;
  }

  get highestScore() {
    return this.#highestScore;
  }




  /* ***********
   * GAME FLOW *
   *********** */


  /**
   * Resets the values so a fresh game can begin.
   */
  startGame() {
    this.#hand = DeckService.buildHand(this.#handSize);
    this.#clicked = [];
    this.#gameEnded = false;
  }

  /**
   * Triggers when a card is clicked and it updates the state of the game.
   * @param {*} cardID
   */
  handleCardClick(cardID) {
    if (this.#gameEnded) {
      throw new Error('The game has ended and therefore cards cannot longer be clicked.');
    }

    // check if the player lost
    if (this.#clicked.includes(cardID)) {
      this.#gameEnded = true;
    } else {
      // include the new id and check if the player won
      this.#clicked.push(cardID);
      this.#gameEnded = this.#clicked.length === this.#handSize;

      // if the game has not ended, shuffle the hand
      if (!this.#gameEnded) this.#hand = DeckService.shuffle(this.#hand);
    }

    // if the game ended, update the highest score (if applies)
    if (this.#gameEnded) {
      this.#highestScore = this.#clicked.length > this.#highestScore 
        ? this.#clicked.length 
        : this.#highestScore;
    }
  }
}




/**
 * Module Exports
 */
export default GameService;
