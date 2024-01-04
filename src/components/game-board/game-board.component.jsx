import PropTypes from 'prop-types';
import Card from './card.component';




/**
 * Game Board Component
 * Manages the cards as well as the click events.
 */
function GameBoard({ hand, onCardClick }) {
  return (
    <main>
      {hand.map((cardID) => <Card key={cardID} cardID={cardID} onCardClick={onCardClick} />)}
    </main>
  );
}
GameBoard.propTypes = {
  hand: PropTypes.array.isRequired,
  onCardClick: PropTypes.func.isRequired,
}



/**
 * Module Exports
 */
export default GameBoard;