import PropTypes from 'prop-types';





/**
 * Game Result Component
 * Overlay component that appears once the game is over.
 */
function GameResult({ score, handSize, onPlayAgainClick }) {
  return (
    <div className="game-result-container">
      <h2>{score === handSize ? 'YOU WIN!' : 'YOU LOSE!'}</h2>
      <p>{score} / {handSize}</p>
      <button onClick={onPlayAgainClick}>PLAY AGAIN</button>
    </div>
  );
}
GameResult.propTypes = {
  score: PropTypes.number.isRequired,
  handSize: PropTypes.number.isRequired,
  onPlayAgainClick: PropTypes.func.isRequired,
}



/**
 * Module Exports
 */
export default GameResult;