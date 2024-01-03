/**
 * Deck Service
 * This service is in charge of managing the cards in the Deck.
 */
class DeckService {
  /**
   * Deck Cards
   * The cards were generated in PNG format and their dimensions are: width: 243px, height: 344px.
   * The files are placed in the /public directory which is then placed the the root by Vite. 
   * Therefore, the URLs can be built as: `./deck/${cardID}.png`
   */
  static #cards = [
    'red-01', 'red-02', 'red-03', 'red-04', 'red-05', 'red-06', 'red-07', 'red-08', 'red-09', 'red-10', 'red-11', 'red-12', 'red-13',
    'bomb-01', 'bomb-02', 'bomb-03', 'bomb-04', 'bomb-05', 'bomb-06', 'bomb-07', 'bomb-08', 'bomb-09', 'bomb-10', 'bomb-11', 'bomb-12', 'bomb-13',
    'chuck-01', 'chuck-02', 'chuck-03', 'chuck-04', 'chuck-05', 'chuck-06', 'chuck-07', 'chuck-08', 'chuck-09', 'chuck-10', 'chuck-11', 'chuck-12', 'chuck-13',
    'kingpig-01', 'kingpig-02', 'kingpig-03', 'kingpig-04', 'kingpig-05', 'kingpig-06', 'kingpig-07', 'kingpig-08', 'kingpig-09', 'kingpig-10', 'kingpig-11', 'kingpig-12', 'kingpig-13',
  ];



  /**
   * shuffles all the cards and returns them based on the hand size.
   * @param {*} handSize 
   * @returns Array<string>
   */
  static buildHand(handSize) {
    if (handSize > DeckService.#cards.length) {
      throw new Error(`The handSize cannot exceed the total number of cards in the deck (${DeckService.#cards}).`);
    }
    const shuffledCards = DeckService.shuffleCards(DeckService.#cards);
    return shuffledCards.slice(0, handSize);
  }



  /**
   * Shuffles a given list. Note that it does not alter the original array as it returns a new one.
   * This implementation is based on the following:
   * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
   * https://stackoverflow.com/questions/59810241/how-to-fisher-yates-shuffle-a-javascript-array
   * @param {*} rawArr
   * @returns Array<any>
   */
  static shuffleCards(rawArr) {
    const arr = rawArr.slice();
    let i = arr.length;
    let j;
    let temp;
    while(--i > 0){
      j = Math.floor(Math.random()*(i+1));
      temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    return arr;
  }
}




/**
 * Module Exports
 */
export default DeckService;
