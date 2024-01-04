import PropTypes from 'prop-types';





/**
 * Header Component
 * Handles the heading of the application.
 */
function Header({ score, handSize }) {
  return (
    <header>
      <h1>MEMORY CARD</h1>
      <p>Get points by clicking on a card but don&apos;t click on any more than once!</p>
      <h2>{score} / {handSize}</h2>
    </header>
  );
}
Header.propTypes = {
  score: PropTypes.number.isRequired,
  handSize: PropTypes.number.isRequired,
}



/**
 * Module Exports
 */
export default Header;