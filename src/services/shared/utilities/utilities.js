/**
 * Utilities
 * Provides commonly used functionality in order to main consistency across modules.
 */
class Utilities {
  /* **********************
   * Fisher-Yates Shuffle *
   ********************** */

  /**
   * Shuffles a given list. Note that it does not alter the original array as it returns a new one.
   * @param {*} rawArr
   * @returns Array<any>
   */
  static shuffle(rawArr) {
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
export default Utilities;
