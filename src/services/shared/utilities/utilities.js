import {
  v4 as uuidv4,
  version as uuidVersion,
  validate as uuidValidate,
} from 'uuid';

/**
 * Utilities
 * Provides commonly used functionality in order to main consistency across modules.
 */
class Utilities {
  /* *****************
   * UUID MANAGEMENT *
   ***************** */
  /**
   * Creates an RFC version 4 (random) UUID.
   * @returns string
   */
  static generateUUID() {
    return uuidv4();
  }

  /**
   * Ensures the provided value is a valid uuid and that is version 4.
   * @param {*} uuid
   * @returns boolean
   */
  static validateUUID(uuid) {
    return uuidValidate(uuid) && uuidVersion(uuid) === 4;
  }
}




/**
 * Module Exports
 */
export default Utilities;
