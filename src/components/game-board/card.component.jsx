import PropTypes from 'prop-types';





/**
 * Card Component
 * Manages the card elements individually.
 */
function Card({ cardID, onCardClick }) {
  return (
    <button onClick={() => onCardClick(cardID)}>
      <img src={`deck/${cardID}.png`} alt={`Card Element ID: ${cardID}`} />
    </button>
  );
}
Card.propTypes = {
  cardID: PropTypes.string.isRequired,
  onCardClick: PropTypes.func.isRequired,
}



/**
 * Module Exports
 */
export default Card;